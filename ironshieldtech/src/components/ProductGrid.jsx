import React from 'react';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductGrid = () => {
  const { t } = useTranslation();

  return (
    <section id="catalogue" style={{ padding: '8rem 0', background: 'var(--bg-dark)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          {/* We removed the SÉLECTION TACTIQUE title as requested and replaced the section content with a slider */}
          <p style={{ 
            color: 'var(--primary-bright)', 
            fontSize: '1.5rem', // Increased significantly from 1rem
            letterSpacing: '0.4em', 
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 'bold'
          }}>
            {t('hero.badge')}
          </p>
          <div style={{ 
            width: '40px', 
            height: '2px', 
            background: 'var(--primary)', 
            margin: '0 auto' 
          }}></div>
        </div>

        <div className="product-slider-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            style={{ paddingBottom: '5rem' }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} style={{ height: 'auto' }}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .product-slider-container .swiper-button-next,
        .product-slider-container .swiper-button-prev {
          color: var(--primary-bright);
          background: rgba(0, 0, 0, 0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid var(--primary);
        }
        .product-slider-container .swiper-button-next:after,
        .product-slider-container .swiper-button-prev:after {
          font-size: 1.2rem;
          font-weight: bold;
        }
        .product-slider-container .swiper-pagination-bullet {
          background: var(--primary);
          opacity: 0.3;
        }
        .product-slider-container .swiper-pagination-bullet-active {
          background: var(--primary-bright);
          opacity: 1;
          box-shadow: 0 0 10px var(--primary-glow);
        }
        @media (max-width: 768px) {
           .product-slider-container .swiper-button-next,
           .product-slider-container .swiper-button-prev {
             display: none;
           }
        }
      `}</style>
    </section>
  );
};

export default ProductGrid;
