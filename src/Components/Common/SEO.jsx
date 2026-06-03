import { Helmet } from 'react-helmet-async'
import { PAGE_SEO, SITE_NAME, canonicalUrl, OG_IMAGE } from '../../lib/seo.js'

/**
 * @param {{ page: keyof typeof PAGE_SEO; noindex?: boolean; preload?: string }} props
 */
export default function SEO({ page, noindex = false, preload }) {
  const meta = PAGE_SEO[page]
  const url = canonicalUrl(meta.path)
  const title = meta.title
  const description = meta.description
  const keywords = meta.keywords

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content={`${SITE_NAME} — Islamic residential academy in Aligarh`} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Aligarh" />

      {preload && <link rel="preload" as="image" href={preload} fetchPriority="high" />}
    </Helmet>
  )
}
