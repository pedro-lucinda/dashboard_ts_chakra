import { useDisclosure } from "@chakra-ui/hooks";
import { createContext, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { SideBarDrawerContextData, SideBarDrawerProviderProps } from "./types";

export const SideBarDrawerContext = createContext(
	{} as SideBarDrawerContextData
);

export function SideBarDrawerProvider({
	children,
}: SideBarDrawerProviderProps) {
	const disclosure = useDisclosure();
	const router = useRouter();

	//close when navegation through pages
	useEffect(() => {
		disclosure.onClose();
	}, [router.asPath]);

	return (
		<SideBarDrawerContext.Provider value={disclosure}>
			{children}
		</SideBarDrawerContext.Provider>
	);
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContext);
