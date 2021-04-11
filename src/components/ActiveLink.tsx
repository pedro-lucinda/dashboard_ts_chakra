import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement } from "react";
import { ActiveLinkProps } from "../types";



export const ActiveLink = ({
	children,
	shouldMatchExactHref = false,
	...rest
}: ActiveLinkProps) => {
	const { asPath } = useRouter();

	let isActive = false;

	if ((shouldMatchExactHref && asPath == rest.href) || asPath == rest.as) {
		isActive = true;
	}

	if (
		!shouldMatchExactHref &&
		(asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
	) {
		isActive = true;
	}

	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: isActive ? "blue.500" : "grey.50",
			})}
		</Link>
	);
};
