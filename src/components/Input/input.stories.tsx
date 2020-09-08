import React from 'react';
import { storiesOf } from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Input from './index';

const defaultInput = () => (
    <Input placeholder="default input" onChange={action('changed')} />
)

const inputWithSize = () => (
    <>
        <Input 
            placeholder="default input" 
            inputSize="lg"
        />
        <Input 
            placeholder="default input" 
            inputSize="sm" 
        />
    </>
)

storiesOf('Input', module)
    .add('Input', defaultInput, {
        info: {
            text: `这是hard-ship-view 组件库中Input组件，这是默认组件具有的特性`,
        },
    })
    .add('input 大小', inputWithSize)


    