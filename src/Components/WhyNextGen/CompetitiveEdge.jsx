import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const rows = [
  {
    feature: 'Curriculum Structure',
    traditional: 'Siloed, standardized testing focused.',
    nextgen: 'Interdisciplinary, project-based mastery.',
  },
  {
    feature: 'Character Development',
    traditional: 'Elective or secular-based ethics.',
    nextgen: 'Faith-integrated character architecture.',
  },
  {
    feature: 'Technological Access',
    traditional: 'Consumer-level computer labs.',
    nextgen: 'Enterprise-grade AI & Bio-tech laboratories.',
  },
  {
    feature: 'Global Network',
    traditional: 'Regional alumni base.',
    nextgen: 'Elite international partnerships & mentorships.',
  },
]

function ComparisonCard({ feature, traditional, nextgen }) {
  return (
    <article className="why-card rounded-lg p-5 sm:p-6">
      <h3 className="font-medium text-[#1b1c1c]">{feature}</h3>
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#504533]">
            Traditional Schools
          </p>
          <p className="mt-1 text-sm text-[#504533]">{traditional}</p>
        </div>
        <div className="why-table-highlight rounded-md p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#7a5900]">
            NextGen Academy
          </p>
          <p className="mt-1 text-sm font-semibold italic text-[#7a5900]">{nextgen}</p>
        </div>
      </div>
    </article>
  )
}

export default function CompetitiveEdge() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="container-narrow">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">
            The NextGen Competitive Edge
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#504533] sm:mt-4 sm:text-base">
            See how we redefine the educational paradigm compared to traditional institutions.
          </p>
        </Reveal>

        {/* Mobile / tablet cards */}
        <RevealStagger className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:hidden">
          {rows.map((row) => (
            <RevealItem key={row.feature}>
              <motion.div whileHover={{ y: -3 }}>
                <ComparisonCard {...row} />
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Desktop table */}
        <motion.div
          className="mt-14 hidden overflow-x-auto md:block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-[#827560]">
                <th className="px-4 py-5 text-left font-serif text-lg text-[#1b1c1c] sm:py-6">
                  Experience Feature
                </th>
                <th className="px-4 py-5 text-left text-xs font-semibold uppercase tracking-wider text-[#504533] sm:py-6">
                  Traditional Schools
                </th>
                <th className="why-table-col px-4 py-5 text-left text-xs font-semibold uppercase tracking-widest text-[#7a5900] sm:py-6">
                  NextGen Academy
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4c4ac]/40">
              {rows.map(({ feature, traditional, nextgen }) => (
                <motion.tr
                  key={feature}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <td className="px-4 py-6 font-medium text-[#1b1c1c] sm:py-8">{feature}</td>
                  <td className="px-4 py-6 text-[#504533] sm:py-8">{traditional}</td>
                  <td className="why-table-highlight px-4 py-6 font-semibold italic text-[#7a5900] sm:py-8">
                    {nextgen}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
