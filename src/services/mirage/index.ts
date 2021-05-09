import { createServer, Factory, Model, Response } from "miragejs";
import faker from "faker";

type User = {
	name: string;
	email: string;
	created_at: string;
};

export function makeServer() {
	const server = createServer({
		models: {
			user: Model.extend<Partial<User>>({}),
		},
		//to generate big number of data
		factories: {
			user: Factory.extend({
				name(i: number) {
					return faker.name.firstName();
				},
				email() {
					return faker.internet.email().toLowerCase();
				},
				createdAt() {
					return faker.date.recent(10);
				},
			}),
		},
		seeds(server) {
			server.createList("user", 200);
		},

		routes() {
			this.namespace = "api";
			this.timing = 750; //delay

			this.get("/users", function (schema, request) {
				const { page = 1, per_page = 10 } = request.queryParams;

				const total = schema.all("user").length;
				const pageStart = (Number(page) - 1) * Number(per_page);
				const pageEnd = pageStart + Number(per_page);

				const users = this.serialize(schema.all("user")).users.slice(
					pageStart,
					pageEnd
				);

				return new Response(200, { "x-total-count": String(total) }, { users });
				// 1 - code , 2 - headers, 3 - response data
			});
			this.post("/users"); //witch api route

			this.namespace = "";
			this.passthrough(); // if a call is not recognized on mirage it will passthrough
		},
	});

	return server;
}