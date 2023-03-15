import { FilterItemType } from "@/lib/types/filterType";
import Link from "next/link";
import React from "react";
import FilterItem from "./FilterItem";

interface FilterProps {
    query: string;
    type: string
}

const Filter = ({ query, type }: FilterProps) => {
    return <div className="flex flex-row md:flex-col p-2 rounded">
        {FILTERS.map((filter) => {
            return <Link key={filter.type} href={`/${filter.type}?q=${query}`}>
                <FilterItem
                    filter={filter}
                    isSelected={type === filter.type}
                />
            </Link>

        })}
    </div>
};

const FILTERS: FilterItemType[] = [
    { title: "Repositories", type: "repositories" },
    { title: "Users", type: "users" }
]

export default Filter;