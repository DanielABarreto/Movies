import React from 'react';
import { render } from '~/helpers';
import Svg from './index';

describe('Svg component', () => {
  describe.each`
    name
    ${'arrowLeft'}
    ${'arrowRight'}
    ${'edit'}
  `('$name', ({ name }: { name: string }) => {
    it(`should render ${name} svg`, () => {
      const { toJSON } = render(<Svg name="leftIcon" />);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe.each`
    size
    ${24}
  `('$size', ({ size }: { size: number }) => {
    it(`should render ${size} svg with height and with`, () => {
      const { toJSON } = render(
        <Svg name="leftIcon" height={size} width={size} />,
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
