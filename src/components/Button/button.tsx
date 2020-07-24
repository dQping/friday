import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}
export enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger"
}
// type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>;

export interface IButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: ReactNode;
}

// type ButtonProps = Partial<IButtonProps>



const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        size,
        btnType,
        disabled,
        children,
        ...restProps
    } = props
    // 
    const classes = classnames('btn', `btn-${size}`, `btn-${btnType}`, className);
    return (<button className={classes} disabled={disabled} {...restProps}>{children}</button>)
}
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default,
    size: ButtonSize.Small
}
export default Button;