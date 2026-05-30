import { Injectable } from '@angular/core';
import {
  ContactItem,
  Industry,
  NavLink,
  ProcessStep,
  Stat,
} from '@shared/models/Content.model';
import {ServiceItem} from '@shared/models/Service.model';

@Injectable({ providedIn: 'root' })
export class ContentService {

  // ── NAVIGATION ────────────────────────────────────────────────────
  readonly navLinks: NavLink[] = [
    { label: 'Home',       fragment: '', route: '/' },
    { label: 'Services',   fragment: 'services'     },
    { label: 'About',      fragment: 'about'        },
    { label: 'Approach',   fragment: 'process'      },
    { label: 'Industries', fragment: 'industries'   },
    { label: 'Insights',   route: '/insights'       },
    { label: 'Contact',    fragment: 'cta'          },
  ];

  // ── MARQUEE ───────────────────────────────────────────────────────
  readonly marqueeItems: string[] = [
    'Solution Architecture',
    'Cloud Transformation',
    'Microservices Design',
    'AI-Enabled Systems',
    'DevOps & Observability',
    'Platform Engineering',
    'Digital Modernisation',
    'Event-Driven Architecture',
  ];

  // ── SERVICES ──────────────────────────────────────────────────────
  readonly services: ServiceItem[] = [
    {
      number: '01',
      name: 'Solution & System Architecture',
      description:
        'End-to-end architecture design tailored to your business context — scalable, secure blueprints that form the backbone of your digital platform.',
      svgPath: `
        <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="40" height="40" stroke="#C9A84C" stroke-width="0.5"/>
          <circle cx="21" cy="21" r="8" stroke="#C9A84C" stroke-width="0.5"/>
          <line x1="21" y1="1"  x2="21" y2="13" stroke="#C9A84C" stroke-width="0.5"/>
          <line x1="21" y1="29" x2="21" y2="41" stroke="#C9A84C" stroke-width="0.5"/>
          <line x1="1"  y1="21" x2="13" y2="21" stroke="#C9A84C" stroke-width="0.5"/>
          <line x1="29" y1="21" x2="41" y2="21" stroke="#C9A84C" stroke-width="0.5"/>
          <circle cx="21" cy="21" r="2" fill="#C9A84C"/>
        </svg>`,
    },
    {
      number: '02',
      name: 'Cloud Transformation',
      description:
        'Strategic migration and modernisation across AWS, GCP, and Azure — multi-cloud architectures designed for performance, cost efficiency, and resilience.',
      svgPath: `
        <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 32 L21 10 L38 32" stroke="#C9A84C" stroke-width="0.5"/>
          <path d="M10 26 L21 14 L32 26" stroke="#C9A84C" stroke-width="0.5" opacity="0.5"/>
          <circle cx="21" cy="10" r="2" fill="#C9A84C"/>
          <line x1="4" y1="32" x2="38" y2="32" stroke="#C9A84C" stroke-width="0.5"/>
        </svg>`,
    },
    {
      number: '03',
      name: 'Microservices & Event-Driven Design',
      description:
        'Decompose monoliths, design domain-driven services, and build event-driven architectures that scale independently and evolve with your organisation.',
      svgPath: `
        <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6"  y="6"  width="12" height="12" stroke="#C9A84C" stroke-width="0.5"/>
          <rect x="24" y="6"  width="12" height="12" stroke="#C9A84C" stroke-width="0.5"/>
          <rect x="6"  y="24" width="12" height="12" stroke="#C9A84C" stroke-width="0.5"/>
          <rect x="24" y="24" width="12" height="12" stroke="#C9A84C" stroke-width="0.5"/>
          <line x1="18" y1="12" x2="24" y2="12" stroke="#C9A84C" stroke-width="0.5"/>
          <line x1="12" y1="18" x2="12" y2="24" stroke="#C9A84C" stroke-width="0.5"/>
          <line x1="30" y1="18" x2="30" y2="24" stroke="#C9A84C" stroke-width="0.5"/>
          <line x1="18" y1="30" x2="24" y2="30" stroke="#C9A84C" stroke-width="0.5"/>
        </svg>`,
    },
    {
      number: '04',
      name: 'Digital Modernisation',
      description:
        'Evolve legacy platforms into modern, maintainable systems — preserving business value while eliminating technical debt and unlocking new capability.',
      svgPath: `
        <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="6,32 16,18 24,24 36,8" stroke="#C9A84C" stroke-width="0.5" fill="none"/>
          <circle cx="6"  cy="32" r="2" fill="#C9A84C"/>
          <circle cx="36" cy="8"  r="2" fill="#C9A84C"/>
          <rect x="1" y="36" width="40" height="0.5" fill="#C9A84C" opacity="0.3"/>
        </svg>`,
    },
    {
      number: '05',
      name: 'DevOps & Platform Engineering',
      description:
        'CI/CD pipelines, infrastructure-as-code, observability platforms, and developer experience tooling that accelerate delivery and reduce operational risk.',
      svgPath: `
        <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21" cy="21" r="14" stroke="#C9A84C" stroke-width="0.5" stroke-dasharray="3 3"/>
          <circle cx="21" cy="21" r="7"  stroke="#C9A84C" stroke-width="0.5"/>
          <line x1="21" y1="7"  x2="21" y2="35" stroke="#C9A84C" stroke-width="0.5" opacity="0.4"/>
          <line x1="7"  y1="21" x2="35" y2="21" stroke="#C9A84C" stroke-width="0.5" opacity="0.4"/>
          <circle cx="21" cy="21" r="2" fill="#C9A84C"/>
        </svg>`,
    },
    {
      number: '06',
      name: 'AI-Enabled Solutions',
      description:
        'Integrate AI and machine learning into your products and operations — from architecture advisory to building production-grade, AI-powered systems at scale.',
      svgPath: `
        <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 4 L36 12 L36 28 L21 36 L6 28 L6 12 Z" stroke="#C9A84C" stroke-width="0.5"/>
          <path d="M21 12 L28 16 L28 24 L21 28 L14 24 L14 16 Z" stroke="#C9A84C" stroke-width="0.5" opacity="0.5"/>
          <circle cx="21" cy="20" r="2" fill="none" stroke="#C9A84C" stroke-width="0.5"/>
          <circle cx="21" cy="20" r="0.75" fill="#C9A84C"/>
        </svg>`,
    },
  ];

  // ── STATS ─────────────────────────────────────────────────────────
  readonly stats: Stat[] = [
    { value: '20', suffix: '+', label: 'Years Experience'  },
    { value: '50', suffix: '+', label: 'Projects Delivered' },
    { value: '6',               label: 'Industry Sectors'  },
    { value: '3',               label: 'Cloud Platforms'   },
  ];

  // ── PROCESS STEPS ─────────────────────────────────────────────────
  readonly processSteps: ProcessStep[] = [
    {
      numeral: 'I',
      title: 'Discover',
      description:
        'Deep-dive into your technology landscape, business context, constraints, and objectives to establish a shared foundation.',
    },
    {
      numeral: 'II',
      title: 'Architect',
      description:
        'Produce rigorous architectural blueprints — decision records, trade-off analyses, and roadmaps with clear rationale.',
    },
    {
      numeral: 'III',
      title: 'Deliver',
      description:
        'Hands-on implementation with embedded quality gates, iterative review cycles, and engineering excellence throughout.',
    },
    {
      numeral: 'IV',
      title: 'Evolve',
      description:
        'Ongoing advisory, observability review, and strategic guidance to ensure your platform continues to serve your ambitions.',
    },
  ];

  // ── INDUSTRIES ────────────────────────────────────────────────────
  readonly industries: Industry[] = [
    { name: 'Financial Services'      },
    { name: 'Insurance & InsurTech'   },
    { name: 'E-Commerce & Retail'     },
    { name: 'Telecommunications'      },
    { name: 'Cloud & SaaS Platforms'  },
    { name: 'Enterprise & B2B'        },
  ];

  readonly techTags: string[] = [
    'Java & Spring', 'AWS', 'GCP', 'Azure', 'Kubernetes',
    'Kafka', 'Terraform', 'Docker', 'PostgreSQL', 'Redis',
    'GraphQL', 'REST APIs', 'CI/CD', 'Observability', 'DDD',
  ];

  // ── CONTACT ───────────────────────────────────────────────────────
  readonly contactItems: ContactItem[] = [
    { icon: 'email',    label: 'hello@marafis.com',          href: 'mailto:hello@marafis.com' },
    { icon: 'web',      label: 'www.marafis.com',            href: 'https://marafis.com' },
    { icon: 'linkedin', label: 'LinkedIn: marafis.com', href: 'https://www.linkedin.com/company/marafis' },
    { icon: 'facebook', label: 'Facebook: marafis.com', href: 'https://www.facebook.com/marafisconsultancy' },
  ];

  // ── FOOTER LINKS ──────────────────────────────────────────────────
  readonly footerServices: { label: string; fragment: string }[] = [
    { label: 'Solution Architecture',   fragment: 'services' },
    { label: 'Cloud Transformation',    fragment: 'services' },
    { label: 'Microservices Design',    fragment: 'services' },
    { label: 'Digital Modernisation',   fragment: 'services' },
    { label: 'DevOps Engineering',      fragment: 'services' },
    { label: 'AI Integration',          fragment: 'services' },
  ];

  readonly footerCompany: { label: string; fragment: string }[] = [
    { label: 'About Marafis', fragment: 'about'      },
    { label: 'Our Approach',  fragment: 'process'    },
    { label: 'Industries',    fragment: 'industries' },
    { label: 'Contact Us',    fragment: 'cta'        },
  ];
}
