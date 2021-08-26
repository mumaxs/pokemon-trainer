export interface IPokemon{
    name: string;
    img: string;
    id: number;
    captured: boolean;   
}

export class Pokemon implements IPokemon {
    name: string;
    img: string;
    id: number;
    captured: boolean;   


    constructor(name: string, img: string, id: number, captured: boolean) {
        this.name = name;
        this.img = img;
        this.id = id;
        this.captured = captured;   
    }
}