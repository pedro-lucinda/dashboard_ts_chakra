import { Text, Box, Stack } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { PaginationItem } from "./PaginationItem";
import { PaginationProps } from "./types";

const siblingsCount = 1;
function generatePagesArray(from: number, to: number) {
	return [...new Array(to - from)]
		.map((_, index) => {
			return from + index + 1;
		})
		.filter((page) => page > 0);
}

export default function Pagination({
	totalCountOfRegisters,
	registersPerPage = 10,
	currentPage = 1,
	onPageChange,
}: PaginationProps) {
	const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
	const previousPage =
		currentPage > 1
			? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
			: [];

	const nexPages =
		currentPage < lastPage
			? generatePagesArray(
					currentPage,
					Math.min(currentPage + siblingsCount, lastPage)
			  )
			: [];

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Stack
			direction={isWideVersion ? "row" : "column"}
			mt="8"
			justify="space-between"
			align="center"
			spacing="6"
		>
			<Box order={isWideVersion ? 1 : 2}>
				{!isWideVersion ? (
					<span style={{ fontSize: "10px" }}>0 - 10 of 100</span>
				) : (
					<>
						<strong>0</strong> - <strong> 10 </strong> of <strong> 100</strong>
					</>
				)}
			</Box>
			<Stack direction="row" spacing="2">
				{currentPage > 1 + siblingsCount && (
					<>
						<PaginationItem onPagechange={onPageChange} number={1} />
						{currentPage > 2 + siblingsCount && (
							<Text color="gray.300" widht="8" textAlign="center">
								...
							</Text>
						)}
					</>
				)}
				{previousPage.length > 0 &&
					previousPage.map((page) => {
						return (
							<PaginationItem
								onPagechange={onPageChange}
								key={page}
								number={page}
							/>
						);
					})}
				<PaginationItem
					onPagechange={onPageChange}
					isCurrent
					number={currentPage}
				/>
				{nexPages.length > 0 &&
					nexPages.map((page) => {
						return (
							<PaginationItem
								onPagechange={onPageChange}
								key={page}
								number={page}
							/>
						);
					})}
				{currentPage + siblingsCount < lastPage && (
					<>
						{currentPage + 1 + siblingsCount < lastPage && (
							<Text color="gray.300" widht="8" textAlign="center">
								...
							</Text>
						)}
						<PaginationItem onPagechange={onPageChange} number={lastPage} />
					</>
				)}
			</Stack>
		</Stack>
	);
}
