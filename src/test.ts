// import { PrismaClient } from "@prisma/client/edge";

import { PrismaClient } from "@prisma/client/edge"

// const prisma = new PrismaClient();

// async function main() {
//   const newRescue = await prisma.rescue.create({
//     data: {
//       name: "Rescue 1",
//     },
//   });

//   console.log(newRescue);
// }

// (async () => {
//   await main();
//   await prisma.$disconnect();
// })();
export type GraphQLContext = {
  prisma: PrismaClient
}

export async function createContext(connectionString: string): Promise<GraphQLContext> {
 return {
    prisma: new PrismaClient({
      datasources: {
        db: {
          url: connectionString,
        },
      },
    }),
 }
}
