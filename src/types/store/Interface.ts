export interface Product{
    id: number;
    title: string;
    image: string;
    link: string;
    price: number;
    sale_price: number;
    x:number
}

export interface CartItem{
    product: Product;
    qty:number
}