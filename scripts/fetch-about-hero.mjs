import { stitch } from '@google/stitch-sdk'
import { writeFileSync } from 'fs'

const ABOUT_SCREEN_ID = '9d8179871cad494a9aa50c404d183adf'

const project = stitch.project('7125084662626829364')
const screen = await project.getScreen(ABOUT_SCREEN_ID)

const htmlUrl = await screen.getHtml()
const res = await fetch(htmlUrl)
const html = await res.text()
writeFileSync('temp-about.html', html)

const imgUrl = await screen.getImage()
const imgRes = await fetch(imgUrl)
writeFileSync('public/images/about-hero-bg.jpg', Buffer.from(await imgRes.arrayBuffer()))
console.log('Saved about-hero-bg.jpg')

// extract hero section snippet
const heroStart = html.indexOf('EMPOWERING')
if (heroStart > -1) console.log(html.slice(heroStart - 500, heroStart + 2500))
