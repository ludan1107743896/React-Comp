import React, { FC } from 'react';
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark";
export interface baseIconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}

export const Icon: FC<baseIconProps> = (props) => {
    const {theme, className, ...restProps} = props;
    const classes = classNames('viking-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps}/>
    )
}

export default Icon;