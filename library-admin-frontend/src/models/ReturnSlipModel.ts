import BookModel from './BookModel';
import UserModel from './UserModel';

class ReturnSlipModel {
    return_slip_id: number;
    return_slip_date: string;
    return_slip_refund: number;
    return_slip_late_fee: number;
    user: UserModel;
    book: BookModel;
    borrow_date: string;
    is_late: boolean;
    status_return: string;

    constructor(
        return_slip_id: number,
        return_slip_date: string,
        return_slip_refund: number,
        return_slip_late_fee: number,
        user: UserModel,
        book: BookModel,
        borrow_date: string,
        is_late: boolean,
        status_return: string,
    ) {
        this.return_slip_id = return_slip_id;
        this.return_slip_date = return_slip_date;
        this.return_slip_refund = return_slip_refund;
        this.return_slip_late_fee = return_slip_late_fee;
        this.user = user;
        this.book = book;
        this.borrow_date = borrow_date;
        this.is_late = is_late;
        this.status_return = status_return;
    }
}

export default ReturnSlipModel;
