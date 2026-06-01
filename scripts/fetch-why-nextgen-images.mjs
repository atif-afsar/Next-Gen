import { writeFileSync } from 'fs'

const assets = {
  'why-parent-light-1.jpg':
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDYOcsO5lxsQ8uVABtu4hqm8PLvH_9ZNZ3ZHy3wQZ_GGACrrGpHfodYY725bDk2mrmsH0ZfrwRhITv9Q5WVEynuWA0FhbWXg9VctIdyrwkIytHr3KW5l7adu6tAjTrHV72qsA9H5x0GymPv2E8tcgNEBoOuJbAgfQOI3zPyqX2yBj4VmjJxsDH4qoUgHybd5aklSh0HXsmedVi5hy-C88Mk5qd2XPv5qwm2NBjlTno633diOViVHZ42HD3xeUOuwvCMP2qk_l-iZlU',
  'why-parent-light-2.jpg':
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCtSqbXGbGUw76wNxGG8SxfpLc57BKQgWJ5hYWwriAzLClzXUbYqhRUMKE4S3Q5zFun-bdSCDyQ_1k914TORmimMuUrQAoN6zkKdm2aRRlgu5IcUT7_FQExCWwELAGNHVrMSsK-zmDaSwN7ijB3SsMnRs1u5dImZapbjx3IfGfkle6NQiQRrmMAFJ5T_nq9F48XdbXKKk0DC6JQK3N0NUFztmiXUv66tAWdS7mJTIY5tr_XLnhj2dYLrgIC_m568IZn8rX12jZEbE8',
}

for (const [file, url] of Object.entries(assets)) {
  const res = await fetch(url)
  writeFileSync(`public/images/${file}`, Buffer.from(await res.arrayBuffer()))
  console.log('Saved', file)
}
