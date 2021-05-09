import { ChakraProvider } from "@chakra-ui/react";
import { SideBarDrawerProvider } from "../context/SideBarDrawerContext";
import { theme } from "../styles/theme";
import {  QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { makeServer } from "../services/mirage";
import React from "react";
import { client } from "../services/clientQuery";



if (process.env.NODE_ENV === "development") {
	makeServer();
}

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={client}>
			<SideBarDrawerProvider>
				<ChakraProvider theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</SideBarDrawerProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default MyApp;
