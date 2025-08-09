import { defineComponent, type ExtractPropTypes } from 'vue';

import { createNamespace, makeNumericProp, makeStringProp } from '../utils';

const [name, bem] = createNamespace('indicator');

export const indicatorProps = {
    type: makeStringProp<IndicatorType>('circle'),
    color: String,
    direction: makeStringProp<IndicatorDirection>('horizontal'),
    size: makeNumericProp(1),
    active: makeNumericProp(0),
};

export type IndicatorProps = ExtractPropTypes<typeof indicatorProps>;

export type IndicatorDirection = 'horizontal' | 'vertical';

export type IndicatorType = 'circle' | 'square' | 'line';

export default defineComponent({
    name,

    props: indicatorProps,

    setup(props) {
        return () => {
            const { type, color, size, active, direction } = props;

            const renderIndicator = (shape: string, isActive: boolean) => {
                const style = isActive ? { backgroundColor: color } : undefined;
                const classes = bem(shape, {
                    active: isActive,
                    [direction]: shape === 'line',
                });

                return <i style={style} class={classes}></i>;
            };

            const renderIndicators = (index: number) => {
                const isActive = index === active;
                return renderIndicator(type, isActive);
            };

            return (
                <div class={bem()}>
                    <div class={bem('indicators', { [direction]: true })}>
                        {Array(size)
                            .fill('')
                            .map((_, index) => renderIndicators(index))}
                    </div>
                </div>
            );
        };
    },
});
