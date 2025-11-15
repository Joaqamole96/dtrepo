// Product Data Array (Philippine Peso Prices ₱)
const products = [
    // Gadgets
    { id: 1, name: 'TWS In-Ear Monitors', price: 4500.00, type: 'gadgets' },
    { id: 2, name: 'Quantum Gaming Mouse', price: 2899.50, type: 'gadgets' },
    { id: 3, name: 'The "Maharlika" Smartwatch', price: 12999.00, type: 'gadgets' },
    { id: 11, name: 'Ergonomic Mechanical Keyboard', price: 5900.00, type: 'gadgets' },
    { id: 12, name: 'Portable Bluetooth Speaker', price: 1850.00, type: 'gadgets' },
    { id: 17, name: '4K Ultra HD Streaming Stick', price: 2650.00, type: 'gadgets' },
    { id: 20, name: 'Noise-Cancelling Earbuds (Budget)', price: 800.00, type: 'gadgets' },
    { id: 10, name: 'Invisibility Cloak (Beta)', price: 14500.00, type: 'gadgets' }, // Kalokohan ko

    // Fashion
    { id: 4, name: 'Adobo Printed Shirt', price: 950.00, type: 'fashion' },
    { id: 5, name: 'Barong Tagalog Hoodie', price: 3400.00, type: 'fashion' },
    { id: 6, name: 'Water-resistant Sling Bag', price: 1550.00, type: 'fashion' },
    { id: 13, name: 'Handmade Abaca Sandals', price: 1200.00, type: 'fashion' },
    { id: 14, name: 'Organic Bamboo Socks (3-pack)', price: 450.00, type: 'fashion' },
    { id: 18, name: 'Minimalist Leather Wallet', price: 1999.00, type: 'fashion' },

    // Home & Lifestyle
    { id: 7, name: 'Premium Kapeng Barako Kit', price: 780.00, type: 'home' },
    { id: 8, name: 'Apo Reef Wall Art', price: 1500.00, type: 'home' },
    { id: 15, name: 'Filipiniana Patterned Throw Blanket', price: 2100.00, type: 'home' },
    { id: 16, name: 'Set of Capiz Shell Coasters', price: 890.00, type: 'home' },
    { id: 19, name: 'Aromatherapy Diffuser & Oil Set', price: 1350.00, type: 'home' },
    { id: 9, name: 'Taho Flavor Enhancer (Digital)', price: 500.00, type: 'home' },
];

// DOM Element Declarations
const productListEl = document.getElementById('product-list');
const sortSelect = document.getElementById('sort-by');
const filterTypeSelect = document.getElementById('filter-type');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const applyFilterButton = document.getElementById('apply-filter');


// State Variables
let currentSort = sortSelect.value;
let currentFilterType = filterTypeSelect.value;
let currentMinPrice = parseFloat(minPriceInput.value);
let currentMaxPrice = parseFloat(maxPriceInput.value);



const buyItem = (productName) => {
    alert(`🎉 Success! You have purchased the ${productName}!\n\nIt will be delivered via drone based on the geographic location of this device. Check your coordinates!`);
};

const renderProducts = (productsToRender) => {
    productListEl.innerHTML = ''; 

    if (productsToRender.length === 0) {
        productListEl.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 20px;">Wala! No products match your criteria. Try adjusting the filters.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Function to format price as Philippine Peso
        const formattedPrice = product.price.toLocaleString('en-PH', {
            style: 'currency',
            currency: 'PHP',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.type.charAt(0).toUpperCase() + product.type.slice(1)}</p>
            <p class="product-price">${formattedPrice}</p>
            <button class="buy-button" data-product-name="${product.name}">Buy Now</button>
        `;
        productListEl.appendChild(card);
    });
    
    // Attach event listeners to the new "Buy" buttons
    productListEl.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-product-name');
            buyItem(productName);
        });
    });
};

const sortProducts = (data, criteria) => {
    const sortedData = [...data]; 
    
    return sortedData.sort((a, b) => {
        switch (criteria) {
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            default:
                return 0;
        }
    });
};

const filterProducts = (data, type, minPrice, maxPrice) => {
    const min = minPrice > 0 ? minPrice : 0; 
    const max = maxPrice > 0 ? maxPrice : Infinity;
    
    return data.filter(product => {
        const matchesType = (type === 'all' || product.type === type);
        const matchesMinPrice = (product.price >= min);
        const matchesMaxPrice = (product.price <= max);
        
        return matchesType && matchesMinPrice && matchesMaxPrice;
    });
};

const updateProductList = () => {
    // 1. Get current values from the input fields for filtering
    currentMinPrice = parseFloat(minPriceInput.value) || 0; 
    currentMaxPrice = parseFloat(maxPriceInput.value) || Infinity;

    // 2. Apply Filters
    let filteredProducts = filterProducts(
        products, 
        currentFilterType, 
        currentMinPrice,
        currentMaxPrice
    );

    // 3. Apply Sort
    let finalProducts = sortProducts(
        filteredProducts, 
        currentSort
    );

    // 4. Render the final list
    renderProducts(finalProducts);
};


// Event Listeners for Sorting and Filtering Controls
sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    updateProductList();
});

filterTypeSelect.addEventListener('change', (e) => {
    currentFilterType = e.target.value;
    updateProductList();
});

applyFilterButton.addEventListener('click', updateProductList);

minPriceInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') updateProductList();
});
maxPriceInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') updateProductList();
});



updateProductList();