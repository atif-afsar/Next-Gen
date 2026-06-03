import '../Components/Gallery/gallery-page.css'
import PageShell from '../Components/Common/PageShell.jsx'
import OptimizedImage from '../Components/Common/OptimizedImage.jsx'
import {
  ABOUT_HERO_CAMPUS,
  CONTACT_CAMPUS,
  HOME_CURRICULUM_STEM,
  HOME_CURRICULUM_PHILOSOPHY,
  ABOUT_PILLAR_LEADERSHIP,
} from '../lib/images.js'
import { ADDRESS } from '../lib/seo.js'
import { Reveal } from '../Components/Home/motion.jsx'

const GALLERY_ITEMS = [
  {
    src: ABOUT_HERO_CAMPUS,
    alt: 'NextGen Academy campus building at Green Fort City, Aligarh',
    caption: 'Campus — Green Fort City, Near AMU Fort',
  },
  {
    src: CONTACT_CAMPUS,
    alt: 'Aerial view of NextGen Academy residential campus in Aligarh',
    caption: 'Residential environment',
  },
  {
    src: HOME_CURRICULUM_STEM,
    alt: 'Students engaged in STEM and robotics at NextGen Academy Aligarh',
    caption: 'STEM & innovation',
  },
  {
    src: HOME_CURRICULUM_PHILOSOPHY,
    alt: 'Academic discussion and leadership learning at NextGen Academy',
    caption: 'Academic leadership',
  },
  {
    src: ABOUT_PILLAR_LEADERSHIP,
    alt: 'Leadership and character development at NextGen Academy Aligarh',
    caption: 'Leadership & character',
  },
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
      <main className="page-gallery bg-[#fbf9f8] pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32">
        <div className="container-narrow px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7a5900]">
              Campus life
            </p>
            <h1 className="mt-3 font-serif text-3xl text-[#1b1c1c] sm:text-4xl md:text-5xl">
              NextGen Academy Gallery
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#504533] sm:text-lg">
              A glimpse of faith with future education at NextGen Academy, {ADDRESS.formatted} —
              where Iman meets academic excellence in a premium Islamic residential setting.
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
