import '../Components/Gallery/gallery-page.css'
import PageShell from '../Components/Common/PageShell.jsx'
import OptimizedImage from '../Components/Common/OptimizedImage.jsx'
import { ABOUT_HERO_CAMPUS, IMS_GLIMPSES } from '../lib/images.js'
import { ADDRESS } from '../lib/seo.js'
import { Reveal } from '../Components/Home/motion.jsx'

const GLIMPSE_CAPTIONS = [
  'Science exhibition — student projects',
  'Hands-on learning at IMS',
  'Classroom engagement',
  'Student presentations',
  'Campus activities',
  'Morning assembly',
  'Collaborative learning',
  'Co-curricular events',
  'Morning assembly at the campus ground',
  'School community gathering',
  'Academic events',
  'Campus life at IMS',
]

const GALLERY_ITEMS = [
  {
    src: ABOUT_HERO_CAMPUS,
    alt: 'NextGen Academy campus building at Near AMU Fort, Fort Enclave Colony, Aligarh',
    caption: 'Campus — Near AMU Fort, Fort Enclave Colony',
  },
  ...IMS_GLIMPSES.map((item, index) => ({
    ...item,
    caption: GLIMPSE_CAPTIONS[index],
  })),
]

export default function Gallery() {
  return (
    <PageShell
      page="gallery"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
      ]}
    >
      <main className="page-gallery bg-[#faf3e3] pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32">
        <div className="container-narrow px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7a5900]">
              Glimpses of IMS
            </p>
            <h1 className="mt-3 font-serif text-3xl text-[#1b1c1c] sm:text-4xl md:text-5xl">
              NextGen Academy Gallery
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#504533] sm:text-lg">
              Life at Islamic Mission School — the parent organization of NextGen Academy,
              {' '}{ADDRESS.formatted} — where Iman meets academic excellence.
            </p>
          </Reveal>

          <ul className="mt-10 grid list-none grid-cols-1 gap-5 p-0 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {GALLERY_ITEMS.map(({ src, alt, caption }) => (
              <li key={src}>
                <figure className="gallery-card group overflow-hidden rounded-xl border border-[#d4c4ac]/30 bg-white shadow-sm">
                  <OptimizedImage
                    src={src}
                    alt={alt}
                    className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    aspectRatio="4/3"
                    width={640}
                    height={480}
                  />
                  <figcaption className="px-4 py-3 text-sm font-medium text-[#504533]">
                    {caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </PageShell>
  )
}
