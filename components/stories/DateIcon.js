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
  ))
  .add('without a month or date.', () => (
    <DateIcon></DateIcon>
  ))
  .add('at 2x size.', () => (
    <DateIcon length="300"></DateIcon>
  ))
  .add('at 0.5x size.', () => (
    <DateIcon length="75"></DateIcon>
  ));
