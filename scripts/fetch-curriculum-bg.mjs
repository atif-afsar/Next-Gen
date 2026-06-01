import { writeFileSync } from 'fs'

const robotics =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDaHFpTlGK64-Fbvu0_GYpnthHMHSMz_z24VHVGOebmST1Bsx0-NmAO6pI8OBSQRILN6Wvnwlv9CTZiQ3pcMCSk-f_1VGVRVE0CMQrA85GDN2avz7e9RATNLtBCH2wktcokvlsBdACi6qgK6gh87ZPdwnTbXfH0gmywACVGd7s9GYJYMPizYs5gAC6F03Pr7kimgpODEaSpaUwVz2QO5JQNY3NrudowRCHZMChlnVBXYx5tJPvNJIY5e73SjNUL6TECOCKJNnz1i_A'
const financial =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1BG0RoDfFUC0qdhFa4FAX1EO4N-EvSCR5jtEcG9spfSP_BBbSHMZuP7iVC9eNNRIuqM8rv1VC9jvXby4SDaMpJr377zwlarH1G95-Rj56cqmEtoV6n73gAt7Zk7H9mAEfUOVJHuuix37TEK3Ai9JVp8KVTVlLilROqxvBIqACAGmxaMbgzlZxYgsQ0w9Oml_Phr7pZ0r2WUoK0WorbcP3QUKXp3eJZ9h2IBbr518wE_mcUBR-EV0_MPL5peSllpfakLRqZQo5Zc'

async function download(url, path) {
  const res = await fetch(url)
  writeFileSync(path, Buffer.from(await res.arrayBuffer()))
  console.log('Saved', path)
}

await download(robotics, 'public/images/curriculum-robotics.jpg')
await download(financial, 'public/images/curriculum-financial.jpg')
