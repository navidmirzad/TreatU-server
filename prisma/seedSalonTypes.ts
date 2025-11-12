import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function seedSalonTypes() {
  console.log('Starting salon types seeding...');

  const salonTypes = [
    'Hair Salon',
    'Nail Salon', 
    'Beauty Spa',
    'Barber Shop',
    'Massage Therapy',
    'Makeup Salon',
    'Tattoo Salon',
    'Spa and Wellness'
  ];

  console.log(`Preparing to seed ${salonTypes.length} salon types...`);

  let createdCount = 0;
  let existingCount = 0;

  for (const typeName of salonTypes) {
    try {
      const result = await prisma.salonType.upsert({
        where: { name: typeName },
        update: {},
        create: {
          name: typeName
        }
      });

      if (result) {
        createdCount++;
        console.log(`✓ Created/Updated: ${typeName}`);
      }
    } catch (error) {
      console.error(`✗ Failed to create ${typeName}:`, error);
      existingCount++;
    }
  }

  console.log('\n=== Salon Types Seeding Complete ===');
  console.log(`Successfully processed: ${createdCount} salon types`);
  console.log(`Errors: ${existingCount}`);

  // Verify the count
  const totalSalonTypes = await prisma.salonType.count();
  console.log(`Verified total salon types in database: ${totalSalonTypes}`);
}

async function main() {
  try {
    await seedSalonTypes();
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeder
main();

export default seedSalonTypes;