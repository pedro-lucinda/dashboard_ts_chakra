import { Text } from "@chakra-ui/react";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/dashboard">
			<Text
				fontSize={["2xl", "3xl"]}
				fontWeight="bold"
				letterSpacing="tight"
				w="64"
				_hover={{ cursor: "pointer" }}
			>
				DashPro
				<Text as="span" color="blue.500" ml="1">
					.
				</Text>
			</Text>
		</Link>
	);
};
