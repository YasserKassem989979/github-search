import React from "react";

interface TagProps extends React.HTMLProps<HTMLDivElement> {
    //extra props
    title: string;
    styleClass?: string;
    icon?: React.ReactNode
}
const Tag: React.FC<TagProps> = ({ title, styleClass, icon, ...props }) => {
    return <div
        {...props}
        className={[
            "flex items-center bg-sky-100 text-sky-700 text-xs px-2 py-1 rounded-full m-1",
            styleClass,
        ].join(' ')}>
        {!!icon && icon}
        <p
            className="text-sky-700 text-xs mx-2">{title}</p>
    </div>
}

export default Tag