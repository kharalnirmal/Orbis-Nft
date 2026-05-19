import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Github,
  Mail,
  Menu,
  Twitter,
  X,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

const socialLinks = [
  { label: "Mail", icon: Mail, href: "mailto:hello@orbis.nft" },
  { label: "Twitter", icon: Twitter, href: "https://nirmalkharal.tech/" },
  { label: "Github", icon: Github, href: "https://nirmalkharal.tech/" },
];

const navItems = [
  { label: "Homepage", href: "#homepage" },
  { label: "Gallery", href: "#gallery" },
  { label: "Buy NFT", href: "#buy-nft" },
  { label: "FAQ", href: "#faq-contact" },
  { label: "Contact", href: "#faq-contact" },
];

const collectionItems = [
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    score: "8.7/10",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    score: "9/10",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    score: "8.2/10",
  },
];

const faqItems = [
  {
    question: "How does minting work?",
    answer:
      "Mint access follows the signal shown in this collection and opens through the drop flow tied to the project.",
  },
  {
    question: "What do I get?",
    answer:
      "A single Orbis.Nft object tied to the visual language of the drop, plus the supporting contact and gallery experience.",
  },
  {
    question: "Can I reach the team?",
    answer:
      "Use the contact panel on the right, or use the social links that route to the project site.",
  },
  {
    question: "When is the drop?",
    answer:
      "Drops are announced on the project site and social channels — follow the website for exact timings and whitelist information.",
  },
  {
    question: "How do I buy?",
    answer:
      "Connect your wallet on the Buy NFT page and follow the mint flow; the Buy page contains step-by-step instructions.",
  },
];

function SocialButton({
  label,
  icon: Icon,
  href,
}: (typeof socialLinks)[number]) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex justify-center items-center hover:bg-white/10 rounded-[1rem] w-14 h-14 transition liquid-glass"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon className="w-5 h-5 text-cream" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-condiment text-neon mix-blend-exclusion">
      {children}
    </span>
  );
}

function GlassCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 sm:p-6 lg:p-7 rounded-[28px] h-full liquid-glass">
      <div className="flex flex-col gap-5 sm:gap-6 h-full">
        <div className="space-y-2">
          <div className="font-condiment text-[20px] text-neon sm:text-[28px] mix-blend-exclusion">
            {title}
          </div>
          <h3 className="font-grotesk text-[24px] text-cream sm:text-[34px] md:text-[40px] uppercase leading-[1.02]">
            {subtitle}
          </h3>
        </div>
        {children}
      </div>
    </div>
  );
}

function FaqAccordion() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="item-0"
      className="bg-black/10 border border-white/10 rounded-[24px] divide-y divide-white/10 overflow-hidden"
    >
      {faqItems.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="px-4 sm:px-5"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex justify-between items-center gap-4 py-4 w-full hover:text-neon text-left transition">
              <span className="font-grotesk text-[16px] sm:text-[18px] md:text-[20px] uppercase tracking-[0.04em]">
                {item.question}
              </span>
              <ChevronDown className="w-5 h-5 data-[state=open]:rotate-180 transition-transform duration-300 shrink-0" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-4 overflow-hidden transition-all duration-300">
            <div className="min-h-0">
              <p className="max-w-[34rem] font-mono text-[12px] text-cream/80 sm:text-[13px] md:text-[14px] uppercase leading-[1.7]">
                {item.answer}
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="bg-background text-cream">
      <section
        id="homepage"
        className="relative rounded-b-[32px] min-h-screen overflow-hidden"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
        />
        <div className="absolute inset-0 bg-[#010828]/35" />

        <div className="relative flex flex-col mx-auto px-5 sm:px-8 lg:px-14 pt-5 sm:pt-7 lg:pt-8 pb-10 sm:pb-12 lg:pb-16 max-w-[1831px] min-h-screen">
          <header className="top-5 sm:top-7 lg:top-8 right-5 sm:right-8 lg:right-14 left-5 sm:left-8 lg:left-14 z-[100] absolute flex flex-col gap-4">
            <div className="flex justify-between items-center gap-4">
              <div className="font-grotesk text-[16px] text-cream uppercase tracking-[0.08em]">
                Orbis.Nft
              </div>
              <nav
                aria-label="Primary"
                className="hidden lg:block px-[52px] py-[24px] rounded-[28px] liquid-glass"
              >
                <div className="flex items-center gap-10">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="font-grotesk text-[13px] text-cream hover:text-neon uppercase tracking-[0.08em] transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>
              <button
                type="button"
                className="lg:hidden inline-flex justify-center items-center bg-black/20 hover:bg-white/10 border border-white/10 rounded-full w-12 h-12 transition liquid-glass"
                aria-label={
                  mobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-cream" />
                ) : (
                  <Menu className="w-5 h-5 text-cream" />
                )}
              </button>
              <div className="hidden lg:block w-[56px]" />
            </div>

            <nav
              id="mobile-navigation"
              aria-label="Mobile primary"
              className={`lg:hidden overflow-hidden rounded-[24px] liquid-glass transition-all duration-300 ${
                mobileMenuOpen
                  ? "max-h-[320px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-1 p-3 sm:p-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex justify-between items-center hover:bg-white/10 px-4 py-4 rounded-[18px] font-grotesk text-[14px] text-cream hover:text-neon uppercase tracking-[0.08em] transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </nav>
          </header>

          <div className="relative flex flex-1 items-center pt-28 sm:pt-28 lg:pt-32">
            <div className="mx-auto lg:ml-32 w-full lg:max-w-[780px]">
              <div className="relative max-w-[780px] lg:text-left text-center">
                <h1 className="mx-auto max-w-[780px] font-grotesk text-[40px] text-cream sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] lg:leading-[1]">
                  Beyond earth
                  <br />
                  and ( its ) familiar boundaries
                </h1>
                <div className="top-12 lg:top-24 right-auto lg:right-0 left-1/2 lg:left-auto absolute opacity-90 text-[24px] sm:text-[36px] md:text-[48px] -rotate-1 -translate-x-1/2 lg:translate-x-0 pointer-events-none">
                  <SectionLabel>Nft collection</SectionLabel>
                </div>
              </div>

              <div className="lg:hidden flex justify-center items-center gap-4 mt-10">
                {socialLinks.map((link) => (
                  <SocialButton key={link.label} {...link} />
                ))}
              </div>
            </div>

            <div className="hidden top-6 right-0 absolute lg:flex flex-col gap-4">
              {socialLinks.map((link) => (
                <SocialButton key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-background scroll-mt-10">
        <div className="mx-auto px-5 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24 max-w-[1831px]">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-10">
            <div className="max-w-[820px]">
              <h2 className="font-grotesk text-[32px] text-cream sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase leading-[1.02]">
                Collection of
                <br />
                <span className="ml-12 sm:ml-16 md:ml-24 lg:ml-32">
                  <SectionLabel>Space</SectionLabel> objects
                </span>
              </h2>
            </div>
            <a
              href="#"
              className="group inline-flex flex-col items-start self-start gap-1"
            >
              <span className="flex items-end gap-2 font-grotesk text-[32px] text-cream sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase leading-none">
                SEE
                <span className="flex flex-col items-start pb-1 text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[0.8]">
                  <span>ALL</span>
                  <span>CREATORS</span>
                </span>
              </span>
              <span className="bg-neon w-full h-[6px] sm:h-[8px] lg:h-[10px]" />
            </a>
          </div>

          <div className="gap-6 grid lg:grid-cols-3 mt-10">
            {collectionItems.map((item) => (
              <article
                key={item.video}
                className="hover:bg-white/10 p-[18px] rounded-[32px] transition liquid-glass"
              >
                <div className="relative pb-[100%] rounded-[24px] overflow-hidden">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={item.video}
                  />
                </div>
                <div className="flex justify-between items-center gap-4 mt-4 px-5 py-4 rounded-[20px] liquid-glass">
                  <div>
                    <p className="font-mono text-[11px] text-cream/70 uppercase">
                      RARITY SCORE:
                    </p>
                    <p className="font-grotesk text-[16px] text-cream uppercase">
                      {item.score}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex justify-center items-center bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 rounded-full w-12 h-12 hover:scale-110 transition"
                    aria-label="Open nft item"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="buy-nft"
        className="relative bg-background overflow-hidden scroll-mt-10"
      >
        <video
          className="block w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
        />
        <div className="absolute inset-0 bg-[#010828]/10" />

        <div className="absolute inset-0 px-5 sm:px-8 lg:px-14 py-6 sm:py-8 lg:py-10">
          <div className="relative flex flex-col mx-auto max-w-[1831px] h-full">
            <div className="relative flex-1 min-h-[420px] sm:min-h-[520px] md:min-h-[620px] lg:min-h-[760px]">
              <div className="self-end mt-10 lg:mt-[12%] 2xl:mt-[14%] lg:mr-0 lg:ml-auto lg:pr-[12%] 2xl:pr-[22%] xl:pr-[18%] lg:max-w-[760px] 2xl:max-w-[980px] xl:max-w-[820px] text-right">
                <div className="mb-3 font-condiment text-[20px] text-neon sm:text-[28px] md:text-[36px] lg:text-[48px] 2xl:text-[60px] mix-blend-exclusion">
                  Join the Mission
                </div>
                <h2 className="font-grotesk text-[24px] text-cream sm:text-[32px] md:text-[42px] lg:text-[60px] 2xl:text-[72px] uppercase leading-[1.02] 2xl:leading-[0.96]">
                  <span className="block mb-4 sm:mb-6 lg:mb-12 2xl:mb-16">
                    OWN THE SIGNAL.
                  </span>
                  CLAIM A PIECE OF ORBITAL ARTIFACTS.
                  <br />
                  MINT, COLLECT, PRESERVE.
                  <br />
                  JOIN THE DROP.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq-contact"
        className="relative bg-background min-h-screen overflow-hidden scroll-mt-10"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4"
        />
        <div className="absolute inset-0 bg-[#010828]/35" />

        <div className="relative flex flex-col mx-auto px-5 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24 max-w-[1831px] min-h-screen">
          <div className="self-end mb-10 lg:ml-auto max-w-[780px] text-right">
            <div className="mb-3 font-condiment text-[20px] text-neon sm:text-[28px] md:text-[36px] lg:text-[48px] mix-blend-exclusion">
              Go beyond
            </div>
            <h2 className="font-grotesk text-[24px] text-cream sm:text-[32px] md:text-[42px] lg:text-[60px] uppercase leading-[1.02]">
              <span className="block mb-4 sm:mb-6 lg:mb-12">JOIN US.</span>
              REVEAL WHAT&apos;S HIDDEN.
              <br />
              DEFINE WHAT&apos;S NEXT.
              <br />
              FOLLOW THE SIGNAL.
            </h2>
          </div>

          <div className="lg:items-stretch gap-4 grid lg:grid-cols-2">
            <div className="p-5 sm:p-6 lg:p-7 rounded-[28px] liquid-glass">
              <div className="flex flex-col gap-5 sm:gap-6 h-full">
                <div className="space-y-2">
                  <div className="font-condiment text-[20px] text-neon sm:text-[28px] mix-blend-exclusion">
                    FAQ
                  </div>
                  <h3 className="font-grotesk text-[24px] text-cream sm:text-[34px] md:text-[40px] uppercase leading-[1.02]">
                    Common questions
                    <br />
                    about the orbit
                  </h3>
                </div>

                <FaqAccordion />
              </div>
            </div>

            <div className="p-5 sm:p-6 lg:p-7 rounded-[28px] liquid-glass">
              <div className="flex flex-col gap-6 h-full">
                <div className="space-y-2">
                  <div className="font-condiment text-[20px] text-neon sm:text-[28px] mix-blend-exclusion">
                    Contact
                  </div>
                  <h3 className="font-grotesk text-[24px] text-cream sm:text-[34px] md:text-[40px] uppercase leading-[1.02]">
                    Reach the
                    <br />
                    signal line
                  </h3>
                  <p className="max-w-[28rem] font-mono text-[12px] text-cream/80 sm:text-[13px] md:text-[14px] uppercase leading-[1.7]">
                    A more standard website-style contact layout, with direct
                    actions and a compact info block.
                  </p>
                </div>

                <div className="gap-3 grid sm:grid-cols-2">
                  <a
                    href="mailto:hello@orbis.nft"
                    className="bg-black/10 hover:bg-white/10 p-4 border border-white/10 rounded-[18px] transition"
                  >
                    <div className="font-grotesk text-[12px] text-neon uppercase tracking-[0.08em]">
                      Email
                    </div>
                    <div className="mt-2 font-mono text-[12px] text-cream sm:text-[13px] uppercase">
                      hello@orbis.nft
                    </div>
                  </a>
                  <a
                    href="https://nirmalkharal.tech/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black/10 hover:bg-white/10 p-4 border border-white/10 rounded-[18px] transition"
                  >
                    <div className="font-grotesk text-[12px] text-neon uppercase tracking-[0.08em]">
                      Website
                    </div>
                    <div className="mt-2 font-mono text-[12px] text-cream sm:text-[13px] uppercase">
                      nirmalkharal.tech
                    </div>
                  </a>
                </div>

                <div className="gap-3 grid font-mono text-[12px] text-cream sm:text-[13px] md:text-[14px] uppercase leading-[1.6]">
                  <a
                    href="#gallery"
                    className="flex justify-between items-center bg-black/10 hover:bg-white/10 p-4 border border-white/10 rounded-[18px] transition"
                  >
                    <span>Return to gallery</span>
                    <span className="font-grotesk text-[12px] tracking-[0.08em]">
                      VIEW
                    </span>
                  </a>
                  <div className="bg-black/10 p-4 border border-white/10 rounded-[18px]">
                    The social links route to the project website and the
                    section stays aligned with the rest of the page design.
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="flex justify-center items-center hover:bg-white/10 rounded-[1rem] w-14 h-14 transition liquid-glass"
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        <Icon className="w-5 h-5 text-cream" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="z-50 fixed inset-0 pointer-events-none texture-overlay" />
    </main>
  );
}
