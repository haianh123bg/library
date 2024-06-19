class UserModel {
    user_id?: number;
    user_name?: string;
    user_image?: string;
    user_phone_number?: string;
    user_address?: string;
    user_account_name: string;
    user_account_password?: string;
    user_role?: string;
    created_at?: string;
    updated_at?: string;
    user_money?: number;
    user_active?: boolean;
    key_active?: string;

    constructor(
        user_id: number,
        user_name: string,
        user_image: string,
        user_phone_number: string,
        user_address: string,
        user_account_name: string,
        user_account_password: string,
        user_role: string,
        created_at: string,
        updated_at: string,
        user_money: number,
        user_active: boolean,
        key_active: string,
    ) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_image = user_image;
        this.user_phone_number = user_phone_number;
        this.user_address = user_address;
        this.user_account_name = user_account_name;
        this.user_account_password = user_account_password;
        this.user_role = user_role;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.user_money = user_money;
        this.user_active = user_active;
        this.key_active = key_active;
    }
}

export default UserModel;
