import {
	Link as ChakraLink,
	Text,
	Icon,
	LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
//When use the name of the component => elementtype
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	title: string;
	href: string;
}
export const NavLink = ({ icon, title, href, ...rest }: NavLinkProps) => {
	return (
		<ActiveLink href={href}>
			<ChakraLink display="flex" align="center" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">
					{title}
				</Text>
			</ChakraLink>
		</ActiveLink>
	);
};
