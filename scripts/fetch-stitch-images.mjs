/**
 * Re-download hero & about screenshots from Stitch.
 * Usage: STITCH_API_KEY=your-key node scripts/fetch-stitch-images.mjs
 */
import { stitch } from '@google/stitch-sdk'
import { writeFileSync } from 'fs'

const PROJECT_ID = '7125084662626829364'
const HERO_SCREEN_ID = 'cf3467cd85bc4b6e978c12fcb73fce27'
const ABOUT_SCREEN_ID = 'e60b52ce72344091b723f6b3dbcd9855'

async function download(screen, path) {
  const url = await screen.getImage()
  const res = await fetch(url)
  writeFileSync(path, Buffer.from(await res.arrayBuffer()))
  console.log('Saved', path)
}

const project = stitch.project(PROJECT_ID)
const screens = await project.screens()
const hero = screens.find((s) => s.screenId === HERO_SCREEN_ID)
const about = screens.find((s) => s.screenId === ABOUT_SCREEN_ID)

if (!hero || !about) throw new Error('Expected Stitch screens not found')

await download(hero, 'public/images/hero-bg.png')
await download(about, 'public/images/about-bg.png')
