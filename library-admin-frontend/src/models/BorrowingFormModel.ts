import BookModel from './BookModel';
import UserModel from './UserModel';

class BorrowingFormModel {
    id: number;
    date: string;
    type: string;
    deposit: number;
    due_date: string;
    user: UserModel;
    book: BookModel;

    constructor(
        id: number,
        date: string,
        type: string,
        deposit: number,
        due_date: string,
        user: UserModel,
        book: BookModel,
    ) {
        this.id = id;
        this.date = date;
        this.type = type;
        this.deposit = deposit;
        this.due_date = due_date;
        this.user = user;
        this.book = book;
    }
}

export default BorrowingFormModel;
