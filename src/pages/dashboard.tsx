import { Box, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { Graphic } from "../components/Graphic";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

export default function Dashboard() {
	return (
		<Flex h="100vh" flexDir="column">
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<SideBar />

				<SimpleGrid flex="1" gap="4" minChildWidth="320px" aling="flex-start">
					<Box p={["6", "8"]} bg="gray.700" borderRadius={8} pb="4">
						<Text fontSize="lg" mb="4">
							Weekly Subscribers
						</Text>
						<Graphic />
					</Box>

					<Box p={["6", "8"]} bg="gray.700" borderRadius={8} pb="4">
						<Text fontSize="lg" mb="4">
							Opening Percentage
						</Text>
						<Graphic />
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
}
