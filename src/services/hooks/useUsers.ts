import { GetUserResponse, User } from "./types";
import { useQuery } from "react-query";
import { api } from "../api";

//without react-query
export async function getUsers(page: number): Promise<GetUserResponse> {
	const { data, headers } = await api.get("users", {
		params: {
			page,
		},
	});

	const totalCount = Number(headers["x-total-count"]);

	const users = data.users.map((user: User) => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			createdAt: new Date(Date.now()).toLocaleDateString("en-US", {
				day: "2-digit",
				month: "long",
				year: "numeric",
			}),
		};
	});

	return { users, totalCount };
}

// with react query
export function useUsers(page: number) {
	return useQuery(["users", page], () => getUsers(page), {
		staleTime: 1000 * 60 * 10, // 10 min
	});
}
