export class ShoppingCard{
    title: string;
    subtitle: string; 
    content: string;
    price: number;
    id: number;


    constructor(id: number, title: string, subtitle: string, content: string, price: number ){
        this.id=id;
        this.title=title;
        this.subtitle=subtitle;
        this.content=content;
        this.price=price;
    }


}