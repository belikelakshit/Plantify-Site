// Featured products data
const featuredProducts = [
    {
        name: 'Peperomia Ginny',
        price: 25,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcROh8l8bxbwYpA5ZSeMIqnY6MtIHGRQNFcxGe2aAy92Pe1UeRxAa0ESo9YOuMWKvOdeabNi4sFC1N8ncXYe2vJndNb6uUamPhWaK0w8tSd1',
        colors: ['#4A5043', '#A37B73', '#DEBA9D']
    },
    {
        name: 'Bird\'s Nest Fern',
        price: 45,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09',
        colors: ['#4A5043', '#A37B73']
    },
    {
        name: 'Large Majesty Palm',
        price: 52,
        image: 'https://m.media-amazon.com/images/I/41qworAVslL._SX300_SY300_QL70_FMwebp_.jpg',
        colors: ['#4A5043', '#DEBA9D']
    },
    {
        name: 'Pet Friendly Plants',
        price: 30,
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
        colors: ['#4A5043', '#A37B73', '#DEBA9D']
    }
];


// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="color-options">
                    ${product.colors.map(color => 
                        `<div style="width: 20px; height: 20px; border-radius: 50%; background-color: ${color};"></div>`
                    ).join('')}
                </div>
                <span class="price">$${product.price}</span>
            </div>
            <button class="buy-btn">Buy</button>
        </div>
    `;
    
    return card;
}

// Initialize hero slider
function initializeHeroSlider() {
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function updateSlide(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlide(currentSlide);
        });
    });
}

// Populate featured products
document.addEventListener('DOMContentLoaded', () => {
    const featuredGrid = document.getElementById('featured-grid');
    featuredProducts.forEach(product => {
        featuredGrid.appendChild(createProductCard(product));
    });

    // Initialize hero slider
    initializeHeroSlider();

    // Initialize search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        console.log('Searching for:', e.target.value);
    });

    // Initialize cart functionality
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.addEventListener('click', () => {
        console.log('Cart clicked');
    });
});