import Head from "next/head";
import { Button, Flex, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/ Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { signinFormSchema } from "../components/Form/ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export type SignInFormData = {
	email: string;
	password: string;
};

export default function SingIn() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signinFormSchema),
	});

	const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {};

	const errors = formState.errors;

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
					bg="gray.700"
					p="8"
					borderRadius={8}
					flexDir="column"
					onSubmit={handleSubmit(handleSignIn)}
				>
					<Stack spacing="4">
						<FormControl>
							<FormLabel htmlFor="email"> Email</FormLabel>
							<Input
								name="email"
								type="email"
								error={errors.email}
								{...register("email")}
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="password"> Password</FormLabel>
							<Input
								name="password"
								type="password"
								error={errors.password}
								{...register("password")}
							/>
						</FormControl>
					</Stack>

					<Button
						type="submit"
						mt="6"
						colorScheme="blue"
						color="blue.900"
						isLoading={formState.isSubmitting}
					>
						Login
					</Button>
				</Flex>
			</Flex>
		</>
	);
}
