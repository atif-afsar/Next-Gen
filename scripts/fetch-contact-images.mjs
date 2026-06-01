import { writeFileSync } from 'fs'

const assets = {
  'contact-hero.jpg':
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBBp-nDYh6mYD93GXjo4q-c8dvs4Mbm0Ny4rGD2LZ-4aaclnC8SoJImGi8QfdPFxESvXrXc07mUxSFLjonYQ_BxlqfuBde2WR-V41EmwhIpqiPltSPuamsIhu7josMRq-UFSaUofL_EZ3AQjd_RwZ7-6uEFlOZ00OmkbUPRi4tWvFmiV_UzVP3K-t7MCM9wLMbP2q4hTihWdITGsgXNSasGjoPgHfg4l_ErnFJAFvLbe7k2OKcfzLJF_98kpaNt5NMerPcPW4oHeFU',
  'contact-campus.jpg':
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBDGZCXFMGfQKCavz-Tn3bb3OsqGIrOi2KE3Y3J5grAEwcGM6bFdwLrYpOQQ_HU-hWwuU7mR1UrPIWFayFuX-dSTv192nvYrWv2yMyKu7g-2IIN4g3vJEjrdo_bp7UYEKj3pi-aqjAVCSWStH06xRYPzjKWMPVSlVThrlPRmZhdE6z-GpAmP34Dhqbgj14Bh_tSPTVk57E22PCv3LZyIF__Mtv6Hqn_FMdxasdHvFiSjlIG9pontD6lXZeTne5b-JBkP0jjYEqKHag',
}

for (const [file, url] of Object.entries(assets)) {
  const res = await fetch(url)
  writeFileSync(`public/images/${file}`, Buffer.from(await res.arrayBuffer()))
  console.log('Saved', file)
}
