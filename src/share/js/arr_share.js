(function () {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  // length 属性的值是一个 0 到 232-1 的整数
  console.log('arr.length:', arr.length)

  // 遍历数组 - forEach() 方法对数组的每个元素执行一次提供的函数。
  
  /**
   * @param {} item 数组中正在处理的当前元素。
   * @param {} index 数组中正在处理的当前元素的索引。
   * @param {} array forEach() 方法正在操作的数组。
   */
  arr.forEach((item, index, array,thisArg) =>{
    console.log(item, index);
    
  })
})()