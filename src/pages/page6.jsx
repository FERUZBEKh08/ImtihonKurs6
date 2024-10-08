import "../App.jsx";

import { NavLink } from "react-router-dom";

import map from "../img/map-embed (1).png";

import logo from "../img/logo (2).png";

export default function page6() {
  return (
    <div className="page6">
      <article className="one">
        <div className="top">
          <article className="one">
            <div className="inOne">
              <article>
                <h1>Крупнейший сноупарк в Пермском крае</h1>

                <p>
                  Наш горнолыжный курорт оснащен современными подъемниками,
                  которые, по словам посетителей, всегда работают стабильно и
                  без нареканий.
                </p>

                <NavLink to="/page6/map">
                  <button className="btn2">Забронировать</button>
                </NavLink>
              </article>
            </div>
          </article>
        </div>
      </article>

      <article className="two">
        <h1>Ски-пасс на весь сезон</h1>
        <p>
          Если покупать ски-пасс сразу на весь сезон, можно здорово сэкономить!
        </p>

        <NavLink to="/page6/map">
          <button className="btn2">Купить/Пополнить</button>
        </NavLink>
      </article>

      <article className="three">
        <div className="top">
          <h1>Правила пользования услугами курорта</h1>
          <article className="p">
            <p>Правила проката</p>
            <p>Правила поведения на территории горнолыжного курорта</p>
            <p>Правила поведения на горнолыжных трассах ГК «Такман»</p>
            <p>Правила оказания услуг инструкторов</p>
            <p>Правила пользования SKI-PASS </p>
            <p>Правила приобретения сезонного SKI-PASS</p>
            <p>Правила пользования пассажирской канатной дорогой </p>
          </article>
        </div>

        <div className="bottom">
          <h1>Правила пользования SKI-PASS</h1>
          <article className="p">
            <p>
              1. Карта Ски-Пасс (далее – Карта) – это многоразовая пластиковая
              карта с чипом, на которую зачисляются услуги по подъему Клиента на
              склоны гор с использованием канатных дорог (разовые подъемы и -
              почасовые проходы) на территории Курорта, а так же иные услуги.
            </p>
            <p>
              2. Пользование услугами канатной дороги возможно при наличии у
              Клиента действующей Карты.{" "}
            </p>

            <p>
              3. Получение Карты Клиентом производятся в официальных точках
              продаж Курорта: кассах, расположенных в Центральном здании, в
              домике инструкторской службы.{" "}
            </p>

            <p>
              4. Получение Карты осуществляется Клиентом одновременно с
              приобретением права пользования услугами Курорта.{" "}
            </p>

            <p>
              5. Оплата услуг, получаемых Клиентом посредством Карты,
              производится через кассы Курорта наличными денежными средствами
              или безналичным расчетом с использованием банковских карт, а
              юридическими лицами так же путем безналичного перечисления
              денежных средств на расчетный счет ГК «Такман».{" "}
            </p>

            <p>
              6. Оплата услуг осуществляется с применением контрольно-кассовой
              техники. При оплате услуг необходимо сохранять кассовые чеки до
              завершения использования услуг.{" "}
            </p>

            <p>
              7. Карта используется многократно, до тех пор, пока она
              соответствует условиям работы бесконтактной системы платного
              контроля доступа, используемой на Курорте. В случае, если Курорт
              изменит или обновит систему платного контроля доступа, Клиенту
              необходимо заменить имеющуюся Карту на новую Карту,
              соответствующую системе ГК «Такман».{" "}
            </p>

            <p>
              8. Во время катания Карту необходимо хранить в закрытом кармане
              верхней одежды, во избежание потери, не сгибать карту.{" "}
            </p>

            <p>
              9. Списание услуг и начало отсчета часовых проходов по Карте
              начинается после активации часового абонемента на турнекетах
              канатных дорог.{" "}
            </p>

            <p>
              10.Порядок возврата денежных средств при получении травмы на
              территории Курорта: Клиент предъявляет исправно работающую Карту;
              Кассовый чек о зачислении услуг на данную Карту; Документ,
              удостоверяющий личность (паспорт); Клиентом заполняется
              утвержденная форма заявления о возврате денежных средств с
              указанием причины и отметкой медпункта Курорта.
            </p>
          </article>
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
  );
}
