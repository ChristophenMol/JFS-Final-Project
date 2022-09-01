<<<<<<< HEAD
const productsController = new ProductsController;

function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.image +'">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    let itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML = itemHTML;
}



function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'',
        'image':'',
        'description':''},
        {'name':'Cherry Blossoms',
        'image':'https://www.pexels.com/photo/selective-focus-photography-of-pink-cherry-blossom-flowers-2099737/',
        'description':'Cherry Blossoms'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}
=======

// Initialize a new ItemsController with currentId set to 0
const productsController = new ProductsController(0);


function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
    '    <img src="'+item.img +'" width="300" height="250"  alt="product image">\n' +
    '    <div class="card-body">\n' +
    '        <h5 class="card-title">'+item.name+'</h5>\n' +
    '        <p class="card-text">'+item.description+'</p>\n' +
    '        <p class="card-text">'+item.price+'<p>\n' +
        '        <a href="#" class="btn btn-primary">Buy</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
        const productContainer = document.getElementById("list-items");
        productContainer.innerHTML += itemHTML;
    

}

/*function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'juice',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'Orange and Apple juice fresh and delicious'},
        {'name':'Ruffles Chicken',
        'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
        'description':'Ruffles Potato Chips - Chicken'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}*/

>>>>>>> 045a067e2d10e715aa9d4bf8fcb68373768d307d

function loadCardsListFromProductsController(){
    for(var i = 0; i < productsController.items.length; i++){
        const item = productsController.items[i];
        addItemCard(item);
    }
}


<<<<<<< HEAD
loadStorageSampleData();
productsController.loadItemsFromLocalStorage();
loadCardsListFromProductsController();

const test = {
    name:'Japan',
    image:'https://www.pexels.com/photo/selective-focus-photography-of-pink-cherry-blossom-flowers-2099737/',
    description:'Cherry Blossoms',
}

=======
productsController.loadItemsFromLocalStorage();
loadCardsListFromProductsController();
// loadStorageSampleData();
>>>>>>> 045a067e2d10e715aa9d4bf8fcb68373768d307d
