function overTimeFun(overTime) {


  function formatTimeStr(timeStr) {
    //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
    timeStr =  timeStr.replace(/\-/g, "/");
    return timeStr;
  }

  var overTime = formatTimeStr(overTime);

  // 获取结束时间轴
  const end = Date.parse(overTime)
  // 获取当前时间轴
  // const now = Date.parse(new Date())
  const now = Date.now();
  // 计算剩余时间
  const msec = end - now

  var ovreTimerArr = new Object(); 
  var hrData = Math.floor(msec / 3600000);
  var minData = Math.floor((msec / 60000 % 60));
  var secData = Math.floor((msec % 60000 / 1000));
  ovreTimerArr.pageHr = hrData > 9 ? hrData : '0' + hrData
  ovreTimerArr.pageMin = minData > 9 ? minData : '0' + minData
  ovreTimerArr.pageSec = secData > 9 ? secData : '0' + secData

  // 小时 - 十位
  ovreTimerArr.pageHrDecade =  parseInt(ovreTimerArr.pageHr / 10 % 10)
  // 小时 - 个位
  ovreTimerArr.pageHrUnit =  ovreTimerArr.pageHr % 10

  // 分钟 - 十位
  ovreTimerArr.pageMinDecade =  parseInt(ovreTimerArr.pageMin / 10 % 10)
  // 分钟 - 个位
  ovreTimerArr.pageMinUnit =  ovreTimerArr.pageMin % 10

  // 秒 - 十位
  ovreTimerArr.pageSecDecade =  parseInt(ovreTimerArr.pageSec / 10 % 10)
  // 秒 - 个位
  ovreTimerArr.pageSecUnit =  ovreTimerArr.pageSec % 10

  // console.log((ovreTimerArr.pageHr+ "时" + ovreTimerArr.pageMin + "分" + ovreTimerArr.pageSec + "秒"));
  
  // 返回倒计时时间对象
  return ovreTimerArr
}

export {
  overTimeFun
}