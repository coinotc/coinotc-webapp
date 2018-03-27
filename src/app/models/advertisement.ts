export class advertisement{
    constructor(
        public owner: string,
        public visible: boolean,
        public crypto: string,
        public country: string,
        public fiat: string,
        public price: number,
        public min_price: number,
        public max_price: number,
        public payment: string,
        public limit: number,
        public massage: string,
        public type:number     // 0 is sell ,1 is buy
    ){

    }
}