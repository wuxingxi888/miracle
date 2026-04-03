import { defineComponent, type ExtractPropTypes, type PropType } from 'vue';

import { createNamespace, makeNumericProp, makeStringProp } from '../utils';

const [name, bem] = createNamespace('indicator');

export const indicatorProps = {
    type: makeStringProp<IndicatorType>('circle'),
    color: String,
    direction: makeStringProp<IndicatorDirection>('horizontal'),
    size: makeNumericProp(1),
    active: makeNumericProp(0),
    formatter: Function as PropType<(index: number) => string>,
};

export type IndicatorProps = ExtractPropTypes<typeof indicatorProps>;

export type IndicatorDirection = 'horizontal' | 'vertical';

export type IndicatorType =
    | 'circle'
    | 'square'
    | 'line'
    | 'capsule'
    | 'numbers'
    | 'pulse';

export default defineComponent({
    name,

    props: indicatorProps,

    setup(props) {
        return () => {
            const { type, color, size, active, direction, formatter } = props;
            const normalizedSize = Math.max(0, Number(size) || 0);
            const normalizedActive = Number(active);
            const isNumbersType = type === 'numbers';

            const renderIndicator = (
                shape: string,
                isActive: boolean,
                key: number,
            ) => {
                const style = isActive
                    ? isNumbersType
                        ? { color }
                        : { backgroundColor: color }
                    : undefined;
                const classes = bem(shape, {
                    active: isActive,
                    [direction]: shape === 'line' || shape === 'capsule',
                });
                const text =
                    shape === 'numbers'
                        ? formatter?.(key) || String(key + 1).padStart(2, '0')
                        : undefined;

                return (
                    <i key={key} style={style} class={classes}>
                        {text}
                    </i>
                );
            };

            const renderIndicators = (index: number) => {
                const isActive = index === normalizedActive;
                return renderIndicator(type, isActive, index);
            };

            return (
                <div class={bem()}>
                    <div class={bem('indicators', { [direction]: true })}>
                        {Array(normalizedSize)
                            .fill('')
                            .map((_, index) => renderIndicators(index))}
                    </div>
                </div>
            );
        };
    },
});
