import { Artwork } from './Artwork.ts';

export class Statue implements Artwork{
    title: string;
    year: number;
    price: number;
    height: number;
    constructor(title: string, year: number, price: number, height: number){

        let nev=(document.getElementById("nev") as HTMLInputElement).value;
        const regexNev = /^[a-z ,]+$/i;

        let date=new Date().getFullYear();

        if (title.trim() == '') {
            throw new Error('A cím nem lehet üres');
        }
        else if(regexNev.test(nev)==false){
            throw new Error("Csak angol ABC karaktereket, szóköz ill. vessző karaktereket tartalmazhat a név!");
            //document.getElementById("hibaUzenet")!.innerText="Csak angol ABC karaktereket, szóköz ill. vessző karaktereket tartalmazhat a név!";
        }
        else if(year>date&&year != 0){
            throw new Error("Az év nem lehet nagyobb mint a mostani év!("+date+")");
        }
        else if(price<1&&price != 0){
            throw new Error("Az ár nem lehet kissebb mint 1 Ft!");
        }
        else if(height<10&&height != 0){
            throw new Error("A magasság nem lehet kissebb mint 10 cm!");
        }
        else{
        //(document.getElementById("hibaUzenet")as HTMLElement).innerText="Sikeres adatfelvétel!";
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
        }
        }
}

//list.push