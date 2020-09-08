import React, { FC, HTMLAttributes, useState } from 'react';
import classNames from 'classnames';

export type AlertType = "success" | "info" | "warning" | "error";

interface BaseAlertProps {
    /** 样式 class 类 */
    className?: string;
    /** 指定警告提示的样式，有四种选择 success、info、warning、error */
    type: AlertType;
    children: React.ReactNode;
    /** 警告提示内容  */
    message?: React.ReactNode;
    description?: React.ReactNode;
    closeText?: React.ReactNode;
    onClose?: React.MouseEventHandler<HTMLButtonElement>
    afterClose?: () => void;
    /** 是否显示辅助图标 */
    showIcon?: boolean;
    style?: React.CSSProperties;
    /** 是否用作顶部公告 */
    banner?:boolean;
    icon?: React.ReactNode;
    /** 关闭时触发的回调函数 */
    closable: boolean;
}
type NativeAlertProps = HTMLAttributes<HTMLElement>
export type AlertProps = Partial<BaseAlertProps & NativeAlertProps>
export const Alert: FC<AlertProps> = (props) => {
    const {
        className, type, children, message, description,
        closeText,  onClose, afterClose, showIcon, style,
        banner, icon, closable, ...restProps
    } = props;
    const classes = classNames('alert', className, {
        [`alert-${type}`]: type,
    }); 
    const [alertCloseVisible, setAlertCloseVisible] = useState(false);
    return (
        <>
            {
                !alertCloseVisible ? 
                <div
                    className={classes}
                    {...restProps}
                >
                    {closable ? <span className="alert-close-icon" onClick={(e: any) => {
                        onClose && onClose(e);
                        setAlertCloseVisible(!alertCloseVisible)
                    }}>{closeText}</span>: null}
                    <p><span >{message}</span></p>
                    <p>{description}</p>
                    {children}
                </div>:null
            }
        </>
    )
} 

Alert.defaultProps = {
    type: 'success',
    closeText: 'X',
    closable: false
}

export default Alert;