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
        const resizeContext = require.context('../../images/lab_photo_resize', false, /\.(jpg|jpeg|png)$/i);
        const originalContext = require.context('../../images/lab_photo', false, /\.(jpg|jpeg|png)$/i);
        
        const resizedImages = importAllImages(resizeContext);
        const originalImages = importAllImages(originalContext);
        
        // 파일명 기준으로 원본 이미지 매칭 (확장자 제외)
        const imagesWithOriginal = resizedImages.map(resized => {
            const baseName = resized.filename.replace(/\.(jpg|jpeg|png)$/i, '');
            const original = originalImages.find(orig => 
                orig.filename.replace(/\.(jpg|jpeg|png)$/i, '') === baseName
            );
            return {
                ...resized,
                originalSrc: original ? original.src : resized.src
            };
        });
        
        return imagesWithOriginal.sort((a, b) => {
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
                        <a 
                            href={image.originalSrc} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={image.src} 
                                alt={`AEL Lab Activity ${image.filename}`}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;