import { LinkProps } from "next/link";
import { ReactElement } from "react";

export interface ActiveLinkProps extends LinkProps {
	// reactElement => react component
	children: ReactElement;
	shouldMatchExactHref?: boolean;
}
