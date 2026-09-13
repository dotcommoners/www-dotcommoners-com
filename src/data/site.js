// Central site config — brand, nav, and cross-links shared across the dotcommoners web presence.
export const ORG = 'dotcommoners';
export const CONTACT = 'contact@dotcommoners.com';
export const GITHUB_ORG = 'https://github.com/dotcommoners';
export const DOCS = 'https://docs.dotcommoners.com';
export const WWW = 'https://www.dotcommoners.com';

// Each public project has its own site on a dotcommoners subdomain. These are the
// canonical project homes; docs.dotcommoners.com carries the reference material.
export const MACHINEUSE_SITE = 'https://machineuse.dotcommoners.com';
export const REVENPROX_SITE = 'https://revenprox.dotcommoners.com';

// The public, open-source projects. Single source of truth for cross-linking.
export const PROJECTS = [
  {
    slug: 'machineuse',
    name: 'Machineuse',
    tag: 'Browser automation',
    lang: 'Python',
    icon: 'browser',
    tagline: 'Run browser automation at fleet scale, on hardware you own.',
    summary:
      'Distributed container management for browser automation at scale. Create, schedule, and manage isolated browser instances across many nodes with intelligent load balancing and snapshot-based dormancy.',
    long: [
      'Machineuse is a distributed control plane for running browser automation at scale. It creates, schedules, and manages isolated browser instances across a fleet of worker nodes, so you can run thousands of concurrent automations without hand-managing individual machines.',
      'It uses brokerless NNG messaging between the control plane and workers, intelligent scheduling to place work on the right node, and snapshot-based dormancy to park idle instances and reclaim resources. Written in Python for an ergonomic control plane, it exposes an MCP interface and is designed to be self-hosted on your own hardware.',
    ],
    highlights: [
      'Isolated browser instances across many worker nodes',
      'Brokerless NNG messaging — no central broker to bottleneck',
      'Intelligent scheduling places work on the right node',
      'Snapshot-based dormancy parks idle instances and reclaims resources',
      'Exposes an MCP interface for agent-driven control',
    ],
    site: MACHINEUSE_SITE + '/',
    host: 'machineuse.dotcommoners.com',
    docs: 'https://docs.dotcommoners.com/machineuse/',
    repo: 'https://github.com/dotcommoners/machineuse',
    topics: ['browser-automation', 'distributed-systems', 'containers', 'systemd-nspawn', 'mcp'],
    category: 'Browser automation',
  },
  {
    slug: 'revenprox',
    name: 'RevenProx',
    tag: 'Real-time streaming',
    lang: 'Zig',
    icon: 'stream',
    tagline: 'Fan out real-time events to 10M+ connections, brokerless.',
    summary:
      'A high-performance, horizontally scalable Server-Sent Events (SSE) proxy built in Zig for real-time event streaming at scale — designed for 10M+ concurrent connections with a brokerless NNG mesh.',
    long: [
      'RevenProx is a high-performance Server-Sent Events (SSE) proxy written in Zig for real-time event streaming at scale. It is designed to hold 10M+ concurrent connections spread across 100+ instances, fanning out events to clients with minimal per-connection overhead.',
      'Instances form a brokerless NNG mesh — there is no central message broker to become a bottleneck or single point of failure. It supports JWT authentication and topic-based routing so you can publish once and deliver to the right subscribers, and it is built to be self-hosted and horizontally scaled on your own infrastructure.',
    ],
    highlights: [
      'Designed for 10M+ concurrent connections across 100+ instances',
      'Brokerless NNG mesh — no single point of failure',
      'JWT authentication built in',
      'Topic-based routing: publish once, deliver to the right subscribers',
      'Minimal per-connection overhead, horizontally scalable',
    ],
    site: REVENPROX_SITE + '/',
    host: 'revenprox.dotcommoners.com',
    docs: 'https://docs.dotcommoners.com/revenprox/',
    repo: 'https://github.com/dotcommoners/revenprox',
    topics: ['sse', 'proxy', 'distributed-systems', 'zig', 'real-time'],
    category: 'Real-time streaming',
  },
];

// Language badge colors — used for project cards and detail pages.
export const LANG_COLORS = {
  Rust: '#f6b17a',
  Zig: '#f7a41d',
  Python: '#5fa8e8',
};

// The domains dotcommoners rebuilds — "what we're building" taxonomy.
// Accurate to llms.txt: orchestration, streaming, browser automation, observability.
export const DOMAINS = [
  {
    key: 'orchestration',
    label: 'Orchestration',
    icon: 'grid',
    blurb: 'Scheduling and managing distributed workloads across a fleet — placing work on the right node without a central bottleneck.',
    status: 'Building',
  },
  {
    key: 'streaming',
    label: 'Real-time streaming',
    icon: 'stream',
    blurb: 'Moving events to clients at scale — Server-Sent Events, fan-out, and topic routing over a brokerless mesh.',
    status: 'Shipping',
    project: 'RevenProx',
  },
  {
    key: 'browser-automation',
    label: 'Browser automation',
    icon: 'browser',
    blurb: 'Running isolated browsers at fleet scale — creating, scheduling, and parking instances across many nodes.',
    status: 'Shipping',
    project: 'Machineuse',
  },
  {
    key: 'observability',
    label: 'Observability',
    icon: 'pulse',
    blurb: 'Understanding what your systems are doing — metrics, traces, and signals you own rather than ship to a vendor.',
    status: 'Building',
  },
];

// Core principles / values — accurate to llms.txt.
export const PRINCIPLES = [
  {
    icon: 'lock-open',
    title: 'Open source, permissively',
    body: 'Everything is MIT-licensed. Fork it, patch it, ship it — no proprietary control plane, no licensing fees.',
  },
  {
    icon: 'server',
    title: 'Self-hostable by default',
    body: 'On-premise deployment is the design goal, not a paid tier. Run it on a laptop, a homelab, or a fleet of edge nodes.',
  },
  {
    icon: 'bolt',
    title: 'Performance-first',
    body: 'Rust and Zig where microseconds and memory matter; Python where an ergonomic control plane and rich ecosystem win.',
  },
  {
    icon: 'mesh',
    title: 'Brokerless & scalable',
    body: 'Brokerless architectures with no central bottleneck and no single point of failure. Horizontal scale is built in.',
  },
  {
    icon: 'shield',
    title: 'No vendor lock-in',
    body: 'Nothing phones home. If dotcommoners vanished tomorrow, you would still have the full source and could run it forever.',
  },
  {
    icon: 'book',
    title: 'Readable & documented',
    body: 'Real docs at docs.dotcommoners.com, clear architecture notes, and source you can actually follow and contribute to.',
  },
];

// Honest stats for the homepage — nothing invented.
export const STATS = [
  { value: '2', label: 'Public projects', sub: 'Machineuse & RevenProx' },
  { value: '3', label: 'Systems languages', sub: 'Rust · Zig · Python' },
  { value: 'MIT', label: 'License', sub: 'Permissive, no lock-in' },
  { value: '100%', label: 'Self-hostable', sub: 'Your hardware, your rules' },
];

// Long-form topic pages. These are the "why" behind the projects: the architectural
// and licensing decisions, and the four problem domains the projects sit in.
// Single source of truth for the deep-dive index on the home page and in llms.txt.
export const GUIDES = [
  {
    href: '/brokerless',
    icon: 'mesh',
    kind: 'Architecture',
    title: 'Brokerless architecture',
    blurb: 'What a message broker buys you, where it becomes the ceiling, and how a peer-to-peer mesh agrees on state without one.',
  },
  {
    href: '/languages',
    icon: 'code',
    kind: 'Architecture',
    title: 'Rust, Zig and Python',
    blurb: 'Why the data plane and the control plane want different languages, and how garbage collection changes what a node can hold open.',
  },
  {
    href: '/self-hosting',
    icon: 'server',
    kind: 'Operations',
    title: 'What self-hosting commits you to',
    blurb: 'The honest operational contract: hosts, kernels, runtimes, upgrades, capacity and the pager, once there is no vendor on call.',
  },
  {
    href: '/vs-saas',
    icon: 'grid',
    kind: 'Operations',
    title: 'Self-hosted vs managed SaaS',
    blurb: 'Cost shape, operational burden, the data path and exit cost, including the cases where a managed service is the better answer.',
  },
  {
    href: '/licensing',
    icon: 'lock-open',
    kind: 'Licensing',
    title: 'MIT and what permissive means',
    blurb: 'What the MIT license permits, how it compares with Apache-2.0, the GPL family and source-available licenses, and what it withholds.',
  },
  {
    href: '/browser-automation',
    icon: 'browser',
    kind: 'Domain',
    title: 'Browser automation at fleet scale',
    blurb: 'Placement, isolation, idle cost and recovery — the four problems that appear when one headless browser becomes a thousand.',
  },
  {
    href: '/real-time-streaming',
    icon: 'stream',
    kind: 'Domain',
    title: 'Real-time streaming at scale',
    blurb: 'Why millions of long-lived SSE connections is a memory and fan-out problem rather than a requests-per-second problem.',
  },
  {
    href: '/observability',
    icon: 'pulse',
    kind: 'Domain',
    title: 'Observability you own',
    blurb: 'Cardinality, retention, sampling and egress — why telemetry is the most expensive thing to rent, and what owning the pipeline changes.',
  },
];

export const NAV = [
  { label: 'Projects', href: '/projects' },
  { label: 'Principles', href: '/principles' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Docs', href: DOCS },
  { label: 'GitHub', href: GITHUB_ORG },
  { label: 'Contact', href: '/contact' },
];

// Shared JSON-LD builders so every page emits consistent Organization / WebSite schema.
export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${WWW}/#organization`,
  name: 'dotcommoners',
  url: WWW,
  logo: `${WWW}/og.png`,
  email: CONTACT,
  description:
    'Open-source organization building high-performance, self-hostable infrastructure and systems software.',
  sameAs: [GITHUB_ORG],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${WWW}/#website`,
  name: 'dotcommoners',
  url: WWW,
  inLanguage: 'en',
  publisher: { '@id': `${WWW}/#organization` },
};

// Build a BreadcrumbList for deep pages. items: [{name, path}] (path relative to root, '' = home).
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${WWW}${it.path ? '/' + it.path.replace(/^\//, '') : ''}`.replace(/\/$/, '') || WWW,
    })),
  };
}
