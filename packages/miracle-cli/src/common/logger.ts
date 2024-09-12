import color from 'picocolors';
import { ROOT } from './constant.js';

export function slimPath(path: string) {
  return color.yellow(path.replace(ROOT, ''));
}
