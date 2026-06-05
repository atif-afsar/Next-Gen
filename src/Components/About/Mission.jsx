import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function Mission() {
  return (
    <section id="mission" className="scroll-mt-20 bg-white py-16 sm:scroll-mt-24 sm:py-20 md:py-28">
      <div className="container-narrow">
        <div className="flex flex-col gap-10 sm:gap-12 md:flex-row md:gap-16">
          <Reveal className="md:w-1/3">
            <h2 className="about-heading text-2xl sm:text-3xl md:sticky md:top-32 md:text-4xl">
              The Institutional Legacy
            </h2>
          </Reveal>

          <div className="flex flex-col gap-8 md:w-2/3 md:gap-10">
            <Reveal delay={0.1}>
              <p className="about-body text-base leading-relaxed sm:text-lg">
                Founded on the principles of Islamic Mission School (IMS) in Aligarh, NextGen Academy
                is the evolution families trust — refining decades of faith-based education into a
                Hifz plus academic program from Grade 5 through graduation. At Near Fort, Fort Enclave Colony, we
                nurture the Hifz-to-leadership journey with Iman, discipline, and innovation.
              </p>
            </Reveal>

            <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <RevealItem>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="about-card-muted h-full border-l-2 border-[#ffdea3] p-5 sm:p-6"
                >
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7a5900]">
                    1988 — The Genesis
                  </h4>
                  <p className="about-body mt-2 text-sm leading-relaxed">
                    Established as a pioneer in holistic faith-based education in the metropolitan
                    core.
                  </p>
                </motion.div>
              </RevealItem>
              <RevealItem>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="about-card-muted h-full border-l-2 border-[#ffdea3] p-5 sm:p-6"
                >
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7a5900]">
                    2024 — NextGen Evolution
                  </h4>
                  <p className="about-body mt-2 text-sm leading-relaxed">
                    A radical reimagining of the curriculum to meet the demands of a high-tech global
                    economy.
                  </p>
                </motion.div>
              </RevealItem>
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  )
}
