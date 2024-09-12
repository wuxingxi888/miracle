import { existsSync } from 'node:fs';
import { join, isAbsolute } from 'node:path';
import { getMiracleConfig } from './index.js';
import { STYLE_DIR, SRC_DIR } from './constant.js';

type CSS_LANG = 'css' | 'less' | 'scss';

function getCssLang(): CSS_LANG {
  const miracleConfig = getMiracleConfig();
  const preprocessor = miracleConfig.build?.css?.preprocessor || 'less';

  if (preprocessor === 'sass') {
    return 'scss';
  }

  return preprocessor;
}

export const CSS_LANG = getCssLang();

export function getCssBaseFile() {
  const miracleConfig = getMiracleConfig();
  let path = join(STYLE_DIR, `base.${CSS_LANG}`);

  const baseFile = miracleConfig.build?.css?.base || '';
  if (baseFile) {
    path = isAbsolute(baseFile) ? baseFile : join(SRC_DIR, baseFile);
  }

  if (existsSync(path)) {
    return path;
  }

  return null;
}

const IMPORT_STYLE_RE = /import\s+?(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

// "import 'a.less';" => "import 'a.css';"
export function replaceCSSImportExt(code: string) {
  return code.replace(IMPORT_STYLE_RE, (str) =>
    str.replace(`.${CSS_LANG}`, '.css'),
  );
}
