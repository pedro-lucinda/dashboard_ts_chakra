import { Box, Stack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { PaginationItem } from "./PaginationItem";

export default function Pagination() {
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
				<PaginationItem isCurrent number={1} />
				<PaginationItem number={2} />
				<PaginationItem number={3} />
				<PaginationItem number={4} />
				<PaginationItem number={5} />
				<PaginationItem number={6} />
			</Stack>
		</Stack>
	);
}
