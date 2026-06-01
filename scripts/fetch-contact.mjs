import { stitch } from '@google/stitch-sdk'
import { writeFileSync } from 'fs'

const LIGHT_ID = 'f92291796f264aeba0e1ffeab8170b26'
const DARK_ID = '26641a1be967414c9ffef99ef2e7c969'

const project = stitch.project('7125084662626829364')

for (const id of [LIGHT_ID, DARK_ID]) {
  const screen = await project.getScreen(id)
  const title = screen.data?.title
  console.log('---', id, title)
}

const screen = await project.getScreen(LIGHT_ID)
const html = await (await fetch(await screen.getHtml())).text()
writeFileSync('temp-contact.html', html)

const imgs = [...new Set([...html.matchAll(/src="(https:\/\/lh3\.googleusercontent\.com[^"]+)"/g)].map((m) => m[1]))]
console.log('images', imgs.length)
imgs.forEach((u, i) => console.log(i, u.slice(0, 100)))
