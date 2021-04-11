import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ProfileProps } from "../../types";


export const Profile = ({ showProfileData }: ProfileProps) => {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Pedro Lucinda</Text>
					<Text color="gray.300" fontSize="small">
						pedrolucinda@gmail.com
					</Text>
				</Box>
			)}

			<Avatar
				size="md"
				name="Pedro Lucinda"
				src="https://github.com/pedro-lucinda.png"
			/>
		</Flex>
	);
};
