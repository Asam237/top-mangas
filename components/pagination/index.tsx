import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Button({ content, onClick, active, disabled }: any) {
    return (
        <button
            className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${active ? "bg-white border border-white text-black" : "text-black"}
      ${!disabled
                    ? "bg-white hover:bg-black border border-white hover:text-white"
                    : "text-black bg-white cursor-not-allowed"
                }
      `}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
}

function PaginationNav({
    gotoPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageIndex,
}: any) {
    const renderPageLinks = useCallback(() => {
        if (pageCount === 0) return null;
        const visiblePageButtonCount = 3;
        let numberOfButtons =
            pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
        const pageIndices = [pageIndex];
        numberOfButtons--;
        [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
            const pageNumberBefore = pageIndices[0] - 1;
            const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
            if (
                pageNumberBefore >= 0 &&
                (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
            ) {
                pageIndices.unshift(pageNumberBefore);
            } else {
                pageIndices.push(pageNumberAfter);
            }
        });
        return pageIndices.map((pageIndexToMap) => (
            <li key={pageIndexToMap}>
                <Button
                    content={pageIndexToMap + 1}
                    onClick={() => gotoPage(pageIndexToMap)}
                    active={pageIndex === pageIndexToMap}
                />
            </li>
        ));
    }, [pageCount, pageIndex]);
    return (
        <ul className="flex gap-2">
            <li>
                <Button
                    content={
                        <div className="flex ml-1">
                            <FaChevronLeft size="0.6rem" />
                            <FaChevronLeft size="0.6rem" className="-translate-x-1/2" />
                        </div>
                    }
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                />
            </li>
            {renderPageLinks()}
            <li>
                <Button
                    content={
                        <div className="flex ml-1">
                            <FaChevronRight size="0.6rem" />
                            <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
                        </div>
                    }
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                />
            </li>
        </ul>
    );
}

function PaginationPresentation() {
    const [pageIndex, setPageIndex] = useState(0);
    const pageCount = 10;
    return (
        <div className="flex gap-3 flex-wrap p-6 py-12 justify-center items-center">
            <PaginationNav
                gotoPage={setPageIndex}
                canPreviousPage={pageIndex > 0}
                canNextPage={pageIndex < pageCount - 1}
                pageCount={pageCount}
                pageIndex={pageIndex}
            />
        </div>
    );
}

export { PaginationPresentation };