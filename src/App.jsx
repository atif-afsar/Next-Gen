import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Common/Layout.jsx'
import PageLoader from './Components/Common/PageLoader.jsx'
import Home from './Pages/Home.jsx'
import { usePageLoader } from './hooks/usePageLoader.js'

const About = lazy(() => import('./Pages/About.jsx'))
const WhyNextGen = lazy(() => import('./Pages/WhyNextGen.jsx'))
const Programs = lazy(() => import('./Pages/Programs.jsx'))
const ResidentialProgram = lazy(() => import('./Pages/ResidentialProgram.jsx'))
const Admissions = lazy(() => import('./Pages/Admissions.jsx'))
const Gallery = lazy(() => import('./Pages/Gallery.jsx'))
const Contact = lazy(() => import('./Pages/Contact.jsx'))

function PageFallback() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-[#0a0a0a] text-sm text-white/50"
      aria-hidden
    >
      Loading…
    </div>
  )
}

function App() {
  const { isLoading, isExiting, onFillComplete } = usePageLoader()

  useEffect(() => {
    if (!isLoading) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev || ''
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <PageLoader exiting={isExiting} onFillComplete={onFillComplete} />}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <Suspense fallback={<PageFallback />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/why-nextgen"
              element={
                <Suspense fallback={<PageFallback />}>
                  <WhyNextGen />
                </Suspense>
              }
            />
            <Route
              path="/programs"
              element={
                <Suspense fallback={<PageFallback />}>
                  <Programs />
                </Suspense>
              }
            />
            <Route
              path="/residential-program"
              element={
                <Suspense fallback={<PageFallback />}>
                  <ResidentialProgram />
                </Suspense>
              }
            />
            <Route
              path="/admissions"
              element={
                <Suspense fallback={<PageFallback />}>
                  <Admissions />
                </Suspense>
              }
            />
            <Route
              path="/gallery"
              element={
                <Suspense fallback={<PageFallback />}>
                  <Gallery />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<PageFallback />}>
                  <Contact />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
