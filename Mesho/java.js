let bagItems;
onload();
function onload(){
  let bagitemstr= localStorage.getItem('bagItems');
  bagItems= bagitemstr ? JSON.parse(bagitemstr): [];
  displayItemHomepage();
bagitemcount();
}

function addTobag(itemid) {
  bagItems.push(itemid);
  bagitemcount();
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
}
function bagitemcount(){
  let bagitemcount= document.querySelector('.bag-item-count')
  if(bagItems.length > 0){
    bagitemcount.style.visibility='visible';
    bagitemcount.innerHTML=bagItems.length;
  }
  else{
    bagitemcount.style.visibility='hidden';
  }
}
function displayItemHomepage(){function displayItemsOnHomePage(){let itemscontainerElement = document.querySelector('.items-container');
    if(!itemscontainerElement){
return;
    };
  let innerHTML = '';
  items.forEach(item => {
    innerHTML += `
      <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">${item.rating.stars}⭐| ${item.rating.count} </div>
        <div class="company-name">${item.company} Carlton London</div> 
        <div class="item-name"> ${item.item_name} Rhodium-Plated CZ Floral Studs</div>
        <div class="price">
         <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="button-bag" onclick="addTobag(${item.id})">Add to Bag</button>
      </div>
    `;
  });
  
  itemscontainerElement.innerHTML = innerHTML; }
  let bagItems;
onload();
function onload(){
  let bagitemstr= localStorage.getItem('bagItems');
  bagItems= bagitemstr ? JSON.parse(bagitemstr): [];
  displayItemHomepage();
bagitemcount();
}

function addTobag(itemid) {
  bagItems.push(itemid);
  bagitemcount();
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
}
function bagitemcount(){
  let bagitemcount= document.querySelector('.bag-item-count')
  if(bagItems.length > 0){
    bagitemcount.style.visibility='visible';
    bagitemcount.innerHTML=bagItems.length;
  }
  else{
    bagitemcount.style.visibility='hidden';
  }
}
function displayItemHomepage(){function displayItemsOnHomePage(){let itemscontainerElement = document.querySelector('.items-container');
    if(!itemscontainerElement){
return;
    };
  let innerHTML = '';
  items.forEach(item => {
    innerHTML += `
      <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">${item.rating.stars}⭐| ${item.rating.count} </div>
        <div class="company-name">${item.company} Carlton London</div> 
        <div class="item-name"> ${item.item_name} Rhodium-Plated CZ Floral Studs</div>
        <div class="price">
         <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="button-bag" onclick="addTobag(${item.id})">Add to Bag</button>
      </div>
    `;
  });
  
  itemscontainerElement.innerHTML = innerHTML; }
  displayItemsOnHomePage();
}

}
