
import { LibraryItem as LibraryItemType } from "@/types/project";
import { FileText, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LibraryItemProps {
  item: LibraryItemType;
}

const LibraryItem = ({ item }: LibraryItemProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
          <BookOpen size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Autores:</span> {item.authors}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Publicado em:</span> {item.year}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-medium">Editora:</span> {item.publisher}
          </p>
          
          {item.description && (
            <p className="text-gray-600 mb-4 italic">
              {item.description}
            </p>
          )}
          
          {item.link && (
            <div className="flex justify-end">
              <Button 
                asChild
                variant="default" 
                size="sm" 
                className="flex items-center gap-2"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white">
                  <FileText size={16} />
                  <span>Baixar PDF</span>
                  <Download size={16} />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibraryItem;
