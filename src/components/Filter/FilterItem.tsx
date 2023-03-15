import React from "react";
import styles from "./styles.module.css";
import { GoRepoClone, GoPerson } from "react-icons/go";
import { FilterItemType } from "@/lib/types/filterType";
import Link from "next/link";

interface FilterItemProps {
    filter: FilterItemType;
    isSelected: boolean;
    styleClasses?: string;
    onClick?: () => void
}

const FilterItem: React.FC<FilterItemProps> = ({ filter, isSelected, styleClasses, onClick }) => {
    const { title, type } = filter;

    let Icon = GoRepoClone;

    switch (type) {
        case "users":
            Icon = GoPerson;
            break;
    }

    return <div
        onClick={onClick}
        className={[
            'flex items-center h-9 pl-4 pr-4',
            isSelected ? 'bg-blue-100 rounded-full' : '',
            styleClasses,
        ].join(' ')}
    >
        <Icon />
        <p className="ml-4">{title}</p>
    </div>
};

export default FilterItem;