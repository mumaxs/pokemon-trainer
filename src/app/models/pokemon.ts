export interface IPokemon{
    name: string;
    img: string;
    id: number;
    
}

export class Pokemon implements IPokemon {
    name: string;
    img: string;
    id: number;
    

    constructor(name: string, img: string, id: number) {
        this.name = name;
        this.img = img;
        this.id = id;
        
    }
}