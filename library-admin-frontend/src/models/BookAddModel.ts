import ImageModel from './ImageModel';

class BookAddModel {
    name: string;
    publishingYear?: number;
    description?: string;
    price?: number;
    inventoryNumber?: number;
    pageNumber?: number;
    status?: string;
    language?: string;
    author?: number;
    category?: number;
    publisher?: number;
    weight?: number;
    size?: string;
    images?: ImageModel[];

    constructor(
        name: string,
        publishingYear: number,
        description: string,
        price: number,
        inventoryNumber: number,
        pageNumber: number,
        status: string,
        language: string,
        author: number,
        category: number,
        publisher: number,
        weight: number,
        size: string,
        images: ImageModel[],
    ) {
        this.name = name;
        this.publishingYear = publishingYear;
        this.description = description;
        this.price = price;
        this.inventoryNumber = inventoryNumber;
        this.pageNumber = pageNumber;
        this.status = status;
        this.language = language;
        this.author = author;
        this.category = category;
        this.publisher = publisher;
        this.weight = weight;
        this.size = size;
        this.images = images;
    }
}

export default BookAddModel;
