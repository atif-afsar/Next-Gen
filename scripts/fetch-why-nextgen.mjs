import { stitch } from '@google/stitch-sdk'
import { writeFileSync } from 'fs'

const SCREEN_ID = '1f1c5b73e3a746c78de2abced284724d'
const project = stitch.project('7125084662626829364')
const screen = await project.getScreen(SCREEN_ID)

const htmlUrl = await screen.getHtml()
const html = await (await fetch(htmlUrl)).text()
writeFileSync('temp-why-nextgen.html', html)

const imgUrls = [...html.matchAll(/src="(https:\/\/lh3\.googleusercontent\.com[^"]+)"/g)].map((m) => m[1])
const unique = [...new Set(imgUrls)]
console.log('images:', unique.length)
unique.forEach((u, i) => console.log(i, u.slice(0, 90) + '...'))
