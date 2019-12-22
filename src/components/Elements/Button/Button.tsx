import React, { MouseEventHandler } from 'react';
import './Button.css';
import { joinClassNames } from '../../../utils/helpers';

type Props = {
    type?: 'primary' | 'default';
    size?: 'small' | 'normal' | 'big';
    onClick: MouseEventHandler;
};

export const Button: React.FC<Props> = ({ type, size, children, onClick }) => {
    const classNames = joinClassNames('Button', `Button--${type}`, `Button--${size}`);

    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: 'default',
    size: 'normal',
};
