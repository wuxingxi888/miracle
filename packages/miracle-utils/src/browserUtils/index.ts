type BrowserInfo = {
  engine: string; // 内核: webkit gecko presto trident
  engineVs: string; // 内核版本
  platform: string; // 平台: desktop mobile
  supporter: string; // 载体: chrome safari firefox opera iexplore edge
  supporterVs: string; // 载体版本
  system: string; // 系统: windows macos linux android ios
  systemVs: string; // 系统版本
  shell?: string; // 外壳: wechat qq uc 360 2345 sougou liebao maxthon
  shellVs?: string; // 外壳版本
};

export function BrowserType(): BrowserInfo {
  const ua = navigator.userAgent.toLowerCase();
  const testUa = (regexp: RegExp) => regexp.test(ua);
  const testVs = (regexp: RegExp) =>
    ua
      .match(regexp)?.[0]
      ?.replace(/[^0-9|_.]/g, '')
      .replace(/_/g, '.') || 'unknow';

  // 系统及版本
  const systems = [
    { name: 'windows', regex: /windows|win32|win64|wow32|wow64/g },
    { name: 'macos', regex: /macintosh|macintel/g },
    { name: 'linux', regex: /x11/g },
    { name: 'android', regex: /android|adr/g },
    { name: 'ios', regex: /ios|iphone|ipad|ipod|iwatch/g },
  ];
  const system = systems.find((sys) => testUa(sys.regex))?.name || 'unknow';

  const systemVersions = {
    windows: testVs(/windows nt [\d._]+/g),
    macos: testVs(/os x [\d._]+/g),
    android: testVs(/android [\d._]+/g),
    ios: testVs(/os [\d._]+/g),
  };

  // 限制 system 的类型
  const systemKey = system as keyof typeof systemVersions;
  const systemVs = systemVersions[systemKey] || 'unknow';

  // 平台
  const platform = ['windows', 'macos', 'linux'].includes(system)
    ? 'desktop'
    : 'mobile';

  // 内核和载体
  const engines = [
    { name: 'webkit', regex: /applewebkit/g },
    { name: 'gecko', regex: /gecko/g },
    { name: 'presto', regex: /presto/g },
    { name: 'trident', regex: /trident|compatible|msie/g },
  ];
  const engine = engines.find((eng) => testUa(eng.regex))?.name || 'unknow';
  const engineVs = testVs(new RegExp(`${engine}/[\\d._]+`, 'g')) || 'unknow';

  const supporters = [
    { name: 'chrome', regex: /chrome/g },
    { name: 'safari', regex: /safari/g },
    { name: 'firefox', regex: /firefox/g },
    { name: 'opera', regex: /opr/g },
    { name: 'edge', regex: /edge/g },
    { name: 'iexplore', regex: /(msie|rv:)/g },
  ];
  const supporter =
    supporters.find((sup) => testUa(sup.regex))?.name || 'unknow';
  const supporterVs =
    testVs(new RegExp(`${supporter}/[\\d._]+`, 'g')) || 'unknow';

  // 外壳及版本
  const shells = [
    { name: 'wechat', regex: /micromessenger/g },
    { name: 'qq', regex: /qqbrowser/g },
    { name: 'uc', regex: /ucbrowser/g },
    { name: '360', regex: /qihu 360se/g },
    { name: '2345', regex: /2345explorer/g },
    { name: 'sougou', regex: /metasr/g },
    { name: 'liebao', regex: /lbbrowser/g },
    { name: 'maxthon', regex: /maxthon/g },
  ];
  const shellInfo = shells.find((sh) => testUa(sh.regex)) || {
    name: 'none',
    regex: null,
  };
  const shell = shellInfo.name;
  const shellVs = shell !== 'none' ? testVs(shellInfo.regex!) : 'unknow';

  // 返回结果
  const result: BrowserInfo = {
    engine,
    engineVs,
    platform,
    supporter,
    supporterVs,
    system,
    systemVs,
  };

  if (shell !== 'none') {
    result.shell = shell;
    result.shellVs = shellVs;
  }

  return result;
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
