import { mount } from '../../../test';
import Indicator from '../../indicator';

test('should allow to custom Indicator type', () => {
    const wrapper = mount({
        render: () => <Indicator type="square" size="3" active="1" />,
    });

    expect(wrapper.find('.mi-indicator').html()).toMatchSnapshot();
});

test('should normalize numeric props from string values', () => {
    const wrapper = mount({
        render: () => <Indicator size="3" active="1" />,
    });

    const circles = wrapper.findAll('.mi-indicator__circle');
    expect(circles.length).toBe(3);
    expect(circles[1].classes()).toContain('mi-indicator__circle--active');
});

test('should not render indicators for invalid size', () => {
    const wrapper = mount({
        render: () => <Indicator size="foo" />,
    });

    expect(wrapper.findAll('i').length).toBe(0);
});

test('should render capsule type correctly', () => {
    const wrapper = mount({
        render: () => <Indicator type="capsule" size={4} active={1} />,
    });

    const items = wrapper.findAll('.mi-indicator__capsule');
    expect(items.length).toBe(4);
    expect(items[1].classes()).toContain('mi-indicator__capsule--active');
});

test('should render pulse type correctly', () => {
    const wrapper = mount({
        render: () => <Indicator type="pulse" size={4} active={3} />,
    });

    const items = wrapper.findAll('.mi-indicator__pulse');
    expect(items.length).toBe(4);
    expect(items[3].classes()).toContain('mi-indicator__pulse--active');
});

test('should render numbers with default padded text', () => {
    const wrapper = mount({
        render: () => <Indicator type="numbers" size={3} active={1} />,
    });

    const items = wrapper.findAll('.mi-indicator__numbers');
    expect(items.map((item) => item.text())).toEqual(['01', '02', '03']);
    expect(items[1].classes()).toContain('mi-indicator__numbers--active');
});

test('should support formatter for numbers type', () => {
    const wrapper = mount({
        render: () => (
            <Indicator
                type="numbers"
                size={3}
                active={0}
                formatter={(index) => `Step ${index + 1}`}
            />
        ),
    });

    const items = wrapper.findAll('.mi-indicator__numbers');
    expect(items.map((item) => item.text())).toEqual([
        'Step 1',
        'Step 2',
        'Step 3',
    ]);
});

test('should apply color style to active numbers only', () => {
    const wrapper = mount({
        render: () => <Indicator type="numbers" size={3} active={1} color="red" />,
    });

    const items = wrapper.findAll('.mi-indicator__numbers');
    expect(items[1].attributes('style')).toContain('color: red');
    expect(items[0].attributes('style')).toBeUndefined();
    expect(items[2].attributes('style')).toBeUndefined();
});
