import React, { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
    //extra props
    styleClass?: string
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(({ styleClass, ...props }, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            className={[
                "rounded-full border border-slate-200 pl-4 p-3  w-full hover:shadow-lg outline-0",
                styleClass,
            ].join(' ')}
        />
    );;
});


export default InputText;