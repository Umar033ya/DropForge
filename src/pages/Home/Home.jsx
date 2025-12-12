import React from 'react';
import './Home.css';
import logo from '../../../public/DF.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Cases from '../../components/Case/Case.jsx';
import "swiper/css/pagination";
import case1 from '../../../public/case1.png';
import case2 from '../../../public/case2.jpg'
import case3 from '../../../public/case3.jpg'
import swiper1 from '../../../public/SWIPER1.jpg'
import swiper2 from '../../../public/swiper2.jpg'
import swiper3 from '../../../public/swiper3.jpg'
import swiper4 from '../../../public/swiper4.png'
function Home({ data }) {
  return (
    <div>
      <div className="container">
        <Swiper
          spaceBetween={50}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src={swiper1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src={swiper2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src={swiper3}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src={swiper4}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="cases-wrapper">
        <h1 className="cases-title">Cases</h1>
        <div className="cases-container">
        <Cases caseImg={logo} caseName="Drop Forge"
  skinIds={[1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58]}
  price={30}
/>
<Cases caseImg={case1} caseName="Epic Vault"
  skinIds={[2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59]}
  price={50}
/>
<Cases caseImg={case2} caseName="Legendary Box"
  skinIds={[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60]}
  price={10}
/>

<Cases caseImg={case3} caseName="Mystic Chest"
  skinIds={[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80]}
  price={28}
/>

<Cases caseImg={case1} caseName="Shadow Crate"
  skinIds={[5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81]}
  price={45}
/>

<Cases caseImg={logo} caseName="Crimson Fury"
  skinIds={[6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82]}
  price={25}
/>

<Cases caseImg={case2} caseName="Emerald Strike"
  skinIds={[7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83]}
  price={40}
/>

<Cases caseImg={case3} caseName="Golden Phantom"
  skinIds={[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]}
  price={55}
/>

<Cases caseImg={logo} caseName="Shadow Reaper"
  skinIds={[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]}
  price={30}
/>

<Cases caseImg={case3} caseName="Frostbite"
  skinIds={[41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79]}
  price={22}
/>

<Cases caseImg={case2} caseName="Inferno Blaze"
  skinIds={[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60]}
  price={50}
/>

<Cases caseImg={case1} caseName="Violet Vortex"
  skinIds={[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80]}
  price={28}
/>

<Cases caseImg={logo} caseName="Obsidian Edge"
  skinIds={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 6, 12, 18, 24]}
  price={65}
/>

<Cases caseImg={case2} caseName="Azure Phantom"
  skinIds={[7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 4, 11, 18, 25, 32, 39, 46, 53, 60]}
  price={18}
/>

<Cases caseImg={case1} caseName="Crimson Reign"
  skinIds={[8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 9, 18, 27, 36, 45, 54, 63, 72, 3, 12]}
  price={34}
/>


        </div>
      </div>
    </div>
  );
}

export default Home;
