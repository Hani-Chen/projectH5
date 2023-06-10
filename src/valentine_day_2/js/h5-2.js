(function (lib, img, cjs, ss, an) {

	var p; // shortcut to reference prototypes
	lib.webFontTxtInst = {}; 
	var loadedTypekitCount = 0;
	var loadedGoogleCount = 0;
	var gFontsUpdateCacheList = [];
	var tFontsUpdateCacheList = [];
	lib.ssMetadata = [
			{name:"main _h5_atlas_", frames: [[752,6791,750,1334],[0,5165,750,1624],[0,6791,750,1334],[3008,5344,750,1334],[6768,1336,750,1334],[6016,0,750,1334],[3008,2672,750,1334],[2256,6501,750,1334],[3008,0,750,1334],[3008,1336,750,1334],[1504,6791,750,1334],[2256,5165,750,1334],[6016,1336,750,1334],[3008,4008,750,1334],[3760,0,750,1334],[4512,0,750,1334],[6768,0,750,1334],[5264,0,750,1334],[3760,1336,750,1334],[4512,1336,750,1334],[5264,1336,750,1334],[3760,2672,750,1334],[3008,6680,750,1334],[3760,6680,750,1334],[3760,4008,750,1334],[3760,5344,750,1334],[4512,2672,750,1334],[1504,5165,750,1624],[752,5165,750,1624],[0,0,750,5163],[1504,0,750,5163],[2256,0,750,5163],[752,0,750,5163],[4512,5344,750,1334],[6768,4008,750,1334],[5264,5344,750,1334],[6016,4008,750,1334],[5264,2672,750,1334],[6016,2672,750,1334],[6768,2672,750,1334],[4512,4008,750,1334],[4512,6680,750,1334],[5264,4008,750,1334],[5264,6680,750,1334],[6768,5344,750,1334],[6016,5344,750,1334],[6768,6680,750,1334],[6016,6680,750,1334]]},
			{name:"main _h5_atlas_2", frames: [[3969,1638,122,70],[3562,2367,360,153],[3812,1817,74,79],[3760,878,314,70],[4004,1516,84,98],[3826,1723,84,92],[3562,2666,421,112],[3912,1723,51,60],[3912,1806,84,92],[3760,795,304,81],[3741,1787,69,95],[3562,2223,405,142],[3741,1691,83,94],[3998,1806,84,92],[3741,1336,350,81],[3760,950,306,70],[2062,2672,360,117],[3999,1123,87,61],[4003,1419,90,95],[3562,2522,364,142],[3999,1022,92,99],[3596,2780,360,81],[3969,1710,83,94],[3562,1971,364,250],[3863,1541,139,95],[2424,2672,360,117],[3942,598,150,98],[1340,2901,750,52],[2092,2911,750,52],[588,2906,750,52],[2814,2801,750,53],[1340,2846,750,53],[2844,2856,750,53],[2092,2856,750,53],[2062,2791,750,53],[3760,1277,124,54],[3760,710,309,83],[3741,1419,120,160],[3760,468,180,240],[3841,1638,126,83],[3008,1971,552,828],[3977,1192,107,114],[3008,1336,731,633],[3863,1419,138,120],[3760,0,321,230],[0,2672,586,349],[1340,2672,720,123],[3760,232,218,234],[3760,1022,237,83],[2256,0,750,1334],[1504,0,750,1334],[0,0,750,1334],[0,1336,750,1334],[752,0,750,1334],[3008,0,750,1334],[2256,1336,750,1334],[752,1336,750,1334],[1504,1336,750,1334],[3760,1107,237,83],[3760,1192,215,83],[3980,232,107,364],[3741,1581,98,108],[588,2672,750,232]]}
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
	
	
	
	(lib._01 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._02 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._03 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._04 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._05 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._06 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._07 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._08 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._09 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._10 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._11 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._12 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._13 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._14 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._15 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._16 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._17 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._18 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._19 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._20 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._21 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._22 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._23 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._24 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._25 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._26 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._27 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.beijing = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_00 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_02 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_04 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_06 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_08 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_10 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_12 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bolang_14 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.daohanglan = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.ditu = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.gaolishi = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guaduanxiaotu = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_00 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_02 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_04 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_06 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_08 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_10 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_12 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_14 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_16 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_18 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_20 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_22 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_24 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_26 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_28 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_30 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_32 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_34 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_36 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_38 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_40 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_42 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_44 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeidangqiuqian_46 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeihuayuan1334 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guifeitouxiangxiaotu = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.h57ditu = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.huangshang = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.huangshangyiwen = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.聊天背景 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.jinruliaotianshi01 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.jinruliaotianshi02 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.jinruliaotianshi03 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.jinruliaotianshi04 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.pan = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.panta = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.qipaoguifeixiaotu = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.qipaohuangshangxiaotu = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.qitaanniuxiaotu = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(45);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.qq = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(46);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.wenhao = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(47);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangguozhong = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(48);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_00 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_02 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_04 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_06 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_08 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_10 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_12 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_14 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_16 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_18 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_20 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(49);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_22 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_24 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_26 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(45);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_28 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(50);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_30 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(46);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_32 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(51);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_34 = function() {
		this.spriteSheet = ss["main _h5_atlas_"];
		this.gotoAndStop(47);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_36 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(52);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_38 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(53);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_40 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(54);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_42 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(55);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_44 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(56);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yangyuhuanhuayuan_46 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(57);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yaochong = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(58);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.zhangjiuling = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(59);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.ziti = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(60);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.他 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(61);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.花1334 = function() {
		this.spriteSheet = ss["main _h5_atlas_2"];
		this.gotoAndStop(62);
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
	
		// 图层 1
		this.instance = new lib.qipaohuangshangxiaotu();
		this.instance.parent = this;
		this.instance.setTransform(-160.5,-115);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-160.5,-115,321,230);
	
	
	(lib.qipaoguifei = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.qipaoguifeixiaotu();
		this.instance.parent = this;
		this.instance.setTransform(-69,-60);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-69,-60,138,120);
	
	
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
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(49));
	
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
	
	
	(lib.guifeihuayuan = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.yangyuhuanhuayuan_00();
		this.instance.parent = this;
	
		this.instance_1 = new lib.yangyuhuanhuayuan_02();
		this.instance_1.parent = this;
	
		this.instance_2 = new lib.yangyuhuanhuayuan_04();
		this.instance_2.parent = this;
	
		this.instance_3 = new lib.yangyuhuanhuayuan_06();
		this.instance_3.parent = this;
	
		this.instance_4 = new lib.yangyuhuanhuayuan_08();
		this.instance_4.parent = this;
	
		this.instance_5 = new lib.yangyuhuanhuayuan_10();
		this.instance_5.parent = this;
	
		this.instance_6 = new lib.yangyuhuanhuayuan_12();
		this.instance_6.parent = this;
	
		this.instance_7 = new lib.yangyuhuanhuayuan_14();
		this.instance_7.parent = this;
	
		this.instance_8 = new lib.yangyuhuanhuayuan_16();
		this.instance_8.parent = this;
	
		this.instance_9 = new lib.yangyuhuanhuayuan_18();
		this.instance_9.parent = this;
	
		this.instance_10 = new lib.yangyuhuanhuayuan_20();
		this.instance_10.parent = this;
	
		this.instance_11 = new lib.yangyuhuanhuayuan_22();
		this.instance_11.parent = this;
	
		this.instance_12 = new lib.yangyuhuanhuayuan_24();
		this.instance_12.parent = this;
	
		this.instance_13 = new lib.yangyuhuanhuayuan_26();
		this.instance_13.parent = this;
	
		this.instance_14 = new lib.yangyuhuanhuayuan_28();
		this.instance_14.parent = this;
	
		this.instance_15 = new lib.yangyuhuanhuayuan_30();
		this.instance_15.parent = this;
	
		this.instance_16 = new lib.yangyuhuanhuayuan_32();
		this.instance_16.parent = this;
	
		this.instance_17 = new lib.yangyuhuanhuayuan_34();
		this.instance_17.parent = this;
	
		this.instance_18 = new lib.yangyuhuanhuayuan_36();
		this.instance_18.parent = this;
	
		this.instance_19 = new lib.yangyuhuanhuayuan_38();
		this.instance_19.parent = this;
	
		this.instance_20 = new lib.yangyuhuanhuayuan_40();
		this.instance_20.parent = this;
	
		this.instance_21 = new lib.yangyuhuanhuayuan_42();
		this.instance_21.parent = this;
	
		this.instance_22 = new lib.yangyuhuanhuayuan_44();
		this.instance_22.parent = this;
	
		this.instance_23 = new lib.yangyuhuanhuayuan_46();
		this.instance_23.parent = this;
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,750,1334);
	
	
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
	
		// 花
		this.instance = new lib.花1334();
		this.instance.parent = this;
		this.instance.setTransform(35,1104);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(312));
	
		// 贵妃花园
		this.instance_1 = new lib.guifeihuayuan("synched",0);
		this.instance_1.parent = this;
		this.instance_1.setTransform(375.7,706.5,0.907,0.907,0,0,0,375.4,667.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(312));
	
		// 背景
		this.instance_2 = new lib.guifeihuayuan1334();
		this.instance_2.parent = this;
		this.instance_2.setTransform(35,126,0.907,0.907);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(312));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(35,101.7,750,1234.3);
	
	
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
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},308).wait(384));
	
		// 进入聊天2
		this.instance_1 = new lib.jinruliaotian2("synched",0);
		this.instance_1.parent = this;
		this.instance_1.setTransform(375,2581.5);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({_off:true},307).wait(381));
	
		// 进入聊天3
		this.instance_2 = new lib.jinruliaotian3("synched",0);
		this.instance_2.parent = this;
		this.instance_2.setTransform(375,2581.5);
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true},307).wait(378));
	
		// 进入聊天4
		this.instance_3 = new lib.jinruliaotian4("synched",0);
		this.instance_3.parent = this;
		this.instance_3.setTransform(375,2581.5);
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({_off:true},306).wait(374));
	
		// 图层 54
		this.instance_4 = new lib._27_1("synched",0);
		this.instance_4.parent = this;
		this.instance_4.setTransform(580,5485);
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(546).to({_off:false},0).to({_off:true},58).wait(90));
	
		// 图层 53
		this.instance_5 = new lib._26_1("synched",0);
		this.instance_5.parent = this;
		this.instance_5.setTransform(475,5274.5);
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(539).to({_off:false},0).to({_off:true},65).wait(90));
	
		// 图层 52
		this.instance_6 = new lib._25_1("synched",0);
		this.instance_6.parent = this;
		this.instance_6.setTransform(586.5,5077.5);
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(531).to({_off:false},0).to({_off:true},73).wait(90));
	
		// 图层 51
		this.instance_7 = new lib._24_1("synched",0);
		this.instance_7.parent = this;
		this.instance_7.setTransform(273,4803);
		this.instance_7._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(512).to({_off:false},0).to({_off:true},92).wait(90));
	
		// 图层 50
		this.instance_8 = new lib._23_1("synched",0);
		this.instance_8.parent = this;
		this.instance_8.setTransform(613.5,4536);
		this.instance_8._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(498).to({_off:false},0).to({_off:true},106).wait(90));
	
		// 图层 49
		this.instance_9 = new lib._22_1("synched",0);
		this.instance_9.parent = this;
		this.instance_9.setTransform(475,4355.5);
		this.instance_9._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(488).to({_off:false},0).to({_off:true},116).wait(90));
	
		// 图层 48
		this.instance_10 = new lib._21_1("synched",0);
		this.instance_10.parent = this;
		this.instance_10.setTransform(141,4202.5);
		this.instance_10._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(477).to({_off:false},0).to({_off:true},127).wait(90));
	
		// 图层 47
		this.instance_11 = new lib._20_1("synched",0);
		this.instance_11.parent = this;
		this.instance_11.setTransform(272,3980);
		this.instance_11._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(468).to({_off:false},0).to({_off:true},136).wait(90));
	
		// 图层 46
		this.instance_12 = new lib._19_1("synched",0);
		this.instance_12.parent = this;
		this.instance_12.setTransform(610,3826.5);
		this.instance_12._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(456).to({_off:false},0).to({_off:true},148).wait(90));
	
		// 图层 45
		this.instance_13 = new lib._18_1("synched",0);
		this.instance_13.parent = this;
		this.instance_13.setTransform(138.5,3646.5);
		this.instance_13._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(445).to({_off:false},0).to({_off:true},159).wait(90));
	
		// 图层 44
		this.instance_14 = new lib._17_1("synched",0);
		this.instance_14.parent = this;
		this.instance_14.setTransform(475,3464.5);
		this.instance_14._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(434).to({_off:false},0).to({_off:true},170).wait(90));
	
		// 图层 43
		this.instance_15 = new lib._16_1("synched",0);
		this.instance_15.parent = this;
		this.instance_15.setTransform(244,3279);
		this.instance_15._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(420).to({_off:false},0).to({_off:true},184).wait(90));
	
		// 图层 42
		this.instance_16 = new lib._15_1("synched",0);
		this.instance_16.parent = this;
		this.instance_16.setTransform(481,3083.5);
		this.instance_16._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(412).to({_off:false},0).to({_off:true},192).wait(90));
	
		// 图层 41
		this.instance_17 = new lib._14_1("synched",0);
		this.instance_17.parent = this;
		this.instance_17.setTransform(613,2933);
		this.instance_17._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(278).to({_off:false},0).to({_off:true},326).wait(90));
	
		// 图层 40
		this.instance_18 = new lib._13_1("synched",0);
		this.instance_18.parent = this;
		this.instance_18.setTransform(136.5,2738);
		this.instance_18._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(266).to({_off:false},0).to({_off:true},338).wait(90));
	
		// 图层 39
		this.instance_19 = new lib._12_1("synched",0);
		this.instance_19.parent = this;
		this.instance_19.setTransform(292.5,2517);
		this.instance_19._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(257).to({_off:false},0).to({_off:true},347).wait(90));
	
		// 图层 38
		this.instance_20 = new lib._11_1("synched",0);
		this.instance_20.parent = this;
		this.instance_20.setTransform(130.5,2304.5);
		this.instance_20._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(242).to({_off:false},0).to({_off:true},362).wait(90));
	
		// 图层 37
		this.instance_21 = new lib._10_1("synched",0);
		this.instance_21.parent = this;
		this.instance_21.setTransform(503,2123.5);
		this.instance_21._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(233).to({_off:false},0).to({_off:true},371).wait(90));
	
		// 图层 36
		this.instance_22 = new lib._09_1("synched",0);
		this.instance_22.parent = this;
		this.instance_22.setTransform(613,1944);
		this.instance_22._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(99).to({_off:false},0).to({_off:true},466).wait(129));
	
		// 图层 35
		this.instance_23 = new lib._08_1("synched",0);
		this.instance_23.parent = this;
		this.instance_23.setTransform(120.5,1766);
		this.instance_23._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(89).to({_off:false},0).to({_off:true},476).wait(129));
	
		// 图层 34
		this.instance_24 = new lib._07_1("synched",0);
		this.instance_24.parent = this;
		this.instance_24.setTransform(300.5,1578);
		this.instance_24._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(76).to({_off:false},0).to({_off:true},489).wait(129));
	
		// 图层 33
		this.instance_25 = new lib._06_1("synched",0);
		this.instance_25.parent = this;
		this.instance_25.setTransform(614,1381);
		this.instance_25._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(66).to({_off:false},0).to({_off:true},499).wait(129));
	
		// 图层 32
		this.instance_26 = new lib.yaochong();
		this.instance_26.parent = this;
		this.instance_26.setTransform(15,1070);
	
		this.instance_27 = new lib._05_1("synched",0);
		this.instance_27.parent = this;
		this.instance_27.setTransform(138,1184);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_27},{t:this.instance_26}]},55).to({state:[]},510).wait(129));
	
		// 图层 31
		this.instance_28 = new lib._04_1("synched",0);
		this.instance_28.parent = this;
		this.instance_28.setTransform(247,997);
		this.instance_28._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(44).to({_off:false},0).to({_off:true},521).wait(129));
	
		// 图层 30
		this.instance_29 = new lib._03_1("synched",0);
		this.instance_29.parent = this;
		this.instance_29.setTransform(605,822.5);
		this.instance_29._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(37).to({_off:false},0).to({_off:true},526).wait(131));
	
		// 图层 29
		this.instance_30 = new lib._02_1("synched",0);
		this.instance_30.parent = this;
		this.instance_30.setTransform(475,614.5);
		this.instance_30._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(30).to({_off:false},0).to({_off:true},533).wait(131));
	
		// 图层 28
		this.instance_31 = new lib._01_1("synched",0);
		this.instance_31.parent = this;
		this.instance_31.setTransform(152,409);
		this.instance_31._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(20).to({_off:false},0).to({_off:true},543).wait(131));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,750,5664);
	
	
	(lib.元件14 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.h58("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(-1,-1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(-375,-812,750,1624), null);
	
	
	(lib.元件9 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.yiwen("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(275,188.5,1,1,0,0,0,206,188.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-276,-414,552,828), null);
	
	
	(lib.元件8 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.yiwen("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(275,188.5,1,1,0,0,0,206,188.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-276,-414,552,828), null);
	
	
	(lib.元件6 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.h57("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(-2,1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-375,-812,750,1624), null);
	
	
	(lib.元件5 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.qqxiaoxianniu("synched",0);
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-360,-61.5,720,123), null);
	
	
	(lib.元件3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.instance = new lib.pantahuangshang("synched",0);
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(-365.5,-316.5,731,633), null);
	
	
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
	(lib.main_h5 = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_120 = function() {
			/* Mouse Click 事件
			单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
			
			说明:
			1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
			单击此元件实例时，此代码将执行。
			*/
			
			this.movieClip_6.addEventListener("click", fl_MouseClickHandler_7.bind(this));
			
			function fl_MouseClickHandler_7()
			{
				// 开始您的自定义代码
				// 此示例代码在"输出"面板中显示"已单击鼠标"。
				console.log("出现疑问 点击皇上直接跳转御花园视频");
				this.gotoAndPlay(173);
				// 结束您的自定义代码
			}
		}
		this.frame_300 = function() {
			/* Mouse Click 事件
			单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
			
			说明:
			1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
			单击此元件实例时，此代码将执行。
			*/
			
			this.movieClip_7.addEventListener("click", fl_MouseClickHandler_8.bind(this));
			
			function fl_MouseClickHandler_8()
			{
				// 开始您的自定义代码
				// 此示例代码在"输出"面板中显示"已单击鼠标"。
				console.log("出现疑问 点击皇上直接跳转胭脂铺视频");
				this.gotoAndPlay(353);
				// 结束您的自定义代码
			}
		}
		this.frame_563 = function() {
			/* Mouse Click 事件
			单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
			
			说明:
			1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
			单击此元件实例时，此代码将执行。
			*/
			
			this.movieClip_2.addEventListener("click", fl_MouseClickHandler_3.bind(this));
			
			function fl_MouseClickHandler_3()
			{
				// 开始您的自定义代码
				// 此示例代码在"输出"面板中显示"已单击鼠标"。
				console.log("出现盘他 点击盘他直接跳转视频");
				this.gotoAndPlay(606);
				// 结束您的自定义代码
			}
		}
		this.frame_631 = function() {
			
			// 定义指向
			window.__animate_sence = this
			/* 跳转到通知开通SVIP页函数 */
			function showPageSvip(){
				// 通知开通SVIP页显示
				$('.inform-receptacle').addClass('show')
				// 动画页隐藏
				$('.groupchat-receptacle').removeClass('show')
				// 清除开通SVIP页定时跳转的定时器函数
				function eliminateSetTimeout (){
					// 清除定时器
					clearTimeout(TimeSvip);
					console.log("跳转接电话页面 ==> 清除定时器")
				}
				// 点击之后 过七秒跳转页面
				var TimeSvip =  setTimeout(function(){
					console.log('执行跳转接电话页面 ==> 定时器')
					// 动画页显示
					$('.groupchat-receptacle').addClass('show')
					// 会员通知页隐藏
					$('.inform-receptacle').removeClass('show')
					window.__animate_sence.gotoAndPlay(677);
					eliminateSetTimeout()
				},  5000)
				
			}

			// 如果未点击四秒后自动跳转到 通知开通SVIP页
			var Timetojump =  setTimeout(function(){
				console.log('未点击 ==> 执行定时器')
				// 停止播放
				window.__animate_sence.stop();
				// 跳转到通知开通SVIP页
				showPageSvip()
			},  3600)

			this.movieClip_3.addEventListener("click", fl_MouseClickHandler_4.bind(this));
			
			function fl_MouseClickHandler_4()
			{
				/// 停止播放
				this.stop();
				// 清除自动跳转定时器
				clearTimeout(Timetojump);
				console.log('清除定时器')
				console.log("已点击QQ消息 ==> 跳转页面","停止动画 ==> 下一页静态页面");
				// 跳转到通知开通SVIP页
				showPageSvip()
			}
			
		}
		this.frame_677 = function() {
			/* Mouse Click 事件
			单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
			
			说明:
			1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
			单击此元件实例时，此代码将执行。
			*/
			
			this.movieClip_4.addEventListener("click", fl_MouseClickHandler_5.bind(this));
			
			function fl_MouseClickHandler_5()
			{
				// 开始您的自定义代码
				// 此示例代码在"输出"面板中显示"已单击鼠标"。
				console.log("点击了接电话页面 跳转到接痛电话页面");
				this.gotoAndPlay(720);
				// 结束您的自定义代码
			}
		}
		this.frame_745 = function() {
			/* Mouse Click 事件
			单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
			
			说明:
			1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
			单击此元件实例时，此代码将执行。
			*/
			
			this.movieClip_11.addEventListener("click", fl_MouseClickHandler_13.bind(this));
			
			function fl_MouseClickHandler_13()
			{
				// 开始您的自定义代码
				// 此示例代码在"输出"面板中显示"已单击鼠标"。
				// 此示例代码在"输出"面板中显示"已单击鼠标"。
				console.log("跳转到落地页");

				showEnd()
				// 落地页显示
				// $('.lastPageLabel-receptacle').addClass('show')
				// // 动画页隐藏
				// $('.groupchat-receptacle').removeClass('show')
				// 结束您的自定义代码
			}
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(180).call(this.frame_300).wait(263).call(this.frame_563).wait(68).call(this.frame_631).wait(46).call(this.frame_677).wait(68).call(this.frame_745).wait(23));
	
		// 挂断
		this.instance = new lib.h58guaduan("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(375.7,1184);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(719).to({_off:false},0).wait(49));
	
		// 其他按钮
		this.instance_1 = new lib.qitaanniuxiaotu();
		this.instance_1.parent = this;
		this.instance_1.setTransform(83,915);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(719).to({_off:false},0).wait(49));
	
		// 气泡贵妃
		this.instance_2 = new lib.qipaoguifei("synched",0);
		this.instance_2.parent = this;
		this.instance_2.setTransform(587.7,748.4,0.023,0.023,0,0,0,41.1,54.1);
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(738).to({_off:false},0).to({regX:41.3,regY:54.8,scaleX:1,scaleY:1},6).wait(24));
	
		// 气泡皇上
		this.instance_3 = new lib.qipaohuangshang("synched",0);
		this.instance_3.parent = this;
		this.instance_3.setTransform(388.2,526.8,0.016,0.016,0,0,0,-147.9,109.4);
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(727).to({_off:false},0).to({regX:-148.3,regY:109.9,scaleX:1,scaleY:1,x:388.3},6).wait(35));
	
		// 贵妃头像
		this.instance_4 = new lib.guifeitouxiang("synched",0);
		this.instance_4.parent = this;
		this.instance_4.setTransform(641.8,764.3);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(719).to({_off:false},0).to({alpha:1},3).wait(46));
	
		// h5-8底图 复制
		this.movieClip_11 = new lib.元件14();
		this.movieClip_11.parent = this;
		this.movieClip_11.setTransform(376,813);
		this.movieClip_11._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.movieClip_11).wait(745).to({_off:false},0).wait(23));
	
		// h5-8底图
		this.instance_5 = new lib.h58("synched",0);
		this.instance_5.parent = this;
		this.instance_5.setTransform(375,812);
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(719).to({_off:false},0).to({_off:true},26).wait(23));
	
		// 波浪
		this.instance_6 = new lib.bolang("synched",0);
		this.instance_6.parent = this;
		this.instance_6.setTransform(377.1,611.4,1,1,0,0,0,375,667);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(675).to({_off:false},0).to({alpha:1,startPosition:2},2).to({_off:true},42).wait(49));
	
		// 拨通底图
		this.instance_7 = new lib.h57("synched",0);
		this.instance_7.parent = this;
		this.instance_7.setTransform(375,812);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;
	
		this.movieClip_4 = new lib.元件6();
		this.movieClip_4.parent = this;
		this.movieClip_4.setTransform(377,811);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},675).to({state:[{t:this.movieClip_4}]},2).to({state:[]},42).wait(49));
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(675).to({_off:false},0).to({_off:true,x:377,y:811,alpha:1,mode:"independent"},2).wait(91));
	
		// 文字
		this.instance_8 = new lib.wenzi1("synched",0);
		this.instance_8.parent = this;
		this.instance_8.setTransform(156,759);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(608).to({_off:false},0).to({y:408.5,alpha:1},6,cjs.Ease.get(0.8)).to({_off:true},61).wait(93));
	
		// qq消息
		this.instance_9 = new lib.qqxiaoxianniu("synched",0);
		this.instance_9.parent = this;
		this.instance_9.setTransform(375,1697);
		this.instance_9._off = true;
	
		this.movieClip_3 = new lib.元件5();
		this.movieClip_3.parent = this;
		this.movieClip_3.setTransform(375,1442.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},620).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.movieClip_3}]},1).to({state:[]},44).wait(93));
		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(620).to({_off:false},0).to({y:1432.5},5,cjs.Ease.get(0.5)).to({y:1442.5},5,cjs.Ease.get(0.5)).to({_off:true},1).wait(137));
	
		// 页面5
		this.instance_10 = new lib.shoudaoqqxiaozi("synched",0);
		this.instance_10.parent = this;
		this.instance_10.setTransform(375,812);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(604).to({_off:false},0).to({alpha:1,startPosition:6},6,cjs.Ease.get(0.5)).to({_off:true},65).wait(93));
	
		// 他
		this.instance_11 = new lib.ta("synched",0);
		this.instance_11.parent = this;
		this.instance_11.setTransform(481,423);
		this.instance_11._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(563).to({_off:false},0).to({rotation:-15},4).to({rotation:0},4).to({rotation:-15},4).to({rotation:0},4).to({rotation:-15},4).to({rotation:0},4).to({rotation:-15},4).to({rotation:0},4).to({rotation:-15},4).to({rotation:0},4).to({_off:true},1).wait(164));
	
		// 盘
		this.instance_12 = new lib.pan_1("synched",0);
		this.instance_12.parent = this;
		this.instance_12.setTransform(416.5,305);
		this.instance_12._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(563).to({_off:false},0).to({rotation:15},4).to({rotation:0},4).to({rotation:15},4).to({rotation:0},4).to({rotation:15},4).to({rotation:0},4).to({rotation:15},4).to({rotation:0},4).to({rotation:15},4).to({rotation:0},4).to({_off:true},1).wait(164));
	
		// 皇上盘他
		this.instance_13 = new lib.pantahuangshang("synched",0);
		this.instance_13.parent = this;
		this.instance_13.setTransform(703.7,1115.1,0.014,0.014);
		this.instance_13.alpha = 0;
		this.instance_13._off = true;
	
		this.movieClip_2 = new lib.元件3();
		this.movieClip_2.parent = this;
		this.movieClip_2.setTransform(375.5,591.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},559).to({state:[{t:this.movieClip_2}]},4).to({state:[]},41).wait(164));
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(559).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:375.5,y:591.5,alpha:1,mode:"independent"},4).wait(205));
	
		// 视频插入2
		this.instance_14 = new lib.shipingcharu2("synched",0,false);
		this.instance_14.parent = this;
		this.instance_14.setTransform(375,2188.9,1,1,0,0,0,375,2259.5);
		this.instance_14.alpha = 0;
		this.instance_14._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(351).to({_off:false},0).to({alpha:1,startPosition:5},5).wait(38).to({startPosition:43},0).to({alpha:0,startPosition:48},5).to({_off:true},1).wait(368));
	
		// 问号 复制
		this.instance_15 = new lib.wenhao_1("synched",0);
		this.instance_15.parent = this;
		this.instance_15.setTransform(439,524,1,1,0,0,0,-109,117);
		this.instance_15._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(300).to({_off:false},0).to({rotation:5.2,x:439.1},5).to({rotation:-4.2,y:524.1},5).to({rotation:5.2,y:524},5).to({rotation:-4.2,y:524.1},5).to({rotation:5.2,y:524},5).to({rotation:-4.2,y:524.1},5).to({rotation:5.2,y:524},5).to({rotation:-4.2,y:524.1},5).to({rotation:5.2,y:524},5).to({rotation:-4.2,y:524.1},5).to({_off:true},1).wait(417));
	
		// 皇上疑问 复制
		this.instance_16 = new lib.yiwen("synched",0);
		this.instance_16.parent = this;
		this.instance_16.setTransform(703,1110.1,0.019,0.019,0,0,0,208.2,0);
		this.instance_16._off = true;
	
		this.movieClip_7 = new lib.元件9();
		this.movieClip_7.parent = this;
		this.movieClip_7.setTransform(584,645.5,1,1,0,0,0,276,0);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},294).to({state:[{t:this.movieClip_7}]},6).to({state:[]},51).to({state:[]},416).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(294).to({_off:false},0).to({_off:true,regX:276,scaleX:1,scaleY:1,x:584,y:645.5,mode:"independent"},6,cjs.Ease.get(1)).wait(468));
	
		// 视频插入1
		this.instance_17 = new lib.shipingcharu1("synched",0,false);
		this.instance_17.parent = this;
		this.instance_17.setTransform(375,2194.3,1,1,0,0,0,375,2259.5);
		this.instance_17.alpha = 0;
		this.instance_17._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(171).to({_off:false},0).to({alpha:1,startPosition:4},5,cjs.Ease.get(1)).wait(39).to({startPosition:43},0).to({alpha:0,startPosition:47},4).to({_off:true},1).wait(548));
	
		// 问号
		this.instance_18 = new lib.wenhao_1("synched",0);
		this.instance_18.parent = this;
		this.instance_18.setTransform(439,524,1,1,0,0,0,-109,117);
		this.instance_18._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(120).to({_off:false},0).to({rotation:5.2,x:439.1},5).to({rotation:-4.2,y:524.1},5).to({rotation:5.2,y:524},5).to({rotation:-4.2,y:524.1},5).to({rotation:5.2,y:524},5).to({rotation:-4.2,y:524.1},5).to({rotation:5.2,y:524},5).to({rotation:-4.2,y:524.1},5).to({rotation:5.2,y:524},5).to({rotation:-4.2,y:524.1},5).to({_off:true},1).wait(597));
	
		// 皇上疑问
		this.instance_19 = new lib.yiwen("synched",0);
		this.instance_19.parent = this;
		this.instance_19.setTransform(703,1110.1,0.019,0.019,0,0,0,208.2,0);
		this.instance_19._off = true;
	
		this.movieClip_6 = new lib.元件8();
		this.movieClip_6.parent = this;
		this.movieClip_6.setTransform(584,645.5,1,1,0,0,0,276,0);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},114).to({state:[{t:this.movieClip_6}]},6).to({state:[]},51).to({state:[]},503).wait(94));
		this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(114).to({_off:false},0).to({_off:true,regX:276,scaleX:1,scaleY:1,x:584,y:645.5,mode:"independent"},6,cjs.Ease.get(1)).wait(648));
	
		// 暗底2
		this.instance_20 = new lib.black("synched",0);
		this.instance_20.parent = this;
		this.instance_20.setTransform(375.1,805.4);
		this.instance_20.alpha = 0;
		this.instance_20._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(114).to({_off:false},0).to({alpha:0.699},6).to({_off:true},100).wait(74).to({_off:false,alpha:0},0).to({alpha:0.699},6).to({_off:true},100).wait(159).to({_off:false,alpha:0},0).to({alpha:0.699},4).to({_off:true},41).wait(164));
	
		// 导航栏
		this.instance_21 = new lib.liaotianwenwubaiguan("synched",0);
		this.instance_21.parent = this;
		this.instance_21.setTransform(375,57.8);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(65).to({startPosition:0},0).to({y:-42.7},3).to({_off:true},552).wait(148));
	
		// 聊天对话
		this.instance_22 = new lib.liaotianqipaoduihua("synched",0);
		this.instance_22.parent = this;
		this.instance_22.setTransform(375,2558.6,1,1,0,0,0,375,2581.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(65).to({y:2559.2,startPosition:65},0).to({y:2369.4,startPosition:68},3).wait(7).to({startPosition:75},0).to({y:2157.5,startPosition:79},4).wait(9).to({startPosition:88},0).to({y:1993.7,startPosition:91},3).wait(7).to({startPosition:98},0).to({y:1806.5,startPosition:102},4).wait(130).to({startPosition:232},0).to({y:1623.2,startPosition:235},3).wait(6).to({startPosition:241},0).to({y:1446.2,startPosition:245},4).wait(11).to({startPosition:256},0).to({y:1205.2,startPosition:259},3).wait(6).to({startPosition:265},0).to({y:1010.2,startPosition:269},4).wait(8).to({startPosition:277},0).to({y:818.2,startPosition:281},4).wait(130).to({startPosition:411},0).to({y:658.4,startPosition:415},4).wait(4).to({startPosition:419},0).to({y:469.7,startPosition:422},3).wait(11).to({startPosition:433},0).to({y:255.5,startPosition:437},4).wait(7).to({startPosition:444},0).to({y:104.2,startPosition:448},4).wait(7).to({startPosition:455},0).to({y:-81.1,startPosition:458},3).wait(9).to({startPosition:467},0).to({y:-269.8,startPosition:470},3).wait(6).to({startPosition:476},0).to({y:-470.4,startPosition:480},4).wait(7).to({startPosition:487},0).to({y:-613.2,startPosition:491},4).wait(6).to({startPosition:497},0).to({y:-796.8,startPosition:500},3).wait(11).to({startPosition:511},0).to({y:-1148.7,startPosition:515},4).wait(15).to({startPosition:530},0).to({y:-1339.1,startPosition:534},4).wait(4).to({startPosition:538},0).to({y:-1548.2,startPosition:541},3).wait(4).to({startPosition:545},0).to({y:-1757.3,startPosition:548},3).to({_off:true},56).wait(164));
	
		// 背景图
		this.instance_23 = new lib.聊天背景();
		this.instance_23.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:true},604).wait(164));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(375,812,750,1624);
	// library properties:
	lib.properties = {
		width: 750,
		height: 1624,
		fps: 12,
		color: "#666666",
		opacity: 0.00,
		webfonts: {},
		manifest: [
			{src:"images/main_h5_atlas_.png", id:"main _h5_atlas_"},
			{src:"images/main_h5_atlas_2.png", id:"main _h5_atlas_2"}
		],
		preloads: []
	};
	
	
	
	
	})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
	var lib, images, createjs, ss, AdobeAn;