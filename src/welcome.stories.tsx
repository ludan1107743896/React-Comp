import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 hardship 组件库</h1>
        <span>自定义仿照 antd 组件生成组件方法架构，搭建自己组件库</span>
        <h3>安装试试</h3>
        <code>
          npm install hardship --save
        </code>
      </>
    )
  }, { info : { disable: true }})