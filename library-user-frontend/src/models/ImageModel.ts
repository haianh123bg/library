class ImageModel {
    image_id: number;
    image_link: string;
    image_avatar: boolean;

    constructor(image_id: number, image_link: string, image_avatar: boolean) {
        this.image_id = image_id;
        this.image_link = image_link;
        this.image_avatar = image_avatar;
    }
}

export default ImageModel;
