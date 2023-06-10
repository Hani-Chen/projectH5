var isPc = function () {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
  }
  return flag;
};
function on(elem, evt, handler) {
  elem.addEventListener(evt, handler, false);
}

function off(elem, evt, handler) {
  elem.removeEventListener(evt, handler, false);
}
var dragJS = function (el, option) {
  this.x = 0;
  this.y = 0;
  this.options = option;
  this.parent = option.parent || window.document.documentElement
  this.point = { x: 0, y: 0 };
  this.prevPoint = { x: 0, y: 0 };
  this.clearSelect = this.options.clearSelect || true;
  this.onMove = this.options.onMove || function(){};
  this.onMoveStart = this.options.onMoveStart || function(){};
  this.onMoveEnd = this.options.onMoveEnd || function(){};
  this.init(el);
};
dragJS.prototype = {
  init: function (el) {
    var self = this
    if (isPc()) {
      self.dragElem(el, 'mousedown', 'mousemove', 'mouseup')
    } else {
      self.dragElem(el, 'touchstart', 'touchmove', 'touchend')
    }
  },
  dragElem: function (el, down, move, up) {
    var self = this
    on(el, down, function (e) {
      var moveHandler = function (e) {
        self.move(e)
        
      }
      var upHandler = function (e) {
        // console.log('end')
        self.moveEnd(e)
        off(document, move, moveHandler)
        off(document, up, upHandler)
      }
      
      self.moveStart(e)
      on(document, move, moveHandler)
      on(document, up, upHandler)
    })
  },
  getPoiPos: function (evt, offsetPoint) {
    var px = 0,
      py = 0,
      ox = 0,
      oy = 0;
    var evtPos = evt.touches ? evt.touches[evt.touches.length -1] : evt;
    // 父亲节点的宽度
    var parentRect = this.parent.getBoundingClientRect()
    var parentOffsetX = parentRect.x || this.parent.offsetParent.offsetLeft
    var parentOffsetY =  parentRect.y || this.parent.offsetParent.offsetTop
    px = evtPos.clientX - parentOffsetX;
    py = evtPos.clientY - parentOffsetY;
    
    var parentWidth = parentRect.width

    var percentX = Math.min(1,Math.max(0,px / parentWidth)) * 100

    if (offsetPoint) {
      oy = py - offsetPoint.y;
      ox = px - offsetPoint.x;
    }
    return {
      x: px,
      y: py,
      ox: ox,
      oy: oy,
      percent:percentX
    }
  },
  moveStart: function (e) {
    this.options.preventMove && e.preventDefault();
    var self = this;
    var point = self.getPoiPos(e);
    self.point = point
    self.prevPoint = point
    if (self.clearSelect) {
      // 清除拖动元素时网页的选中效果
      if (typeof userSelect === "string") {
        document.documentElement.style[userSelect] = "none";
        return false;
      }
      document.unselectable = "on";
      document.onselectstart = function () { return false; };
    }
    this.onMoveStart.apply(this, [point]);
  },
  move: function (e) {
    this.options.preventMove && e.preventDefault();
    var point = this.getPoiPos(e, this.prevPoint);
    this.prevPoint = point;
    this.onMove.apply(this, [point]);
  },
  moveEnd: function (e) {
    this.options.preventMove && e.preventDefault()
    var point = this.prevPoint;    
    this.onMoveEnd.apply(this,[point]);
  }

}