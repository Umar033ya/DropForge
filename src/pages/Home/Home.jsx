import React from 'react';
import './Home.css';
import logo from '../../../public/DF.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Cases from '../../components/Case/Case.jsx';
import "swiper/css/pagination";
import case1 from '../../../public/case1.png';

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
                src="https://avatars.mds.yandex.net/i?id=2a0000019ac4a4345e085fcda0539d5cdc58-1325465-fast-images&n=13"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src="https://avatars.mds.yandex.net/i?id=2a0000019ac4a4345e085fcda0539d5cdc58-1325465-fast-images&n=13"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src="https://avatars.mds.yandex.net/i?id=2a0000019ac4a4345e085fcda0539d5cdc58-1325465-fast-images&n=13"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src="https://avatars.mds.yandex.net/i?id=2a0000019ac4a4345e085fcda0539d5cdc58-1325465-fast-images&n=13"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="cases-wrapper">
        <h1 className="cases-title">Cases</h1>
        <div className="cases-container">
<Cases
  caseImg={logo}
  caseName="Drop Forge"
  skinIds={[1, 56, 32, 4, 9, 3, 45, 22, 60, 10, 12, 18, 25, 30, 37, 41, 48, 51, 58, 63, 67, 70, 74, 79, 82]}
  price={30}
/>
<Cases
  caseImg={case1}
  caseName="Epic Vault"
  skinIds={[2, 5, 8, 12, 15, 14, 45, 7, 11, 19, 23, 28, 31, 36, 39, 42, 46, 50, 53, 57, 61, 65, 68, 72, 76]}
  price={50}
/>
<Cases
  caseImg={logo}
  caseName="Legendary Box"
  skinIds={[7, 9, 14, 20, 3, 78, 54, 1, 11, 16, 22, 29, 33, 37, 41, 44, 49, 53, 59, 63, 66, 71, 75, 80, 83]}
  price={10}
/>
<Cases
  caseImg={logo}
  caseName="Mystic Chest"
  skinIds={[11, 23, 35, 47, 59, 3, 8, 16, 22, 41, 2, 13, 18, 25, 31, 36, 42, 50, 54, 60, 64, 68, 73, 77, 81]}
  price={28}
/>

<Cases
  caseImg={case1}
  caseName="Shadow Crate"
  skinIds={[6, 14, 19, 27, 33, 39, 42, 50, 1, 9, 12, 17, 21, 29, 34, 38, 44, 49, 55, 61, 65, 69, 74, 78, 83]}
  price={45}
/>
<Cases
  caseImg={logo}
  caseName="Crimson Fury"
  skinIds={[3, 7, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78]}
  price={25}
/>
<Cases
  caseImg={logo}
  caseName="Emerald Strike"
  skinIds={[2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74]}
  price={40}
/>
<Cases
  caseImg={logo}
  caseName="Golden Phantom"
  skinIds={[1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73]}
  price={55}
/>
<Cases
  caseImg={logo}
  caseName="Shadow Reaper"
  skinIds={[6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78]}
  price={30}
/>
<Cases
  caseImg={logo}
  caseName="Frostbite"
  skinIds={[5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77]}
  price={22}
/>
<Cases
  caseImg={logo}
  caseName="Inferno Blaze"
  skinIds={[1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72]}
  price={50}
/>
<Cases
  caseImg={logo}
  caseName="Violet Vortex"
  skinIds={[2, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73]}
  price={28}
/>
<Cases
  caseImg={logo}
  caseName="Obsidian Edge"
  skinIds={[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75]}
  price={65}
/>
<Cases
  caseImg={logo}
  caseName="Azure Phantom"
  skinIds={[4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76]}
  price={18}
/>
<Cases
  caseImg={logo}
  caseName="Crimson Reign"
  skinIds={[5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77]}
  price={34}
/>
<Cases
  caseImg={logo}
  caseName="Mystic Dawn"
  skinIds={[1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 2, 6, 10, 14, 18]}
  price={42}
/>
<Cases
  caseImg={logo}
  caseName="Titanium Clash"
  skinIds={[2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 3, 7, 11, 15, 19]}
  price={48}
/>
<Cases
  caseImg={logo}
  caseName="Spectral Shard"
  skinIds={[3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 4, 8, 12, 16, 20]}
  price={36}
/>
<Cases
  caseImg={logo}
  caseName="Lunar Eclipse"
  skinIds={[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 5, 9, 13, 17, 21]}
  price={29}
/>
<Cases
  caseImg={logo}
  caseName="Solar Flare"
  skinIds={[5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 6, 10, 14, 18, 22]}
  price={50}
/>
<Cases
  caseImg={logo}
  caseName="Neon Rush"
  skinIds={[6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 2, 7, 11, 15, 19, 23]}
  price={31}
/>
<Cases
  caseImg={logo}
  caseName="Phantom Strike"
  skinIds={[7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 3, 8, 12, 16, 20, 24]}
  price={27}
/>
<Cases
  caseImg={logo}
  caseName="Aurora Veil"
  skinIds={[8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 4, 9, 13, 17, 21, 25]}
  price={44}
/>
<Cases
  caseImg={logo}
  caseName="Oblivion Edge"
  skinIds={[9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 5, 10, 14, 18, 22, 26]}
  price={38}
/>
<Cases
  caseImg={logo}
  caseName="Crimson Storm"
  skinIds={[10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 2, 6, 11, 15, 19, 23, 27]}
  price={33}
/>

        </div>
      </div>
    </div>
  );
}

export default Home;
