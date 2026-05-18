import { ChevronRight, Github, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { label: "Mail", icon: Mail, href: "mailto:hello@orbis.nft" },
  { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { label: "Github", icon: Github, href: "https://github.com" },
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

export default function App() {
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
          <header className="flex justify-between items-start gap-4">
            <div className="font-grotesk text-[16px] text-cream uppercase tracking-[0.08em]">
              Orbis.Nft
            </div>
            <nav className="hidden lg:block px-[52px] py-[24px] rounded-[28px] liquid-glass">
              <div className="flex items-center gap-10">
                {[
                  { label: "Homepage", href: "#homepage" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Buy NFT", href: "#buy-nft" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
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
            <div className="hidden lg:block w-[56px]" />
          </header>

          <div className="relative flex flex-1 items-center">
            <div className="lg:ml-32 w-full lg:max-w-[780px]">
              <div className="relative max-w-[780px]">
                <h1 className="max-w-[780px] font-grotesk text-[40px] text-cream sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] lg:leading-[1]">
                  Beyond earth
                  <br />
                  and ( its ) familiar boundaries
                </h1>
                <div className="top-12 sm:top-16 md:top-20 lg:top-24 right-0 absolute opacity-90 text-[24px] sm:text-[36px] md:text-[48px] -rotate-1 pointer-events-none">
                  <SectionLabel>Nft collection</SectionLabel>
                </div>
              </div>

              <div className="lg:hidden flex items-center gap-4 mt-10">
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

      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
        />
        <div className="absolute inset-0 bg-[#010828]/25" />
        <div className="relative flex flex-col justify-between gap-16 mx-auto px-5 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24 max-w-[1831px] min-h-screen">
          <div className="flex lg:flex-row flex-col justify-between items-start lg:items-end gap-10">
            <div className="relative max-w-[680px]">
              <h2 className="font-grotesk text-[32px] text-cream sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase leading-[1.05] lg:leading-[1]">
                Hello!
                <br />
                I&apos;m orbis
              </h2>
              <div className="right-0 bottom-0 absolute text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] rotate-[-5deg] translate-y-3 pointer-events-none">
                <SectionLabel>Orbis</SectionLabel>
              </div>
            </div>
            <p className="max-w-[266px] font-mono text-[14px] text-cream sm:text-[15px] lg:text-[16px] uppercase leading-[1.6]">
              A digital object fixed beyond time and place. An exploration of
              distance, form, and silence in space
            </p>
          </div>

          <div className="gap-10 lg:gap-16 grid lg:grid-cols-2">
            <div className="gap-6 grid opacity-10">
              {[0, 1].map((block) => (
                <div key={block} className="gap-6 grid">
                  {[0, 1].map((line) => (
                    <p
                      key={line}
                      className="max-w-[390px] font-mono text-[14px] text-cream uppercase leading-[1.6]"
                    >
                      A digital object fixed beyond time and place. An
                      exploration of distance, form, and silence in space
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <div className="gap-6 grid opacity-10">
                {[0, 1].map((block) => (
                  <div key={block} className="gap-6 grid">
                    {[0, 1].map((line) => (
                      <p
                        key={line}
                        className="max-w-[390px] font-mono text-[14px] text-cream uppercase leading-[1.6]"
                      >
                        A digital object fixed beyond time and place. An
                        exploration of distance, form, and silence in space
                      </p>
                    ))}
                  </div>
                ))}
              </div>
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

        <div className="hidden bottom-[12%] sm:bottom-[14%] md:bottom-[16%] xl:bottom-[20%] left-[8%] z-10 absolute lg:flex flex-col bg-transparent border border-white/10 rounded-[0.5rem] overflow-hidden pointer-events-none">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={`pointer-events-auto flex items-center justify-center border-white/10 bg-transparent transition hover:bg-white/10 ${
                  index < socialLinks.length - 1 ? "border-b" : ""
                } w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[14vw] sm:h-[14.375rem] md:h-[10.78125rem] lg:h-[16.77rem]`}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon className="w-5 h-5 text-cream" />

                <div
                  id="faq"
                  className="top-5 sm:top-8 lg:top-[10%] right-5 sm:right-8 lg:right-[8%] z-10 absolute p-5 sm:p-6 rounded-[28px] w-[min(92vw,42rem)] liquid-glass"
                >
                  <div className="flex flex-col gap-5 sm:gap-6">
                    <div>
                      <div className="mb-2 font-condiment text-[22px] text-neon sm:text-[30px] mix-blend-exclusion">
                        FAQ
                      </div>
                      <h3 className="font-grotesk text-[24px] text-cream sm:text-[36px] md:text-[42px] uppercase leading-[1.02]">
                        Common questions
                        <br />
                        about the orbit
                      </h3>
                    </div>

                    <div className="gap-3 grid font-mono text-[12px] text-cream sm:text-[13px] md:text-[14px] uppercase leading-[1.6]">
                      <p className="bg-black/10 p-4 border border-white/10 rounded-[18px]">
                        How does minting work? Mint access follows the signal
                        shown in this collection.
                      </p>
                      <p className="bg-black/10 p-4 border border-white/10 rounded-[18px]">
                        What do I get? A single Orbis.Nft object tied to the
                        visual language of the drop.
                      </p>
                      <p className="bg-black/10 p-4 border border-white/10 rounded-[18px]">
                        Can I reach the team? Use the contact links in the
                        header or the signal below.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  id="contact"
                  className="bottom-5 sm:bottom-8 lg:bottom-[8%] left-5 sm:left-8 lg:left-[8%] z-10 absolute p-4 sm:p-5 rounded-[24px] w-[min(92vw,32rem)] liquid-glass"
                >
                  <div className="flex flex-col gap-3">
                    <div className="font-condiment text-[20px] text-neon sm:text-[28px] mix-blend-exclusion">
                      Contact
                    </div>
                    <p className="max-w-[24rem] font-mono text-[12px] text-cream sm:text-[13px] md:text-[14px] uppercase leading-[1.6]">
                      Start with the mail icon, or connect through the social
                      links already placed on the page.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href="mailto:hello@orbis.nft"
                        className="bg-white/5 hover:bg-white/10 px-4 py-2 border border-white/15 rounded-full font-grotesk text-[12px] text-cream uppercase tracking-[0.08em] transition"
                      >
                        Mail the signal
                      </a>
                      <a
                        href="#gallery"
                        className="bg-white/5 hover:bg-white/10 px-4 py-2 border border-white/15 rounded-full font-grotesk text-[12px] text-cream uppercase tracking-[0.08em] transition"
                      >
                        Return to gallery
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="z-10 absolute inset-0 mx-auto px-5 sm:px-8 lg:px-14 max-w-[1831px]">
          <div className="relative h-full min-h-[420px] sm:min-h-[520px] md:min-h-[620px] lg:min-h-[760px]">
            <div className="top-[10%] right-0 absolute lg:pr-[20%] lg:pl-[15%] max-w-[690px] text-right">
              <div className="top-0 left-0 absolute text-[17px] sm:text-[32px] md:text-[48px] lg:text-[68px] -translate-x-4 -translate-y-[105%]">
                <SectionLabel>Go beyond</SectionLabel>
              </div>
              <h2 className="font-grotesk text-[16px] text-cream sm:text-[28px] md:text-[42px] lg:text-[60px] uppercase leading-[1.02]">
                <span className="block mb-4 sm:mb-6 lg:mb-12">JOIN US.</span>
                REVEAL WHAT&apos;S HIDDEN.
                <br />
                DEFINE WHAT&apos;S NEXT.
                <br />
                FOLLOW THE SIGNAL.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="z-50 fixed inset-0 pointer-events-none texture-overlay" />
    </main>
  );
}
