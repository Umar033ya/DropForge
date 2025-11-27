import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination} from 'swiper/modules';
import "swiper/css/pagination"
function Home({coin}) {
  return (
    <div>
        <Header coin= {coin}/>
        <div className='py-4'>
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
    </div>
  )
}

export default Home