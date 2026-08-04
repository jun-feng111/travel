import fs from 'fs'

const root = 'E:/travel/src/data/'
const img = (n) => `img/${n}.png`

function fill(path, key, names) {
  let s = fs.readFileSync(path, 'utf8')
  let i = 0
  s = s.replace(new RegExp(`${key}:\\s*''`, 'g'), () => {
    const v = names[i++] ?? ''
    return `${key}: '${v}'`
  })
  fs.writeFileSync(path, s, 'utf8')
  console.log(path, 'filled', i, 'of', names.length)
}

// cities cover
fill(root + 'cities.js', 'cover', [
  img('chengdu-cover'), img('hangzhou-cover'), img('xian-cover'), img('lijiang-cover'), img('xiamen-cover')
])

// spots cover (order as in spots.js)
fill(root + 'spots.js', 'cover', [
  // chengdu
  img('chengdu-panda'), img('chengdu-kuanzhai'), img('chengdu-dujiangyan'),
  // hangzhou
  img('hangzhou-xihu'), img('hangzhou-lingyin'), img('hangzhou-xixi'),
  // xian
  img('xian-bingmayong'), img('xian-chengqiang'), img('xian-huiminjie'),
  // lijiang
  img('lijiang-oldtown'), img('lijiang-yulong'), img('lijiang-shuhe'),
  // xiamen
  img('xiamen-gulangyu'), img('xiamen-huandao'), img('xiamen-zengcuoan'),
])

// foods image (order as in foods.js)
fill(root + 'foods.js', 'image', [
  // chengdu
  img('chengdu-hotpot'), img('chengdu-chuanchuan'), img('chengdu-longchaoshou'),
  // hangzhou
  img('hangzhou-xihucuyu'), img('hangzhou-longjingxiaoren'), img('hangzhou-dongpo'),
  // xian
  img('xian-roujiamo'), img('xian-paomo'), img('xian-liangpi'),
  // lijiang
  img('lijiang-guozhuang'), img('lijiang-baba'), img('lijiang-shanguo'),
  // xiamen
  img('xiamen-shachamian'), img('xiamen-haishen'), img('xiamen-zongzi'),
])

// galleries image (order as in galleries.js)
fill(root + 'galleries.js', 'image', [
  // chengdu
  img('chengdu-g1'), img('chengdu-g2'), img('chengdu-g3'),
  // hangzhou
  img('hangzhou-g1'), img('hangzhou-g2'), img('hangzhou-g3'),
  // xian
  img('xian-g1'), img('xian-g2'), img('xian-g3'),
  // lijiang
  img('lijiang-g1'), img('lijiang-g2'), img('lijiang-g3'),
  // xiamen
  img('xiamen-g1'), img('xiamen-g2'), img('xiamen-g3'),
])

console.log('ALL DONE')
