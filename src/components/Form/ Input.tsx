import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input as ChakraInput,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { InputProps } from "./types";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, error = null, ...rest },
	ref
) => {
	return (
		<FormControl isInvalid={!!error}>
			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<ChakraInput
				name={name}
				focusBorderColor="blue.500"
				bg="gray.800"
				variant="filled"
				_hover={{
					bg: "gray.700",
				}}
				size="lg"
				ref={ref}
				{...rest}
			/>
			{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);
