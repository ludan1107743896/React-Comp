import * as React from 'react';
import classNames from 'classnames';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    
} 

class Row extends React.Component<RowProps> {
    render() {
        const { children, ...otherProps } = this.props;
        // const classes = classNames
        // )
        return (
            <div {...otherProps}>
                {children}
            </div>
        )
    }
}

export default Row;