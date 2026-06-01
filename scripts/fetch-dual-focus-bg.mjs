import { writeFileSync } from 'fs'

const academic =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCk3uItydXyW_VdN4Hf5c9iLVZhdARWbo-IUfLlgVnKcGHXzBO-wUOgpItGGznCeHUmjfK6azrTMMCK6kbVrh0S2l3mF6ONXk4JEpasBLDV-YEy6edcHxJhETVwWEmhdXH8FKPrZHsC8PGdwDhmC2Ztduf1vfbfMN6BuIdTSCXFDks0YmZ0CH8JWVqnpdy6qrrwwwE-2MhN5KR_dEEUWxIzMNYv4b7JYjah8JA5Q7rxOxkLEq3UuMTkwzNoopYpn_qxAvhJkzR26Cc'
const islamic =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBS0M5UOQB6noeHL1SU_MiaoofoUxJ_AvDcLxhUdFk2mXOaDuZ31woho6WI7Z9X6bmHBdiTBLOMclda1ulnHf7XIDFZdrGMkZ0etb4YNzB3m9HURPKxced1UyGetN0Z_yDyOPnV52zPDtMJ3PwkLTqS8I-hd3Bnk6laZNzD8RlUDEUtGl1231EM9WgJuTl1zZl3Yfl9t2OYrXBrgc1gNgbiR4tDx0fsBl9qra00me6HI7h29E42ZodRt6fumLXznoTLvya9Yq5MR68'

async function download(url, path) {
  const res = await fetch(url)
  writeFileSync(path, Buffer.from(await res.arrayBuffer()))
  console.log('Saved', path)
}

await download(academic, 'public/images/dual-focus-academic.jpg')
await download(islamic, 'public/images/dual-focus-islamic.jpg')
