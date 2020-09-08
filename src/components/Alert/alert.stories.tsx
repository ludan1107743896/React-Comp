import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import Alert from './alert';

const defaultAlert = () => (
    <Alert message="Success Text" type="success" closable/>
)

storiesOf('Alert',module)
    .add('Alert', defaultAlert);