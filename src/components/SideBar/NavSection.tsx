import { Box, Stack, Text } from "@chakra-ui/react";

import { NavSectionProps } from "../../types";

export const NavSection = ({ title, children }: NavSectionProps) => {
	return (
		<Box>
			<Text fontWeight="bold" color="gray.300" fontSize="small">
				{title}
			</Text>
			<Stack spacing="4" mt="4" align="stretch">
				{children}
			</Stack>
		</Box>
	);
};
