import './style.css'
import { Artwork } from './Artwork.ts';
import { Statue } from './Statue.ts';
 
export const list: Artwork[] = []; 
document.addEventListener("DOMContentLoaded", () => {
  const formx = document.getElementById("form") as HTMLFormElement;
  const hibauzenet = document.getElementById("hibaUzenet");

  //összesítő
  let darabszam: number = 0;
  let osszar: number = 0;

  formx!.addEventListener("submit", (e) => {
  e.preventDefault();

 
    const title: string = (document.getElementById("nev") as HTMLInputElement).value;
    const year: number = parseInt((document.getElementById("ev") as HTMLInputElement).value);
    const price: number = parseInt((document.getElementById("ar") as HTMLInputElement).value);
    const height: number = parseInt((document.getElementById("magassag") as HTMLInputElement).value);
    try {
      const ujSzobor: Statue = new Statue(title, year, price, height);
      list.push(ujSzobor);
      formx.reset();
      hibauzenet!.innerHTML = "";

      //összesítő
      darabszam++;
      osszar += price;

      //összesítő
      document.getElementById("darabszam")!.textContent = "A művek darabszáma: " + darabszam;
      document.getElementById("osszar")!.textContent = "A Művek összesített ára: " + osszar +" Ft";
    } catch(e) {
      if (e instanceof Error) {
        hibauzenet!.textContent = e.message;
      }
    }
  });
});