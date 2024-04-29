import '../../index.css';

export function Header() {
    return (

        <div className="sm:block hidden">
      <div className=" flex gap-x-5 sm:bg-white bg-sky-600 sm:py-0 py-4">
        <div className="sm:flex block gap-x-5 ">
          <div className="flex flex-col">
            <div className=" bg-sky-600 rounded-3xl w-full h-[3.5rem] items-center flex justify-between grow sm:px-5">
              <a href="#">
                <img
                  alt=""
                  className="p-1 size-10"
                  src="./img/vinxLogo.svg"
                />
              </a>
              <a href="#">
                <img
                  alt=""
                  className="p-1 size-10"
                  src="./img/sms.svg"
                />
              </a>
              <a href="#">
                <img
                  alt=""
                  className="p-1 size-10"
                  src="./img/notify.svg"
                />
              </a>
            </div>
            <div className="flex gap-x-6 h-[100%] mt-4">
              <div className="hidden sm:block flex flex-col h-[100%]  p-4 bg-sky-600 rounded-3xl justify-center ">
                <h2 className="text-[var(--clr-yelow-100)] subtitulo-pesado flex justify-center">
                  Proximo evento
                </h2>
                <div className="text-ellipsis overflow-hidden h-[5rem]">
                  <h3 className=" mt-3 texto text-white">
                    Lorem ipsum dolor sit amet consectetur. Feugiat                                    hendrerit aliquet diam vulputate nibh. Adipisci dapibus. Elit commodo facilisisLorem                                    ipsum                                    dolor                                    sit amet consectetur. Feugiat hendrerit aliquet diam vulputate nibh. Adipisci                                    dapibus.                                    Elit                                    commodo facilisis
                  </h3>
                </div>
                <div className=" mt-3 flex justify-between">
                  <h2 className="subtitulo-pesado text-[var(--clr-yelow-100)]">
                    25 abr
                  </h2>
                  <h2 className="subtitulo-pesado text-[var(--clr-yelow-100)]">
                    5:00pm
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row">
            <form
              action=""
              className="ring-2 ring-white flex sm:h-[3.5rem] h-[2rem] bg-sky-600 rounded-full"
            >
              <input
                className="focus:outline-none pl-8 w-full text-white texto bg-transparent"
                placeholder="Buscar"
                type="text"
              />
              <input
                className="px-8 lupa w-10"
                type="submit"
                value=""
              />
            </form>
            <div className="hidden sm:flex block gap-x-6 h-[100%] mt-4">
              <div className=" flex flex-col h-[100%]  p-4 bg-sky-600 rounded-3xl ">
                <div className="py-2 flex justify-between w-[20vw]">
                  <h1 className="texto text-white">
                    Cursos matriculados
                  </h1>
                  <img
                    alt=""
                    src="./img/courses.svg"
                  />
                </div>
                <hr className="text-white w-full" />
                <ul className=" mt-2 flex flex-col">
                  <li className="m-2 texto text-white ">
                    Desarrollo de aplicaciones interactivas II
                  </li>
                  <li className="m-2 texto text-white ">
                    Desarrollo de aplicaciones interactivas II
                  </li>
                  <li className="m-2 texto text-white ">
                    Desarrollo de aplicaciones interactivas II
                  </li>
                </ul>
              </div>
              <div className=" flex flex-col h-[100%]  p-4 bg-sky-600 rounded-3xl">
                <div className="py-2 flex justify-between w-[20vw]">
                  <h1 className="texto text-white">
                    Aplicar filtros de busqueda
                  </h1>
                  <img
                    alt=""
                    src="./img/filters.svg"
                  />
                </div>
                <hr className="text-white w-full" />
                <ul className=" mt-2 flex flex-col">
                  <li className="mt-2">
                    <label className="container flex">
                      <input
                        defaultChecked
                        type="checkbox"
                      />
                      <svg
                        className="star-regular"
                        fill="none"
                        height="19"
                        viewBox="0 0 18 19"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93782 13.1152L8 2.61523L14.0622 13.1152H1.93782Z"
                          fill="#F5A747"
                          stroke="#F5A747"
                          strokeWidth="2"
                        />
                      </svg>
                      <svg
                        className="star-solid"
                        fill="none"
                        height="19"
                        viewBox="0 0 18 19"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93782 13.1152L8 2.61523L14.0622 13.1152H1.93782Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="px-2 texto text-white">
                        Eventos de carrera
                      </span>
                    </label>
                  </li>
                  <li className="mt-2">
                    <label className="container flex">
                      <input
                        defaultChecked
                        type="checkbox"
                      />
                      <svg
                        className="star-regular"
                        fill="none"
                        height="19"
                        viewBox="0 0 18 19"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.36396 12.7072V1.9793L12.0919 1.9793V12.7072L1.36396 12.7072Z"
                          fill="#F5A747"
                          stroke="#F5A747"
                          strokeWidth="2"
                        />
                      </svg>
                      <svg
                        className="star-solid"
                        fill="none"
                        height="19"
                        viewBox="0 0 18 19"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.36396 12.7072V1.9793L12.0919 1.9793V12.7072L1.36396 12.7072Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="px-2 texto text-white">
                        Eventos de universidad
                      </span>
                    </label>
                  </li>
                  <li className="mt-2">
                    <label className="container flex">
                      <input
                        defaultChecked
                        type="checkbox"
                      />
                      <svg
                        className="star-regular"
                        fill="none"
                        height="19"
                        viewBox="0 0 18 19"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0.615234L17.5595 6.83408L14.2901 16.8964H3.70993L0.440492 6.83408L9 0.615234Z"
                          fill="#F5A747"
                        />
                      </svg>
                      <svg
                        className="star-solid"
                        fill="none"
                        height="19"
                        viewBox="0 0 18 19"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.61606 7.21605L9 1.8513L16.3839 7.21605L13.5635 15.8964H4.43648L1.61606 7.21605Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="px-2 texto text-white">
                        Eventos de cursos
                      </span>
                    </label>
                  </li>
                  <li className="mt-2">
                    <label className="container flex">
                      <input
                        defaultChecked
                        type="checkbox"
                      />
                      <svg
                        className="star-regular"
                        fill="none"
                        height="19"
                        viewBox="0 0 18 19"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 17.201L1.41421 9.61523L9 2.02945L16.5858 9.61523L9 17.201Z"
                          fill="#F5A747"
                          stroke="#F5A747"
                          strokeWidth="2"
                        />
                      </svg>
                      <svg
                        className="star-solid"
                        fill="none"
                        height="19"
                        viewBox="0 0 18 19"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 17.201L1.41421 9.61523L9 2.02945L16.5858 9.61523L9 17.201Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="px-2 texto text-white">
                        Eventos de estudiantes
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="p-7 bg-sky-600 flex  gap-x-2 rounded-3xl items-center  w-[22vw] ">
            <div className="">
              <h1 className="subtitulo-pesado text-white">
                Monica Muñoz Alpizar
              </h1>
              <h2 className="texto text-white pt-2">
                Informatica y tecnologia multimedia
              </h2>
              <h2 className="texto text-white pt-2">
                B33210
              </h2>
            </div>
            <img
              alt="User Profile"
              className="rounded-full w-[5vw]"
              src="https://randomuser.me/api/portraits/women/31.jpg"
            />
          </div>
          <a
            className="mt-3 texto ring-2 ring-sky-600 h-10 rounded-full bg-sky-600 text-white flex justify-center items-center"
            href="#"
          >
            Progreso del                    curso
          </a>
          <a />
          <a
            className="mt-3 texto text-sky-600 ring-2 ring-sky-600 h-10 rounded-full flex justify-center items-center"
            href="login.html"
          >
            Cerrar sesion
          </a>
          <a>
          </a>
        </div>
        <a>
        </a>
      </div>
      <a>
      </a>
    </div>
            
    );
}



