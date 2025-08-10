import { useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Collection.css';

const images = [
  '/14ODDITY/001.jpg',
  '/14ODDITY/002.jpg',
  '/14ODDITY/003.jpg',
  '/14ODDITY/004.jpg',
  '/14ODDITY/005.jpg',
  '/14ODDITY/006.jpg',
  '/14ODDITY/007.jpg',
  '/14ODDITY/008.jpg',
  '/14ODDITY/009.jpg',
  '/14ODDITY/010.jpg',
  '/14ODDITY/011.jpg',
];

export const Collection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const breakpointColumnsObj = {
    default: 3, // desktop
    1100: 2, // tablet
    700: 1, // mobil
  };

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Oddity collection ${index + 1}`}
            onClick={() => {
              setCurrentIndex(index);
              setLightboxOpen(true);
            }}
          />
        ))}
      </Masonry>

      <Lightbox
        open={lightboxOpen}
        index={currentIndex}
        close={() => setLightboxOpen(false)}
        slides={images.map((src) => ({ src }))}
        carousel={{ finite: false }} // nekonečné listování
      />
    </div>
  );
};

const LazyImage = ({ src, alt, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onClick={onClick}
      onLoad={() => setLoaded(true)}
      className={`lazy-image ${loaded ? 'loaded' : ''}`}
    />
  );
};
