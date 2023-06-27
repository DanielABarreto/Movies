import 'react-native';
import React from 'react';
import { render } from '~/helpers';
import Details from './index';

describe('Details screen', () => {
  it('should render details screen', () => {
    const { container } = render(<Details />);

    expect(container).not.toBeNull();
  });
});
