import {
  organizationSchema,
  schoolSchema,
  localBusinessSchema,
  webSiteSchema,
  faqSchema,
  breadcrumbSchema,
} from '../../lib/schema.js'

/**
 * @param {{ breadcrumbs?: { name: string; path: string }[]; includeFaq?: boolean }} props
 */
export default function StructuredData({ breadcrumbs, includeFaq = false }) {
  const graphs = [
    webSiteSchema(),
    organizationSchema(),
    schoolSchema(),
    localBusinessSchema(),
  ]

  if (breadcrumbs?.length) {
    graphs.push(breadcrumbSchema(breadcrumbs))
  }
  if (includeFaq) {
    graphs.push(faqSchema())
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  )
}
