/**
 * toast信息工具函数
 */
function showToast(str) {
  var $toast = $('<div class="toast_item"><span class="ani">' + str + '</span></div>')
  $('.wrap').append($toast)
  setTimeout(function () {
    $toast.animate({ opacity: 0 }, 300, null, function () {
      $toast.remove()
    })
  }, 1500)
}

// 三级联动demo
var $province = $('#province')
var $city = $('#city')
var $region = $('#region')

/**
 * 根据依赖值，筛选返回符合条件的新的选项列表
 * @param {string|number} dependentValue 依赖值
 * @param {Array} optionsArray 选项列表
 */
function filterOptions(dependentValue, optionsArray) {
  var resultOptions = []
  $.each(optionsArray, function (index, option) {
    if (option.dependentValue.indexOf(dependentValue) !== -1) {
      resultOptions.push(option)
    }
  })
  return resultOptions
}

/**
 * 渲染选择框数据
 * @param {zeptoDom} $select 要渲染的选择框对象
 * @param {Array} options 渲染选项
 * @param {string} placeholder 占位选项
 * @param {string} selectedValue 选中值
 */
function changeSelectOptions($select, options, placeholder, selectedValue) {
  // 默认的空选项
  var optionTpl = '<option value="" disabled="disabled" selected hidden="hidden">' + placeholder + '</option>'
  // 生成选项值模板html
  $.each(options, function (index, option) {
    optionTpl += '<option value="' + option.value + '" ' + (selectedValue == option.value ? 'selected' : '') + '>' + option.name + '</option>'
  })
  // 渲染选项值到选项框中
  $select.empty().append(optionTpl)
}

// 初始化三个选项框的数据
changeSelectOptions($province, provinceOptions, '省份')
changeSelectOptions($city, cityOptions, '城市')
changeSelectOptions($region, regionOptions, '经销商')

// 省份变化
$province.on('change', function () {
  var cityValue = $city.val()
  changeSelectOptions($city, filterOptions(this.value, cityOptions), '城市', cityValue)
  // 触发城市的change事件，使3级联动触发
  $city.trigger('change')
})
// 城市变化
$city.on('change', function () {
  var regionValue = $region.val()
  changeSelectOptions($region, filterOptions(this.value, regionOptions), '经销商', regionValue)
})


/* Data: 2020-08-20；Edit: Hani; Describe: 表单提交后清空列表和置灰按钮 Start V=1.0.0 */
/* 表单校验 */ 
$("#form").submit(function (e) {
  if ($('#name').val() == '') {
    showToast('请填写姓名')
  } else if ($('#phone').val() == '') {
    showToast('请填写电话号码')
  } else if ($('#province').val() == '') {
    showToast('请选择省份')
  } else if ($('#city').val() == '') {
    showToast('请选择城市')
  } else if ($('#region').val() == '') {
    showToast('请选择经销商')
  } else {
    $('.form_get').text('已提交').addClass('gray')
    $('#form')[0].reset();
    recoverSelect()
    return false;
  }
  return false;
});

/* Data: 2020-08-20；Edit: Hani; Describe: 表单提交后清空列表和置灰按钮 Start V=1.0.0 */

// // 情况一 - 外链跳转 - 配置外链
// $('.form_privacy a').attr('href','www.baidu.com');
// 情况二 - 点击事件
$('.form_privacy a').on('click',function() {
  console.log('点击了隐私说明');
})

/* Data: 2020-08-20；Edit: Hani; Describe: 区分选择和未选择的文字颜色； Start V=1.0.0 */
// 表单选中事件 - 改变文字颜色
$("select").change(function () {
  $(this).css("color", '#fff');
});
/* 恢复表单选中状态 */
function recoverSelect() {
  $('select').css("color", 'rgba(255, 255,255, 0.7)');
}
/* Data: 2020-08-20; Edit: Hani; Describe: 区分选择和未选择的文字颜色； End V=1.0.0 */