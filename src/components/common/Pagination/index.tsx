import { getPageInfo, getRange } from "@/lib/util/pagination";
import React, { useCallback } from "react";

interface PaginationProps {
    total: number;
    limit: number;
    pageCount: number;
    currentPage: number;
    onPageSelected: (page: number) => void
}

const Pagination = ({
    total,
    limit,
    pageCount,
    currentPage,
    onPageSelected
}: PaginationProps) => {

    const { firstPage, lastPage } = getPageInfo({
        limit,
        pageCount,
        total,
        page: currentPage,
    });
    const pages = total > 0 ? getRange(firstPage, lastPage) : [];

    const handleClick = useCallback((index: number) => {
        onPageSelected(index);
    }, []);

    return (
        <ul className="flex items-center">
            {pages.map((page: number) => {
                const isCurrent = !currentPage ? page === 0 : page === (currentPage);
                return (
                    <li
                        key={page.toString()}
                        className={`w-9 h-9 hover:border flex items-center justify-center rounded border-slate-500 mx-1 ${isCurrent ? "bg-slate-200" : ""}`}
                        onClick={() => handleClick(page)}
                    >
                        {page}
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;
