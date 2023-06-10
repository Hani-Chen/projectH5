(function (lib, img, cjs, ss, an) {

	var p; // shortcut to reference prototypes
	lib.webFontTxtInst = {}; 
	var loadedTypekitCount = 0;
	var loadedGoogleCount = 0;
	var gFontsUpdateCacheList = [];
	var tFontsUpdateCacheList = [];
	lib.ssMetadata = [
			{name:"main_h5_3_8_atlas_", frames: [[752,6791,750,1334],[3760,0,750,1334],[2256,5165,750,1334],[3008,0,750,1334],[5264,0,750,1334],[4512,0,750,1334],[2256,6501,750,1334],[1504,6791,750,1334],[6768,1336,750,1334],[5264,1336,750,1334],[6768,0,750,1334],[3008,2672,750,1334],[3008,1336,750,1334],[3760,1336,750,1334],[6016,1336,750,1334],[3008,4008,750,1334],[6016,0,750,1334],[4512,1336,750,1334],[0,6791,750,1334],[0,5165,750,1624],[6016,2672,750,1334],[5264,2672,750,1334],[6768,2672,750,1334],[3760,4008,750,1334],[4512,4008,750,1334],[3008,5344,750,1334],[3008,6680,750,1334],[3760,6680,750,1334],[3760,2672,750,1334],[4512,5344,750,1334],[3760,5344,750,1334],[4512,2672,750,1334],[5264,6680,750,1334],[6016,6680,750,1334],[4512,6680,750,1334],[6768,5344,750,1334],[6016,5344,750,1334],[6768,6680,750,1334],[6016,4008,750,1334],[5264,4008,750,1334],[5264,5344,750,1334],[6768,4008,750,1334],[752,5165,750,1624],[1504,5165,750,1624],[2256,0,750,5163],[1504,0,750,5163],[752,0,750,5163],[0,0,750,5163]]},
			{name:"main_h5_3_8_atlas_2", frames: [[1504,517,321,230],[1504,981,305,218],[1504,0,365,263],[1504,749,321,230],[1856,2740,122,70],[1474,2310,360,153],[1964,2166,74,79],[306,2836,314,70],[1815,2812,84,98],[1102,2857,84,92],[1504,1201,421,112],[1980,0,51,60],[930,2857,84,92],[0,2836,304,81],[1977,2351,69,95],[1340,2166,405,142],[1901,2812,83,94],[1016,2857,84,92],[1504,2722,350,81],[622,2857,306,70],[1480,2465,360,117],[1314,2857,87,61],[1866,2643,90,95],[752,2447,364,142],[1942,2448,92,99],[1504,2639,360,81],[1958,2643,83,94],[1504,265,364,250],[1836,2351,139,95],[1118,2465,360,117],[1836,2251,150,98],[0,2782,750,52],[752,2749,750,52],[752,2803,750,52],[1118,2584,750,53],[752,2639,750,53],[0,2672,750,53],[752,2694,750,53],[0,2727,750,53],[1188,2857,124,54],[1504,2805,309,83],[1340,1971,120,160],[0,0,750,1334],[752,0,750,1334],[1827,753,180,240],[1870,2558,126,83],[1485,1336,552,828],[1927,1165,107,114],[752,1336,731,633],[1870,366,138,120],[752,1971,586,349],[752,2322,720,123],[1827,517,218,234],[1811,1080,237,83],[0,1336,750,1334],[1811,995,237,83],[1747,2166,215,83],[1871,0,107,364],[1842,2448,98,108]]}
	];
	
	
	
	lib.updateListCache = function (cacheList) {		
		for(var i = 0; i < cacheList.length; i++) {		
			if(cacheList[i].cacheCanvas)		
				cacheList[i].updateCache();		
		}		
	};		
	
	lib.addElementsToCache = function (textInst, cacheList) {		
		var cur = textInst;		
		while(cur != exportRoot) {		
			if(cacheList.indexOf(cur) != -1)		
				break;		
			cur = cur.parent;		
		}		
		if(cur != exportRoot) {		
			var cur2 = textInst;		
			var index = cacheList.indexOf(cur);		
			while(cur2 != cur) {		
				cacheList.splice(index, 0, cur2);		
				cur2 = cur2.parent;		
				index++;		
			}		
		}		
		else {		
			cur = textInst;		
			while(cur != exportRoot) {		
				cacheList.push(cur);		
				cur = cur.parent;		
			}		
		}		
	};		
	
	lib.gfontAvailable = function(family, totalGoogleCount) {		
		lib.properties.webfonts[family] = true;		
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
		for(var f = 0; f < txtInst.length; ++f)		
			lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		
	
		loadedGoogleCount++;		
		if(loadedGoogleCount == totalGoogleCount) {		
			lib.updateListCache(gFontsUpdateCacheList);		
		}		
	};		
	
	lib.tfontAvailable = function(family, totalTypekitCount) {		
		lib.properties.webfonts[family] = true;		
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
		for(var f = 0; f < txtInst.length; ++f)		
			lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		
	
		loadedTypekitCount++;		
		if(loadedTypekitCount == totalTypekitCount) {		
			lib.updateListCache(tFontsUpdateCacheList);		
		}		
	};
	// symbols:
	
	
	
	(lib.气泡皇上小图 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.气泡皇上2小图 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.气泡皇上3小图 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.气泡皇上白底 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._01 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._02 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._03 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._04 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._05 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._06 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._07 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._08 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._09 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_00 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_02 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_04 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_06 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_08 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_10 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_12 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_14 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_16 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_18 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_20 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_22 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_24 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_26 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_28 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_30 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_32 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0yanzhipu_34 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._10 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._11 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._12 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._13 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._14 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._15 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._16 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._17 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._18 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._19 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._20 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._21 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._22 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._23 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._24 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._25 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._26 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._27 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.beijing = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_00 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_02 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_04 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_06 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_08 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_10 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_12 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_14 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.daohanglan = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.ditu = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.gaolishi = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guaduanxiaotu = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_00 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_02 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_04 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_06 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_08 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_10 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_12 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_14 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_16 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_18 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_20 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_22 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_24 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_26 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_28 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_30 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_32 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_34 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_36 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_38 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_40 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_42 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_44 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_46 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeitouxiangxiaotu = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.h57ditu = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.huangshang = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(45);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.huangshangyiwen = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(46);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.聊天背景 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.jinruliaotianshi01 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.jinruliaotianshi02 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(45);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.jinruliaotianshi03 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(46);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.jinruliaotianshi04 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_"];
		this.gotoAndStop(47);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.pan = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(47);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.panta = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(48);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.qipaoguifeixiaotu = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(49);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.qitaanniuxiaotu = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(50);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.qq = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(51);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.wenhao = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(52);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangguozhong = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(53);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yanzhipu1334 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(54);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yaochong = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(55);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.zhangjiuling = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(56);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.ziti = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(57);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.他 = function() {
		this.spriteSheet = ss["main_h5_3_8_atlas_2"];
		this.gotoAndStop(58);
	}).prototype = p = new cjs.Sprite();
	// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}
	
	
	(lib.yiwen = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshangyiwen();
		this.instance.parent = this;
		this.instance.setTransform(-345,-414);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-345,-414,552,828);
	
	
	(lib.yanzhipu = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 3
		this.instance = new lib._0yanzhipu_00();
		this.instance.parent = this;
		this.instance.setTransform(0,504);
	
		this.instance_1 = new lib._0yanzhipu_02();
		this.instance_1.parent = this;
		this.instance_1.setTransform(0,504);
	
		this.instance_2 = new lib._0yanzhipu_04();
		this.instance_2.parent = this;
		this.instance_2.setTransform(0,504);
	
		this.instance_3 = new lib._0yanzhipu_06();
		this.instance_3.parent = this;
		this.instance_3.setTransform(0,504);
	
		this.instance_4 = new lib._0yanzhipu_08();
		this.instance_4.parent = this;
		this.instance_4.setTransform(0,504);
	
		this.instance_5 = new lib._0yanzhipu_10();
		this.instance_5.parent = this;
		this.instance_5.setTransform(0,504);
	
		this.instance_6 = new lib._0yanzhipu_12();
		this.instance_6.parent = this;
		this.instance_6.setTransform(0,504);
	
		this.instance_7 = new lib._0yanzhipu_14();
		this.instance_7.parent = this;
		this.instance_7.setTransform(0,504);
	
		this.instance_8 = new lib._0yanzhipu_16();
		this.instance_8.parent = this;
		this.instance_8.setTransform(0,504);
	
		this.instance_9 = new lib._0yanzhipu_18();
		this.instance_9.parent = this;
		this.instance_9.setTransform(0,504);
	
		this.instance_10 = new lib._0yanzhipu_20();
		this.instance_10.parent = this;
		this.instance_10.setTransform(0,504);
	
		this.instance_11 = new lib._0yanzhipu_22();
		this.instance_11.parent = this;
		this.instance_11.setTransform(0,504);
	
		this.instance_12 = new lib._0yanzhipu_24();
		this.instance_12.parent = this;
		this.instance_12.setTransform(0,504);
	
		this.instance_13 = new lib._0yanzhipu_26();
		this.instance_13.parent = this;
		this.instance_13.setTransform(0,504);
	
		this.instance_14 = new lib._0yanzhipu_28();
		this.instance_14.parent = this;
		this.instance_14.setTransform(0,504);
	
		this.instance_15 = new lib._0yanzhipu_30();
		this.instance_15.parent = this;
		this.instance_15.setTransform(0,504);
	
		this.instance_16 = new lib._0yanzhipu_32();
		this.instance_16.parent = this;
		this.instance_16.setTransform(0,504);
	
		this.instance_17 = new lib._0yanzhipu_34();
		this.instance_17.parent = this;
		this.instance_17.setTransform(0,504);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,504,750,1334);
	
	
	(lib.wenzi1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.ziti();
		this.instance.parent = this;
		this.instance.setTransform(-53.5,-182);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-53.5,-182,107,364);
	
	
	(lib.wenhao_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.wenhao();
		this.instance.parent = this;
		this.instance.setTransform(-109,-117);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-109,-117,218,234);
	
	
	(lib.ta = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.他();
		this.instance.parent = this;
		this.instance.setTransform(-49,-54);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-49,-54,98,108);
	
	
	(lib.qqxiaoxianniu = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.qq();
		this.instance.parent = this;
		this.instance.setTransform(-360,-61.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-360,-61.5,720,123);
	
	
	(lib.qipaohuangshang = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.气泡皇上小图();
		this.instance.parent = this;
		this.instance.setTransform(-161,-115);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-161,-115,321,230);
	
	
	(lib.qipaoguifei = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.qipaoguifeixiaotu();
		this.instance.parent = this;
		this.instance.setTransform(-69,-60);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-69,-60,138,120);
	
	
	(lib.qipaobaidi = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.气泡皇上白底();
		this.instance.parent = this;
		this.instance.setTransform(-160.5,-115);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-160.5,-115,321,230);
	
	
	(lib.pantahuangshang = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.panta();
		this.instance.parent = this;
		this.instance.setTransform(-365.5,-316.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-365.5,-316.5,731,633);
	
	
	(lib.pan_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.pan();
		this.instance.parent = this;
		this.instance.setTransform(-53.5,-57);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-53.5,-57,107,114);
	
	
	(lib.liaotianwenwubaiguan = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.daohanglan();
		this.instance.parent = this;
		this.instance.setTransform(-62,-27);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-62,-27,124,54);
	
	
	(lib.jinruliaotian4 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.jinruliaotianshi04();
		this.instance.parent = this;
		this.instance.setTransform(-375,-2581.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-375,-2581.5,750,5163);
	
	
	(lib.jinruliaotian3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.jinruliaotianshi03();
		this.instance.parent = this;
		this.instance.setTransform(-375,-2581.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-375,-2581.5,750,5163);
	
	
	(lib.jinruliaotian2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.jinruliaotianshi02();
		this.instance.parent = this;
		this.instance.setTransform(-375,-2581.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-375,-2581.5,750,5163);
	
	
	(lib.jinruliaotian1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.jinruliaotianshi01();
		this.instance.parent = this;
		this.instance.setTransform(-375,-2581.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-375,-2581.5,750,5163);
	
	
	(lib.huangshangqipao3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.气泡皇上3小图();
		this.instance.parent = this;
		this.instance.setTransform(-159.2,-114.7,0.872,0.872);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-159.2,-114.7,318.5,229.5);
	
	
	(lib.h58guaduan = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.guaduanxiaotu();
		this.instance.parent = this;
		this.instance.setTransform(-60,-80);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-60,-80,120,160);
	
	
	(lib.h58 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 底图
		this.instance = new lib.ditu();
		this.instance.parent = this;
		this.instance.setTransform(-374,-811);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(78));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-374,-811,750,1624);
	
	
	(lib.h57 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.h57ditu();
		this.instance.parent = this;
		this.instance.setTransform(-373,-813);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-373,-813,750,1624);
	
	
	(lib.guifeitouxiang = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.guifeitouxiangxiaotu();
		this.instance.parent = this;
		this.instance.setTransform(-90,-120);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);
	
	
	(lib.guifeidangqiuqian = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.guifeidangqiuqian_00();
		this.instance.parent = this;
	
		this.instance_1 = new lib.guifeidangqiuqian_02();
		this.instance_1.parent = this;
	
		this.instance_2 = new lib.guifeidangqiuqian_04();
		this.instance_2.parent = this;
	
		this.instance_3 = new lib.guifeidangqiuqian_06();
		this.instance_3.parent = this;
	
		this.instance_4 = new lib.guifeidangqiuqian_08();
		this.instance_4.parent = this;
	
		this.instance_5 = new lib.guifeidangqiuqian_10();
		this.instance_5.parent = this;
	
		this.instance_6 = new lib.guifeidangqiuqian_12();
		this.instance_6.parent = this;
	
		this.instance_7 = new lib.guifeidangqiuqian_14();
		this.instance_7.parent = this;
	
		this.instance_8 = new lib.guifeidangqiuqian_16();
		this.instance_8.parent = this;
	
		this.instance_9 = new lib.guifeidangqiuqian_18();
		this.instance_9.parent = this;
	
		this.instance_10 = new lib.guifeidangqiuqian_20();
		this.instance_10.parent = this;
	
		this.instance_11 = new lib.guifeidangqiuqian_22();
		this.instance_11.parent = this;
	
		this.instance_12 = new lib.guifeidangqiuqian_24();
		this.instance_12.parent = this;
	
		this.instance_13 = new lib.guifeidangqiuqian_26();
		this.instance_13.parent = this;
	
		this.instance_14 = new lib.guifeidangqiuqian_28();
		this.instance_14.parent = this;
	
		this.instance_15 = new lib.guifeidangqiuqian_30();
		this.instance_15.parent = this;
	
		this.instance_16 = new lib.guifeidangqiuqian_32();
		this.instance_16.parent = this;
	
		this.instance_17 = new lib.guifeidangqiuqian_34();
		this.instance_17.parent = this;
	
		this.instance_18 = new lib.guifeidangqiuqian_36();
		this.instance_18.parent = this;
	
		this.instance_19 = new lib.guifeidangqiuqian_38();
		this.instance_19.parent = this;
	
		this.instance_20 = new lib.guifeidangqiuqian_40();
		this.instance_20.parent = this;
	
		this.instance_21 = new lib.guifeidangqiuqian_42();
		this.instance_21.parent = this;
	
		this.instance_22 = new lib.guifeidangqiuqian_44();
		this.instance_22.parent = this;
	
		this.instance_23 = new lib.guifeidangqiuqian_46();
		this.instance_23.parent = this;
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,750,1334);
	
	
	(lib.补间1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.气泡皇上2小图();
		this.instance.parent = this;
		this.instance.setTransform(-160.5,-114.7,1.053,1.053);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-160.5,-114.7,321.1,229.5);
	
	
	(lib.元件2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.bolang_00();
		this.instance.parent = this;
	
		this.instance_1 = new lib.bolang_02();
		this.instance_1.parent = this;
	
		this.instance_2 = new lib.bolang_04();
		this.instance_2.parent = this;
	
		this.instance_3 = new lib.bolang_06();
		this.instance_3.parent = this;
	
		this.instance_4 = new lib.bolang_08();
		this.instance_4.parent = this;
	
		this.instance_5 = new lib.bolang_10();
		this.instance_5.parent = this;
	
		this.instance_6 = new lib.bolang_12();
		this.instance_6.parent = this;
	
		this.instance_7 = new lib.bolang_14();
		this.instance_7.parent = this;
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,750,52);
	
	
	(lib._27_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(29,-114);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._27();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-75,-49);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-75,-114,230,163);
	
	
	(lib._26_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(134,-114);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._26();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-180,-58.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-180,-114,440,172.5);
	
	
	(lib._25_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(23,-112);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._25();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-69.5,-47.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-69.5,-112,218.5,159.5);
	
	
	(lib._24_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.yangguozhong();
		this.instance.parent = this;
		this.instance.setTransform(-258,-183);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._24();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-182,-125);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-258,-183,440,308);
	
	
	(lib._23_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(-4,-112);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._23();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-41.5,-47);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-41.5,-112,163.5,159);
	
	
	(lib._22_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(134,-97);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._22();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-180,-40.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-180,-97,440,137.5);
	
	
	(lib._21_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.yangguozhong();
		this.instance.parent = this;
		this.instance.setTransform(-126,-114);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._21();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-46,-49.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-126,-114,237,163.5);
	
	
	(lib._20_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.yangguozhong();
		this.instance.parent = this;
		this.instance.setTransform(-257,-129);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._20();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-182,-71);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-257,-129,439,200);
	
	
	(lib._19_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(-1,-112);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._19();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-45,-47.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-45,-112,170,159.5);
	
	
	(lib._18_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.zhangjiuling();
		this.instance.parent = this;
		this.instance.setTransform(-123,-95);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._18();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-43.5,-30.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-123,-95,215,125.5);
	
	
	(lib._17_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(134,-114);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._17();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-180,-58.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-180,-114,440,172.5);
	
	
	(lib._16_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.yangguozhong();
		this.instance.parent = this;
		this.instance.setTransform(-229,-94);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._16();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-153,-35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-229,-94,382,129);
	
	
	(lib._15_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(128,-97);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._15();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-175,-40.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-175,-97,429,137.5);
	
	
	(lib._14_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(-4,-111);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._14();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-42,-46);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-42,-111,164,157);
	
	
	(lib._13_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.zhangjiuling();
		this.instance.parent = this;
		this.instance.setTransform(-121,-112);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._13();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-41.5,-47);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-121,-112,215,159);
	
	
	(lib._12_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.zhangjiuling();
		this.instance.parent = this;
		this.instance.setTransform(-277,-128);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._12();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-202.5,-71);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-277,-128,479.5,199);
	
	
	(lib._11_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.yaochong();
		this.instance.parent = this;
		this.instance.setTransform(-116,-113);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._11();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-34.5,-47.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-116,-113,237,160.5);
	
	
	(lib._10_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(106,-96);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._10();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-152,-40.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-152,-96,384,136.5);
	
	
	(lib._09_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(-4,-111);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._09();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-42,-46);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-42,-111,164,157);
	
	
	(lib._08_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.yaochong();
		this.instance.parent = this;
		this.instance.setTransform(-106,-95);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._08();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-25.5,-30);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-106,-95,237,125);
	
	
	(lib._07_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 3
		this.instance = new lib.yaochong();
		this.instance.parent = this;
		this.instance.setTransform(-286,-114);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._07();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-210.5,-56);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-286,-114,496.5,170);
	
	
	(lib._06_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(-5,-111);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._06();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-42,-46);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-42,-111,163,157);
	
	
	(lib._05_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib._05();
		this.instance.parent = this;
		this.instance.setTransform(-42,-49);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-42,-49,84,98);
	
	
	(lib._04_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.yaochong();
		this.instance.parent = this;
		this.instance.setTransform(-232,-93);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._04();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-157,-35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-232,-93,389,128);
	
	
	(lib._03_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(4,-104);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._03();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-37,-39.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-37,-104,167,143.5);
	
	
	(lib._02_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.huangshang();
		this.instance.parent = this;
		this.instance.setTransform(133,-134);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._02();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-180,-76.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-180,-134,439,210.5);
	
	
	(lib._01_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 2
		this.instance = new lib.gaolishi();
		this.instance.parent = this;
		this.instance.setTransform(-138,-93);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 1
		this.instance_1 = new lib._01();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-61,-35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-138,-93,309,128);
	
	
	(lib.black = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#190404").s().p("EhFJCHcMAAAkO3MCKTAAAMAAAEO3g");
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-442.6,-866.8,885.3,1733.7);
	
	
	(lib.shipingcharu2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 胭脂铺
		this.instance = new lib.yanzhipu("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(375,405.3,0.907,0.907,0,0,0,375,812);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(312));
	
		// 背景
		this.instance_1 = new lib.yanzhipu1334();
		this.instance_1.parent = this;
		this.instance_1.setTransform(34,126,0.907,0.907);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(312));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(34,126,681,1209.6);
	
	
	(lib.shipingcharu1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 10
		this.instance = new lib.guifeidangqiuqian("synched",4);
		this.instance.parent = this;
		this.instance.setTransform(374.3,728,0.91,0.91,0,0,0,375,667);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},75).wait(242));
	
		// 背景
		this.instance_1 = new lib.beijing();
		this.instance_1.parent = this;
		this.instance_1.setTransform(33,121,0.91,0.91);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},75).wait(242));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,-322,750,5163);
	
	
	(lib.liaotianqipaoduihua = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 进入聊天1
		this.instance = new lib.jinruliaotian1();
		this.instance.parent = this;
		this.instance.setTransform(375,2581.5);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},308).wait(417));
	
		// 进入聊天2
		this.instance_1 = new lib.jinruliaotian2("synched",0);
		this.instance_1.parent = this;
		this.instance_1.setTransform(375,2581.5);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({_off:true},307).wait(414));
	
		// 进入聊天3
		this.instance_2 = new lib.jinruliaotian3("synched",0);
		this.instance_2.parent = this;
		this.instance_2.setTransform(375,2581.5);
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true},307).wait(411));
	
		// 进入聊天4
		this.instance_3 = new lib.jinruliaotian4("synched",0);
		this.instance_3.parent = this;
		this.instance_3.setTransform(375,2581.5);
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({_off:true},306).wait(407));
	
		// 图层 54
		this.instance_4 = new lib._27_1("synched",0);
		this.instance_4.parent = this;
		this.instance_4.setTransform(580,5485);
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(579).to({_off:false},0).to({_off:true},72).wait(76));
	
		// 图层 53
		this.instance_5 = new lib._26_1("synched",0);
		this.instance_5.parent = this;
		this.instance_5.setTransform(475,5274.5);
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(572).to({_off:false},0).to({_off:true},79).wait(76));
	
		// 图层 52
		this.instance_6 = new lib._25_1("synched",0);
		this.instance_6.parent = this;
		this.instance_6.setTransform(586.5,5077.5);
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(560).to({_off:false},0).to({_off:true},91).wait(76));
	
		// 图层 51
		this.instance_7 = new lib._24_1("synched",0);
		this.instance_7.parent = this;
		this.instance_7.setTransform(273,4803);
		this.instance_7._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(536).to({_off:false},0).to({_off:true},115).wait(76));
	
		// 图层 50
		this.instance_8 = new lib._23_1("synched",0);
		this.instance_8.parent = this;
		this.instance_8.setTransform(613.5,4536);
		this.instance_8._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(521).to({_off:false},0).to({_off:true},130).wait(76));
	
		// 图层 49
		this.instance_9 = new lib._22_1("synched",0);
		this.instance_9.parent = this;
		this.instance_9.setTransform(475,4355.5);
		this.instance_9._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(512).to({_off:false},0).to({_off:true},139).wait(76));
	
		// 图层 48
		this.instance_10 = new lib._21_1("synched",0);
		this.instance_10.parent = this;
		this.instance_10.setTransform(141,4202.5);
		this.instance_10._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(500).to({_off:false},0).to({_off:true},151).wait(76));
	
		// 图层 47
		this.instance_11 = new lib._20_1("synched",0);
		this.instance_11.parent = this;
		this.instance_11.setTransform(272,3980);
		this.instance_11._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(491).to({_off:false},0).to({_off:true},160).wait(76));
	
		// 图层 46
		this.instance_12 = new lib._19_1("synched",0);
		this.instance_12.parent = this;
		this.instance_12.setTransform(610,3826.5);
		this.instance_12._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(478).to({_off:false},0).to({_off:true},173).wait(76));
	
		// 图层 45
		this.instance_13 = new lib._18_1("synched",0);
		this.instance_13.parent = this;
		this.instance_13.setTransform(138.5,3646.5);
		this.instance_13._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(466).to({_off:false},0).to({_off:true},185).wait(76));
	
		// 图层 44
		this.instance_14 = new lib._17_1("synched",0);
		this.instance_14.parent = this;
		this.instance_14.setTransform(475,3464.5);
		this.instance_14._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(454).to({_off:false},0).to({_off:true},197).wait(76));
	
		// 图层 43
		this.instance_15 = new lib._16_1("synched",0);
		this.instance_15.parent = this;
		this.instance_15.setTransform(244,3279);
		this.instance_15._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(439).to({_off:false},0).to({_off:true},212).wait(76));
	
		// 图层 42
		this.instance_16 = new lib._15_1("synched",0);
		this.instance_16.parent = this;
		this.instance_16.setTransform(481,3083.5);
		this.instance_16._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(430).to({_off:false},0).to({_off:true},221).wait(76));
	
		// 图层 41
		this.instance_17 = new lib._14_1("synched",0);
		this.instance_17.parent = this;
		this.instance_17.setTransform(613,2933);
		this.instance_17._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(281).to({_off:false},0).to({_off:true},348).wait(98));
	
		// 图层 40
		this.instance_18 = new lib._13_1("synched",0);
		this.instance_18.parent = this;
		this.instance_18.setTransform(136.5,2738);
		this.instance_18._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(265).to({_off:false},0).to({_off:true},360).wait(102));
	
		// 图层 39
		this.instance_19 = new lib._12_1("synched",0);
		this.instance_19.parent = this;
		this.instance_19.setTransform(292.5,2517);
		this.instance_19._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(257).to({_off:false},0).to({_off:true},369).wait(101));
	
		// 图层 38
		this.instance_20 = new lib._11_1("synched",0);
		this.instance_20.parent = this;
		this.instance_20.setTransform(130.5,2304.5);
		this.instance_20._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(244).to({_off:false},0).to({_off:true},384).wait(99));
	
		// 图层 37
		this.instance_21 = new lib._10_1("synched",0);
		this.instance_21.parent = this;
		this.instance_21.setTransform(503,2123.5);
		this.instance_21._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(230).to({_off:false},0).to({_off:true},393).wait(104));
	
		// 图层 36
		this.instance_22 = new lib._09_1("synched",0);
		this.instance_22.parent = this;
		this.instance_22.setTransform(613,1944);
		this.instance_22._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(96).to({_off:false},0).to({_off:true},466).wait(165));
	
		// 图层 35
		this.instance_23 = new lib._08_1("synched",0);
		this.instance_23.parent = this;
		this.instance_23.setTransform(120.5,1766);
		this.instance_23._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(84).to({_off:false},0).to({_off:true},476).wait(167));
	
		// 图层 34
		this.instance_24 = new lib._07_1("synched",0);
		this.instance_24.parent = this;
		this.instance_24.setTransform(300.5,1578);
		this.instance_24._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(76).to({_off:false},0).to({_off:true},489).wait(162));
	
		// 图层 33
		this.instance_25 = new lib._06_1("synched",0);
		this.instance_25.parent = this;
		this.instance_25.setTransform(614,1381);
		this.instance_25._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(66).to({_off:false},0).to({_off:true},499).wait(162));
	
		// 图层 32
		this.instance_26 = new lib.yaochong();
		this.instance_26.parent = this;
		this.instance_26.setTransform(15,1070);
	
		this.instance_27 = new lib._05_1("synched",0);
		this.instance_27.parent = this;
		this.instance_27.setTransform(138,1184);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_27},{t:this.instance_26}]},53).to({state:[]},510).wait(164));
	
		// 图层 31
		this.instance_28 = new lib._04_1("synched",0);
		this.instance_28.parent = this;
		this.instance_28.setTransform(247,997);
		this.instance_28._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(45).to({_off:false},0).to({_off:true},521).wait(161));
	
		// 图层 30
		this.instance_29 = new lib._03_1("synched",0);
		this.instance_29.parent = this;
		this.instance_29.setTransform(605,822.5);
		this.instance_29._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(38).to({_off:false},0).to({_off:true},526).wait(163));
	
		// 图层 29
		this.instance_30 = new lib._02_1("synched",0);
		this.instance_30.parent = this;
		this.instance_30.setTransform(475,614.5);
		this.instance_30._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(32).to({_off:false},0).to({_off:true},533).wait(162));
	
		// 图层 28
		this.instance_31 = new lib._01_1("synched",0);
		this.instance_31.parent = this;
		this.instance_31.setTransform(152,409);
		this.instance_31._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(20).to({_off:false},0).to({_off:true},543).wait(164));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,750,5664);
	
	
	(lib.huangshangqipao2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.补间1("synched",0);
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-160.5,-114.7,321.1,229.5);
	
	
	(lib.元件9 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.h58("synched",37);
		this.instance.parent = this;
		this.instance.setTransform(-1,-1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-375,-812,750,1624), null);
	
	
	(lib.元件8 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.h57("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(-2,1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-375,-812,750,1624), null);
	
	
	(lib.元件7 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.qqxiaoxianniu("synched",0);
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-360,-61.5,720,123), null);
	
	
	(lib.元件6 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.pantahuangshang("synched",0);
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-365.5,-316.5,731,633), null);
	
	
	(lib.元件5 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.yiwen("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(276,0,1,1,0,0,0,207,0);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-276,-414,552,828), null);
	
	
	(lib.元件3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.yiwen("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(276,0,1,1,0,0,0,207,0);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(-276,-414,552,828), null);
	
	
	(lib.bolang = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 3
		this.instance = new lib.元件2("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(370.7,918.8,1,1,0,0,0,375,26.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.3,892.3,750,52);
	
	
	(lib.shoudaoqqxiaozi = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 荡秋千
		this.instance = new lib.shipingcharu1("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(81.6,0.1,1.338,1.338,0,0,0,374.3,728);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},71).wait(4));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-375,-812,913.1,1624.1);
	
	
	// stage content:
	(lib.mainh538 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_112 = function() {
			//到达113帧时
			// 跳转御花园视频
			onPlayGarden(this)

		}
		this.frame_177 = function(){
			clearClickPad()
		}
		this.frame_304 = function() {
			//到达305帧时
			// 跳转胭脂铺视频
			onPlayYanzhi(this)
		}
		this.frame_369 = function(){
			clearClickPad()
		}
		this.frame_590 = function() {
			//当动画到591帧后
			//点击盘他
			onPlayPanta(this)
		}
		this.frame_653 = function(){
			clearClickPad()
		}
		this.frame_678 = function() {
			//到达679帧后
			// qq消息显示
			onPlayMessage(this)
		}
		this.frame_723 = function(){
			clearClickPad()
		}
		this.frame_724 = function() {
			//当到达接听页面时
			onPlayCall(this)
		}
		this.frame_767 = function(){
			clearClickPad()
		}
		this.frame_881 = function() {
			//聊天完开始点击事件
			onPlayHangup(this)
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this)
		.wait(112).call(this.frame_112)
		.wait(65).call(this.frame_177)
		.wait(127).call(this.frame_304)
		.wait(65).call(this.frame_369)
		.wait(221).call(this.frame_590)
		.wait(63).call(this.frame_653)
		.wait(25).call(this.frame_678)
		.wait(45).call(this.frame_723)
		.wait(1).call(this.frame_724)
		.wait(43).call(this.frame_767)
		.wait(114).call(this.frame_881)
		.wait(1));
	
		// 挂断
		this.instance = new lib.h58guaduan("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(375.2,1184.6);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(766).to({_off:false},0).wait(116));
	
		// 其他按钮
		this.instance_1 = new lib.qitaanniuxiaotu();
		this.instance_1.parent = this;
		this.instance_1.setTransform(83,915);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(766).to({_off:false},0).wait(116));
	
		// 气泡贵妃
		this.instance_2 = new lib.qipaoguifei("synched",0);
		this.instance_2.parent = this;
		this.instance_2.setTransform(586.2,748.5,0.043,0.043,0,0,0,41.8,54.6);
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(828).to({_off:false},0).to({regX:41.3,regY:54.8,scaleX:1,scaleY:1,x:586.1},6).wait(48));
	
		// 气泡3
		this.instance_3 = new lib.huangshangqipao3("synched",0);
		this.instance_3.parent = this;
		this.instance_3.setTransform(534.2,416.7);
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(810).to({_off:false},0).wait(72));
	
		// 气泡2
		this.instance_4 = new lib.huangshangqipao2("synched",0);
		this.instance_4.parent = this;
		this.instance_4.setTransform(535.5,416.3);
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(794).to({_off:false},0).to({_off:true},16).wait(72));
	
		// 气泡1
		this.instance_5 = new lib.qipaohuangshang("synched",0);
		this.instance_5.parent = this;
		this.instance_5.setTransform(375,531.1,0.019,0.019,0,0,0,-160.5,113.9);
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(774).to({_off:false},0).to({regX:-161,regY:115,scaleX:1,scaleY:1},3).to({_off:true},17).wait(88));
	
		// 气泡白底
		this.instance_6 = new lib.qipaobaidi("synched",0);
		this.instance_6.parent = this;
		this.instance_6.setTransform(375,531.1,0.019,0.019,0,0,0,-160.2,116.3);
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(774).to({_off:false},0).to({regX:-160.5,regY:115,scaleX:1,scaleY:1,y:531},3).wait(105));
	
		// 气泡皇上
		this.instance_7 = new lib.qipaohuangshang("synched",0);
		this.instance_7.parent = this;
		this.instance_7.setTransform(388.2,527.1,0.013,0.013,0,0,0,-146.7,108.1);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(774).to({_off:false},0).to({regX:-148.3,regY:109.9,scaleX:1,scaleY:1,x:388.3,alpha:1},6).wait(11).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(87));
	
		// 贵妃头像
		this.instance_8 = new lib.guifeitouxiang("synched",0);
		this.instance_8.parent = this;
		this.instance_8.setTransform(641.1,767.2);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(766).to({_off:false},0).to({alpha:1},3).wait(113));
	
		// h5-8底图
		this.instance_9 = new lib.h58("synched",0);
		this.instance_9.parent = this;
		this.instance_9.setTransform(375,812);
	
		this.movieClip_6 = new lib.元件9();
		this.movieClip_6.parent = this;
		this.movieClip_6.setTransform(376,813);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},766).to({state:[{t:this.movieClip_6}]},115).wait(1));
	
		// 波浪
		this.instance_10 = new lib.bolang("synched",0);
		this.instance_10.parent = this;
		this.instance_10.setTransform(377.1,611.4,1,1,0,0,0,375,667);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(722).to({_off:false},0).to({alpha:1,startPosition:2},2).to({_off:true},42).wait(116));
	
		// 拨通底图
		this.instance_11 = new lib.h57("synched",0);
		this.instance_11.parent = this;
		this.instance_11.setTransform(375,812);
		this.instance_11.alpha = 0;
		this.instance_11._off = true;
	
		this.movieClip_5 = new lib.元件8();
		this.movieClip_5.parent = this;
		this.movieClip_5.setTransform(377,811);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},722).to({state:[{t:this.movieClip_5}]},2).to({state:[]},42).to({state:[]},49).wait(67));
		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(722).to({_off:false},0).to({_off:true,x:377,y:811,alpha:1,mode:"independent"},2).wait(158));
	
		// 文字
		this.instance_12 = new lib.wenzi1("synched",0);
		this.instance_12.parent = this;
		this.instance_12.setTransform(156,759);
		this.instance_12.alpha = 0;
		this.instance_12._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(655).to({_off:false},0).to({y:408.5,alpha:1},6,cjs.Ease.get(0.8)).to({_off:true},61).wait(160));
	
		// qq消息
		this.instance_13 = new lib.qqxiaoxianniu("synched",0);
		this.instance_13.parent = this;
		this.instance_13.setTransform(375,1697);
		this.instance_13._off = true;
	
		this.movieClip_4 = new lib.元件7();
		this.movieClip_4.parent = this;
		this.movieClip_4.setTransform(375,1442.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},667).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.movieClip_4}]},1).to({state:[]},44).to({state:[]},93).wait(67));
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(667).to({_off:false},0).to({y:1432.5},5,cjs.Ease.get(0.5)).to({y:1442.5},5,cjs.Ease.get(0.5)).to({_off:true},1).wait(204));
	
		// 页面5
		this.instance_14 = new lib.shoudaoqqxiaozi("synched",0);
		this.instance_14.parent = this;
		this.instance_14.setTransform(375,812);
		this.instance_14.alpha = 0;
		this.instance_14._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(651).to({_off:false},0).to({alpha:1,startPosition:6},6,cjs.Ease.get(0.5)).to({_off:true},65).wait(160));
	
		// 他
		this.instance_15 = new lib.ta("synched",0);
		this.instance_15.parent = this;
		this.instance_15.setTransform(481,423);
		this.instance_15._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(590).to({_off:false},0).to({rotation:-15},4).to({rotation:0},4).to({rotation:-15},4).to({rotation:0},4).to({rotation:-15},4).to({rotation:0},4).to({rotation:-15},4).to({rotation:0},4).to({rotation:-15},4).to({rotation:0},4).to({rotation:-15},5).to({rotation:0},5).to({rotation:-15},5).to({rotation:0},5).to({_off:true},1).wait(231));
	
		// 盘
		this.instance_16 = new lib.pan_1("synched",0);
		this.instance_16.parent = this;
		this.instance_16.setTransform(416.5,305);
		this.instance_16._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(590).to({_off:false},0).to({rotation:15},4).to({rotation:0},4).to({rotation:15},4).to({rotation:0},4).to({rotation:15},4).to({rotation:0},4).to({rotation:15},4).to({rotation:0},4).to({rotation:15},4).to({rotation:0},4).to({rotation:15},5).to({rotation:0},5).to({rotation:15},5).to({rotation:0},5).to({_off:true},1).wait(231));
	
		// 皇上盘他
		this.instance_17 = new lib.pantahuangshang("synched",0);
		this.instance_17.parent = this;
		this.instance_17.setTransform(703.7,1115.1,0.014,0.014);
		this.instance_17.alpha = 0;
		this.instance_17._off = true;
	
		this.movieClip_3 = new lib.元件6();
		this.movieClip_3.parent = this;
		this.movieClip_3.setTransform(375.5,591.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},586).to({state:[{t:this.movieClip_3}]},4).to({state:[]},61).to({state:[]},145).wait(86));
		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(586).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:375.5,y:591.5,alpha:1,mode:"independent"},4).wait(292));
	
		// 视频插入2
		this.instance_18 = new lib.shipingcharu2("synched",0,false);
		this.instance_18.parent = this;
		this.instance_18.setTransform(375,2188.9,1,1,0,0,0,375,2259.5);
		this.instance_18.alpha = 0;
		this.instance_18._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(367).to({_off:false},0).to({alpha:1,startPosition:5},5).wait(38).to({startPosition:43},0).to({alpha:0,startPosition:48},5).to({_off:true},1).wait(466));
	
		// 问号  复制 2
		this.instance_19 = new lib.wenhao_1("synched",0);
		this.instance_19.parent = this;
		this.instance_19.setTransform(461,524,1,1,0,0,0,-109,117);
		this.instance_19._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(304).to({_off:false},0).to({regY:117.1,rotation:6.7,y:524.1},5).to({regY:117,rotation:0,y:524},5).to({regY:117.1,rotation:6.7,y:524.1},5).to({regY:117,rotation:0,y:524},5).to({regY:117.1,rotation:6.7,y:524.1},5).to({regY:117,rotation:0,y:524},5).to({regY:117.1,rotation:6.7,y:524.1},5).to({regY:117,rotation:0,y:524},5).to({regY:117.1,rotation:6.7,y:524.1},5).to({regY:117,rotation:0,y:524},5).to({regY:117.1,rotation:6.7,y:524.1},6).to({regY:117,rotation:0,y:524},6).to({_off:true},1).wait(515));
	
		// 皇上疑问  复制 2
		this.instance_20 = new lib.yiwen("synched",0);
		this.instance_20.parent = this;
		this.instance_20.setTransform(703,1110.1,0.019,0.019,0,0,0,208.2,0);
		this.instance_20._off = true;
	
		this.movieClip_2 = new lib.元件5();
		this.movieClip_2.parent = this;
		this.movieClip_2.setTransform(350,645.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},298).to({state:[{t:this.movieClip_2}]},6).to({state:[]},63).to({state:[]},508).wait(7));
		this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(298).to({_off:false},0).to({_off:true,regX:0,scaleX:1,scaleY:1,x:350,y:645.5,mode:"independent"},6,cjs.Ease.get(1)).wait(578));
	
		// 视频插入1
		this.instance_21 = new lib.shipingcharu1("synched",0,false);
		this.instance_21.parent = this;
		this.instance_21.setTransform(375,2194.3,1,1,0,0,0,375,2259.5);
		this.instance_21.alpha = 0;
		this.instance_21._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(175).to({_off:false},0).to({alpha:1,startPosition:4},5,cjs.Ease.get(1)).wait(39).to({startPosition:43},0).to({alpha:0,startPosition:47},4).to({_off:true},1).wait(658));
	
		// 问号
		this.instance_22 = new lib.wenhao_1("synched",0);
		this.instance_22.parent = this;
		this.instance_22.setTransform(461,524,1,1,0,0,0,-109,117);
		this.instance_22._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(112).to({_off:false},0).to({regY:117.1,rotation:6.7,y:524.1},5).to({regY:117,rotation:0,y:524},5).to({regY:117.1,rotation:6.7,y:524.1},5).to({regY:117,rotation:0,y:524},5).to({regY:117.1,rotation:6.7,y:524.1},5).to({regY:117,rotation:0,y:524},5).to({regY:117.1,rotation:6.7,y:524.1},5).to({regY:117,rotation:0,y:524},5).to({regY:117.1,rotation:6.7,y:524.1},5).to({regY:117,rotation:0,y:524},5).to({regY:117.1,rotation:6.7,y:524.1},6).to({regY:117,rotation:0,y:524},6).to({_off:true},1).wait(707));
	
		// 皇上疑问
		this.instance_23 = new lib.yiwen("synched",0);
		this.instance_23.parent = this;
		this.instance_23.setTransform(703,1110.1,0.019,0.019,0,0,0,208.2,0);
		this.instance_23._off = true;
	
		this.movieClip_1 = new lib.元件3();
		this.movieClip_1.parent = this;
		this.movieClip_1.setTransform(350,645.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},106).to({state:[{t:this.movieClip_1}]},6).to({state:[]},63).to({state:[]},491).wait(216));
		this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(106).to({_off:false},0).to({_off:true,regX:0,scaleX:1,scaleY:1,x:350,y:645.5,mode:"independent"},6,cjs.Ease.get(1)).wait(770));
	
		// 暗底2
		this.instance_24 = new lib.black("synched",0);
		this.instance_24.parent = this;
		this.instance_24.setTransform(375.1,805.4);
		this.instance_24.alpha = 0;
		this.instance_24._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(106).to({_off:false},0).to({alpha:0.699},6).to({_off:true},112).wait(74).to({_off:false,alpha:0},0).to({alpha:0.699},6).to({_off:true},112).wait(170).to({_off:false,alpha:0},0).to({alpha:0.699},4).to({_off:true},61).wait(231));
	
		// 导航栏
		this.instance_25 = new lib.liaotianwenwubaiguan("synched",0);
		this.instance_25.parent = this;
		this.instance_25.setTransform(375,57.8);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(65).to({startPosition:0},0).to({y:-39.3},3).to({_off:true},583).wait(231));
	
		// 聊天对话
		this.instance_26 = new lib.liaotianqipaoduihua("synched",0);
		this.instance_26.parent = this;
		this.instance_26.setTransform(375,2558.6,1,1,0,0,0,375,2581.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(65).to({startPosition:65},0).to({y:2358.4,startPosition:68},3).wait(7).to({startPosition:75},0).to({y:2142.6,startPosition:79},4).wait(4).to({startPosition:83},0).to({y:1997,startPosition:85},2).wait(10).to({startPosition:95},0).to({y:1796.8,startPosition:97},2).wait(132).to({startPosition:229},0).to({y:1625.8,startPosition:233},4).wait(10).to({startPosition:243},0).to({y:1434.9,startPosition:246},3).wait(10).to({startPosition:256},0).to({y:1186.9,startPosition:258},2,cjs.Ease.get(-0.3)).wait(6).to({startPosition:264},0).to({y:987.4,startPosition:266},2,cjs.Ease.get(-0.3)).wait(14).to({startPosition:280},0).to({y:805,startPosition:283},3).wait(146).to({startPosition:429},0).to({y:656.8,startPosition:433},4).wait(5).to({startPosition:438},0).to({y:468.7,startPosition:440},2).wait(13).to({startPosition:453},0).to({y:260.7,startPosition:456},3).wait(9).to({startPosition:465},0).to({y:98.2,startPosition:468},3).wait(9).to({startPosition:477},0).to({y:-101.3,startPosition:481},4,cjs.Ease.get(-0.3)).wait(9).to({startPosition:490},0).to({y:-278,startPosition:494},4,cjs.Ease.get(-0.3)).wait(5).to({startPosition:499},0).to({y:-474.6,startPosition:501},2,cjs.Ease.get(-0.3)).wait(9).to({startPosition:510},0).to({y:-617.1,startPosition:512},2,cjs.Ease.get(-0.3)).wait(8).to({startPosition:520},0).to({y:-805.2,startPosition:522},2,cjs.Ease.get(-0.3)).wait(13).to({startPosition:535},0).to({y:-1164.3,startPosition:539},4,cjs.Ease.get(-0.3)).wait(20).to({startPosition:559},0).to({y:-1343.9,startPosition:561},2,cjs.Ease.get(-0.3)).wait(10).to({startPosition:571},0).to({y:-1557.6,startPosition:575},4,cjs.Ease.get(-0.3)).wait(3).to({startPosition:578},0).to({y:-1760,startPosition:581},3,cjs.Ease.get(-0.3)).to({_off:true},70).wait(231));
	
		// 背景图
		this.instance_27 = new lib.聊天背景();
		this.instance_27.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_27).to({_off:true},651).wait(231));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(375,812,750,1624);
	// library properties:
	lib.properties = {
		width: 750,
		height: 1624,
		fps: 12,
		color: "#666666",
		opacity: 1.00,
		webfonts: {},
		manifest: [
			{src:"images/main_h5_3_8_atlas_.png", id:"main_h5_3_8_atlas_"},
			{src:"images/main_h5_3_8_atlas_2.png", id:"main_h5_3_8_atlas_2"}
		],
		preloads: []
	};
	
	
	
	
	})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
	var lib, images, createjs, ss, AdobeAn;