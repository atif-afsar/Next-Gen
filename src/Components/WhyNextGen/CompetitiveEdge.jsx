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

export default function CompetitiveEdge() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-narrow">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-[#1b1c1c] md:text-5xl">The NextGen Competitive Edge</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#504533]">
            See how we redefine the educational paradigm compared to traditional institutions.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-[#827560]">
                <th className="px-4 py-6 text-left font-serif text-lg text-[#1b1c1c]">
                  Experience Feature
                </th>
                <th className="px-4 py-6 text-left text-xs font-semibold uppercase tracking-wider text-[#504533]">
                  Traditional Schools
                </th>
                <th className="why-table-col px-4 py-6 text-left text-xs font-semibold uppercase tracking-widest text-[#7a5900]">
                  NextGen Academy
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4c4ac]/40">
              {rows.map(({ feature, traditional, nextgen }) => (
                <tr key={feature}>
                  <td className="px-4 py-8 font-medium text-[#1b1c1c]">{feature}</td>
                  <td className="px-4 py-8 text-[#504533]">{traditional}</td>
                  <td className="why-table-highlight px-4 py-8 font-semibold italic text-[#7a5900]">
                    {nextgen}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
