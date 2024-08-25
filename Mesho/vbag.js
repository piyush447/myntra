const chargefee = 99;
let bagItemObject;
// let bagItems= [];
onload();
function onload() {
    loadBagItemObject();
    bagItemCount();
    displayBagSummary();
    bagItems();
   
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
    console.log(bagItems);
    bagItemObject = bagItems.map(itemId => {
      for (let i = 0; i < items.length; i++) {
        if (itemId == items[i].id) {
          return items[i];
        }
      }
    });
    console.log(bagItemObject);
  }

function bagItemCount() {
    let containerElement = document.querySelector('.bag-items-container');
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
    bagItemCount();
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