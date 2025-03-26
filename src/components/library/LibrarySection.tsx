
import { libraryData } from "@/data/libraryData";
import LibraryItem from "./LibraryItem";

const LibrarySection = () => {
  return (
    <div className="space-y-6">
      <div className="mb-10">
        <p className="text-gray-600 mb-8 max-w-3xl">
          A Biblioteca Veda reúne publicações, pesquisas e materiais técnicos produzidos 
          por nossa equipe, abordando temas como políticas públicas, direitos humanos, 
          gênero, desenvolvimento social e proteção à criança e ao adolescente.
        </p>
      </div>
      
      <div className="space-y-6">
        {libraryData.map((item, index) => (
          <LibraryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LibrarySection;
