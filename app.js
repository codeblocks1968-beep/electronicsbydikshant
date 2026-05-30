// Initialize Icons
lucide.createIcons();

// --- STATE MANAGEMENT ---
let cart = [];
const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        category: 'Smartphones',
        price: 1199,
        rating: 4.9,
        reviews: 1245,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop',
        tag: 'Bestseller',
        description: 'The ultimate iPhone. Featuring a strong and light aerospace-grade titanium design with contoured edges. A powerful camera system upgrade, and the A17 Pro chip for a new level of performance.',
        specs: { 'Display': '6.7-inch Super Retina XDR', 'Chip': 'A17 Pro', 'Camera': '48MP Main | Ultra Wide | Telephoto', 'Battery': 'Up to 29 hours video playback' }
    },
    {
        id: 2,
        name: 'MacBook Pro M3 Max',
        category: 'Laptops',
        price: 3499,
        rating: 5.0,
        reviews: 890,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
        tag: 'New',
        description: 'The most advanced chips ever built for a personal computer. M3, M3 Pro, and M3 Max chips deliver a massive leap in performance and capability.',
        specs: { 'Display': '14.2 or 16.2-inch Liquid Retina XDR', 'Processor': 'Apple M3 Max chip', 'Memory': 'Up to 128GB unified memory', 'Storage': 'Up to 8TB' }
    },
    {
        id: 3,
        name: 'Sony WH-1000XM5',
        category: 'Headphones',
        price: 398,
        rating: 4.8,
        reviews: 3200,
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop',
        tag: 'Trending',
        description: 'Industry-leading noise cancellation. Spectacular sound. Exceptional call quality. WH-1000XM5 headphones rewrite the rules for distraction-free listening.',
        specs: { 'Type': 'Over-ear', 'Battery Life': 'Up to 30 hours', 'Noise Cancelling': 'Industry Leading ANC', 'Connection': 'Bluetooth 5.2' }
    },
    {
        id: 4,
        name: 'Apple Watch Ultra 2',
        category: 'Watches',
        price: 799,
        rating: 4.9,
        reviews: 450,
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1000&auto=format&fit=crop',
        tag: '',
        description: 'The most rugged and capable Apple Watch. Designed for endurance, exploration, and adventure. With a 49mm aerospace-grade titanium case and an extra-long battery life.',
        specs: { 'Case Size': '49mm Titanium', 'Display': 'Always-On Retina (3000 nits)', 'Sensors': 'Blood Oxygen | ECG | Temperature', 'Water Resistance': '100m' }
    },
    {
        id: 5,
        name: 'Samsung Galaxy S24 Ultra',
        category: 'Smartphones',
        price: 1299,
        rating: 4.8,
        reviews: 950,
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop',
        tag: 'New',
        description: 'The most powerful Galaxy smartphone yet. Featuring Galaxy AI, a stunning QHD+ display, and a 200MP camera system.',
        specs: { 'Display': '6.8-inch Dynamic AMOLED 2X', 'Processor': 'Snapdragon 8 Gen 3', 'Camera': '200MP Main | 12MP Ultra Wide | 50MP/10MP Telephoto', 'AI': 'Galaxy AI built-in' }
    },
    {
        id: 6,
        name: 'Dell XPS 15',
        category: 'Laptops',
        price: 2199,
        rating: 4.7,
        reviews: 620,
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop',
        tag: '',
        description: 'Power meets elegance. The ultimate creator laptop with a stunning InfinityEdge display and high-performance components.',
        specs: { 'Display': '15.6-inch OLED 3.5K', 'Processor': 'Intel Core i9', 'Graphics': 'NVIDIA GeForce RTX 4060', 'RAM': '32GB DDR5' }
    },
    {
        id: 7,
        name: 'NexTech Pro Headphones',
        category: 'Headphones',
        price: 299,
        rating: 4.9,
        reviews: 2100,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
        tag: 'Deal',
        description: 'Industry-leading noise cancellation. Spectacular sound. Exceptional call quality.',
        specs: { 'Type': 'Over-ear', 'Battery': '30 Hours', 'ANC': 'Pro Grade' }
    },
    {
        id: 8,
        name: 'PlayStation 5 Console',
        category: 'Gaming',
        price: 499,
        rating: 4.9,
        reviews: 5600,
        image: 'https://images.unsplash.com/photo-1606813907291-d86ebb9c74ad?q=80&w=1000&auto=format&fit=crop',
        tag: 'Popular',
        description: 'The next generation of gaming is here. Experience lightning-fast loading with an ultra-high-speed SSD.',
        specs: { 'Resolution': '4K 120Hz', 'Storage': '825GB SSD', 'Controller': 'DualSense Wireless' }
    },
    {
        id: 9,
        name: 'GoPro HERO 12',
        category: 'Cameras',
        price: 399,
        rating: 4.8,
        reviews: 320,
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop',
        tag: '',
        description: 'The ultimate action camera. Stunning 5.3K video and Emmy-award winning HyperSmooth 6.0 stabilization.',
        specs: { 'Video': '5.3K60', 'Stabilization': 'HyperSmooth 6.0', 'Waterproof': '33ft (10m)' }
    },
    {
        id: 10,
        name: 'iPad Air M2',
        category: 'Tablets',
        price: 549,
        rating: 4.9,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop',
        tag: 'Sale',
        description: 'Power through anything with the M2 chip. All-day battery life and a stunning Liquid Retina display.',
        specs: { 'Chip': 'Apple M2', 'Display': '11-inch Liquid Retina', 'Storage': '128GB' }
    },
    {
        id: 11,
        name: 'Samsung 49" Odyssey G9',
        category: 'Gaming',
        price: 999,
        rating: 4.7,
        reviews: 1100,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop',
        tag: 'Deal',
        description: 'The world\'s first 240Hz 4K gaming monitor. Unmatched immersion with a 1000R curved screen.',
        specs: { 'Resolution': '5120 x 1440', 'Refresh Rate': '240Hz', 'Panel': 'OLED' }
    },
    {
        id: 12,
        name: 'Bose QuietComfort Ultra',
        category: 'Headphones',
        price: 329,
        rating: 4.8,
        reviews: 890,
        image: 'https://images.unsplash.com/photo-1546435770-a3e4265029b7?q=80&w=1000&auto=format&fit=crop',
        tag: 'Deal',
        description: 'World-class noise cancellation. Breakthrough spatialized audio. Premium comfort.',
        specs: { 'Type': 'Over-ear', 'Battery': '24 Hours', 'Bluetooth': '5.3' }
    },
    {
        id: 13,
        name: 'Google Pixel 8 Pro',
        category: 'Smartphones',
        price: 999,
        rating: 4.8,
        reviews: 780,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop',
        tag: 'Trending',
        description: 'The all-pro phone engineered by Google. It has the best of Google AI, the most advanced Pixel Camera ever, and can help you do more, even faster.',
        specs: { 'Display': '6.7-inch Super Actua Display', 'Chip': 'Google Tensor G3', 'Camera': '50MP Main | 48MP Wide | 48MP Telephoto', 'AI Features': 'Magic Eraser | Best Take | Circle to Search' }
    },
    {
        id: 14,
        name: 'Samsung Galaxy Z Fold 5',
        category: 'Smartphones',
        price: 1799,
        rating: 4.7,
        reviews: 310,
        image: 'https://images.unsplash.com/photo-1610945415295-d9b226bdf4c0?q=80&w=1000&auto=format&fit=crop',
        tag: 'Premium',
        description: 'The ultimate 7.6-inch screen mobile device. Unfold an immersive, expansive screen — reimagined to bring you PC-like gaming, massive productivity, and breathtaking viewing.',
        specs: { 'Display': '7.6-inch Dynamic AMOLED 2X Main', 'Processor': 'Snapdragon 8 Gen 2', 'Foldable Tech': 'Flex Hinge', 'Multitasking': 'Up to 3 active windows' }
    },
    {
        id: 15,
        name: 'ASUS ROG Zephyrus G14',
        category: 'Laptops',
        price: 1599,
        rating: 4.8,
        reviews: 540,
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop',
        tag: 'Popular',
        description: 'The world\'s most powerful 14-inch gaming laptop. Light, portable, and featuring a stunning Nebula HDR display with high refresh rates and NVIDIA RTX graphics.',
        specs: { 'Display': '14-inch Nebula HDR 165Hz', 'Processor': 'AMD Ryzen 9', 'Graphics': 'NVIDIA GeForce RTX 4070', 'Weight': '3.64 lbs' }
    },
    {
        id: 16,
        name: 'HP Spectre x360 14',
        category: 'Laptops',
        price: 1449,
        rating: 4.7,
        reviews: 420,
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop',
        tag: 'New',
        description: 'Crafted for perfection. A 2-in-1 convertible laptop featuring a spectacular OLED display, premium gem-cut chassis, and smart features that adapt to your work style.',
        specs: { 'Display': '14-inch 2.8K OLED Touchscreen', 'Processor': 'Intel Core Ultra 7', 'Design': '2-in-1 Convertible', 'Battery': 'Up to 15 hours' }
    },
    {
        id: 17,
        name: 'Apple AirPods Max',
        category: 'Headphones',
        price: 549,
        rating: 4.7,
        reviews: 1850,
        image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1000&auto=format&fit=crop',
        tag: 'Bestseller',
        description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.',
        specs: { 'Type': 'Over-ear', 'Chip': 'Apple H1 (each cup)', 'Audio Tech': 'Active Noise Cancellation | Spatial Audio', 'Battery': 'Up to 20 hours' }
    },
    {
        id: 18,
        name: 'Sennheiser Momentum 4',
        category: 'Headphones',
        price: 299,
        rating: 4.8,
        reviews: 980,
        image: 'https://images.unsplash.com/photo-1545127862-40ff62c80824?q=80&w=1000&auto=format&fit=crop',
        tag: 'Deal',
        description: 'Sennheiser Signature Sound combined with premium active noise cancellation and an outstanding 60-hour battery life.',
        specs: { 'Type': 'Over-ear', 'Battery Life': 'Up to 60 hours', 'ANC': 'Adaptive Noise Cancellation', 'Codec Support': 'aptX Adaptive | AAC | SBC' }
    },
    {
        id: 19,
        name: 'Garmin Fenix 7 Pro Solar',
        category: 'Watches',
        price: 799,
        rating: 4.9,
        reviews: 620,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
        tag: 'Trending',
        description: 'The ultimate multisport GPS smartwatch designed to perform all day, every day. Features a solar charging lens for battery life that stretches limits.',
        specs: { 'Display': '1.3-inch Solar Charged', 'GPS': 'Multi-band GNSS with SatIQ', 'Sensors': 'Wrist Heart Rate | Pulse Ox | Compass', 'Battery': 'Up to 22 days in smartwatch mode' }
    },
    {
        id: 20,
        name: 'Galaxy Watch 6 Classic',
        category: 'Watches',
        price: 399,
        rating: 4.7,
        reviews: 840,
        image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop',
        tag: 'New',
        description: 'The watch that knows you best is back with a personalized health experience and an upgraded, iconic rotating bezel.',
        specs: { 'Bezel': 'Physical Rotating Bezel', 'Display': 'Super AMOLED', 'Health Metrics': 'BIA Body Composition | ECG | Sleep Coaching', 'OS': 'Wear OS Powered by Samsung' }
    },
    {
        id: 21,
        name: 'Nintendo Switch OLED',
        category: 'Gaming',
        price: 349,
        rating: 4.9,
        reviews: 4200,
        image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop',
        tag: 'Bestseller',
        description: 'Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen, a wide adjustable stand, and wired LAN port.',
        specs: { 'Screen': '7-inch OLED Screen', 'Modes': 'TV | Tabletop | Handheld', 'Storage': '64GB Internal', 'Audio': 'Enhanced Onboard Audio' }
    },
    {
        id: 22,
        name: 'Xbox Series X Console',
        category: 'Gaming',
        price: 499,
        rating: 4.8,
        reviews: 3800,
        image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1000&auto=format&fit=crop',
        tag: 'Popular',
        description: 'The fastest, most powerful Xbox ever. Experience true 4K gaming, up to 120 FPS, and 12 teraflops of graphic processing power.',
        specs: { 'Processor': 'Custom Zen 2 & RDNA 2', 'Resolution': 'True 4K (8K Ready)', 'Frame Rate': 'Up to 120 FPS', 'Storage': '1TB Custom NVMe SSD' }
    },
    {
        id: 23,
        name: 'ASUS ROG Ally',
        category: 'Gaming',
        price: 699,
        rating: 4.6,
        reviews: 1150,
        image: 'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?q=80&w=1000&auto=format&fit=crop',
        tag: 'Trending',
        description: 'A true Windows 11 handheld gaming machine powered by AMD\'s latest Ryzen Z1 Extreme processor and custom RDNA 3 graphics.',
        specs: { 'Processor': 'AMD Ryzen Z1 Extreme', 'Display': '7-inch 1080p 120Hz Touchscreen', 'OS': 'Windows 11 Home', 'Storage': '512GB PCIe 4.0 NVMe SSD' }
    },
    {
        id: 24,
        name: 'Sony Alpha 7 IV Mirrorless',
        category: 'Cameras',
        price: 2499,
        rating: 4.9,
        reviews: 810,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
        tag: 'Professional',
        description: 'The perfect hybrid. Featuring a new 33MP Exmor R CMOS sensor, advanced auto focus, and 4K 60p video capabilities.',
        specs: { 'Sensor': '33MP Full-Frame Exmor R CMOS', 'AF System': 'Real-time Eye AF (Human/Animal/Bird)', 'Video': '4K 60p 10-bit 4:2:2', 'Stabilization': '5-axis SteadyShot Active' }
    },
    {
        id: 25,
        name: 'Galaxy Tab S9 Ultra',
        category: 'Tablets',
        price: 1199,
        rating: 4.8,
        reviews: 430,
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?q=80&w=1000&auto=format&fit=crop',
        tag: 'Premium',
        description: 'The new standard for premium tablets. A massive 14.6-inch Dynamic AMOLED 2X display, IP68 water resistance, and an included S Pen.',
        specs: { 'Display': '14.6-inch Dynamic AMOLED 2X (120Hz)', 'Processor': 'Snapdragon 8 Gen 2 for Galaxy', 'Stylus': 'S Pen Included (IP68)', 'Durability': 'Armor Aluminum Chassis' }
    },
    {
        id: 26,
        name: 'Microsoft Surface Pro 9',
        category: 'Tablets',
        price: 999,
        rating: 4.7,
        reviews: 690,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop',
        tag: 'New',
        description: 'The power of a laptop, the flexibility of a tablet. Get the security, portability, and performance you need to move through your day.',
        specs: { 'Processor': '12th Gen Intel Core i5/i7', 'Display': '13-inch PixelSense Flow Touchscreen', 'Battery': 'Up to 15.5 hours typical usage', 'OS': 'Windows 11 Home' }
    }
];

const grabDealBtn = document.getElementById('grabDealBtn');
if (grabDealBtn) {
    grabDealBtn.addEventListener('click', () => {
        addToCart(7);
        // Visual feedback
        grabDealBtn.innerText = 'Added to Cart!';
        setTimeout(() => grabDealBtn.innerText = 'Grab Deal - $299', 2000);
    });
}

// --- SCROLL REVEAL ---
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal();

// --- ANIME BACKGROUND PARTICLES ---
function createParticles() {
    const container = document.getElementById('bg-particles');
    if (!container) return;
    
    const particleCount = 15;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 15 + 5;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 20;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animation = `anime-particle ${duration}s linear ${delay}s infinite`;
        
        container.appendChild(particle);
    }
}
createParticles();

// --- THEME TOGGLE ---
const themeToggle = document.getElementById('themeToggle');
const htmlClassList = document.documentElement.classList;

if (localStorage.getItem('theme') === 'light') {
    htmlClassList.remove('dark');
} else {
    htmlClassList.add('dark');
}

themeToggle.addEventListener('click', () => {
    htmlClassList.toggle('dark');
    localStorage.setItem('theme', htmlClassList.contains('dark') ? 'dark' : 'light');
});

// --- NAVIGATION ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-md', 'backdrop-blur-xl');
    } else {
        navbar.classList.remove('shadow-md', 'backdrop-blur-xl');
    }
});

// --- CART SIDEBAR LOGIC ---
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartTrigger = document.querySelector('[aria-label="Cart"]');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');

function toggleCart(show) {
    if (show) {
        cartSidebar.classList.remove('invisible');
        setTimeout(() => {
            cartSidebar.querySelector('.translate-x-full').classList.remove('translate-x-full');
            cartOverlay.classList.replace('opacity-0', 'opacity-100');
        }, 10);
    } else {
        cartSidebar.querySelector('div:nth-child(2)').classList.add('translate-x-full');
        cartOverlay.classList.replace('opacity-100', 'opacity-0');
        setTimeout(() => cartSidebar.classList.add('invisible'), 500);
    }
}

cartTrigger.addEventListener('click', () => toggleCart(true));
closeCart.addEventListener('click', () => toggleCart(false));
cartOverlay.addEventListener('click', () => toggleCart(false));

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    renderCart();
    toggleCart(true);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

function renderCart() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-12 text-slate-500">
                <i data-lucide="shopping-cart" class="w-12 h-12 mx-auto mb-4 opacity-20"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="flex gap-4 p-4 glass-card rounded-2xl animate-fade-in">
                <img src="${item.image}" class="w-20 h-20 object-cover rounded-xl" alt="${item.name}">
                <div class="flex-1">
                    <h4 class="font-bold text-sm mb-1">${item.name}</h4>
                    <p class="text-primary font-bold text-sm mb-2">$${item.price}</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 rounded-lg px-2 py-1">
                            <button onclick="updateQty(${item.id}, -1)" class="hover:text-primary transition-colors"><i data-lucide="minus" class="w-3 h-3"></i></button>
                            <span class="text-xs font-bold w-4 text-center">${item.quantity}</span>
                            <button onclick="updateQty(${item.id}, 1)" class="hover:text-primary transition-colors"><i data-lucide="plus" class="w-3 h-3"></i></button>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="text-slate-400 hover:text-red-500 transition-colors">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const formattedTotal = `$${total.toLocaleString()}`;
    cartTotalElement.innerText = formattedTotal;
    
    // Update Checkout Summary if visible
    const checkoutItems = document.getElementById('checkoutItems');
    if (checkoutItems) {
        checkoutItems.innerHTML = cart.map(item => `
            <div class="flex justify-between text-sm">
                <span class="text-slate-500">${item.quantity}x ${item.name}</span>
                <span class="font-bold">$${(item.price * item.quantity).toLocaleString()}</span>
            </div>
        `).join('');
        document.getElementById('checkoutSubtotal').innerText = formattedTotal;
        document.getElementById('checkoutTotal').innerText = formattedTotal;
    }
    
    lucide.createIcons();
}

// --- CHECKOUT LOGIC ---
const checkoutSection = document.getElementById('checkoutSection');
const mainSections = document.querySelectorAll('main > section:not(#checkoutSection)');

window.showCheckout = () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    toggleCart(false);
    mainSections.forEach(s => s.classList.add('hidden'));
    checkoutSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderCart();
};

window.hideCheckout = () => {
    checkoutSection.classList.add('hidden');
    mainSections.forEach(s => s.classList.remove('hidden'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const checkoutSidebarBtn = document.getElementById('checkoutSidebarBtn');
if (checkoutSidebarBtn) checkoutSidebarBtn.addEventListener('click', showCheckout);

window.updateQty = (id, delta) => {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) removeFromCart(id);
        else renderCart();
    }
};

const placeOrderBtn = document.getElementById('placeOrderBtn');
if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', () => {
        const originalText = placeOrderBtn.innerText;
        placeOrderBtn.innerText = 'Processing...';
        placeOrderBtn.classList.add('opacity-50', 'cursor-not-allowed');
        
        setTimeout(() => {
            alert('🎉 Order Placed Successfully!\n\nThank you for choosing NexTech. Your order has been received and is being processed. You will receive an email confirmation shortly.');
            cart = [];
            renderCart();
            hideCheckout();
            placeOrderBtn.innerText = originalText;
            placeOrderBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }, 2000);
    });
}

// --- PRODUCT MODAL LOGIC ---
const productModal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');

function openProductDetail(productId) {
    const p = products.find(item => item.id === productId);
    modalContent.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-12">
            <div class="space-y-6">
                <div class="aspect-square rounded-3xl overflow-hidden glass-card group">
                    <img src="${p.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${p.name}">
                </div>
                <div class="grid grid-cols-4 gap-4">
                    ${[1, 2, 3, 4].map(() => `<div class="aspect-square rounded-xl overflow-hidden glass-card cursor-pointer hover:border-primary border-transparent border-2 transition-all"><img src="${p.image}" class="w-full h-full object-cover opacity-60 hover:opacity-100"></div>`).join('')}
                </div>
            </div>
            <div>
                <span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Premium Selection</span>
                <h2 class="text-4xl font-bold mb-4 leading-tight">${p.name}</h2>
                <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-1 text-yellow-400">
                        ${[1, 2, 3, 4, 5].map(i => `<i data-lucide="star" class="w-5 h-5 ${i <= Math.floor(p.rating) ? 'fill-yellow-400' : ''}"></i>`).join('')}
                    </div>
                    <span class="text-slate-500 font-medium">${p.rating} (${p.reviews} reviews)</span>
                </div>
                <p class="text-3xl font-bold text-primary mb-8">$${p.price.toLocaleString()}</p>
                <p class="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">${p.description}</p>
                
                <div class="space-y-4 mb-8">
                    <h4 class="font-bold">Specifications</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${Object.entries(p.specs).map(([key, val]) => `
                            <div class="p-3 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 border border-light-border dark:border-dark-border">
                                <span class="block text-xs text-slate-500 uppercase font-bold mb-1">${key}</span>
                                <span class="text-sm font-medium">${val}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="flex gap-4">
                    <button onclick="addToCart(${p.id}); closeProductModal()" class="flex-1 py-4 rounded-2xl bg-primary text-white font-bold hover:bg-secondary transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                        <i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart
                    </button>
                    <button class="p-4 rounded-2xl glass-card hover:bg-red-50 hover:text-red-500 transition-colors">
                        <i data-lucide="heart" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productModal.classList.remove('invisible');
    setTimeout(() => {
        productModal.querySelector('.scale-95').classList.replace('scale-95', 'scale-100');
        productModal.querySelector('.opacity-0').classList.replace('opacity-0', 'opacity-100');
        modalOverlay.classList.replace('opacity-0', 'opacity-100');
    }, 10);
    lucide.createIcons();
}

window.closeProductModal = () => {
    productModal.querySelector('.scale-100').classList.replace('scale-100', 'scale-95');
    productModal.querySelector('.opacity-100').classList.replace('opacity-100', 'opacity-0');
    modalOverlay.classList.replace('opacity-100', 'opacity-0');
    setTimeout(() => productModal.classList.add('invisible'), 300);
};

closeModal.addEventListener('click', closeProductModal);
modalOverlay.addEventListener('click', closeProductModal);

// --- RENDERING ---
function filterProducts(category) {
    const filtered = category === 'All' 
        ? products 
        : products.filter(p => p.category === category);
    renderProducts(filtered);
    
    // Update the section title
    const title = document.querySelector('#productsSection h2');
    if (title) title.innerText = category === 'All' ? 'Trending Now' : `${category}`;
    
    // Scroll to products
    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}

function renderCategories() {
    const categories = [
        { name: 'All', icon: 'layout' },
        { name: 'Smartphones', icon: 'smartphone' },
        { name: 'Laptops', icon: 'laptop' },
        { name: 'Headphones', icon: 'headphones' },
        { name: 'Watches', icon: 'watch' },
        { name: 'Gaming', icon: 'gamepad-2' },
        { name: 'Tablets', icon: 'tablet' },
        { name: 'Cameras', icon: 'camera' }
    ];
    const container = document.getElementById('categoriesGrid');
    if (!container) return;
    container.innerHTML = categories.map(cat => `
        <div onclick="filterProducts('${cat.name}')" class="glass-card flex flex-col items-center justify-center p-6 rounded-2xl hover:scale-105 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <i data-lucide="${cat.icon}" class="w-6 h-6 text-primary"></i>
            </div>
            <span class="font-medium text-slate-800 dark:text-slate-200">${cat.name}</span>
        </div>
    `).join('');
}

function renderProducts(productsToRender = products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = productsToRender.map(product => `
        <div class="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-fade-in">
            <div class="relative aspect-square overflow-hidden bg-white cursor-pointer" onclick="openProductDetail(${product.id})">
                ${product.tag ? `<div class="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest">${product.tag}</div>` : ''}
                <div class="absolute top-4 right-4 z-10 p-2 rounded-full glass-card hover:bg-red-50 hover:text-red-500 cursor-pointer transition-colors">
                    <i data-lucide="heart" class="w-4 h-4"></i>
                </div>
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out">
                <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="px-6 py-2 rounded-full bg-white/90 text-slate-900 font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick View</span>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-lg leading-tight truncate mr-2 cursor-pointer hover:text-primary transition-colors" onclick="openProductDetail(${product.id})">${product.name}</h3>
                    <span class="font-bold text-lg text-primary">$${product.price}</span>
                </div>
                <div class="flex items-center gap-1 mb-6">
                    <i data-lucide="star" class="w-4 h-4 fill-yellow-400 text-yellow-400"></i>
                    <span class="text-sm font-medium">${product.rating}</span>
                </div>
                <button onclick="addToCart(${product.id})" class="w-full py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold hover:bg-primary hover:text-white dark:hover:bg-primary transition-all flex items-center justify-center gap-2 group-hover:shadow-lg">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function renderDeals() {
    const grid = document.getElementById('dealsGrid');
    if (!grid) return;
    const dealProducts = products.filter(p => p.tag === 'Deal' || p.tag === 'Sale');
    grid.innerHTML = dealProducts.map(product => `
        <div class="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-fade-in relative border-red-500/20">
            <div class="absolute top-4 right-4 z-20 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-lg animate-pulse">HOT</div>
            <div class="relative aspect-square overflow-hidden bg-white cursor-pointer" onclick="openProductDetail(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out">
            </div>
            <div class="p-6">
                <h3 class="font-bold text-lg mb-2 truncate">${product.name}</h3>
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-2xl font-bold text-red-500">$${product.price}</span>
                    <span class="text-sm text-slate-400 line-through">$${(product.price * 1.3).toFixed(0)}</span>
                </div>
                <button onclick="addToCart(${product.id})" class="w-full py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition-all flex items-center justify-center gap-2">
                    Claim Deal
                </button>
            </div>
        </div>
    `).join('');
}

// Initial Render
renderCategories();
renderProducts();
renderDeals();
lucide.createIcons();

// --- AUTH MODAL LOGIC ---
const authModal = document.getElementById('authModal');
const authOverlay = document.getElementById('authOverlay');
const closeAuth = document.getElementById('closeAuth');

window.openAuth = () => {
    authModal.classList.remove('invisible');
    setTimeout(() => {
        authModal.querySelector('.scale-95').classList.replace('scale-95', 'scale-100');
        authModal.querySelector('.opacity-0').classList.replace('opacity-0', 'opacity-100');
        authOverlay.classList.replace('opacity-0', 'opacity-100');
    }, 10);
};

window.closeAuthModal = () => {
    authModal.querySelector('.scale-100').classList.replace('scale-100', 'scale-95');
    authModal.querySelector('.opacity-100').classList.replace('opacity-100', 'opacity-0');
    authOverlay.classList.replace('opacity-100', 'opacity-0');
    setTimeout(() => authModal.classList.add('invisible'), 300);
};

closeAuth.addEventListener('click', closeAuthModal);
authOverlay.addEventListener('click', closeAuthModal);

// Initialize Sign In buttons
function initAuthButtons() {
    document.querySelectorAll('button').forEach(btn => {
        const text = btn.innerText.trim().toLowerCase();
        if (text === 'sign in' || text === 'login') {
            btn.addEventListener('click', openAuth);
        }
    });
}
initAuthButtons();


