const products = [
  {
    id: 1,
    name: "Professional Power Drill",
    category: "tools",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "High-performance cordless drill with variable speed control",
  },
  {
    id: 2,
    name: "Premium Paint Brush Set",
    category: "paint",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Professional-grade paint brushes for perfect finish",
  },
  {
    id: 3,
    name: "Heavy Duty Tool Box",
    category: "tools",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Durable storage solution for all your tools",
  },
  {
    id: 4,
    name: "LED Work Light",
    category: "electrical",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Bright, adjustable work light for any project",
  },
  {
    id: 5,
    name: "Premium Drill Set",
    category: "tools",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Professional-grade drill set with multiple bits and accessories",
  },
  {
    id: 6,
    name: "Garden Hose Kit",
    category: "garden",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Expandable garden hose with spray nozzle and quick connectors",
  },
  {
    id: 7,
    name: "Interior Paint - Eggshell",
    category: "paint",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Premium low-VOC interior paint, available in multiple colors",
  },

  {
    id: 9,
    name: "Circular Saw",
    category: "tools",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Powerful 15-amp circular saw with laser guide system",
  },
  {
    id: 10,
    name: "Outdoor Deck Stain",
    category: "paint",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Waterproof deck stain and sealer in multiple finishes",
  },
  {
    id: 11,
    name: "Bathroom Faucet",
    category: "plumbing",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Modern brushed nickel bathroom faucet with easy installation",
  },

  {
    id: 13,
    name: "Tile Cutter",
    category: "tools",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Professional manual tile cutter for precise cuts up to 24 inches",
  },
  {
    id: 14,
    name: "Smart Door Lock",
    category: "security",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Keyless entry door lock with smartphone control and guest access",
  },
  {
    id: 15,
    name: "Pressure Washer",
    category: "tools",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "2000 PSI electric pressure washer with multiple nozzle attachments",
  },
  {
    id: 16,
    name: "Kitchen Sink",
    category: "plumbing",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Stainless steel double-bowl kitchen sink with sound dampening",
  },
];

const productGrid = document.querySelector(".product-grid");
const categoryFilter = document.getElementById("category");
const priceRange = document.getElementById("price");
const priceValue = document.getElementById("price-value");

priceRange.addEventListener("input", (e) => {
  priceValue.textContent = `$${e.target.value}`;
});

function filterProducts() {
  const selectedCategory = categoryFilter.value;
  const maxPrice = parseFloat(priceRange.value);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch = product.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  displayProducts(filteredProducts);
}

function displayProducts(productsToShow) {
  productGrid.innerHTML = productsToShow
    .map(
      (product) => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <button class="shop-button" onclick="addToCart(${
              product.id
            })">Add to Cart</button>
        </div>
    `
    )
    .join("");
}

categoryFilter.addEventListener("change", filterProducts);
priceRange.addEventListener("change", filterProducts);

displayProducts(products);
