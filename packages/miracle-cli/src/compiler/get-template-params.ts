import { getMiracleConfig, isDev } from '../common/index.js';

function getSiteConfig(miracleConfig: any) {
  const siteConfig = miracleConfig.site;

  if (siteConfig.locales) {
    return siteConfig.locales[siteConfig.defaultLang || 'en-US'];
  }

  return siteConfig;
}

function getTitle(config: { title: string; description?: string }) {
  let { title } = config;

  if (config.description) {
    title += ` - ${config.description}`;
  }

  return title;
}

function getHTMLMeta(miracleConfig: any) {
  const meta = miracleConfig.site?.htmlMeta;

  if (meta) {
    return Object.keys(meta)
      .map((key) => `<meta name="${key}" content="${meta[key]}">`)
      .join('\n');
  }

  return '';
}

export function getTemplateParams() {
  const miracleConfig = getMiracleConfig();
  const siteConfig = getSiteConfig(miracleConfig);
  const title = getTitle(siteConfig);
  const headHtml = miracleConfig.site?.headHtml;
  const baiduAnalytics = miracleConfig.site?.baiduAnalytics;
  const enableVConsole = isDev() && miracleConfig.site?.enableVConsole;

  return {
    ...siteConfig,
    title,
    // `description` is used by the HTML ejs template,
    // so it needs to be written explicitly here to avoid error: description is not defined
    description: siteConfig.description,
    headHtml,
    baiduAnalytics,
    enableVConsole,
    meta: getHTMLMeta(miracleConfig),
  };
}
