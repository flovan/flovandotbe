import { $ } from 'execa'
import fsExtra from 'fs-extra'
import { glob } from 'glob'
import { parse } from 'node-html-parser'
import * as path from 'path'

const cwd = process.cwd()
const inputDir = path.join(cwd, 'src', 'icons')
const inputDirRelative = path.relative(cwd, inputDir)
const outputDirTypes = path.join(cwd, 'src', 'types')
const outputDirSprite = path.join(cwd, 'static', 'svg')

void Promise.all([
  fsExtra.ensureDir(outputDirTypes),
  fsExtra.ensureDir(outputDirSprite),
]).then(async () => {
  const inputFiles = glob
    .sync('**/*.svg', {
      cwd: inputDir,
    })
    .sort((a, b) => a.localeCompare(b))

  if (inputFiles.length === 0) {
    console.log(`No SVG files found in ${inputDirRelative}`)
  } else {
    await generateIconFiles(inputFiles)
  }
})

async function generateIconFiles(files: Array<string>) {
  const spriteFilepath = path.join(outputDirSprite, 'sprite.svg')
  const typeOutputFilepath = path.join(outputDirTypes, 'icons.generated.d.ts')
  const currentSprite = await fsExtra
    .readFile(spriteFilepath, 'utf8')
    .catch(() => '')
  const currentTypes = await fsExtra
    .readFile(typeOutputFilepath, 'utf8')
    .catch(() => '')

  const iconNames = files.map(file => iconName(file))

  const spriteUpToDate = iconNames.every(name =>
    currentSprite.includes(`id=${name}`),
  )
  const typesUpToDate = iconNames.every(name =>
    currentTypes.includes(`"${name}"`),
  )

  if (spriteUpToDate && typesUpToDate) {
    console.log(`Icons are up to date`)
    return
  }

  console.log(`Generating sprite for ${inputDirRelative}`)

  const spriteChanged = await generateSvgSprite({
    files,
    inputDir,
    outputPath: spriteFilepath,
  })

  for (const file of files) {
    console.log('✅', file)
  }
  console.log(`Saved to ${path.relative(cwd, spriteFilepath)}`)

  const stringifiedIconNames = iconNames.map(name => JSON.stringify(name))

  const typeOutputContent = `// This file is generated by \`npm run build:icons\`

export type IconName =
\t| ${stringifiedIconNames.join('\n\t| ')};
`
  const typesChanged = await writeIfChanged(
    typeOutputFilepath,
    typeOutputContent,
  )

  console.log(`Manifest saved to ${path.relative(cwd, typeOutputFilepath)}`)

  if (spriteChanged || typesChanged) {
    console.log(`Generated ${files.length} icons`)
  }
}

function iconName(file: string) {
  return file.replace(/\.svg$/, '')
}

/**
 * Creates a single SVG file that contains all the icons
 */
async function generateSvgSprite({
  files,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  inputDir,
  outputPath,
}: {
  files: Array<string>
  inputDir: string
  outputPath: string
}) {
  // Each SVG becomes a symbol, and we wrap them all in a single SVG
  const symbols = await Promise.all(
    files.map(async file => {
      const input = await fsExtra.readFile(path.join(inputDir, file), 'utf8')
      const root = parse(input)

      const svg = root.querySelector('svg')
      if (svg === null) {
        throw new Error('No SVG element found')
      }

      svg.tagName = 'symbol'
      svg.setAttribute('id', iconName(file))
      svg.removeAttribute('xmlns')
      svg.removeAttribute('xmlns:xlink')
      svg.removeAttribute('version')
      svg.removeAttribute('width')
      svg.removeAttribute('height')

      return svg.toString().trim()
    }),
  )

  const output = [
    `<!-- This file was generated by \`npm run build:icons\` -->`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">`,
    `<defs>`, // for semantics: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs
    ...symbols,
    `</defs>`,
    `</svg>`,
    '', // trailing newline
  ].join('\n')

  return writeIfChanged(outputPath, output)
}

async function writeIfChanged(filepath: string, newContent: string) {
  const currentContent = await fsExtra
    .readFile(filepath, 'utf8')
    .catch(() => '')
  if (currentContent === newContent) {
    return false
  }
  await fsExtra.writeFile(filepath, newContent, 'utf8')
  await $`prettier --write ${filepath} --ignore-unknown`
  return true
}
