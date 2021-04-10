import { Profile } from "./Profile";
import { NotificationNav } from "./NotificationNav";
import SearchBox from "./SearchBox";
import { Logo } from "./Logo";
import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { useSideBarDrawer } from "../../context/SideBarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export const Header = () => {
	const { onOpen } = useSideBarDrawer();

	const isWideVersion = useBreakpointValue({ base: false, lg: true });
	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1480}
			h="20"
			mx="auto"
			mt="4"
			px="6"
			align="center"
		>
			{!isWideVersion && (
				<IconButton
					icon={<Icon as={RiMenuLine} />}
					aria-label="Open Navegation"
					fontSize="24"
					variant="unstyled"
					onClick={onOpen}
					mr="2"
				></IconButton>
			)}
			<Logo />
			{isWideVersion && <SearchBox />}

			<Flex align="center" ml="auto">
				<NotificationNav />
				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	);
};
