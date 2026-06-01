import { stitch } from '@google/stitch-sdk'
import { writeFileSync } from 'fs'

const PROJECT_ID = '7125084662626829364'
const CANDIDATES = [
  '26641a1be967414c9ffef99ef2e7c969',
  'fa8c439b898342b5a22671b6c35c0826',
  '1f1c5b73e3a746c78de2abced284724d',
  'cf3467cd85bc4b6e978c12fcb73fce27',
  '9d8179871cad494a9aa50c404d183adf',
]

const project = stitch.project(PROJECT_ID)
const screens = await project.screens()
console.log(
  'Screens:',
  screens.map((s) => ({ id: s.screenId, title: s.title })).slice(0, 30),
)

for (const id of CANDIDATES) {
  try {
    const screen = await project.getScreen(id)
    const htmlUrl = await screen.getHtml()
    const html = await (await fetch(htmlUrl)).text()
    writeFileSync(`temp-home-${id.slice(0, 8)}.html`, html)
    console.log('Wrote', id, screen.title, 'len', html.length)
  } catch (e) {
    console.log('Skip', id, e.message)
  }
}
