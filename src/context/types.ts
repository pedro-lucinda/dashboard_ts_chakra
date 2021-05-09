import { UseDisclosureReturn } from "@chakra-ui/hooks";
import { ReactNode } from "react";

export type SideBarDrawerContextData = UseDisclosureReturn;

export interface SideBarDrawerProviderProps {
	children: ReactNode;
}
