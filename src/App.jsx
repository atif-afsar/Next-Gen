import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Common/Layout.jsx'
import PageLoader from './Components/Common/PageLoader.jsx'
import { usePageLoader } from './hooks/usePageLoader.js'

const Home = lazy(() => import('./Pages/Home.jsx'))
const About = lazy(() => import('./Pages/About.jsx'))
const WhyNextGen = lazy(() => import('./Pages/WhyNextGen.jsx'))
const Programs = lazy(() => import('./Pages/Programs.jsx'))
const ResidentialProgram = lazy(() => import('./Pages/ResidentialProgram.jsx'))
const Admissions = lazy(() => import('./Pages/Admissions.jsx'))
const Gallery = lazy(() => import('./Pages/Gallery.jsx'))
const Contact = lazy(() => import('./Pages/Contact.jsx'))

function App() {
  const { isLoading, isExiting, onFillComplete } = usePageLoader()

  useEffect(() => {
    if (!isLoading) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <PageLoader exiting={isExiting} onFillComplete={onFillComplete} />}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={null}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={null}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/why-nextgen"
              element={
                <Suspense fallback={null}>
                  <WhyNextGen />
                </Suspense>
              }
            />
            <Route
              path="/programs"
              element={
                <Suspense fallback={null}>
                  <Programs />
                </Suspense>
              }
            />
            <Route
              path="/residential-program"
              element={
                <Suspense fallback={null}>
                  <ResidentialProgram />
                </Suspense>
              }
            />
            <Route
              path="/admissions"
              element={
                <Suspense fallback={null}>
                  <Admissions />
                </Suspense>
              }
            />
            <Route
              path="/gallery"
              element={
                <Suspense fallback={null}>
                  <Gallery />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={null}>
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
