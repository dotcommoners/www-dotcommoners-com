// Central site config — brand, nav, and cross-links shared across the dotcommoners web presence.
export const ORG = 'dotcommoners';
export const CONTACT = 'contact@dotcommoners.com';
export const GITHUB_ORG = 'https://github.com/dotcommoners';
export const DOCS = 'https://docs.dotcommoners.com';
export const WWW = 'https://www.dotcommoners.com';

// The public, open-source projects. Single source of truth for cross-linking.
export const PROJECTS = [
  {
    slug: 'machineuse',
    name: 'Machineuse',
    tag: 'Browser automation',
    lang: 'Python',
    summary:
      'Distributed container management for browser automation at scale. Create, schedule, and manage isolated browser instances across many nodes with intelligent load balancing and snapshot-based dormancy.',
    site: 'https://docs.dotcommoners.com/machineuse/',
    docs: 'https://docs.dotcommoners.com/machineuse/',
    repo: 'https://github.com/dotcommoners/machineuse',
    topics: ['browser-automation', 'distributed-systems', 'containers', 'systemd-nspawn', 'mcp'],
  },
  {
    slug: 'revenprox',
    name: 'RevenProx',
    tag: 'Real-time streaming',
    lang: 'Zig',
    summary:
      'A high-performance, horizontally scalable Server-Sent Events (SSE) proxy built in Zig for real-time event streaming at scale — designed for 10M+ concurrent connections with a brokerless NNG mesh.',
    site: 'https://docs.dotcommoners.com/revenprox/',
    docs: 'https://docs.dotcommoners.com/revenprox/',
    repo: 'https://github.com/dotcommoners/revenprox',
    topics: ['sse', 'proxy', 'distributed-systems', 'zig', 'real-time'],
  },
];

export const NAV = [
  { label: 'Projects', href: '#projects' },
  { label: 'Docs', href: DOCS },
  { label: 'GitHub', href: GITHUB_ORG },
];
