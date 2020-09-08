import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import list from './bankDate';

interface BaseBankList {
    className?: string;
    type?: string;
}
type NativeBanckList = HTMLAttributes<HTMLElement>;
export type BackListProps = BaseBankList & NativeBanckList;
export const BankList: FC<BackListProps>= (props) => {
    const { 
        className,
        type
    } = props;
    const classes = classNames('bankList', className, {
        [`bankList-${type}`]: type
    })
    return (
        <>
            <div 
                className={classes}
            >
                <ul>
                    {list.map((k,i) => <li>{k.text}</li>)}
                </ul>
            </div>
        </>
    )
}


export default BankList; 