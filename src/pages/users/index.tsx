import Icon from "@chakra-ui/icon";
import {
	Box,
	Flex,
	Heading,
	Text,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	Checkbox,
	Button,
	useBreakpointValue,
	theme,
	VStack,
} from "@chakra-ui/react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import { UserListMobile } from "../../components/UserListMobile";

export default function UserList() {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	if (!isWideVersion) {
		return <UserListMobile />;
	}

	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<SideBar />
				<Box flex="1" borderRadius={8} bg="gray.700" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Users
						</Heading>
						<Button
							as="a"
							size="sm"
							fontSize="sm"
							colorScheme="blue"
							_hover={{ bg: "blue.700" }}
							leftIcon={<Icon as={RiAddLine} fontSize="20" />}
							color="gray.700"
						>
							Add new
						</Button>
					</Flex>

					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px="6" color="gray.300" w="8">
									<Checkbox colorScheme="blue"></Checkbox>
								</Th>
								<Th px="6" color="gray.300">
									User
								</Th>
								<Th px="6" color="gray.300">
									SignUp Date
								</Th>
								<Th w="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							{/* user */}
							<Tr>
								<Td px="6">
									<Checkbox colorScheme="blue"></Checkbox>
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Pedro Lucinda</Text>
										<Text fontSize="sm" color="gray.300">
											pedrolucinda@gmail.com
										</Text>
									</Box>
								</Td>
								<Td>04 Abril de 2021</Td>
								<Td>
									<Button
										as="a"
										size="sm"
										fontSize="sm"
										colorScheme="blue"
										_hover={{ bg: "blue.700" }}
										leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
										color="gray.700"
									>
										Edit
									</Button>
								</Td>
							</Tr>
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	);
}
