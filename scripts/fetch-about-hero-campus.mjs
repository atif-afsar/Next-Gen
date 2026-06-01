import { writeFileSync } from 'fs'

const url =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBr2CqYKL0ozdnoJeHTw7pVyzpy6sDucnPXHfw6-GQ21Ziq3DracSruWMTR9JxEWNuVFegWQKS8Tg5sh-fpTm9GnQh19-ra2hKeumiDNBWPVhhUiWNqvyK4oK8bvF4FFsFSWPdBpF4y2JjItmnTQEhggE3kIQ8_cEjl-FKn5FpMELE7u8vcyJ3d31Cppex7_pU5JTrVBT8S7JFO1JySOE9Y0k4kJrqwhDG_EEJbNe7F6OFTuaUEAC8I1rGQrn0BbVW61SAqRaYRK8U'

const res = await fetch(url)
writeFileSync('public/images/about-hero-campus.jpg', Buffer.from(await res.arrayBuffer()))
console.log('Saved about-hero-campus.jpg')
