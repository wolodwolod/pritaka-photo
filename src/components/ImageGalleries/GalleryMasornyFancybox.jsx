
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Fancybox from '../../shared/services/fancybox';

import s from './image-gallery.module.scss';
import './masonry.scss';

const Gallery = ({ imgs }) => {   

  const imgList = imgs.map(function ({ id, img, limg, tag }) {
    return (
      <div
        data-fancybox="gallery"
        data-src={limg}
        key={id}        
      >
        <img className={s.GalleryItem__Img} src={img} alt={tag} />
      </div>
    );
  });

  return (
    <div>
      <Fancybox>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter={'10px'}>{imgList}</Masonry>
        </ResponsiveMasonry>
      </Fancybox>      
    </div>
  );
};

export default Gallery;
