// 随机数函数
function rand(min, max) {
  return min + Math.round(Math.random() * (max - min))
}

// 随机字母
function getPass() {
  var tmpCh = ''
  for (var i = 0; i < 1; i++) {
    tmpCh += String.fromCharCode(
      Math.floor(Math.random() * 26) + 'a'.charCodeAt(0)
    )
  }
  return tmpCh
}

var html = '<div class="list" style="left:' + 0.18 + 'rem; bottom:0;"></div>'
$('.wrap').append(html)

var len = 60
var html1 = ''
for (let i = 1; i < len; i++) {
  html1 += '<span class="item item' + i + '" style="opacity:1"></span>'
}
$('.list').append(html1)

function add1() {

  for (let j = 0; j < len; j++) {
    add(j)
    function add(j) {
      $('.item'+j).text(getPass())
    }
  }
}
function run() {
  var x = rand(0, 100)
  if (x < 100) {
    add1()
  }
  window.setTimeout(run, 100)
}
run()
