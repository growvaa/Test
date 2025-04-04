// Brands data
const brandsData = [
    {
        name: "Newell Brands",
        logo: "images/brands/newell.png",
        tagline: "Enhancing life at home",
        description: "Newell Brands is a leading global consumer goods company with a portfolio of well-known brands across home, commercial, and outdoor products.",
        mission: "To develop and market consumer and commercial products that enhance the lives of people where they live, learn, work and play.",
        vision: "To be the most trusted provider of essential consumer goods worldwide.",
        specialization: "Home organization, writing instruments, baby products",
        website: "https://www.newellbrands.com"
    },
    {
        name: "Gardena",
        logo: "images/brands/gardena.png",
        tagline: "Perfectly in tune with nature",
        description: "Gardena is a leading European brand for high-quality gardening tools and irrigation systems, offering innovative solutions for garden care.",
        mission: "To provide smart solutions that make gardening easier and more enjoyable.",
        vision: "To be the first choice for gardening enthusiasts worldwide.",
        specialization: "Garden tools, irrigation systems, lawn care",
        website: "https://www.gardena.com"
    },
    {
        name: "Lamborghini",
        logo: "images/brands/lamborghini.png",
        tagline: "Expect the unexpected",
        description: "Automobili Lamborghini is an Italian brand synonymous with luxury, performance, and cutting-edge automotive design.",
        mission: "To create the most desirable super sports cars that represent the finest Italian craftsmanship.",
        vision: "To push the boundaries of automotive excellence and innovation.",
        specialization: "Luxury sports cars, high-performance vehicles",
        website: "https://www.lamborghini.com"
    },
    {
        name: "Mercedes",
        logo: "images/brands/mercedes.png",
        tagline: "The best or nothing",
        description: "Mercedes-Benz is a global automotive brand known for luxury vehicles, buses, coaches, and trucks with a reputation for quality and innovation.",
        mission: "To build the world's most desirable luxury vehicles with uncompromising quality.",
        vision: "To shape the future of mobility with sustainable luxury.",
        specialization: "Luxury automobiles, commercial vehicles",
        website: "https://www.mercedes-benz.com"
    },
    {
        name: "PAIDI",
        logo: "images/brands/paidi.png",
        tagline: "Made for children",
        description: "PAIDI is a premium German brand specializing in high-quality children's furniture that combines safety, functionality, and design.",
        mission: "To create safe, durable and beautiful furniture for children's rooms.",
        vision: "To be the benchmark for quality in children's furniture worldwide.",
        specialization: "Children's furniture, nursery products",
        website: "https://www.paidi.com"
    },
    {
        name: "CAM",
        logo: "images/brands/cam.png",
        tagline: "Outdoor adventures made easy",
        description: "CAM provides high-quality outdoor and camping equipment for adventure enthusiasts with products designed to withstand the elements.",
        mission: "To equip outdoor enthusiasts with reliable, high-performance gear for all adventures.",
        vision: "To inspire more people to explore the great outdoors with confidence.",
        specialization: "Camping gear, outdoor equipment",
        website: "https://www.cam-outdoors.com"
    },
    {
        name: "TFK",
        logo: "images/brands/tfk.png",
        tagline: "Innovative baby mobility",
        description: "TFK is a German brand specializing in innovative strollers and baby mobility solutions that combine functionality with modern design.",
        mission: "To develop baby mobility products that make parenting easier and more enjoyable.",
        vision: "To revolutionize baby transportation with smart, stylish solutions.",
        specialization: "Strollers, baby carriers, mobility solutions",
        website: "https://www.tfk.de"
    },
    {
        name: "Kolcraft",
        logo: "images/brands/kolcraft.png",
        tagline: "Comfort for baby, convenience for parents",
        description: "Kolcraft has been a leader in juvenile products for decades, offering durable and comfortable solutions for parents and babies.",
        mission: "To provide affordable, high-quality baby products that make parenting easier.",
        vision: "To be the most recommended baby brand by parents and pediatricians.",
        specialization: "Baby cribs, play yards, high chairs",
        website: "https://www.kolcraft.com"
    },
    {
        name: "Babykish",
        logo: "images/brands/babykish.png",
        tagline: "Gentle care for your little ones",
        description: "Babykish specializes in baby care products that combine safety, comfort, and innovation, trusted by parents globally.",
        mission: "To provide safe, innovative baby care solutions that help parents nurture their children with confidence.",
        vision: "To be the leading baby care brand recognized for quality and safety standards.",
        specialization: "Baby diapers, wipes, skincare products",
        website: "https://www.babykish.com"
    },
    {
        name: "Clarion Shipping",
        logo: "images/brands/clarion.png",
        tagline: "Global logistics solutions",
        description: "Clarion Shipping provides comprehensive logistics and shipping solutions with a global network ensuring reliable cargo transportation.",
        mission: "To deliver efficient, cost-effective shipping solutions worldwide.",
        vision: "To be the most trusted logistics partner in the Middle East region.",
        specialization: "Freight forwarding, logistics, supply chain",
        website: "https://www.clarionshipping.com"
    },
    {
        name: "Makke Cosmetics",
        logo: "images/brands/makke.png",
        tagline: "Beauty with purpose",
        description: "Makke Cosmetics offers premium beauty products that combine natural ingredients with scientific innovation for visible results.",
        mission: "To create high-performance cosmetics that enhance natural beauty.",
        vision: "To become a globally recognized leader in ethical cosmetics.",
        specialization: "Skincare, makeup, beauty products",
        website: "https://www.makkecosmetics.com"
    },
    {
        name: "Mr Henry Drink",
        logo: "images/brands/mrhenry.png",
        tagline: "Premium beverages for every occasion",
        description: "Mr Henry Drink crafts premium beverages with unique flavors, offering sophisticated drinking experiences for discerning consumers.",
        mission: "To create distinctive beverages that elevate everyday moments.",
        vision: "To be recognized as a leader in innovative beverage solutions.",
        specialization: "Premium beverages, soft drinks, mixers",
        website: "https://www.mrhenrydrink.com"
    },
    {
  name: "Hartan",
  logo: "images/brands/hartan.png",
  tagline: "German engineering for your baby",
  description: "Hartan is a renowned German manufacturer known for its high-quality baby strollers that blend tradition with innovation and safety.",
  mission: "To provide parents with safe, stylish, and practical strollers made with German precision and care.",
  vision: "To be the most trusted brand for premium baby strollers in Europe and beyond.",
  specialization: "Baby strollers, accessories, custom designs",
  website: "https://www.hartan.de"
}
    
];

// Initialize brands section
document.addEventListener('DOMContentLoaded', function() {
    const brandsContainer = document.querySelector('#brands .grid');
    
    // Add brand items to the grid
    brandsData.forEach(brand => {
        const brandItem = document.createElement('div');
        brandItem.className = 'brand-item bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:transform hover:-translate-y-1 reveal';
        brandItem.innerHTML = `
            <div class="p-4 h-full flex flex-col items-center justify-center">
                <div class="h-24 flex items-center mb-4">
                    <img src="${brand.logo}" alt="${brand.name}" class="max-h-full max-w-full object-contain">
                </div>
                <h3 class="text-lg font-medium text-center text-garret-500">${brand.name}</h3>
                <p class="text-sm text-gray-500 text-center mt-1">${brand.tagline}</p>
            </div>
        `;
        
        brandItem.addEventListener('click', () => openBrandModal(brand));
        brandsContainer.appendChild(brandItem);
    });
    
    // Brand modal functionality
    const brandModal = document.getElementById('brand-modal');
    const closeButtons = [
        document.getElementById('close-brand-modal'),
        document.getElementById('cancel-brand-modal')
    ];
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            brandModal.classList.add('hidden');
        });
    });
    
    // Close modal when clicking outside
    brandModal.addEventListener('click', (e) => {
        if (e.target === brandModal) {
            brandModal.classList.add('hidden');
        }
    });
});

function openBrandModal(brand) {
    document.getElementById('brand-modal-title').textContent = brand.name;
    document.getElementById('brand-modal-tagline').textContent = brand.tagline;
    document.getElementById('brand-modal-description').textContent = brand.description;
    document.getElementById('brand-modal-mission').textContent = brand.mission;
    document.getElementById('brand-modal-vision').textContent = brand.vision;
    document.getElementById('brand-modal-specialization').textContent = brand.specialization;
    document.getElementById('brand-website-link').href = brand.website;
    
    document.getElementById('brand-modal').classList.remove('hidden');
}