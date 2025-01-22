import { mount } from '../../../test';
import Indicator from '../../indicator';

test('should allow to custom Indicator type', () => {
  const wrapper = mount({
    render: () => <Indicator type="square" size="3" active="1" />,
  });

  expect(wrapper.find('.mi-indicator').html()).toMatchSnapshot();
});
