import React from 'react';
import { shallow } from 'enzyme';

import { LEFT_ARROW } from 'common/constants/icons';

import Icon from './Icon';

describe('<Icon />', () => {
  const DEFAULT_CSS_CLASS = 'icon';
  const DISABLED_CSS_CLASS = 'disabled';
  const CLICKABLE_CSS_CLASS = 'clickable';

  it(`should have the "${DEFAULT_CSS_CLASS}" CSS class when rendering`, () => {
    const wrapper = shallow(<Icon icon={LEFT_ARROW} />);
    expect(wrapper.hasClass(DEFAULT_CSS_CLASS)).toBe(true);
  });

  it('should have the provided CSS `className` along with the default one when rendering', () => {
    const fancyClass = 'fancy';
    const wrapper = shallow(<Icon icon={LEFT_ARROW} className={fancyClass} />);
    expect(wrapper.hasClass(fancyClass)).toBe(true);
    expect(wrapper.hasClass(DEFAULT_CSS_CLASS)).toBe(true);
  });

  it(`should have the "${DISABLED_CSS_CLASS}" CSS class along with the default one when \`isDisabled\` is true`, () => {
    const wrapper = shallow(<Icon icon={LEFT_ARROW} isDisabled />);
    expect(wrapper.hasClass('disabled')).toBe(true);
    expect(wrapper.hasClass(DEFAULT_CSS_CLASS)).toBe(true);
  });

  it('', () => {
    const awesomeClass = 'awesome';
    const wrapper = shallow(<Icon icon={LEFT_ARROW} isDisabled className={awesomeClass} />);
    expect(wrapper.hasClass('disabled')).toBe(true);
    expect(wrapper.hasClass(awesomeClass)).toBe(true);
    expect(wrapper.hasClass(DEFAULT_CSS_CLASS)).toBe(true);
  });

  it(`should have the "${CLICKABLE_CSS_CLASS}" CSS class along with the default one when \`onClick\` is provided and it is not disabled`, () => {
    const wrapper = shallow(<Icon icon={LEFT_ARROW} onClick={() => {}} />);
    expect(wrapper.hasClass(CLICKABLE_CSS_CLASS)).toBe(true);
    expect(wrapper.hasClass(DEFAULT_CSS_CLASS)).toBe(true);
  });

  it(`should not have the "${CLICKABLE_CSS_CLASS}" CSS class when it is disabled (even if \`onClick\` was provided)`, () => {
    const wrapper = shallow(<Icon isDisabled icon={LEFT_ARROW} onClick={() => {}} />);
    expect(wrapper.hasClass(CLICKABLE_CSS_CLASS)).toBe(false);
    expect(wrapper.hasClass(DEFAULT_CSS_CLASS)).toBe(true);
  });

  it('should call the `onClick` event handler when clicking on it and `isDisabled` is false', () => {
    const mockedOnClick = jest.fn();
    // `isDisabled` is false by default.
    const wrapper = shallow(<Icon icon={LEFT_ARROW} onClick={mockedOnClick} />);
    wrapper.simulate('click');
    expect(mockedOnClick).toHaveBeenCalled();
  });

  it('should not call the `onClick` event handler when clicking on it and `isDisabled` is true', () => {
    const mockedOnClick = jest.fn();
    const wrapper = shallow(<Icon icon={LEFT_ARROW} isDisabled onClick={mockedOnClick} />);
    wrapper.simulate('click');
    expect(mockedOnClick).not.toHaveBeenCalled();
  });

  it('should not crash if it is clicked and the `onClick` prop has not been provided', () => {
    const wrapper = shallow(<Icon icon={LEFT_ARROW} />);
    wrapper.simulate('click');
    expect(wrapper).toHaveLength(1);
  });

  it('should render the provided `icon`', () => {
    const wrapper = shallow(<Icon icon={LEFT_ARROW} />);
    expect(wrapper.find('path').prop('d')).toEqual(LEFT_ARROW);
  });

  it('should not render anything if no `icon` was provided', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('should render a `path` element painted with the provided `color`', () => {
    const color = '#000';
    const wrapper = shallow(<Icon icon={LEFT_ARROW} color={color} />);
    const pathWrapper = wrapper.find('path');
    expect(pathWrapper).toHaveLength(1);
    expect(pathWrapper.prop('fill')).toEqual(color);
  });
});
