import "../App.css"

import { Swiper, SwiperSlide } from "swiper/react";

import map from "../img/map-embed (1).png";

import logo from "../img/logo (2).png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function inPage3() {
  return (
    <div className="inPage2">
      <article className="one">
        <div className="bottom">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="swipersss">
              <article className="article">
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article">
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article">
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article">
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article">
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article">
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article">
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article">
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article">
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article">
              </article>
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="top">
          <h1>Ски-пасс на весь сезон</h1>

          <p>
            Весь спектр услуг от проката инвентаря до катания на снегоходах!
          </p>

          <button className="btn2">Подробнее</button>
        </div>
      </article>

      <article className="navbarBottom">
        <div className="top">
          <div className="box">
            <article>
              <h1>Как добраться</h1>
              <p>
                Скорый электропоезд Ласточка довезет Вас до Чусового,где
                производится пересадка на автобусный трансфер до Горнолыжного
                курорта Такман.
              </p>
            </article>
          </div>
          <div className="box">
            <article>
              <h1>График работы</h1>
              <p>
                Скорый электропоезд Ласточка довезет Вас до Чусового,где
                производится пересадка на автобусный трансфер до Горнолыжного
                курорта Такман.
              </p>
            </article>
          </div>
        </div>
        <div className="bottom">
          <img src={map} alt="" />
        </div>
        <div className="underBottom">
          <div className="box">
            <article>
              <img src={logo} alt="" />
              <p>
                Скорый электропоезд Ласточка довезет Вас до Чусового,где
                производится пересадка на автобусный трансфер до Горнолыжного
                курорта Такман.
              </p>
            </article>
          </div>
          <div className="box">
            <article>
              <h1>Контакты</h1>
              <p>
                Скорый электропоезд Ласточка довезет Вас до Чусового,где
                производится пересадка на автобусный трансфер до Горнолыжного
                курорта Такман.
              </p>
            </article>
          </div>
        </div>
      </article>
    </div>
  )
}
