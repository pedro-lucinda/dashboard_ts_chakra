import { ElementType, ReactNode } from "react";
import { LinkProps as ChakraLinkProps } from "@chakra-ui/react";


export interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	title: string;
	href: string;
}

export interface NavSectionProps {
	title: string;
	children: ReactNode;
}
