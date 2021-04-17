import { ChakraProvider } from "@chakra-ui/react";
import { SideBarDrawerProvider } from "../context/SideBarDrawerContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
	return (
		<SideBarDrawerProvider>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</SideBarDrawerProvider>
	);
}

export default MyApp;
