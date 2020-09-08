import React from 'react';
// import classNames from 'classnames'; 

type ProgressType = "line" | "circle" | "dashboard";
type StrokeLinecapType = "round" | "square";
type CompanyType = 'em' | 'rem' | "px"
interface BaseProgressProps {
    className?: string;
    style?: React.CSSProperties;
    format?: () => void; //内容的模板函数
    type?: ProgressType; // 类型，可选 line circle dashboard
    strokeColor?: string; // 进度条的色彩
    successPercent?: number; // 已完成的分段百分比
    trailColor?: string; // 未完成的分段的颜色
    showInfo?: boolean; // 是否显示进度数值或状态图标
    status?: string; // 状态，可选：success exception normal active(仅限 line)
    strokeLinecap?: StrokeLinecapType;
    showText?: boolean; // 是否显示内容
    percent?: number; // 百分比
    strokeHeight?: number;
    CompanyType?: CompanyType; // 相似百分比
}

export const Progress: React.FC<BaseProgressProps> = (props) => {
    const { style, type, showText, percent, strokeHeight, strokeColor, CompanyType } = props;
    return (
        <div className="viking-progress-bar" style={style}>
            <div className="viking-progress-bar-outer" style={{ height: `${strokeHeight}${CompanyType}` }}>
                <div
                    className={`viking-progress-bar-inner color-${strokeColor}`}
                    style={{ width: `${percent}%` }}
                >
                    {showText && <span className="inner-text">{`${percent}%`}</span>}
                </div>
            </div>
        </div>
    )
}

Progress.defaultProps = {
    CompanyType: 'px'
}

export default Progress;