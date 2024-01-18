import { Card } from "keep-react";
import SoundCloud from '../components/SoundCloud'


export const CardComponent = () => {
  return (
        <div className="sm:flex-col sm:items-center md:w-full md:justify-center p-10">
      <Card className="mt-2 p-11 bg-yellow-300 flex text-center">
        <Card.Description className="font-bold text-2xl text-black">
          Aquesta es una web senzilla dissenyada per mostrar fragments de peçes composades per mi enregistrades
          al home studio situat a Barcelona, amb la finalitat d'oferir-me com a compositor, col-laborador i instrumentista.
        </Card.Description>
      </Card>
        <SoundCloud />
        
      <Card className="bg-black mt-30 flex text-center">
        <Card.Description className="font-bold text-2xl text-white">
         Es un estudi modest però funcional, amb Cubase Artist y Kontakt.
         La meva idea es més que produïr composar i fer col-laboracions.
         El meu primer instrument es la guitarra. També toco el baix, l'ukelele, congas, calaix, djembé i teclats.
        </Card.Description>
      </Card>
    </div>
  );
};
