/*
 * @Author: Gianni
 * @Date: 2021-09-10 10:17:51
 * @LastEditTime: 2021-09-10 11:14:22
 * @LastEditors: Gianni
 * @Description: 工具函数合集
 * @FilePath: \H5-Project\src\qq_music_huolala\js\tool.js
 */

/**
 * 工具函数 - toast信息
 * @param {*} str toast文案
 * 用法: showToast('这是一条测试数据') showToast('这是一条测试数据')
 */
function showToast(str) {
  let $toast = $(
    '<div class="toast_item"><span class="ani">' + str + '</span></div>'
  )
  $('.wrap').append($toast)
  setTimeout(function () {
    $toast.animate({ opacity: 0 }, 300, null, function () {
      $toast.remove()
    })
  }, 1500)
}

/**
 * 工具函数 - 录制时长
 */
function startConcert(totalTime) {
  // 毫秒
  let hs = String(totalTime).substring(String(totalTime).length - 2)
  // 秒钟
  let s = Math.floor((totalTime / 100) % 60)
  s = String(s).length > 1 ? s : '0' + s
  // 分钟
  let m = Math.floor((Math.floor(totalTime / 100) / 60) % 60)
  m = String(m).length > 1 ? m : '0' + m
  return `${m}:${s}.${hs}`
}

/**
 * 工具函数 - 显示元素
 * @param {*} section 需要显示的的元素类
 * 用法: showSection('.test') showSection('#test')
 *
 */
let $prevSection
function showSection(section) {
  if ($prevSection) {
    $prevSection.removeClass('show')
  }
  $prevSection = $(section)
  $prevSection.addClass('show')
}
