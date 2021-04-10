import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		gray: {
			"100": "#BBC5C8",
			"300": "#859499",
			"500": "#526064",
			"700": "#273B42",
			"800": "#1B2C32",
		},
		blue: {
			"500": "#14C7FF",
			"700": "#11A0CD",
		},
	},
	fonts: {
		heading: "Archivo",
		body: "Archivo",
	},
	styles: {
		global: {
			body: {
				bg: "gray.800",
				color: "gray.50",
			},
		},
	},
});
