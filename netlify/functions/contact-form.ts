import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = "Caepus <noreply@caepus.fr>";
const TO_ADDRESS = "contact@caepus.fr";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return { statusCode: 500, body: JSON.stringify({ error: "Server misconfigured" }) };
  }

  let data: Record<string, string>;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  // Honeypot anti-spam — si rempli, c'est un bot
  if (data["bot-field"]) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  }

  const prenom = (data.prenom || "").trim();
  const nom = (data.nom || "").trim();
  const email = (data.email || "").trim();
  const telephone = (data.telephone || "").trim();
  const message = (data.message || "").trim();

  if (!prenom || !nom || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Champs requis manquants" }),
    };
  }
  if (!isValidEmail(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: "Email invalide" }) };
  }
  if (message.length > 5000) {
    return { statusCode: 400, body: JSON.stringify({ error: "Message trop long" }) };
  }

  const subject = `Nouveau message du site — ${prenom} ${nom}`;
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#333;">
      <h2 style="color:#1f5037;border-bottom:2px solid #1f5037;padding-bottom:8px;">Nouveau message via le site Caepus</h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <tr><td style="padding:8px 0;font-weight:bold;width:120px;">Prénom :</td><td>${escapeHtml(prenom)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;">Nom :</td><td>${escapeHtml(nom)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;">Email :</td><td><a href="mailto:${escapeHtml(email)}" style="color:#1f5037;">${escapeHtml(email)}</a></td></tr>
        ${telephone ? `<tr><td style="padding:8px 0;font-weight:bold;">Téléphone :</td><td><a href="tel:${escapeHtml(telephone)}" style="color:#1f5037;">${escapeHtml(telephone)}</a></td></tr>` : ""}
      </table>
      <h3 style="color:#1f5037;margin-top:24px;">Message</h3>
      <div style="background:#f5f5f0;padding:16px;border-left:3px solid #1f5037;white-space:pre-wrap;">${escapeHtml(message)}</div>
      <p style="margin-top:24px;font-size:12px;color:#888;">Envoyé depuis le formulaire de contact de caepus.fr</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return { statusCode: 502, body: JSON.stringify({ error: "Email send failed" }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal server error" }) };
  }
};
