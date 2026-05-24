import sharp from "sharp";
import { resolve } from "path";

const uploads = resolve("public/uploads");

const targets = [
  { in: "PHOTO 2 .png", out: "PHOTO 2-compressed.webp" },
  { in: "PHOTO 4.png", out: "PHOTO 4-compressed.webp" },
  { in: "PHOTO PR.png", out: "PHOTO PR-compressed.webp" },
];

for (const t of targets) {
  const input = resolve(uploads, t.in);
  const output = resolve(uploads, t.out);
  await sharp(input).webp({ quality: 82 }).toFile(output);
  console.log(`OK ${t.out}`);
}
