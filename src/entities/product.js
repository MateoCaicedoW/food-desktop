class Product {
    constructor(id, name, description, price, created_at, updated_at ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }


    toJSON(){
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }

    static fromJSON(json){
        const product = new Product();
        product.id = json.id;
        product.name = json.name;
        product.description = json.description;
        product.price = json.price;
        product.created_at = json.created_at;
        product.updated_at = json.updated_at;

        return product;
    }
}

class Products {
    constructor(){
        this.products = [];
    }

    add(product){
        this.products.push(product);
    }

    remove(product){
        this.products = this.products.filter(p => p.id !== product.id);
    }

    toJSON(){
        return this.products.map(product => product.toJSON());
    }

    static fromJSON(json){
        const products = new Products();
        products.products = json.map(product => Product.fromJSON(product));

        return products;
    }

    map(callback){
        return this.products.map(callback);
    }

    get length(){
        return this.products.length;
    }

    toArray(){
        return this.products;
    }
}


export {
    Product,
    Products
}