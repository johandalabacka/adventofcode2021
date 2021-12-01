import fs from 'fs/promises'

const dataFile = process.argv[2] === '--test' ? 'testdata.txt' : 'data.txt'
const content = await fs.readFile(dataFile, { encoding: 'utf-8' })
// const data = content.split('\n').filter(line => line)
const data = content.split('\n').filter(line => line).map(line => parseInt(line))


let prev = null
let countIncrease = 0
for (let i = 0; i < data.length - 2; i++) {
  const current = data[i] + data[i + 1] + data[i + 2]
  if (i > 0 && current > prev) {
    countIncrease++
  }
  prev = current
}
console.log(countIncrease)