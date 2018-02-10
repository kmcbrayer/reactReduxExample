import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import NoteDashBoard from '../index';
import messages from '../messages';

describe('<NoteDashBoard />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <NoteDashBoard />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
