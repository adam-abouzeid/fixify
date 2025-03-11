const products = [
    {
        id: 1,
        name: "Professional Power Drill",
        category: "tools",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "High-performance cordless drill with variable speed control"
    },
    {
        id: 2,
        name: "Premium Paint Brush Set",
        category: "paint",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Professional-grade paint brushes for perfect finish"
    },
    {
        id: 3,
        name: "Heavy Duty Tool Box",
        category: "tools",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Durable storage solution for all your tools"
    },
    {
        id: 4,
        name: "LED Work Light",
        category: "electrical",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Bright, adjustable work light for any project"
    }
];

const productGrid = document.querySelector('.product-grid');
const categoryFilter = document.getElementById('category');
const priceRange = document.getElementById('price');
const priceValue = document.getElementById('price-value');

priceRange.addEventListener('input', (e) => {
    priceValue.textContent = `$${e.target.value}`;
});

function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const maxPrice = parseFloat(priceRange.value);

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        const priceMatch = product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    displayProducts(filteredProducts);
}

function displayProducts(productsToShow) {
    productGrid.innerHTML = productsToShow.map(product => `
        <article class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <button class="shop-button" onclick="addToCart(${product.id})">Add to Cart</button>
        </article>
    `).join('');
}

categoryFilter.addEventListener('change', filterProducts);
priceRange.addEventListener('change', filterProducts);

displayProducts(products); 