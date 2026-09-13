import type { APIContext } from 'astro';
import { GUIDES, PROJECTS, WWW, CONTACT } from '../data/site.js';

/**
 * /rss.xml — a feed of this site's substantive pages.
 *
 * There is no blog collection here, so this is a site feed rather than a post
 * feed: the evergreen pages and the long-form write-ups, each with the same
 * description the page itself carries. No per-item pubDate is emitted, because
 * these pages have no authored publication date and inventing one would make the
 * feed lie about freshness. The channel's lastBuildDate is the honest signal.
 */

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CORE_PAGES = [
  {
    path: '/projects',
    title: 'Projects',
    description:
      'Every public dotcommoners project, what it does, and where to read the source — plus the four domains they sit in.',
  },
  {
    path: '/principles',
    title: 'Principles',
    description:
      'The six commitments behind every project: MIT, self-hostable, performance-first, brokerless, no lock-in, readable.',
  },
  {
    path: '/about',
    title: 'About & Manifesto',
    description:
      'Why dotcommoners rebuilds rented infrastructure as a commons, who is behind it, and how to contribute.',
  },
  {
    path: '/faq',
    title: 'FAQ',
    description:
      'Licensing, self-hosting, languages, contributing, and how this differs from a managed service.',
  },
];

export async function GET(context: APIContext) {
  const site = (context.site?.href ?? `${WWW}/`).replace(/\/$/, '');

  const items = [
    ...CORE_PAGES.map((p) => ({
      title: p.title,
      link: `${site}${p.path}`,
      description: p.description,
      category: 'Site',
    })),
    ...GUIDES.map((g) => ({
      title: g.title,
      link: `${site}${g.href}`,
      description: g.blurb,
      category: g.kind,
    })),
    ...PROJECTS.map((p) => ({
      title: `${p.name} — ${p.tag}`,
      link: p.site,
      description: p.summary,
      category: 'Project',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>dotcommoners</title>
    <link>${site}/</link>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Open-source, self-hostable infrastructure in Rust, Zig, and Python. MIT-licensed, no vendor lock-in.</description>
    <language>en-us</language>
    <managingEditor>${CONTACT} (dotcommoners)</managingEditor>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items
  .map(
    (i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${esc(i.link)}</link>
      <guid isPermaLink="true">${esc(i.link)}</guid>
      <category>${esc(i.category)}</category>
      <description>${esc(i.description)}</description>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
