import React, {FC, ReactNode, useState} from 'react';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/icon'

export type InputSize = "lg" | "sm";
export type InputType = 'input' | 'textarea'
interface InputProps {
    /** 样式 class 类 */
    className?: string;
    /** 组件样式 */
    style?: React.CSSProperties;
    /** 带标签的 input，设置后置标签 */
    addonBefore?: string | ReactNode;
    /** 带标签的 input，设置前置标签 */
    addonAfter?: string | ReactNode;
    /** 输入框默认内容 */
    defaultValue?: string;
    /** 是否禁用 Input */
    disabled?: boolean;
    /** 最大长度 */
    maxLength?: number;
    /** 带有前缀图标的 input */
    prefix?: string|ReactNode;
    /** 带有后缀图标的 input */
    suffix?: string|ReactNode;
    /** 声明 input 类型，同原生 input 标签的 type 属性 */
    type?: InputType;
    /** 输入框内容 */
    value?: string;
    /** 输入框内容变化时的回调 */
    onChange?: (e:any) => void;
    /** 按下回车的回调 */
    onPressEnter?:(e:any) => void;
    /** 设置 input 大小，支持 lg 或者是 sm  */
    inputSize?: InputSize;
    /** 添加图标，在右侧悬浮添加一个图标，用于提示 */
    icon?: IconProp;
    /** 可以点击清除图标删除内容 */
    allowClear?: boolean
}

export type BaseInputProps =InputProps & React.InputHTMLAttributes<HTMLElement>;
/**
 * ### 引用方式
 * ~~~js
 * // 这样引用
 * import { Input } from 'hard-ship-view'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export const Input: FC<BaseInputProps> = (props) => {
    const {className, style, addonBefore, disabled, addonAfter, onChange, onPressEnter, defaultValue, maxLength, prefix, 
        suffix, type, inputSize, value, icon, allowClear,  ...restProps} = props;
    const classes = classNames('hard-input', className, {
        [`input-size-${inputSize}`]: inputSize,
        'is-disabled': disabled,
        'input-group': prefix || suffix,
        'input-group-append': !!suffix,
        'input-group-prepend': !!prefix
    })
   
    const onKeyPressEnter = (e:any) => {
        if (e.keyCode===13) {
            onPressEnter!(e)
        }
    }

    const [inputValue, setInputValue] = useState<string>(defaultValue!);
    const handleOnchange = (e:any) => {
        if(maxLength){
            if((e.target.value || e.target.value === '') && e.target.value.length <= maxLength!){
                setInputValue(e.target.value);
                onChange!(e);
            }
        } else {
            setInputValue(e.target.value);
            onChange!(e);
        }
    }
    const handleClear = () => {
        setInputValue('');
    }
    return (
        <div className={classes} style={style}>
            {addonBefore && <div className="viking-input-group-prepend">{addonBefore}</div>}
            {prefix && <div className="viking-input-group-prepend">{prefix}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} onClick={handleClear} /></div>}
            <input
                className="viking-input-inner"
                disabled={disabled}
                defaultValue={defaultValue}
                value={inputValue}
                onChange={(e) => handleOnchange(e)}
                onKeyPress={(e) => onKeyPressEnter(e)}
                type={type}
                {...restProps}
            />
            {suffix && <div className="viking-input-group-append">{suffix}</div>}
            {addonAfter && <div className="viking-input-group-append">{addonAfter}</div>}
        </div>
    )
}

Input.defaultProps={
    inputSize: 'lg',
    disabled: false,
    allowClear: false,
}

export default Input;