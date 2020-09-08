// 分割线暂时没有完成。
import React, { FC, CSSProperties, HTMLAttributes } from 'react';
import classNames from 'classnames';

type orientationType = "left" | "right" | "center";
type documentPositionType = "horizontal" | "vertical";
interface BaseDividerProps {
    /** 分割线样式类 */
    className?: string;
    /** 是否虚线 */
    dashed?: boolean;
    /** 分割线标题的位置 */
    orientation?: orientationType;
    /** 分割线样式对象 */
    style?: CSSProperties;
    /** 水平还是垂直类型 */
    type?: documentPositionType;
}

export type DividerProps = HTMLAttributes<HTMLElement> & BaseDividerProps;
export const Divider: FC<DividerProps> = (props) => {
    const {className, type, children, orientation, ...restProps} = props;
    const classes = classNames('hard-divider', className, {
        [`hard-divider-${type}`]: type
    })
    const _classesStyle = classNames('hard-divider-text', {
        [`hard-divider-${orientation}`]: orientation
    })
    return (
        <div className={classes} {...restProps}>
            <span className={_classesStyle}>{children}</span>
        </div>
    )
}

Divider.propTypes= {}

export default Divider;