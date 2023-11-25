const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function seed() {
  try {
    await database.Task.createMany({
      data: [
        { title: "Get Milk" },
        { title: "Get Eggs" },
        { title: "Get Bread" },
      ],
    });

    console.log("Data Seeded Successfully");
  } catch (error) {
    console.log("Error Seeding Data", error);
  } finally {
    await database.$disconnect();
  }
}

seed();
