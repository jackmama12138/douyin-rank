const path = require('path')
const fse = require('fs-extra')
const { dayjs } = require('./day')

const saveData = async (options, data) => {
  options = options instanceof Object ? options : {}
  const { dir, fileName = '${type} ${hour}.json', now = new Date() } = options  // 去掉 pack 相关
  const date = dayjs.tz(now).format('YYYY-MM-DD')
  const hour = ('00' + dayjs.tz(now).format('HH')).slice(-2)
  const output = path.resolve(__dirname, dir || 'raw', date)
  await fse.ensureDir(output)
  if (data instanceof Object) {
    const content = JSON.stringify(data, null, 2) // 直接 JSON.stringify，可读格式
    const resolvedFileName = fileName.replace(/\$\{(.*?)\}/g, (s, s1) => 
      options[s1] === undefined ? { date, hour }[s1] || s : options[s1]
    )
    await fse.writeFile(path.resolve(output, resolvedFileName), content)
  }
}

Object.assign(exports, {
  saveData
})
