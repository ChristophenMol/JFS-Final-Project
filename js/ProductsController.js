
//task 4
class ProductsController {
    constructor (currentId = 0){
        this.items = [];
        this.currentId = currentId;
    }
<<<<<<< HEAD

     addItems(name, author, description, image, price, createdAt){
=======
        // create addItems method
     addItems(name, description, image, price){
>>>>>>> 045a067e2d10e715aa9d4bf8fcb68373768d307d
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            image: image,
            price: price
    }         
    this.items.push(item);

<<<<<<< HEAD
        this.items.push(item);
        
    }
    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0; i < items.length; i++) {
                const item = items[i];
                this.items.push(item);
    }
            }
        }
    }
=======
    localStorage.setItem("items", JSON.stringify(this.items));
    }

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                this.items.push(item);
             
    }
            }
        }

    }
>>>>>>> 045a067e2d10e715aa9d4bf8fcb68373768d307d
