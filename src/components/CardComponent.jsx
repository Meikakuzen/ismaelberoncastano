import { Card } from "keep-react";
import SoundCloud from '../components/SoundCloud'


export const CardComponent = () => {
  return (
    <div>
        <div className="flex justify-evenly align-middle gap-20">
      <Card className="max-w-xs md:max-w-lg mt-2 p-11 bg-yellow-300 mr-45">
        <div className="font-bold text-xl text-black">
          Aquesta es una web dissenyada per poder mostrar petits fragments de peçes composades per mi i enregistrades
          al meu home studio a Barcelona, amb la finalitat d'oferir-me com a compositor, col-laborador i instrumentista.
        </div>
      </Card>

        <div className="flex mt-6">
        <SoundCloud />

        </div>
        </div>

      <Card className="max-w-xs p-6 md:max-w-lg bg-black mt-6">
        <Card.Description className="font-bold text-2xl text-white">
         Es un estudi modest pero funcional situat al barri de l'Eixample.
         Manego el software el necessari per poder enregistrar i jugar una mica.
         El meu primer instrument es la guitarra. També toco el baix, l'ukelele, congas, calaix, djembé i teclats.
        </Card.Description>
      </Card>
    </div>
  );
};
