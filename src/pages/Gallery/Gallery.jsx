import "./Gallery.scss";
import { useMemo } from "react";

const importAllImages = (requireContext) => {
    return requireContext.keys().map((key) => ({
        src: requireContext(key),
        filename: key.replace('./', '')
    }));
};

function Gallery() {
    const images = useMemo(() => {
        const context = require.context('../../images/lab_photo', false, /\.(jpg|jpeg|png)$/i);
        const allImages = importAllImages(context);
        
        return allImages.sort((a, b) => {
            const dateA = a.filename.match(/\d+/)?.[0] || '';
            const dateB = b.filename.match(/\d+/)?.[0] || '';
            return dateB.localeCompare(dateA);
        });
    }, []);

    return (
        <div className="page gallery">
            <div className="pageTitle">Life @ AEL</div>
            
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div 
                        key={image.filename} 
                        className={`gallery-item item-${(index % 2) + 1}`}
                    >
                        <img 
                            src={image.src} 
                            alt={`AEL Lab Activity ${image.filename}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;