import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
	isCurrent?: Boolean;
	number: number;
}

export const PaginationItem = ({
	isCurrent = false,
	number,
}: PaginationItemProps) => {
	if (isCurrent) {
		return (
			<Button
				size="sm"
				fontSize="xs"
				w="4"
				colorScheme="blue"
				_hover={{ bg: "blue.700" }}
				disabled
				_disabled={{
					bg: "blue.500",
					cursor: "default",
					color: "gray.700",
				}}
			>
				{number}
			</Button>
		);
	}

	return (
		<Button
			size="sm"
			fontSize="xs"
			w="4"
			bg="gray.700"
			_hover={{
				bg: "blue.500",
				color: "gray.700",
			}}
		>
			{number}
		</Button>
	);
};
