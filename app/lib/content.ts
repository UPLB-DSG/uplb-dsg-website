import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { parse } from "yaml";
import type { DigestEntry, Event } from "@/lib/data";

// One markdown file per entry, the same setup as the DSSoc site's posts:
// frontmatter holds the fields, the body is the writeup. The file name is the
// slug. Read once at build time; the site is static, so nothing ships to the browser.
function load<T extends { slug: string; html: string; publishedAt?: string }>(
  dir: string,
  required: string[],
): T[] {
  const base = path.join(process.cwd(), "content", dir);
  return readdirSync(base)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const where = `content/${dir}/${file}`;
      const match = readFileSync(path.join(base, file), "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
      if (!match) throw new Error(`${where}: missing --- frontmatter ---`);
      const data = parse(match[1]) ?? {};
      for (const key of required) {
        if (data[key] === undefined || data[key] === null || data[key] === "") throw new Error(`${where}: missing "${key}"`);
      }
      return { ...data, slug: file.slice(0, -3), html: marked.parse(match[2], { async: false }) } as T;
    })
    // Newest first. Entries with only a year (no publishedAt) sort to the top, then by title.
    .sort((a, b) => (b.publishedAt ?? "9999").localeCompare(a.publishedAt ?? "9999") || a.slug.localeCompare(b.slug));
}

export const EVENTS = load<Event>("events", ["kind", "title", "date", "description", "images"]);
export const PAST_EVENTS = EVENTS.filter((event) => event.kind === "event");
export const WORKSHOPS = EVENTS.filter((event) => event.kind === "workshop");

export const DIGEST_ENTRIES = load<DigestEntry>("digest", ["title", "date", "description", "panels", "references"]);
