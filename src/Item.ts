export default abstract class Item {
    category: string;
    description: string;
    price: number;

    constructor (category: string, description: string, price: number) {
        this.category = category;
        this.description = description;
        this.price = price;
    }
}