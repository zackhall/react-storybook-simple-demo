import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DateIcon from '../DateIcon';

storiesOf('DateIcon', module)
  .add('with a month and date', () => (
    <DateIcon month="April" date="26"></DateIcon>
  ))
  .add('with a month', () => (
    <DateIcon month="April"></DateIcon>
  ))
  .add('with a date', () => (
    <DateIcon date="26"></DateIcon>
  ));
