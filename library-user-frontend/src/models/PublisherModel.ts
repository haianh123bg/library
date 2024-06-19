class PublisherModel {
    id: number;
    name: string;
    phone_number?: string;
    address?: string;
    created_at?: string; // Optional field
    updated_at?: string; // Optional field

    constructor(
        id: number,
        name: string,
        phone_number: string,
        address: string,
        created_at?: string,
        updated_at?: string,
    ) {
        this.id = id;
        this.name = name;
        this.phone_number = phone_number;
        this.address = address;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

export default PublisherModel;
