import { motion, RevealStagger, RevealItem } from './motion.jsx'

const steps = [
  {
    num: '01',
    title: 'Foundation',
    description:
      'Forging an unbreakable spiritual core. Our students begin by understanding their identity and purpose through the lens of faith.',
  },
  {
    num: '02',
    title: 'The Bridge',
    description:
      'Connecting ancient wisdom with modern research. We integrate theology with advanced mathematics and emerging technologies.',
  },
  {
    num: '03',
    title: 'The Pinnacle',
    description:
      'Actualizing leadership. Students apply their skills to real-world global challenges, leading with ethical clarity and technical mastery.',
  },
]

export default function Transformation() {
  return (
    <section className="border-y border-[#d4c4ac]/30 bg-white py-16 sm:py-20 md:py-24">
      <div className="container-narrow">
        <RevealStagger className="grid grid-cols-1 gap-12 sm:gap-10 md:grid-cols-3 md:gap-8">
          {steps.map(({ num, title, description }) => (
            <RevealItem key={num} as="article" className="group relative">
              <motion.div whileHover={{ y: -4 }}>
                <span
                  className="pointer-events-none absolute -left-2 -top-8 font-serif text-[4rem] leading-none text-[#7a5900]/10 transition group-hover:text-[#7a5900]/20 sm:-top-10 sm:text-[5rem] md:text-[6rem]"
                  aria-hidden
                >
                  {num}
                </span>
                <h3 className="relative mt-6 font-serif text-xl text-[#1b1c1c] sm:mt-8 sm:text-2xl md:text-3xl">
                  {title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-[#504533] sm:mt-4 sm:text-base">
                  {description}
                </p>
                <div className="mt-5 h-1 w-0 bg-[#7a5900] transition-all duration-700 group-hover:w-full sm:mt-6" />
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
