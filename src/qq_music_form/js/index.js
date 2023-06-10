/**
 * toast信息工具函数
 */
function showToast(str) {
  var toastBgColor = '#6ed5a1';
  var $toast = $('<div class="toast_item"><span class="ani" style="background:'+ toastBgColor +' ;">' + str + '</span></div>')
  $('.wrap').append($toast)
  setTimeout(function () {
    $toast.animate({
      opacity: 0
    }, 300, null, function () {
      $toast.remove()
    })
  }, 1500)
};

// 验证码默认值
var isPass;
// 手机号正则
var phoneRegular;
// 通过输入框数据生成demo
for (let i = 0; i < formListData.length; i++) {
  let formItemData = formListData[i];
  if(formItemData.isPhone) {
    phoneRegular = formItemData.regular
  }
  let formItem = '';
  if (formItemData.demoType === 'input') {
    // 生成input输入框
    formItem += `<div class="form_item form_${formItemData.demoType}">
    <label for="name" class="form_item__label">${formItemData.value}</label>
    <input type="${formItemData.type}" id="${formItemData.name}" class="form_item__value form_item__${formItemData.name}" name="${formItemData.name}" placeholder="请输入${formItemData.value}">
    ${formItemData.name === 'verification' ? `<div class="form_item__acquire">获取${formItemData.value}</div>` : ''}
  </div>`;
  } else if (formItemData.demoType === 'select') {
    // 生成select选择框
    formItem += `<div class="form_item  form_${formItemData.demoType}">
      <label for="name" class="form_item__label">${formItemData.value}</label>
      <select class="form_item__value form_item__setect form_item__${formItemData.name}" id="${formItemData.name}" name="${formItemData.name}"  data-defaultValue="${formItemData.defaultValue}"></select>
    </div>`
  }
  // 将生成的demo添加到页面
  $('.form_inner').append(formItem)

}
/* 表单校验 */
$("#form").submit(function (e) {

  var allList = 0
  var presentIndex = 0
  var verificationCode = 0;
  for (let i = 0; i < formListData.length; i++) {
    if(formListData[i].isVerification) {
      verificationCode = $('#' + formListData[i].name).val();
    }
    // 获取必填项总个数
    if (formListData[i].isRequired) {
      allList = allList+1
    }
    // 统计必填项已经填写的数量
    if ($('#' + formListData[i].name).val() != '' && formListData[i].isRequired) {
      presentIndex = presentIndex + 1
      let regular = formListData[i].regular;
      let regularValue = Number($('#' + formListData[i].name).val());
      if(formListData[i].regular && !(regular.test(regularValue))) {
        showToast(`${formListData[i].value}格式错误`)
        return false
      }
      
    }
  }
  for (let i = 0; i < formListData.length; i++) {
    if ($('#' + formListData[i].name).val() == '' && formListData[i].isRequired ) {
        showToast(`请输入${formListData[i].value}`)
      break
    }
  }
  
  // 判断必填项是否填写完成
  if(allList === presentIndex) {
    if(!(verificationCode  == isPass)) {
      showToast(`验证码输入有误`)
      return false;
    }
    formData(e);
  }
  return false;
});


// 验证码锁
var acquireLock = false;
// 验证码计时器
var time ;
// 点击获取验证码
$('.form_wrap').on('click', '.form_item__acquire', function () {
  if ($('#phone').val() == '') {
    showToast('请输入手机号码')
    return
  }else if(!(phoneRegular.test($('#phone').val()))) {
    showToast('手机号码格式错误')
    return
  }else {
    // 执行获取验证码函数
    sendVerificationCode()
  }
  if (!acquireLock) {
    acquireLock = true;
    var countDown = 60;
    time = setInterval(function () {
      countDown--
      $('.form_item__acquire').text(countDown + 'S重发')
      if (countDown <= 0) {
        window.clearInterval(time)
        $('.form_item__acquire').text('获取验证码')
        acquireLock = false;
      }
    }, 1000)
  }
})



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

// 循环初始化联动数据
for (let i = 0; i < $('.form_select').length; i++) {
  changeSelectOptions($('#select'+ (i+1)), selectDtat[i], $('#select'+ (i+1)).data('defaultvalue'))
  if((i+1) < $('.form_select').length) {
    $('#select'+ (i+1)).on('change', function () {
      var cityValue = $('#select'+ (i+2)).val()
      changeSelectOptions($('#select'+ (i+2)), filterOptions(this.value, selectDtat[i+1]), $('#select'+ (i+2)).data('defaultvalue'), cityValue)
      $('#select'+ (i+2)).trigger('change')
    })
  }
}

// 多级联动选中改变颜色
$('.form_item__setect ').on('change', function () {
  if($(this).val() !== '') {
    $(this).addClass('active')
  }else {
    $(this).removeClass('active')
  }
})

/* 修改区域 👇👇👇👇👇👇👇👇👇👇 */

/* 点击发送验证码 */
function sendVerificationCode() {
  console.log('您要发送验证码了 - 默认验证码', 1234);
  // 赋值正确的验证码
  isPass = 1234
}

/* 表单提交成功后 */
function formData(e) {
  // 按钮添加置灰
  $('.form_btn__submit').addClass('gray')
  
  // 获取到表单数据
  var formData = $('form').serialize();
  // 打印表单数据
  console.log(formData);

  // 清空表单
  $("input").val("");
  $("select").val("");
  // 恢复获取验证码状态
  $('.form_item__acquire').text('获取验证码');
  window.clearInterval(time)
}

// /* 隐私说明跳转方式1 - 跳转外链 */
// var formPrivacyUrl = 'https://www.baidu.com/'
// $('#formPrivacy').attr('href',formPrivacyUrl)

/* 隐私说明跳转方式2 - 点击事件 */
$('#formPrivacy').on('click',function() {
  console.log('您点击了隐私说明');
})

/* 修改区域 👆👆👆👆👆👆👆👆👆👆 */