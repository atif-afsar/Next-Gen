import { writeFileSync } from 'fs'

const assets = {
  'home-curriculum-stem.jpg':
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDRRpFgkcSG-2SKBIx1q6Xvi9IjN3GTWHrJ_1wfVc9IkXK17yb7h-yxQyDQz1CPD1-JNTQtVlppW7K5SHNi9pKqrobT0D1QFodJFywwHVO1su0OhS0wrZKyTNSaS0WnHoni3s3H9bocgyJl_4JGOc4sJQwJFHxu0GtZ9vDNTzdy6lq7Tce8-MMdTGAKujinSRnRjslkAgAcsTBVfGNViBrn6zxypj6Jzf7-CHrxz2ifatovo6o_95zOS3KxJeHZ5cJ5Ik3atzUIwko',
  'home-curriculum-philosophy.jpg':
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDpjYFQDhxd3P8cYSiIV1i_74mSE_mGcRRM7i5gJKl00Qa_2bVX4PNiML_ohRWy6wbCXGAIYs5FQUnXvK6mqQUVbZQKzRAKqsMY7tAbhDL4cNjjO5bFHUkzyb6HBI3NDF5sD9Ebw4qLmUq5qIoEa4moxabukIWLVfJKtWxet5tSoreqXycLg48yohRWLdeY6C7m5PD2RlzTv8TFFAnbA9urMse8O08FxFQXVBF7bexqEjqbnc7v3CsYRH46Dc5OiKdbboi8g9dZzHk',
}

for (const [file, url] of Object.entries(assets)) {
  const res = await fetch(url)
  writeFileSync(`public/images/${file}`, Buffer.from(await res.arrayBuffer()))
  console.log('Saved', file)
}
