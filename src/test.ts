import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newRescue = await prisma.rescue.create({
    data: {
      name: "Rescue 1",
    },
  });

  console.log(newRescue);
}

(async () => {
  await main();
  await prisma.$disconnect();
})();