import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/router";

interface SideBarDrawerProviderProps {
	children: ReactNode;
}
type SideBarDrawerContextData = UseDisclosureReturn;

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
