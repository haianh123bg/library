class CategoryModel {
    id: number;
    name: string;
    total_book?: number | undefined;
    created_at?: string;
    updated_at?: string;

    constructor(id: number, name: string, total_book: number, created_at: string, updated_at: string) {
        this.id = id;
        this.name = name;
        this.total_book = total_book;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

export default CategoryModel;
