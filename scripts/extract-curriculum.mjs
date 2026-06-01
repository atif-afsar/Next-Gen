import { stitch } from '@google/stitch-sdk'
import { writeFileSync } from 'fs'

const project = stitch.project('7125084662626829364')
const screen = await project.getScreen('cf3467cd85bc4b6e978c12fcb73fce27')
const htmlUrl = await screen.getHtml()
const res = await fetch(htmlUrl)
const html = await res.text()
writeFileSync('temp-curriculum.html', html)

const section = html.slice(html.indexOf('The <span class="text-secondary">NextGen</span> Curriculum'))
const chunk = section.slice(0, 8000)
console.log(chunk.replace(/></g, '>\n<'))
