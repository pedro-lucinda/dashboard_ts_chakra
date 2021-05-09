export interface PaginationProps {
	totalCountOfRegisters: number;
	registersPerPage?: number;
	currentPage?: number;
	onPageChange: (page: number) => void;
}

export interface PaginationItemProps {
	isCurrent?: Boolean;
	number: number;
	onPagechange: (page: number) => void;
}
