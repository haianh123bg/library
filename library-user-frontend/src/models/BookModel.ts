import AuthorModel from './AuthorModel';
import CategoryModel from './CategoryModel';
import CouponCodeModel from './CouponCodeModel';
import ImageModel from './ImageModel';
import PublisherModel from './PublisherModel';

class BookModel {
    id: number;
    name: string;
    publishing_year?: number;
    description?: string;
    price?: number;
    inventory_number?: number;
    page_number?: number;
    status?: string;
    language?: string;
    author?: AuthorModel;
    category?: CategoryModel;
    publisher?: PublisherModel;
    created_at?: string;
    updated_at?: string;
    weight?: number;
    ratings_star?: number;
    size?: string;
    images?: ImageModel[];
    coupon_codes?: CouponCodeModel;

    constructor(
        id: number,
        name: string,
        publishing_year: number,
        description: string,
        price: number,
        inventory_number: number,
        page_number: number,
        status: string,
        language: string,
        author: AuthorModel,
        category: CategoryModel,
        publisher: PublisherModel,
        weight: number,
        size: string,
        created_at: string,
        updated_at: string,
        images: ImageModel[],
        coupon_codes: CouponCodeModel,
    ) {
        this.id = id;
        this.name = name;
        this.publishing_year = publishing_year;
        this.description = description;
        this.price = price;
        this.inventory_number = inventory_number;
        this.page_number = page_number;
        this.status = status;
        this.language = language;
        this.author = author;
        this.category = category;
        this.publisher = publisher;
        this.weight = weight;
        this.size = size;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.images = images;
        this.coupon_codes = coupon_codes;
    }
}

export default BookModel;
