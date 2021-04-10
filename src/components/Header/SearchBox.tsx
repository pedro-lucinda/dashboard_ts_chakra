import { Flex, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { Input } from "../Form/ Input";

const SearchBox = () => {
	return (
		<Flex
			as="label"
			flex="1"
			py="4"
			px="8"
			ml="6"
			align="center"
			position="relative"
			h="50px"

			alignSelf="center"
			color="gray.300"
			bg="gray.700"
			borderRadius="full"
		>
			<Input
				type="text"
				name="search"
				bg="gray.700"
				px="4"
				mr="4"
				color="gray.50"
				variant="unstyled"
				placeholder="Search"
				_placeholder={{ color: "gray.300" }}
			/>
			<Icon as={RiSearchLine} fontSize="20" />
		</Flex>
	);
};

export default SearchBox;
