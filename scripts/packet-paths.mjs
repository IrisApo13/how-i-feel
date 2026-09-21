// Where packets live, in one place, so a re-organisation is a one-file change.
import { readdirSync, statSync, existsSync, readFileSync } from 'node:fs'

// Packets live at packets/<body-area>/<complaint>/, so one body area can hold
// several presenting complaints (head injury and headache; acute and chronic
// tummy pain). The packet id inside meta.json stays flat and is what candidates
// and the bank refer to, so nothing downstream depends on where the file sits.
export const packetDirs = () => {
  const out = []
  for (const area of readdirSync('packets')) {
    if (area.startsWith('.') || area.startsWith('_')) continue
    const areaPath = `packets/${area}`
    if (!statSync(areaPath).isDirectory()) continue
    for (const complaint of readdirSync(areaPath)) {
      const dir = `${areaPath}/${complaint}`
      if (statSync(dir).isDirectory() && existsSync(`${dir}/meta.json`)) out.push(dir)
    }
  }
  return out
}

export const dirForPacket = (id) =>
  packetDirs().find((d) => JSON.parse(readFileSync(`${d}/meta.json`, 'utf8')).id === id)
