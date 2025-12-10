import React from 'react'
import './Home.css'
import logo from '../../../public/DF.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination} from 'swiper/modules';
import Cases from '../../components/Case/Case.jsx'
import "swiper/css/pagination"
import case1 from '../../../public/case1.png'
function Home({data}) {
  return (
    <div>
     
        <div className='container'>
        <Swiper
      spaceBetween={50}
      modules={[ Pagination]}
      pagination={{clickable:true}}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='flex justify-center'>
            <img src="https://avatars.mds.yandex.net/i?id=2a0000019ac4a4345e085fcda0539d5cdc58-1325465-fast-images&n=13" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-center'>
            <img src="https://avatars.mds.yandex.net/i?id=2a0000019ac4a4345e085fcda0539d5cdc58-1325465-fast-images&n=13" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-center'>
            <img src="https://avatars.mds.yandex.net/i?id=2a0000019ac4a4345e085fcda0539d5cdc58-1325465-fast-images&n=13" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-center'>
            <img src="https://avatars.mds.yandex.net/i?id=2a0000019ac4a4345e085fcda0539d5cdc58-1325465-fast-images&n=13" alt="" />
        </div>
      </SwiperSlide>
        </Swiper>
        </div>
        <div className="cases-wrapper">
  <h1 className="cases-title">Cases</h1>
  <div className="cases-container">
    <Cases caseImg={logo} caseName="Drop Forge" skinIds={[1,56,32,4,9,3,45,22,60,10]} price={30} />
    <Cases caseImg={case1} caseName="Epic Vault" skinIds={[2,5,8,12,15, 14 , 45, ]} price={50} />
    <Cases caseImg={logo} caseName="Legendary Box" skinIds={[7,9,14,20, 3, 78, 54,]} price={10} />
  </div>
</div>

    </div>
  )
}

export default Home