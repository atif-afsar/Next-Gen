import SEO from './SEO.jsx'
import StructuredData from './StructuredData.jsx'

/**
 * @param {{
 *   page: import('../../lib/seo.js').PageKey extends infer K ? K : never;
 *   preload?: string;
 *   breadcrumbs?: { name: string; path: string }[];
 *   includeFaq?: boolean;
 *   children: import('react').ReactNode;
 * }} props
 */
export default function PageShell({ page, preload, breadcrumbs, includeFaq, children }) {
  return (
    <>
      <SEO page={page} preload={preload} />
      <StructuredData breadcrumbs={breadcrumbs} includeFaq={includeFaq} />
      {children}
    </>
  )
}
