const chargefee = 99;
let bagItemObject;
let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];

// Assuming you have an array of items somewhere in your script
const items = [
    // Example items, you should replace these with your actual item objects
    { id: 1, company: 'Company A', item_name: 'Item A', original_price: 1000, current_price: 800, image_path: 'path/to/image1.jpg', return_period: '30 Days', delivery_date: 'Aug 30, 2024' },
    { id: 2, company: 'Company B', item_name: 'Item B', original_price: 2000, current_price: 1500, image_path: 'path/to/image2.jpg', return_period: '15 Days', delivery_date: 'Sep 1, 2024' },
    // Add more items here
];

onload();

function onload() {
    loadBagItemObject();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.bag-summary');
    let totalitem = bagItemObject.length;
    let totalMRP = 0;
    let totaldiscount = 0;

    bagItemObject.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totaldiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totaldiscount + chargefee;

    bagSummaryElement.innerHTML = `
        <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalitem} Items)</div>
        </div>
        <div class="price-item">
            <span class="price-item-tag">Total MRP</span>
            <span class="price-item-value">₹ ${totalMRP}</span>
        </div>
        <div class="price-item">
            <span class="price-item-tag">Discount on MRP</span>
            <span class="price-item-value priceDetail-base-discount">-₹${totaldiscount}</span>
        </div>
        <div class="price-item">
            <span class="price-item-tag">Convenience Fee</span>
            <span class="price-item-value">₹ ${chargefee}</span>
        </div>
        <hr>
        <div class="price-footer">
            <span class="price-item-tag">Total Amount</span>
            <span class="price-item-value"> ₹ ${finalPayment}</span>
        </div>
        <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
        </button>`;
}
function loadBagItemObject() {
    bagItemObject = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(bagItemObject);
}

function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    if (!containerElement) {
        console.error("Element with class 'bag-items-container' not found.");
        return;
    }
    let innerHTML = '';
    bagItemObject.forEach(bagItem => {
        innerHTML += generateHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
    bagItems = bagItems.filter(bagItemID => bagItemID !== itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObject();
    displayBagItems(); // Corrected from bagItemCount() to displayBagItems()
    displayBagSummary(); // Update the summary after removing an item
}

function generateHTML(item) {
    return `
        <div class="item-left-part">
            <img src="${item.image_path}" alt="${item.item_name}">
        </div>
        <div class="item-right-part">
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price-container">
                <span class="current-price">Rs.${item.current_price}</span>
                <span class="original-price">Rs.${item.original_price}</span>
                <span class="discount">${((item.original_price - item.current_price) / item.original_price * 100).toFixed(2)}%</span>
            </div>
            <div class="return-period">
                <span class="return-period-days">${item.return_period}</span> Return Available
            </div>
            <div class="delivery-address">
                Delivery By <span class="delivery-address-details">${item.delivery_date}</span>
            </div>
            <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
        </div>`;
        
}
