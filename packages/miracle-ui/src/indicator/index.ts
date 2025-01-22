import { withInstall } from '../utils';
import _Indicator from './Indicator';

export const Indicator = withInstall(_Indicator);
export default Indicator;
export { indicatorProps } from './Indicator';
export type { IndicatorProps, IndicatorDirection } from './Indicator';

declare module 'vue' {
  export interface GlobalComponents {
    MiIndicator: typeof Indicator;
  }
}
