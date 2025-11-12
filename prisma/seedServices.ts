import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function seedServices() {
  console.log('Starting service seeding...');

  // Hair Salon Services (translated from Danish)
  const hairSalonServices = [
    // Danish originals translated
    'Ladies Haircut',
    'Mens Haircut', 
    'Eyebrow Styling',
    'Eyelash Treatment',
    'Braids',
    'Beard Trim',
    'Hair Extensions',
    'Perm',
    'Hair Styling',
    'Skin Treatments',
    'Nail Services',
    'Hair Removal',
    'Children\'s Haircut',
    // Additional hair services
    'Hair Color',
    'Highlights',
    'Balayage',
    'Hair Wash & Blowdry',
    'Deep Conditioning Treatment',
    'Keratin Treatment',
    'Wedding Hair',
    'Hair Consultation'
  ];

  // Nail Salon Services (translated from Danish)
  const nailSalonServices = [
    // Danish originals translated
    'Manicure',
    'Gel Polish',
    'Acrylic Nails',
    'Gel Nails',
    'Nail Reinforcement',
    'Nail Decoration',
    'Nail Fill',
    'Pedicure',
    'Shellac',
    'Nail Design',
    'French Nails',
    // Additional nail services
    'Nail Art',
    'Nail Extensions',
    'Cuticle Care',
    'Paraffin Treatment',
    'Nail Repair',
    'Russian Manicure',
    'Dip Powder Nails',
    'Nail Consultation'
  ];

  // Barber Shop Services
  const barberServices = [
    'Classic Haircut',
    'Beard Trim',
    'Mustache Grooming',
    'Hot Towel Shave',
    'Straight Razor Shave',
    'Fade Cut',
    'Buzz Cut',
    'Scissor Cut',
    'Hair Wash',
    'Beard Oil Treatment',
    'Eyebrow Trim',
    'Nose Hair Trim',
    'Hair Styling',
    'Beard Shaping',
    'Head Massage'
  ];

  // Spa and Wellness Services
  const spaServices = [
    'Swedish Massage',
    'Deep Tissue Massage',
    'Hot Stone Massage',
    'Aromatherapy Massage',
    'Facial Treatment',
    'Body Scrub',
    'Body Wrap',
    'Reflexology',
    'Couples Massage',
    'Prenatal Massage',
    'Sports Massage',
    'Anti-Aging Facial',
    'Hydrating Facial',
    'Acne Treatment',
    'Microdermabrasion',
    'Steam Bath',
    'Sauna Session',
    'Relaxation Therapy'
  ];

  // Makeup Services
  const makeupServices = [
    'Bridal Makeup',
    'Evening Makeup',
    'Natural Day Makeup',
    'Special Event Makeup',
    'Photoshoot Makeup',
    'Makeup Lessons',
    'Makeup Consultation',
    'Contouring & Highlighting',
    'Eyebrow Makeup',
    'False Eyelash Application',
    'Airbrush Makeup',
    'Editorial Makeup',
    'Theatrical Makeup',
    'Prom Makeup',
    'Corporate Headshot Makeup'
  ];

  // Tattoo Services
  const tattooServices = [
    'Custom Tattoo Design',
    'Small Tattoo',
    'Large Tattoo',
    'Black & Grey Tattoo',
    'Color Tattoo',
    'Cover-up Tattoo',
    'Tattoo Touch-up',
    'Tattoo Consultation',
    'Piercing',
    'Ear Piercing',
    'Body Piercing',
    'Piercing Consultation',
    'Tattoo Aftercare',
    'Flash Tattoo',
    'Realistic Tattoo'
  ];

  // Beauty Spa Services
  const beautySpaServices = [
    'European Facial',
    'Chemical Peel',
    'Laser Hair Removal',
    'IPL Treatment',
    'Botox Treatment',
    'Dermal Fillers',
    'Skin Consultation',
    'Anti-Cellulite Treatment',
    'Lymphatic Drainage',
    'Oxygen Facial',
    'LED Light Therapy',
    'Radiofrequency Treatment',
    'Ultrasound Facial',
    'Vampire Facial',
    'HydraFacial'
  ];

  // Massage Therapy Services
  const massageServices = [
    'Thai Massage',
    'Shiatsu Massage',
    'Trigger Point Therapy',
    'Myofascial Release',
    'Craniosacral Therapy',
    'Chair Massage',
    'Bamboo Massage',
    'Cupping Therapy',
    'Sports Recovery Massage',
    'Injury Rehabilitation',
    'Stress Relief Massage',
    'Tension Relief',
    'Full Body Massage',
    'Partial Body Massage',
    'Therapeutic Massage'
  ];

  // Wellness Center Services  
  /* const wellnessServices = [
    'Yoga Class',
    'Meditation Session',
    'Life Coaching',
    'Nutrition Consultation',
    'Fitness Assessment',
    'Personal Training',
    'Reiki Healing',
    'Energy Healing',
    'Chakra Balancing',
    'Wellness Consultation',
    'Detox Program',
    'Weight Management',
    'Stress Management',
    'Holistic Health Assessment',
    'Acupuncture'
  ]; */

  // Combine all services with their categories
  const allServices = [
    ...hairSalonServices.map(name => ({ name, category: 'Hair Salon' })),
    ...nailSalonServices.map(name => ({ name, category: 'Nail Salon' })),
    ...barberServices.map(name => ({ name, category: 'Barber Shop' })),
    ...spaServices.map(name => ({ name, category: 'Spa and Wellness' })),
    ...makeupServices.map(name => ({ name, category: 'Makeup Salon' })),
    ...tattooServices.map(name => ({ name, category: 'Tattoo Salon' })),
    ...beautySpaServices.map(name => ({ name, category: 'Beauty Spa' })),
    ...massageServices.map(name => ({ name, category: 'Massage Therapy' })),
    /* ...wellnessServices.map(name => ({ name, category: 'Wellness Center' })) */
  ];

  console.log(`Preparing to seed ${allServices.length} services...`);

  // Create services (upsert to avoid duplicates)
  let createdCount = 0;
  let existingCount = 0;

  for (const service of allServices) {
    try {
      const result = await prisma.service.upsert({
        where: { name: service.name },
        update: {
          category: service.category // Update category if service exists
        },
        create: {
          name: service.name,
          category: service.category
        }
      });

      if (result) {
        createdCount++;
        console.log(`✓ Created/Updated: ${service.name} (${service.category})`);
      }
    } catch (error) {
      console.error(`✗ Failed to create ${service.name}:`, error);
      existingCount++;
    }
  }

  console.log('\n=== Seeding Complete ===');
  console.log(`Successfully processed: ${createdCount} services`);
  console.log(`Errors: ${existingCount}`);
  console.log(`Total services in database: ${createdCount}`);

  // Verify the count
  const totalServices = await prisma.service.count();
  console.log(`Verified total services in database: ${totalServices}`);
}

async function main() {
  try {
    await seedServices();
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeder
main();

export default seedServices;