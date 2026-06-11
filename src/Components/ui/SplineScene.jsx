import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

function SplineLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="spline-loader" aria-hidden />
      <span className="sr-only">Loading 3D scene</span>
    </div>
  )
}

/**
 * @param {{ scene: string, className?: string, onLoad?: (app: unknown) => void, renderOnDemand?: boolean }} props
 */
export function SplineScene({ scene, className = '', onLoad, renderOnDemand = true }) {
  return (
    <Suspense fallback={<SplineLoader />}>
      <Spline
        scene={scene}
        className={className}
        renderOnDemand={renderOnDemand}
        onLoad={(app) => onLoad?.(app)}
      />
    </Suspense>
  )
}
