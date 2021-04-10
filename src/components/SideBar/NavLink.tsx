import {
	Link,
	Text,
	Icon,
	LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
//When use the name of the component => elementtype
import { ElementType } from "react";
interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	title: string;
}
export const NavLink = ({ icon, title, ...rest }: NavLinkProps) => {
	return (
		<Link display="flex" align="center" {...rest}>
			<Icon as={icon} fontSize="20" />
			<Text ml="4" fontWeight="medium">
				{title}
			</Text>
		</Link>
	);
};
