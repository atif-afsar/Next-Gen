import { writeFileSync } from 'fs'

const ABOUT_HERO_LIGHT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD4niNZ07iQiXQS6C2Z_OztHvJhsjA0DH_M6EPaDb19QYI3PAyniolNUxuTxz5wRsnBy8cS9Qf54vPMYZk8o5uDFgySeKDYisrAgxR4oytnrZlOI7DWZXBD2j8Pquxq795CuIzJRnoh2LNfffFp5p12ldE3Fwid5NXCT9_fENioO7qmdNZB540ZG0Fa3mUYauhx2BP8RCO-wWlEDQfrdQ1ufGgsU2r4J8SIvu7qeczBMnjbSW75alb2Lp-2-oHWpDTeGOzlv7A2Szo'

const res = await fetch(ABOUT_HERO_LIGHT_URL)
writeFileSync('public/images/about-hero-light.jpg', Buffer.from(await res.arrayBuffer()))
console.log('Saved about-hero-light.jpg')
