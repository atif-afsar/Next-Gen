import { useState } from 'react'

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
    <section className="py-16 md:py-24">
      <div className="container-narrow text-center">
        <h2 className="font-serif text-3xl text-[#1b1c1c] md:text-4xl">
          Virtual Visit &amp; Consultations
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#504533]">
          Select a preferred window for a 1-on-1 virtual tour or a leadership screening with our
          admissions panel.
        </p>

        <div className="contact-card mt-12 overflow-hidden text-left md:flex">
          <div className="flex-1 border-b border-[#d4c4ac]/20 p-6 md:border-b-0 md:border-r md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-xl text-[#1b1c1c]">November 2024</h3>
              <div className="flex gap-1">
                <button
                  type="button"
                  className="rounded-full p-2 hover:bg-[#f5f3f3]"
                  aria-label="Previous month"
                >
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                <button
                  type="button"
                  className="rounded-full p-2 hover:bg-[#f5f3f3]"
                  aria-label="Next month"
                >
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#504533]">
              {DAYS.map((d, i) => (
                <span key={`${d}-${i}`}>{d}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {CALENDAR_DAYS.map(({ day, muted, highlight }) => {
                const isSelected = !muted && day === selectedDay
                return (
                  <button
                    key={`${day}-${muted ? 'm' : 'a'}`}
                    type="button"
                    disabled={muted}
                    onClick={() => !muted && setSelectedDay(day)}
                    className={`rounded p-2 text-sm transition ${
                      muted
                        ? 'cursor-default text-[#c8c6c5]'
                        : isSelected
                          ? 'bg-[#7a5900] font-bold text-white shadow-md'
                          : highlight === 'peach'
                            ? 'bg-[#ffdea3]/40 font-bold text-[#7a5900]'
                            : 'text-[#1b1c1c] hover:bg-[#f5f3f3]'
                    }`}
                  >
                    {day}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="w-full bg-[#fbf9f8] p-6 md:w-80 md:p-8">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#504533]">
              Available Slots
            </h4>
            <div className="mt-4 space-y-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`w-full rounded border p-3 text-center text-sm transition ${
                    selectedSlot === slot
                      ? 'border-[#7a5900] bg-[#7a5900] text-white'
                      : 'border-[#d4c4ac] text-[#1b1c1c] hover:border-[#7a5900] hover:bg-[#7a5900] hover:text-white'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <p className="mt-6 text-xs italic text-[#504533]">
              All times are in GMT+1. A director will confirm your selected window.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
