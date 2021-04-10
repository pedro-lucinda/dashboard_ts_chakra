import { Input } from "../../components/Form/ Input";
import { SideBar } from "../../components/SideBar";
import {
	Box,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack,
	Button,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";

export default function CreateUser() {
	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<SideBar />
				<Box flex="1" borderRadius={8} bg="gray.700" p={["6", "8"]}>
					<Heading size="lg" fontWeight="normal">
						Create User
					</Heading>
					<Divider my="6" borderColor="gray.700" />
					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input name="name" label="Full Name" type="text" />
							<Input name="email" label="Email" type="email" />
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input name="password" label="Password" type="password" />
							<Input
								name="password_confirmation"
								label="Password Confirmation"
								type="password_confirmation"
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Button colorScheme="whiteAlpha" _hover={{ bg: "red.500" }}>
								Cancel
							</Button>
							<Button
								colorScheme="blue"
								_hover={{ bg: "blue.700" }}
								color="gray.700"
							>
								Salve
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
