/**
 * Performance-focused image wrapper (Vite/React equivalent of next/image patterns).
 * @param {import('react').ImgHTMLAttributes<HTMLImageElement> & {
 *   priority?: boolean;
 *   aspectRatio?: string;
 * }} props
 */
export default function OptimizedImage({
  priority = false,
  aspectRatio,
  alt,
  className = '',
  width,
  height,
  loading,
  decoding,
  fetchPriority,
  ...rest
}) {
  const wrapperStyle = aspectRatio ? { aspectRatio } : undefined

  const img = (
    <img
      alt={alt ?? ''}
      width={width}
      height={height}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding ?? 'async'}
      fetchPriority={fetchPriority ?? (priority ? 'high' : undefined)}
      className={className}
      {...rest}
    />
  )

  if (!aspectRatio) return img

  return (
    <div className="relative overflow-hidden" style={wrapperStyle}>
      {img}
    </div>
  )
}
