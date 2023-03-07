export class Book {

    public id_bool: number
    public id_user: number
    public title: string    
    public type: string
    public author: string
    public price: number
    public photo: string

    constructor(  title: string, type: string, author: string,
                 price: number, photo: string, id_bool: number = 0, id_user: number = 0 ){

        this.id_bool = id_bool;
        this.id_user = id_user;
        this.title = title;    
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    };


};

