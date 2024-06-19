class AuthorModel {
    id: number;
    name: string;
    date_of_birth?: string;
    description?: string;
    image?: string;
    created_at?: string;
    updated_at?: string;
    total_book?: number;

    constructor(
        id: number,
        name: string,
        date_of_birth: string,
        description: string,
        image: string,
        total_book: number,
        created_at?: string,
        updated_at?: string,
    ) {
        this.id = id;
        this.name = name;
        this.date_of_birth = date_of_birth;
        this.description = description;
        this.image = image;
        this.total_book = total_book;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

export default AuthorModel;
