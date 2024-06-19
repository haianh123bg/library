class ImageModel {
    id?: number;
    link?: string;
    avatar?: boolean;
    data: string;

    constructor(id: number, link: string, avatar: boolean, data: string) {
        this.id = id;
        this.link = link;
        this.avatar = avatar;
        this.data = data;
    }
}

export default ImageModel;
