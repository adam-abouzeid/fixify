// Gallery data
const galleryItems = [
    {
        id: 1,
        category: 'kitchen',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        caption: 'Modern Kitchen Renovation'
    },
    {
        id: 2,
        category: 'bathroom',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        caption: 'Luxury Bathroom Remodel'
    },
    {
        id: 3,
        category: 'outdoor',
        image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        caption: 'Garden Deck Installation'
    },
    {
        id: 4,
        category: 'renovation',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        caption: 'Complete Home Renovation'
    }
];

// DOM Elements
const galleryGrid = document.querySelector('.gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

// Display gallery items
function displayGalleryItems(items) {
    galleryGrid.innerHTML = items.map(item => `
        <div class="gallery-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.caption}" onclick="openLightbox('${item.image}', '${item.caption}')">
        </div>
    `).join('');
}

// Filter gallery items
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter items
        const filteredItems = filter === 'all' 
            ? galleryItems 
            : galleryItems.filter(item => item.category === filter);
        
        displayGalleryItems(filteredItems);
    });
});

// Lightbox functionality
function openLightbox(imageSrc, caption) {
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Initialize gallery
displayGalleryItems(galleryItems); 