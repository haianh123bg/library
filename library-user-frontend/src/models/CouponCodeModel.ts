class CouponCodeModel {
    coupon_code_id: number;
    book_id?: number;
    coupon_code_count: number;
    coupon_code_sale_price: number;

    constructor(coupon_code_id: number, book_id: number, coupon_code_count: number, coupon_code_sale_price: number) {
        this.coupon_code_id = coupon_code_id;
        this.book_id = book_id;
        this.coupon_code_count = coupon_code_count;
        this.coupon_code_sale_price = coupon_code_sale_price;
    }
}

export default CouponCodeModel;
