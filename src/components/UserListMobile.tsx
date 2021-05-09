import {
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	Text,
	VStack,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "./Header";
import Pagination from "./Pagination";
import { SideBar } from "./SideBar";

export const UserListMobile = () => {
	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<SideBar />
				<Box flex="1" borderRadius={8} bg="gray.700" p="8" align="center">
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
					{/* user */}
					<Flex
						direction="row"
						borderBottom="1px solid #5f5e5e"
						p="3"
						maxWidth="400px"
					>
						<VStack align="flex-start" spacing="2">
							<Flex align="flex-start" direction="column">
								<Text size="sm" color="gray.300">
									User
								</Text>
								<Text fontWeight="bold">Pedro Lucinda</Text>
							</Flex>
							<Flex align="flex-start" direction="column">
								<Text size="sm" color="gray.300">
									SignUp Date
								</Text>
								<Text fontWeight="bold">04 Abril de 2021</Text>
							</Flex>
						</VStack>
						<Button
							as="a"
							size="sm"
							fontSize="sm"
							colorScheme="blue"
							_hover={{ bg: "blue.700" }}
							color="gray.700"
							ml="auto"
							mt="1"
						>
							<Icon as={RiPencilLine} fontSize="16" mr="auto" />
						</Button>
					</Flex>

					<Pagination
						totalCountOfRegisters={200}
						registersPerPage={2}
						currentPage={1}
						onPageChange={() => {}}
					/>
				</Box>
			</Flex>
		</Box>
	);
};
