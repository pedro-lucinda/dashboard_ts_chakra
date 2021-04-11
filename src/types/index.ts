import { ElementType, ReactElement, ReactNode } from "react";
import { LinkProps } from "next/link";
import { FieldError } from "react-hook-form";
import { UseDisclosureReturn } from "@chakra-ui/hooks";
import {
	LinkProps as ChakraLinkProps,
	InputProps as ChakraInputProps,
} from "@chakra-ui/react";

export type SignInFormData = {
	email: string;
	password: string;
};

export type CreateUserFormData = {
	name: string;
	email: string;
	password: string;
	passwordConfirmation: string;
};

export interface SideBarDrawerProviderProps {
	children: ReactNode;
}

export type SideBarDrawerContextData = UseDisclosureReturn;

export interface ActiveLinkProps extends LinkProps {
	// reactElement => react component
	children: ReactElement;
	shouldMatchExactHref?: boolean;
}

export interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
	error?: FieldError;
}

export interface ProfileProps {
	showProfileData: Boolean;
}

export interface PaginationItemProps {
	isCurrent?: Boolean;
	number: number;
}

export interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	title: string;
	href: string;
}

export interface NavSectionProps {
	title: string;
	children: ReactNode;
}
