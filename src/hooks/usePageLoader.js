import { useCallback, useState } from 'react'

/** Bar fill — shorter when the document is already ready (cached reload) */
export const LOADER_FILL_MS = 720
export const LOADER_FILL_FAST_MS = 380
export const LOADER_EXIT_MS = 160

export function getLoaderFillMs() {
  return document.readyState === 'complete' ? LOADER_FILL_FAST_MS : LOADER_FILL_MS
}

export function usePageLoader() {
  const [phase, setPhase] = useState('loading')

  const onFillComplete = useCallback(() => {
    setPhase((current) => {
      if (current !== 'loading') return current
      window.setTimeout(() => setPhase('done'), LOADER_EXIT_MS)
      return 'exiting'
    })
  }, [])

  return {
    isLoading: phase !== 'done',
    isExiting: phase === 'exiting',
    onFillComplete,
  }
}
