export class Article{

    constructor(
        public id:number,
        public title: String,
        public content: String,
        public author: String,
        public img: String,  
        public desc: String,
        public rate: number,
        public category:String  
    ) {}

}