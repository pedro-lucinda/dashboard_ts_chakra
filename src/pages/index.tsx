import Head from "next/head";
import { Button, Flex, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/ Input";
export default function SingIn() {
	return (
		<>
			<Head>
				<title> SignIn | Dashboar </title>
			</Head>
			<Flex w="100vw" h="100vh" align="center" justify="center">
				<Flex
					as="form"
					w="100%"
					maxWidth={360}
					bg="gray.500"
					p="8"
					borderRadius={8}
					flexDir="column"
				>
					<Stack spacing="4">
						<FormControl>
							<FormLabel htmlFor="email"> Email</FormLabel>
							<Input name="email" type="email" />
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="password"> Password</FormLabel>
							<Input name="password" type="password" />
						</FormControl>
					</Stack>

					<Button type="submit" mt="6" colorScheme="blue" color="blue.900">
						Login
					</Button>
				</Flex>
			</Flex>
		</>
	);
}
