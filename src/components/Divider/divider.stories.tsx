import React from 'react';
import { storiesOf } from '@storybook/react';


import Divider from './divider';

const defaultDivider = () => (
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider>Text</Divider>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider orientation="right">
            Left Text
        </Divider>
    </div>
)

storiesOf('Divider',module)
    .add('Divider', defaultDivider)