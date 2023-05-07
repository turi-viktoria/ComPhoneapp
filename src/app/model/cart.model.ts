export interface Cart{
    items: Array<CartItem>;

}

export interface CartItem{
    prodName: string;
    price: number;
    quantity: number;
    id: number;
    total: number;

}