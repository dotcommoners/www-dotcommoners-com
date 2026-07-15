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
    long: [
      'Machineuse is a distributed control plane for running browser automation at scale. It creates, schedules, and manages isolated browser instances across a fleet of worker nodes, so you can run thousands of concurrent automations without hand-managing individual machines.',
      'It uses brokerless NNG messaging between the control plane and workers, intelligent scheduling to place work on the right node, and snapshot-based dormancy to park idle instances and reclaim resources. Written in Python for an ergonomic control plane, it exposes an MCP interface and is designed to be self-hosted on your own hardware.',
    ],
    site: 'https://docs.dotcommoners.com/machineuse/',
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
    summary:
      'A high-performance, horizontally scalable Server-Sent Events (SSE) proxy built in Zig for real-time event streaming at scale — designed for 10M+ concurrent connections with a brokerless NNG mesh.',
    long: [
      'RevenProx is a high-performance Server-Sent Events (SSE) proxy written in Zig for real-time event streaming at scale. It is designed to hold 10M+ concurrent connections spread across 100+ instances, fanning out events to clients with minimal per-connection overhead.',
      'Instances form a brokerless NNG mesh — there is no central message broker to become a bottleneck or single point of failure. It supports JWT authentication and topic-based routing so you can publish once and deliver to the right subscribers, and it is built to be self-hosted and horizontally scaled on your own infrastructure.',
    ],
    site: 'https://docs.dotcommoners.com/revenprox/',
    docs: 'https://docs.dotcommoners.com/revenprox/',
    repo: 'https://github.com/dotcommoners/revenprox',
    topics: ['sse', 'proxy', 'distributed-systems', 'zig', 'real-time'],
    category: 'Real-time streaming',
  },
];

export const NAV = [
  { label: 'Projects', href: '/projects' },
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
  name: 'dotcommoners',
  url: WWW,
  publisher: { '@type': 'Organization', name: 'dotcommoners', url: WWW },
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
