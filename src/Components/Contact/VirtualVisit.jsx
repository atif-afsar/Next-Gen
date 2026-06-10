import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Reveal, viewport, EASE_OUT } from './motion.jsx'

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const CALENDAR_DAYS = [
  { day: 28, muted: true },
  { day: 29, muted: true },
  { day: 30, muted: true },
  { day: 31, muted: true },
  { day: 1, highlight: 'peach' },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10 },
]

const TIME_SLOTS = [
  '09:00 AM - 10:30 AM',
  '11:00 AM - 12:30 PM',
  '02:00 PM - 03:30 PM',
  '04:00 PM - 05:30 PM',
]

export default function VirtualVisit() {
  const [selectedDay, setSelectedDay] = useState(6)
  const [selectedSlot, setSelectedSlot] = useState(null)

  return (
    <section id="visit" className="scroll-mt-24 py-14 sm:py-16 md:py-24">
      <div className="container-narrow px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
            Schedule a campus visit
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#504533] sm:mt-4 sm:text-base">
            Pick a preferred time for an in-person or virtual tour of NextGen Academy, Aligarh.
          </p>
        </Reveal>

        <motion.div
          className="contact-card mt-8 overflow-hidden text-left sm:mt-12 md:flex"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          <div className="flex-1 border-b border-[#d4c4ac]/20 p-5 sm:p-6 md:border-b-0 md:border-r md:p-8">
            <div className="mb-5 flex items-center justify-between gap-2 sm:mb-6">
              <h3 className="font-serif text-lg text-[#1b1c1c] sm:text-xl">November 2024</h3>
              <div className="flex gap-1">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full p-2 hover:bg-[#f3ecd9]"
                  aria-label="Previous month"
                >
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full p-2 hover:bg-[#f3ecd9]"
                  aria-label="Next month"
                >
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </motion.button>
              </div>
            </div>
            <div className="mb-2 grid grid-cols-7 gap-0.5 text-center text-[10px] font-semibold text-[#504533] sm:gap-1 sm:text-xs">
              {DAYS.map((d, i) => (
                <span key={`${d}-${i}`}>{d}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
              {CALENDAR_DAYS.map(({ day, muted, highlight }) => {
                const isSelected = !muted && day === selectedDay
                return (
                  <motion.button
                    key={`${day}-${muted ? 'm' : 'a'}`}
                    type="button"
                    disabled={muted}
                    onClick={() => !muted && setSelectedDay(day)}
                    whileHover={!muted && !isSelected ? { scale: 1.05 } : undefined}
                    whileTap={!muted ? { scale: 0.95 } : undefined}
                    layout
                    className={`rounded p-1.5 text-xs transition sm:p-2 sm:text-sm ${
                      muted
                        ? 'cursor-default text-[#c8c6c5]'
                        : isSelected
                          ? 'bg-[#7a5900] font-bold text-white shadow-md'
                          : highlight === 'peach'
                            ? 'bg-[#ffdea3]/40 font-bold text-[#7a5900]'
                            : 'text-[#1b1c1c] hover:bg-[#f3ecd9]'
                    }`}
                  >
                    {day}
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="w-full bg-[#faf3e3] p-5 sm:p-6 md:w-80 md:shrink-0 md:p-8">
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-[#504533] sm:text-xs">
              Available Slots
            </h4>
            <div className="mt-3 space-y-2 sm:mt-4">
              {TIME_SLOTS.map((slot) => (
                <motion.button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full rounded border p-2.5 text-center text-xs transition sm:p-3 sm:text-sm ${
                    selectedSlot === slot
                      ? 'border-[#7a5900] bg-[#7a5900] text-white'
                      : 'border-[#d4c4ac] text-[#1b1c1c] hover:border-[#7a5900] hover:bg-[#7a5900] hover:text-white'
                  }`}
                >
                  {slot}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {selectedSlot && (
                <motion.p
                  key={selectedSlot}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4 text-xs font-medium text-[#7a5900] sm:mt-6"
                >
                  Selected: {selectedSlot}
                </motion.p>
              )}
            </AnimatePresence>
            <p className="mt-4 text-[10px] italic text-[#504533] sm:mt-6 sm:text-xs">
              All times are in GMT+1. A director will confirm your selected window.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
