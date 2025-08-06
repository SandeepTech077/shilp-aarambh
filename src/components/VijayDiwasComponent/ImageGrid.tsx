
import Image, { StaticImageData } from 'next/image';

interface ImageData {
    id: number;
    image: StaticImageData;
    alt: string;
}

interface ImageGridProps {
    images: ImageData[];
}
const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {images.map((imageData) => (
                <div 
                    key={imageData.id}
                    className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                >
                    <div className="relative w-full h-100">
                        <Image 
                            src={imageData.image}
                            alt={imageData.alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 "
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            priority={imageData.id <= 2} // Prioritize first 2 images
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;