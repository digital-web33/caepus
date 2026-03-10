/**
 * Utilitaire partagé pour parser le frontmatter YAML des fichiers Markdown.
 * Implémentation 100% browser-compatible (pas de gray-matter / pas de Node.js).
 */

export interface Frontmatter {
  [key: string]: string | boolean | undefined;
}

/**
 * Parse un fichier Markdown avec frontmatter YAML (délimiteurs ---).
 * Supporte : string, boolean, valeurs simples (pas de listes YAML imbriquées).
 */
export function parseFrontmatter(raw: string): {
  data: Frontmatter;
  content: string;
} {
  const match = raw.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const yamlBlock = match[1];
  const content = match[2].trimStart();
  const data: Frontmatter = {};

  for (const line of yamlBlock.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const rawVal = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
    if (rawVal === "true") data[key] = true;
    else if (rawVal === "false") data[key] = false;
    else data[key] = rawVal;
  }

  return { data, content };
}
