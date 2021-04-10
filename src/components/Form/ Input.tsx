import {
	FormControl,
	FormLabel,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
	return (
		<FormControl>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<ChakraInput
				name={name}
				focusBorderColor="blue.500"
				bg="gray.800"
				variant="filled"
				_hover={{
					bg: "gray.700",
				}}
				size="lg"
				{...rest}
			/>
		</FormControl>
	);
}
