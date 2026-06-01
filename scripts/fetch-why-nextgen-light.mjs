import { stitch } from '@google/stitch-sdk'
import { writeFileSync } from 'fs'

const LIGHT_SCREEN_ID = 'e3ba709208e3499489f4fb7390988a67'
const project = stitch.project('7125084662626829364')
const screen = await project.getScreen(LIGHT_SCREEN_ID)

const htmlUrl = await screen.getHtml()
const html = await (await fetch(htmlUrl)).text()
writeFileSync('temp-why-light.html', html)

const imgUrls = [...html.matchAll(/src="(https:\/\/lh3\.googleusercontent\.com[^"]+)"/g)].map((m) => m[1])
const unique = [...new Set(imgUrls)]
console.log('images:', unique.length)
unique.forEach((u, i) => console.log(i, u))
