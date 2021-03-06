import Link from "next/link";
import { client } from "../../services/clientQuery";
import { api } from "../../services/api";
import { CreateUserFormData } from "./types";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserFormSchema } from "../../components/Form/ValidationSchema";

import { Input } from "../../components/Form/ Input";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
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

export default function CreateUser() {
	const router = useRouter();
	//use mutation => can monitor state (loading, error ....)
	const createUser = useMutation(
		async (user: CreateUserFormData) => {
			const response = await api.post("users", {
				user: {
					...user,
					created_at: "000",
				},
			});
			return response.data.user;
		},
		{
			onSuccess: () => {
				client.invalidateQueries("users");
			},
		}
	);
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(createUserFormSchema),
	});

	const error = formState.errors;

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
		values
	) => {
		await createUser.mutateAsync(values);
		router.push("/users");
	};

	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<SideBar />
				<Box
					as="form"
					flex="1"
					borderRadius={8}
					bg="gray.700"
					p={["6", "8"]}
					onSubmit={handleSubmit(handleCreateUser)}
				>
					<Heading size="lg" fontWeight="normal">
						Create User
					</Heading>
					<Divider my="6" borderColor="gray.700" />
					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								name="name"
								label="Full Name"
								type="text"
								error={error.name}
								{...register("name")}
							/>
							<Input
								name="email"
								label="Email"
								type="email"
								error={error.email}
								{...register("email")}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								name="password"
								label="Password"
								type="password"
								error={error.password}
								{...register("password")}
							/>
							<Input
								name="password_confirmation"
								label="Password Confirmation"
								type="password"
								error={error.password_confirmation}
								{...register("password_confirmation")}
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/users">
								<Button
									as="a"
									colorScheme="whiteAlpha"
									_hover={{ bg: "red.500", cursor: "pointer" }}
								>
									Cancel
								</Button>
							</Link>
							<Button
								colorScheme="blue"
								_hover={{ bg: "blue.700" }}
								color="gray.700"
								type="submit"
								isLoading={formState.isSubmitting}
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
