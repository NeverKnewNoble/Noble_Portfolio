/**
 * One-off / re-runnable image optimizer for project screenshots.
 *
 * The project cards display images in a ~300px-wide, 176px-tall thumbnail,
 * yet the source PNGs were 3000px+ wide and 6–8MB each. This script resizes
 * them and re-encodes to WebP, cutting ~37MB of images down to a few hundred KB.
 *
 * Usage:  node scripts/optimize-images.js
 * Requires: sharp  (npm install --no-save sharp)
 */
import sharp from 'sharp'
import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC_DIR = path.join(__dirname, '..', 'src', 'assets', 'images')
const OUT_DIR = path.join(SRC_DIR, 'optimized')

const MAX_WIDTH = 900 // ~3x the on-screen card width — crisp on retina
const QUALITY = 78

async function run() {
  await mkdir(OUT_DIR, { recursive: true })
  const files = (await readdir(SRC_DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f))

  let before = 0
  let after = 0

  for (const file of files) {
    const inPath = path.join(SRC_DIR, file)
    const outName = file.replace(/\.(png|jpe?g)$/i, '.webp')
    const outPath = path.join(OUT_DIR, outName)

    const inSize = (await stat(inPath)).size
    await sharp(inPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outPath)
    const outSize = (await stat(outPath)).size

    before += inSize
    after += outSize
    const pct = (100 - (outSize / inSize) * 100).toFixed(1)
    console.log(
      `${file.padEnd(22)} ${(inSize / 1024).toFixed(0).padStart(6)}KB -> ${(
        outSize / 1024
      )
        .toFixed(0)
        .padStart(5)}KB  (-${pct}%)`
    )
  }

  console.log('\n' + '-'.repeat(48))
  console.log(
    `TOTAL  ${(before / 1024 / 1024).toFixed(2)}MB -> ${(
      after /
      1024 /
      1024
    ).toFixed(2)}MB  (-${(100 - (after / before) * 100).toFixed(1)}%)`
  )
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
