import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Box, Paragraph, Picture, Title, StyledSwiper, StyledSwiperSlide, Wrapper } from './styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider = ({ slides }) => {
    return (
        <Box>
            <StyledSwiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView='auto'
                loop={true}
                navigation
                pagination={{ clickable: true }}
                grabCursor={true}
                centeredSlides={true}
                initialSlide={1}
                speed={600}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    waitForTransition: false
                }}
                breakpoints={{
                    0: {
                        spaceBetween: 0,
                    },
                    768: {
                        spaceBetween: 30,
                    },
                    1024: {
                        spaceBetween: 50,
                    },
                }}
            >
                {
                    slides.map(({ id, name, city, opinion, image }) => (
                        <StyledSwiperSlide
                            key={id}
                        >
                            <Picture src={image} alt={name}></Picture>
                            <div>
                                <Title>{name} - {city}</Title>
                                <Paragraph>{opinion}</Paragraph>
                            </div>
                        </StyledSwiperSlide>

                    ))
                }
            </StyledSwiper>
        </Box>
    );
}

export default Slider;