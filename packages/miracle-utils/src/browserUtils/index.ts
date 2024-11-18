export function BrowserType(lang: 'zh-cn' | 'en' = 'en') {
  // 权重：系统 + 系统版本 > 平台 > 内核 + 载体 + 内核版本 + 载体版本 > 外壳 + 外壳版本
  const ua = navigator.userAgent.toLowerCase();
  const testUa = (regexp: RegExp) => regexp.test(ua);
  const testVs = (regexp: RegExp) =>
    ua
      .match(regexp)
      ?.toString()
      .replace(/[^0-9|_.]/g, '')
      .replace(/_/g, '.');

  // 系统
  const system =
    new Map([
      [testUa(/windows|win32|win64|wow32|wow64/g), 'windows'], // windows系统
      [testUa(/macintosh|macintel/g), 'macos'], // macos系统
      [testUa(/x11/g), 'linux'], // linux系统
      [testUa(/android|adr/g), 'android'], // android系统
      [testUa(/ios|iphone|ipad|ipod|iwatch/g), 'ios'], // ios系统
    ]).get(true) || 'unknow';

  // 系统版本
  const systemVs =
    new Map([
      [
        'windows',
        new Map([
          [testUa(/windows nt 5.0|windows 2000/g), '2000'],
          [testUa(/windows nt 5.1|windows xp/g), 'xp'],
          [testUa(/windows nt 5.2|windows 2003/g), '2003'],
          [testUa(/windows nt 6.0|windows vista/g), 'vista'],
          [testUa(/windows nt 6.1|windows 7/g), '7'],
          [testUa(/windows nt 6.2|windows 8/g), '8'],
          [testUa(/windows nt 6.3|windows 8.1/g), '8.1'],
          [testUa(/windows nt 10.0|windows 10/g), '10'],
        ]).get(true),
      ],
      ['macos', testVs(/os x [\d._]+/g)],
      ['android', testVs(/android [\d._]+/g)],
      ['ios', testVs(/os [\d._]+/g)],
    ]).get(system) || 'unknow';

  // 平台
  let platform = 'unknow';
  if (system === 'windows' || system === 'macos' || system === 'linux') {
    platform = 'desktop'; // 桌面端
  } else if (system === 'android' || system === 'ios' || testUa(/mobile/g)) {
    platform = 'mobile'; // 移动端
  }

  // 内核和载体
  const [engine = 'unknow', supporter = 'unknow'] = (() => {
    const engines = new Map([
      [testUa(/applewebkit/g), 'webkit'], // webkit内核
      [testUa(/gecko/g) && testUa(/firefox/g), 'gecko'], // gecko内核
      [testUa(/presto/g), 'presto'], // presto内核
      [testUa(/trident|compatible|msie/g), 'trident'], // trident内核
    ]);

    const supporters = new Map([
      [testUa(/safari/g), 'safari'], // safari浏览器
      [testUa(/chrome/g), 'chrome'], // chrome浏览器
      [testUa(/opr/g), 'opera'], // opera浏览器
      [testUa(/edge/g), 'edge'], // edge浏览器
      [testUa(/firefox/g), 'firefox'], // firefox浏览器
      [testUa(/opera/g), 'opera'], // opera浏览器
      [testUa(/iexplore/g), 'iexplore'], // iexplore浏览器
    ]);

    const engineKey = Array.from(engines.keys()).find((key) => key);
    const supporterKey = Array.from(supporters.keys()).find((key) => key);

    return [
      engineKey ? engines.get(engineKey) : 'unknow',
      supporterKey ? supporters.get(supporterKey) : 'unknow',
    ];
  })();

  // 内核版本
  const engineVs =
    new Map([
      ['webkit', testVs(/applewebkit\/[\d._]+/g)],
      ['gecko', testVs(/gecko\/[\d._]+/g)],
      ['presto', testVs(/presto\/[\d._]+/g)],
      ['trident', testVs(/trident\/[\d._]+/g)],
    ]).get(engine) || 'unknow';

  // 载体版本
  const supporterVs =
    new Map([
      ['firefox', testVs(/firefox\/[\d._]+/g)],
      ['opera', testVs(/opr\/[\d._]+/g)],
      ['iexplore', testVs(/(msie [\d._]+)|(rv:[\d._]+)/g)],
      ['edge', testVs(/edge\/[\d._]+/g)],
      ['safari', testVs(/version\/[\d._]+/g)],
      ['chrome', testVs(/chrome\/[\d._]+/g)],
    ]).get(supporter) || 'unknow';

  // 外壳和外壳版本
  const [shell = 'none', shellVs = 'unknow'] = new Map([
    [testUa(/micromessenger/g), ['wechat', testVs(/micromessenger\/[\d._]+/g)]], // [微信浏览器,]
    [testUa(/qqbrowser/g), ['qq', testVs(/qqbrowser\/[\d._]+/g)]], // [QQ浏览器,]
    [testUa(/ucbrowser/g), ['uc', testVs(/ucbrowser\/[\d._]+/g)]], // [UC浏览器,]
    [testUa(/qihu 360se/g), ['360', 'unknow']], // [360浏览器(无版本),]
    [testUa(/2345explorer/g), ['2345', testVs(/2345explorer\/[\d._]+/g)]], // [2345浏览器,]
    [testUa(/metasr/g), ['sougou', 'unknow']], // [搜狗浏览器(无版本),]
    [testUa(/lbbrowser/g), ['liebao', 'unknow']], // [猎豹浏览器(无版本),]
    [testUa(/maxthon/g), ['maxthon', testVs(/maxthon\/[\d._]+/g)]], // [遨游浏览器,]
  ]).get(true) || ['none', 'unknow'];

  return {
    'zh-cn': Object.assign(
      {
        内核: engine, // 内核: webkit gecko presto trident
        内核版本: engineVs, // 内核版本
        平台: platform, // 平台: desktop mobile
        载体: supporter, // 载体: chrome safari firefox opera iexplore edge
        载体版本: supporterVs, // 载体版本
        系统: system, // 系统: windows macos linux android ios
        系统版本: systemVs, // 系统版本
      },
      shell === 'none'
        ? {}
        : {
            外壳: shell, // 外壳: wechat qq uc 360 2345 sougou liebao maxthon
            外壳版本: shellVs, // 外壳版本
          },
    ),
    en: Object.assign(
      {
        engine, // 内核: webkit gecko presto trident
        engineVs, // 内核版本
        platform, // 平台: desktop mobile
        supporter, // 载体: chrome safari firefox opera iexplore edge
        supporterVs, // 载体版本
        system, // 系统: windows macos linux android ios
        systemVs, // 系统版本
      },
      shell === 'none'
        ? {}
        : {
            shell, // 外壳: wechat qq uc 360 2345 sougou liebao maxthon
            shellVs, // 外壳版本
          },
    ),
  }[lang];
}

/**
 * 判断当前设备和浏览器环境
 *
 * 此函数通过解析用户代理（User Agent）字符串来检测当前设备类型和环境
 *
 * @returns {Object} 返回一个包含以下属性的对象：
 * - isAndroid: {boolean} 是否为Android设备
 * - isiOS: {boolean} 是否为iOS设备
 * - isWeChat: {boolean} 是否为微信浏览器
 */
export function judgeSystem() {
  // 获取用户代理字符串
  const u = navigator.userAgent;

  // 判断是否为Android设备
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;

  // 判断是否为iOS设备
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  // 判断是否为微信浏览器
  const isWeChat = /MicroMessenger/i.test(navigator.userAgent);

  // 判断是否为移动设备
  const isMobile =
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

  // 返回设备和浏览器环境信息
  return {
    isAndroid,
    isiOS,
    isWeChat,
    isMobile,
  };
}
