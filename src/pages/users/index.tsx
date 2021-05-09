import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import { UserListMobile } from "../../components/UserListMobile";
import {  useState } from "react";
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
	Icon,
	Spinner,
} from "@chakra-ui/react";
import { IoReloadCircleSharp } from "react-icons/io5";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
	const [page, setPage] = useState(1);
	// first param => witch key to get from cache
	const { data, isLoading, isFetching, error, refetch } = useUsers(page);

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
						<Heading
							size="lg"
							fontWeight="normal"
							display="flex"
							align="center"
							justify="center"
						>
							Users
							<Icon
								as={IoReloadCircleSharp}
								onClick={() => refetch()}
								color="blue.500"
								fontSize="30"
								display="block"
								ml={5}
								_hover={{
									cursor: "pointer",
								}}
							/>
							{isFetching && !isLoading && (
								<Spinner size="md" color="gray.500" ml={5} />
							)}
						</Heading>
						<Link href="/users/create">
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="blue"
								_hover={{ bg: "blue.700", cursor: "pointer" }}
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
								color="gray.700"
							>
								Add new
							</Button>
						</Link>
					</Flex>
					{isLoading ? (
						<Flex justify="center">
							<Spinner />
						</Flex>
					) : error ? (
						<Flex>
							<p>
								An error occurred when loading the users, please try again
								later.
							</p>
						</Flex>
					) : (
						<>
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
									{data?.users.map((user) => {
										return (
											<Tr key={user.id}>
												<Td px="6">
													<Checkbox colorScheme="blue"></Checkbox>
												</Td>
												<Td>
													<Box>
														<Text fontWeight="bold"> {user.name} </Text>
														<Text fontSize="sm" color="gray.300">
															{user.email}
														</Text>
													</Box>
												</Td>
												<Td>{user.createdAt}</Td>
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
										);
									})}
								</Tbody>
							</Table>
							<Pagination
								totalCountOfRegisters={data.totalCount}
								currentPage={page}
								onPageChange={setPage}
							/>
						</>
					)}
				</Box>
			</Flex>
		</Box>
	);
}
