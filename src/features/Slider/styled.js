import styled from 'styled-components';
import { Swiper as SwiperReact, SwiperSlide as SwiperSlideReact } from 'swiper/react';

export const StyledSwiper = styled(SwiperReact)`
    .swiper-pagination-bullet {
        background-color: #DF18FB;
    }

    .swiper-pagination-bullet-active {
        width: 16px;
        transition: width 0.2s ease;
    }

    .swiper-slide {
        transform: scale(0.8);
    }

    .swiper-slide-active {
        transform: scale(1);
        opacity: 1;
        transition: all 0.3s ease;
    }

    .swiper-button-next, 
    .swiper-button-prev {
        color: #DF18FB;
    }
`;

export const StyledSwiperSlide = styled(SwiperSlideReact)`
    width: 532px;
    border-radius: 30px;
    background: #F1F1F1;
    display: flex;
    gap: 40px;
    padding: 34px;
    opacity: 0.5;
    transition: filter 0.3s ease;
    margin-bottom: 40px;

    @media(max-width: 1024px){
        width: 180px; 
        min-height: 350px;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px;
    }
`;

export const Box = styled.div`
    width: 100%;
    padding: 50px 0;    
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 300;
    color: #DF18FB;
    margin: 0;
    margin-bottom: 16px;
    text-align: start;

    @media(max-width: 1024px){
        font-size: 16px;
        margin-bottom: 12px;
    }
`

export const Paragraph = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: #000000;
    margin: 0;
    text-align: start;

    @media(max-width: 1024px){
        font-size: 12px;
    }
`;

export const Picture = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 30px;

    @media(max-width: 1024px){
        height: 180px;
        width: 180px;
    }
`;

