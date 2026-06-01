import { stitch } from '@google/stitch-sdk'
import { writeFileSync } from 'fs'

const project = stitch.project('7125084662626829364')
const screen = await project.getScreen('cf3467cd85bc4b6e978c12fcb73fce27')
const htmlUrl = await screen.getHtml()
const res = await fetch(htmlUrl)
const html = await res.text()
writeFileSync('temp-why-nextgen.html', html)

const urls = [...html.matchAll(/url\(['"]?(https?:[^'")]+)['"]?\)/g)].map((m) => m[1])
const unique = [...new Set(urls)]
unique.forEach((u) => console.log(u))
console.log('--- total', unique.length)
