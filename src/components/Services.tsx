import { useState } from 'react'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Bug,
  CloudCog,
  Code2,
  Compass,
  DatabaseZap,
  FileSearch,
  Gauge,
  GitBranch,
  Layers3,
  Lightbulb,
  PlugZap,
  Route,
  ShieldCheck,
  Target,
  TestTube2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceGroup {
  eyebrow: string
  title: string
  description: string
  accent: string
  icon: LucideIcon
  items: ServiceItem[]
}

const iconProps = {
  size: 22,
  strokeWidth: 2,
}

const serviceGroups: ServiceGroup[] = [
  {
    eyebrow: 'Product engineering',
    title: 'Digital Product Engineering',
    description: 'End-to-end product execution for teams that need reliable digital systems, not just code handoffs.',
    accent: 'from-n-blue/28 via-[#65D5FF]/12 to-transparent',
    icon: Layers3,
    items: [
      {
        icon: Code2,
        title: 'Custom Web Applications',
        description: 'Responsive portals, dashboards, workflow tools, and customer-facing platforms shaped around your business logic.',
      },
      {
        icon: Layers3,
        title: 'SaaS & Platform Engineering',
        description: 'Multi-module platforms with clean architecture, reusable components, role-based flows, and scalable product foundations.',
      },
      {
        icon: PlugZap,
        title: 'API & System Integrations',
        description: 'Secure API layers, third-party integrations, data sync workflows, and internal systems that work together smoothly.',
      },
    ],
  },
  {
    eyebrow: 'Modern intelligence',
    title: 'AI/ML Solutions',
    description: 'Practical AI capability for companies ready to turn data, documents, and workflows into measurable advantage.',
    accent: 'from-[#2DBF9F]/28 via-n-blue/12 to-transparent',
    icon: BrainCircuit,
    items: [
      {
        icon: Lightbulb,
        title: 'AI Opportunity Mapping',
        description: 'Identify high-value use cases, evaluate feasibility, and shape a realistic roadmap around your product and operations.',
      },
      {
        icon: Bot,
        title: 'AI Assistants & Automation',
        description: 'Create chat assistants, RAG workflows, document intelligence, and automation layers for repetitive business processes.',
      },
      {
        icon: DatabaseZap,
        title: 'ML Prototypes & Integration',
        description: 'Build proof-of-concepts, model-backed features, and data pipelines that can move from experiment to product.',
      },
    ],
  },
  {
    eyebrow: 'Delivery infrastructure',
    title: 'Cloud, DevOps & Scale',
    description: 'Engineering support that keeps products deployable, observable, and prepared for growth.',
    accent: 'from-[#7C5CFF]/24 via-n-blue/12 to-transparent',
    icon: CloudCog,
    items: [
      {
        icon: CloudCog,
        title: 'Cloud Architecture',
        description: 'Plan cloud-ready application structures, hosting choices, storage, access, and deployment environments.',
      },
      {
        icon: GitBranch,
        title: 'CI/CD & Release Workflows',
        description: 'Set up automated builds, deployment pipelines, environment workflows, and release practices that reduce manual effort.',
      },
      {
        icon: Gauge,
        title: 'Performance & Reliability',
        description: 'Improve load behavior, caching, monitoring readiness, and technical bottlenecks before they slow the product down.',
      },
    ],
  },
  {
    eyebrow: 'Strategic guidance',
    title: 'Consulting',
    description: 'Focused technical direction for teams making important architecture, product, or transformation decisions.',
    accent: 'from-[#F3B94E]/20 via-[#65D5FF]/10 to-transparent',
    icon: Compass,
    items: [
      {
        icon: Target,
        title: 'Product & Technology Strategy',
        description: 'Clarify priorities, translate business goals into technical direction, and plan the next practical moves.',
      },
      {
        icon: FileSearch,
        title: 'Architecture Reviews',
        description: 'Assess existing systems, identify risks, and recommend cleaner paths for maintainability, scale, and delivery.',
      },
      {
        icon: Route,
        title: 'Roadmaps & Delivery Planning',
        description: 'Shape phased execution plans, feature sequencing, and team workflows that keep complex work manageable.',
      },
    ],
  },
  {
    eyebrow: 'Quality engineering',
    title: 'Testing Services',
    description: 'Testing stays part of the delivery system, giving teams confidence after the product has been shaped and built.',
    accent: 'from-[#65D5FF]/22 via-white/8 to-transparent',
    icon: ShieldCheck,
    items: [
      {
        icon: TestTube2,
        title: 'Manual & Functional Testing',
        description: 'Structured test coverage for core user journeys, edge cases, forms, workflows, and release-critical behavior.',
      },
      {
        icon: ShieldCheck,
        title: 'Automation Testing',
        description: 'Regression suites, smoke checks, and repeatable test flows that protect fast-moving teams from preventable breakage.',
      },
      {
        icon: Bug,
        title: 'Performance & QA Reviews',
        description: 'Issue discovery, quality reporting, performance checks, and release-readiness reviews before important launches.',
      },
    ],
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExplored, setIsExplored] = useState(false)
  const activeGroup = serviceGroups[activeIndex]
  const ActiveIcon = activeGroup.icon

  return (
    <section id="services" className="services-section glass-section py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="services-intro text-center max-w-[680px] mx-auto mb-20 reveal">
          <span className="inline-block text-[0.72rem] font-bold tracking-[.16em] uppercase text-n-blue mb-[0.65rem]">
            What We Build
          </span>
          <h2
            className="font-display font-extrabold text-n-dark leading-[1.1] m-0 mb-4"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', letterSpacing: '-.02em' }}
          >
            Core Services.
          </h2>
          <p className="text-[1.0625rem] text-n-slate leading-[1.7] m-0">
            From product engineering to AI, cloud delivery, consulting, and testing support, we help teams move from idea to reliable launch.
          </p>
        </div>

        {!isExplored ? (
          <div className="reveal flex items-center justify-center">
            <div
              className="service-entry-parent group"
            >
              <span className="service-3d-card">
                <span className="service-3d-content">
                  <span className="service-3d-title">Explore services</span>
                  <span className="service-3d-copy">
                    Product engineering, AI/ML, cloud delivery, consulting, and testing support in one focused explorer.
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsExplored(true)}
                    className="service-3d-action"
                    aria-label="View services"
                  >
                    View services
                    <ArrowRight size={15} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </span>
                <span className="service-3d-badge" aria-hidden="true">
                  <img src="/novion-logo-short.png" alt="" className="service-3d-logo" />
                </span>
              </span>
            </div>
          </div>
        ) : (
        <div className="service-detail-shell reveal glass-panel relative overflow-hidden rounded-[26px] p-4 sm:p-5 lg:min-h-[550px] lg:p-6">
          <div className={`absolute inset-0 bg-gradient-to-br ${activeGroup.accent}`} aria-hidden="true" />

          <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-5">
            <div
              role="tablist"
              aria-label="Service categories"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 lg:auto-rows-fr"
            >
              {serviceGroups.map((group, index) => {
                const GroupIcon = group.icon
                const isActive = index === activeIndex

                return (
                  <button
                    key={group.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="service-category-panel"
                    id={`service-category-tab-${index}`}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex min-h-[76px] cursor-pointer items-center gap-3 rounded-[18px] border px-4 py-3 text-left transition-all duration-200 lg:min-h-0 ${
                      isActive
                        ? 'border-[rgba(190,235,255,.7)] bg-[linear-gradient(135deg,rgba(255,255,255,.28),rgba(155,228,255,.12))] shadow-[0_18px_46px_rgba(0,8,18,.22),inset_0_1px_0_rgba(255,255,255,.3)]'
                        : 'border-[rgba(155,228,255,.18)] bg-[linear-gradient(135deg,rgba(255,255,255,.075),rgba(255,255,255,.025))] hover:border-[rgba(190,235,255,.48)] hover:bg-[linear-gradient(135deg,rgba(255,255,255,.16),rgba(155,228,255,.07))]'
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border transition-colors duration-200 ${
                        isActive
                          ? 'border-white/70 bg-[#EAF7FE] text-[#071827]'
                          : 'border-white/30 bg-white/14 text-[#9BE4FF] group-hover:bg-white/24'
                      }`}
                      aria-hidden="true"
                    >
                      <GroupIcon size={20} strokeWidth={2.1} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.66rem] font-extrabold uppercase tracking-[.14em] text-[#9BE4FF]">
                        {group.eyebrow}
                      </span>
                      <span className="mt-1 block text-[0.95rem] font-extrabold leading-[1.15] text-white">
                        {group.title}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>

            <article
              id="service-category-panel"
              role="tabpanel"
              aria-labelledby={`service-category-tab-${activeIndex}`}
              className="flex min-h-[610px] flex-col rounded-[22px] border border-[rgba(155,228,255,.24)] bg-[linear-gradient(135deg,rgba(255,255,255,.1),rgba(255,255,255,.025))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.18)] sm:min-h-[540px] sm:p-6 lg:min-h-0 lg:p-7"
            >
              <div className="mb-6 grid min-h-[178px] grid-cols-1 gap-5 sm:min-h-[154px] lg:min-h-[142px] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                <div>
                  <p className="text-[0.68rem] font-extrabold tracking-[.16em] uppercase text-n-blue m-0 mb-3">
                    {activeGroup.eyebrow}
                  </p>
                  <h3 className="font-display text-white text-[1.65rem] sm:text-[2rem] leading-[1.08] font-extrabold tracking-[-0.02em] m-0 mb-4 min-h-[3.6rem] sm:min-h-[4.35rem]">
                    {activeGroup.title}
                  </h3>
                  <p className="min-h-[5.05rem] max-w-[680px] text-[0.98rem] text-[rgba(214,229,238,.8)] leading-[1.7] m-0 sm:min-h-[3.35rem]">
                    {activeGroup.description}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="hidden lg:flex h-16 w-16 items-center justify-center rounded-[20px] border border-white/70 bg-[#EAF7FE] text-[#071827] shadow-[0_18px_42px_rgba(0,8,18,.18),inset_0_1px_0_rgba(255,255,255,.85)]"
                >
                  <ActiveIcon size={30} strokeWidth={2.05} />
                </div>
              </div>

              <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-3">
                {activeGroup.items.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="service-card glass-card group flex h-full min-h-[255px] flex-col rounded-[18px] p-5 transition-all duration-[250ms] hover:border-white/50 hover:shadow-[0_24px_70px_rgba(19,36,58,0.16)] hover:-translate-y-1 sm:p-6 md:min-h-[300px] lg:min-h-0"
                  >
                    <div
                      aria-hidden="true"
                      className="service-icon mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/70 bg-[#EAF7FE] text-[#071827] shadow-[0_10px_26px_rgba(0,8,18,.12),inset_0_1px_0_rgba(255,255,255,.85)] transition-transform duration-300 group-hover:scale-105"
                    >
                      <Icon {...iconProps} />
                    </div>
                    <h4 className="font-display font-bold text-n-dark text-[1.08rem] tracking-[-0.01em] leading-[1.24] m-0 mb-3 min-h-[2.7rem]">
                      {title}
                    </h4>
                    <p className="text-[0.9rem] text-n-slate leading-[1.65] m-0 flex-1">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
