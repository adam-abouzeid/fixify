//Abdullah
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
    },
    {
        id: 5,
        category: 'kitchen',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Complete kitchen Renovation'
    },
    {
        id: 6,
        category: 'outdoor',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Complete terrace installation'
    },
    {
        id: 7,
        category: 'renovation',
        image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Complete sittibg area Renovation'
    },
    {
        id: 8,
        category: 'bathroom',
        image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Luxury Bathroom Remodel'
    }

];

const galleryGrid = document.querySelector('.gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

function displayGalleryItems(items) {
    galleryGrid.innerHTML = items.map(item => `
        <div class="gallery-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.caption}" onclick="openLightbox('${item.image}', '${item.caption}')">
        </div>
    `).join('');
}
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filteredItems = filter === 'all' 
            ? galleryItems 
            : galleryItems.filter(item => item.category === filter);
        
        displayGalleryItems(filteredItems);
    });
});

function openLightbox(imageSrc, caption) {
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
});

displayGalleryItems(galleryItems); 