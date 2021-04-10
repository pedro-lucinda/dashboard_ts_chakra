import React from "react";
import {
	Box,
	Drawer,
	DrawerCloseButton,
	DrawerHeader,
	DrawerOverlay,
	useBreakpointValue,
	DrawerBody,
	DrawerContent,
} from "@chakra-ui/react";
import { SideBarNav } from "./SideBarNav";
import { useSideBarDrawer } from "../../context/SideBarDrawerContext";

export const SideBar = () => {
	const { isOpen, onClose } = useSideBarDrawer();
	const isDrawerSideBar = useBreakpointValue({ base: true, lg: false });

	if (isDrawerSideBar) {
		return (
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent bg="gray.800" p="4">
						<DrawerCloseButton mt="6" />
						<DrawerHeader>Navegation</DrawerHeader>
						<DrawerBody>
							<SideBarNav />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		);
	}

	return (
		<Box as="aside" w="64" mr="8">
			<SideBarNav />
		</Box>
	);
};
