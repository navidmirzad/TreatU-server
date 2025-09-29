import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "test@example.com";
  const plainPassword = "testpassword";
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  // Upsert user so you can run the seed multiple times
  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: hashedPassword,
      displayName: "Test User",
      phone: "1234567890",
      isEmailVerified: true,
      // add other required fields if needed
    },
  });

  console.log(`Seeded user: ${email} / ${plainPassword}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
