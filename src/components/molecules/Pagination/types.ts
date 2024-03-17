export interface PaginationProps {
    total: number;
    perPage: number;
    currentPage: number;
    onPageChange: (newPage: number) => void;
}