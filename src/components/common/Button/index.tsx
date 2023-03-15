import React from "react";
import styles from "./styles.module.css";
import { FaBeer } from 'react-icons/fa';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // extra props
    styleClass?: string;
    title: string;
    iconComponent?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ styleClass, title, iconComponent, ...props }) => {
    return (
        <button
            {...props}
            className={[
                styles.button,
                styleClass,
            ].join(' ')}
        >
            <div className="flex items-center justify-between">
                {title}
                <div className="ml-2" >
                    {iconComponent ? iconComponent : null}
                </div>
            </div>
        </button >
    );
};

export default Button;