import {KAKAO_AUTH_URL} from "../apis/services/OAuth";
import IconKakao from "../assets/images/sns-kakao.svg";
import IconFacebook from "../assets/images/sns-facebook.svg";
import IconGoogle from "../assets/images/sns-google.svg";
import {Link} from "react-router-dom";
import SocialLoginButton from "./common/Button/SocialLoginButton";
import SliderContents from "./SliderContents";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {interceptors} from "axios";
const SliderContainer = () => {
    const [slidePx, setSlidePx] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            handleSliderNext();
        }, 3000);
    }, []);

    const handleSliderPrev = () => {
        if(slidePx < 0) {
            setSlidePx(slidePx + 390);
        }
    }
    const handleSliderNext = () => {
        if(slidePx > -780) {
            setSlidePx(slidePx - 390);
        } else if (slidePx == -780) {
            setSlidePx(0);
        }
    }

    const handlePauseSlide = (interval) => {
        clearTimeout(interval);
    }

    const mainSliderData = [
        {
            id: 0,
            image: 'https://cdn.pixabay.com/photo/2017/09/29/06/56/mushrooms-2798150_1280.jpg',
        },
        {
            id: 1,
            image: 'https://cdn.pixabay.com/photo/2019/04/20/18/46/squirrel-4142446_1280.jpg',
        },
        {
            id: 2,
            image: 'https://cdn.pixabay.com/photo/2019/12/17/06/50/squirrel-4700919_1280.jpg',
        }
    ];
    return (
        <>
            <button onClick={handlePauseSlide}>멈춤</button>
            <button onClick={handleSliderPrev}>이전</button>
            <button onClick={handleSliderNext}>다음</button>
            <SlideStyle>
                {mainSliderData.map((ele, idx) => (
                    <li style={{transform: `translateX(${slidePx}px)`, transition: '0.5s ease'}}>
                        <img src={ele.image} />
                    </li>
                    )
                )}
            </SlideStyle>
        </>
    )
}

export default SliderContainer;

const SlideStyle = styled.ul`
  width: 390px;
  display: flex;
  overflow: hidden;
  margin: 0 auto;
  
  
  li {
    img {
      width: 390px;
    }
  }
`