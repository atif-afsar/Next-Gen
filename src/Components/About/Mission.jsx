export default function Mission() {
  return (
    <section id="mission" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container-narrow">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <h2 className="about-heading text-3xl md:text-4xl md:sticky md:top-32">
              The Institutional Legacy
            </h2>
          </div>

          <div className="flex flex-col gap-10 md:w-2/3">
            <p className="about-body text-lg leading-relaxed">
              Founded on the principles of the Islamic Model School (IMS), NextGen Academy is not
              merely a replacement, but a refinement. For decades, IMS served as the bedrock of
              intellectual and spiritual growth for thousands. Today, we bridge that storied past
              with a futuristic vision, creating a &ldquo;Heritage of the Future.&rdquo;
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="about-card-muted border-l-2 border-[#ffdea3] p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7a5900]">
                  1988 — The Genesis
                </h4>
                <p className="about-body mt-2 text-sm leading-relaxed">
                  Established as a pioneer in holistic faith-based education in the metropolitan
                  core.
                </p>
              </div>
              <div className="about-card-muted border-l-2 border-[#ffdea3] p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7a5900]">
                  2024 — NextGen Evolution
                </h4>
                <p className="about-body mt-2 text-sm leading-relaxed">
                  A radical reimagining of the curriculum to meet the demands of a high-tech global
                  economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
