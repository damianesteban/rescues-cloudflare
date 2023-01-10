/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
	DATABASE_URL: string;
}

import { PrismaClient } from "@prisma/client/edge";
import { createYoga, createSchema } from "graphql-yoga";
import { schema } from "./schema";
import { resolvers } from "./resolvers";

// type GraphQLContext = {
// 	prisma: PrismaClient
// };

const createContext = (connectionString: string) => {
	return {
		prisma: new PrismaClient({
			datasources: {
				db: {
					url: connectionString,
				},
			},
		}),
	};
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const context = createContext(env.DATABASE_URL);
		const yoga = createYoga({
			graphiql: true,
			landingPage: true,
			schema: createSchema({
				typeDefs: schema,
				resolvers
			}),
			context: () => context
		});

		return yoga.fetch(request, env, ctx);
	},
};
