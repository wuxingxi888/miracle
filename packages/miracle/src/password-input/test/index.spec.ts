import { mount } from '../../../test';
import { PasswordInput } from '..';

test('should emit focus event when security is touched', () => {
  const wrapper = mount(PasswordInput);
  wrapper.find('.mi-password-input__security').trigger('touchstart');
  expect(wrapper.emitted('focus')).toHaveLength(1);
});

test('should render error info correctly', () => {
  const wrapper = mount(PasswordInput, {
    props: {
      errorInfo: 'error!',
    },
  });
  expect(
    wrapper.find('.mi-password-input__error-info').html(),
  ).toMatchSnapshot();
});
