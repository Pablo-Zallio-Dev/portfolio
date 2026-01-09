import {
      Download,
      Github,
      Linkedin,
      Moon,
      Sun,
      TextAlignJustify,
      X,
} from "lucide-react";
import {
      AiOutlineHome,
      AiOutlineMail,
      AiOutlineProject,
      AiOutlineUser,
} from "react-icons/ai";

import { useMenuStore, useThemeStore } from "../store/store";

const Header = () => {
      const changeTheme = useThemeStore((state) => state.changeTheme); // 👈 Con esto cambiamos el tema
      const changeMenu = useMenuStore((state) => state.changeMenu); // 👈 Con esto cambiamos el tema
      const theme = useThemeStore((state) => state.theme);
      const stateMenu = useMenuStore((state) => state.stateMenu);
      const logoMobile =
            theme !== "light"
                  ? "/public/assets/images/logo_dark_mobile.webp"
                  : "/public/assets/images/logo_mobile.webp";
      const logoDesktop =
            theme !== "light"
                  ? "/public/assets/images/logo_dark.webp"
                  : "/public/assets/images/logo.webp";

      return (
            <>
                  {/* header */}
                  <section className="  fixed bottom-0 z-50 flex justify-around bg-background items-center w-full  md:top-0 md:h-16 md:bg-background/70 md:backdrop-blur-sm ">
                        {" "}
                        {/* 👈 Borrar el borde rojo */}
                        {/* Logo Mobile: Se muestra por defecto, se oculta en pantallas medianas (md) */}
                        <img src={logoMobile} alt="Logo Mobile" className="w-12 md:hidden" />
                        {/* Logo Desktop: Se oculta por defecto, se muestra desde pantallas medianas (md) */}
                        <img
                              src={logoDesktop}
                              alt="Logo Desktop"
                              className="hidden md:block w-38.5 p-10"
                        />
                        {/* Icono menu */}
                        <section className=" flex py-2 md:hidden ">
                              {stateMenu ? (
                                    <>
                                          {theme !== "light" ? (
                                                <TextAlignJustify color="#F8FAFC" onClick={changeMenu} />
                                          ) : (
                                                <TextAlignJustify color="#0F172A" onClick={changeMenu} />
                                          )}
                                    </>
                              ) : (
                                    <>
                                          {theme !== "light" ? (
                                                <X color="#F8FAFC" onClick={changeMenu} />
                                          ) : (
                                                <X color="#0F172A" onClick={changeMenu} />
                                          )}
                                    </>
                              )}
                              
                        </section>
                        {/* Navergador Desktop, iria otro compo */}
                        <nav className="hidden py-10  text-xs   md:block">
                              <nav className=" flex gap-6 ">
                                    <a
                                          href="#home"
                                          className=" text-secondary btn_nav_desktop hover:shadow-lg hover:shadow-gray-900/20 hover:scale-105 hover:text-card-foreground "
                                    >
                                          Inicio
                                    </a>

                                    <a
                                          href="#projects"
                                          className=" text-secondary btn_nav_desktop hover:shadow-lg hover:shadow-gray-900/20 hover:scale-105 hover:text-card-foreground "
                                    >
                                          Proyectos
                                    </a>
                                    <a
                                          href="#about"
                                          className=" text-secondary btn_nav_desktop hover:shadow-lg hover:shadow-gray-900/20 hover:scale-105 hover:text-card-foreground "
                                    >
                                          Sobre mi
                                    </a>
                                    <a
                                          href="#contact"
                                          className=" text-secondary btn_nav_desktop hover:shadow-lg hover:shadow-gray-900/20 hover:scale-105 hover:text-card-foreground "
                                    >
                                          Contacto
                                    </a>
                              </nav>
                        </nav>
                        <section className="  hidden gap-3 md:flex ">
                              <section className=" hidden md:block ">
                                    {theme === "light" ? (
                                          <Sun size={24} onClick={changeTheme} />
                                    ) : (
                                          <Moon size={24} onClick={changeTheme} />
                                    )}
                              </section>

                              <a
                                    href=""
                                    className=" flex items-center gap-2 px-2 text-xs text-secondary  font-semibold  rounded-md shadow-xs shadow-muted cursor-pointer transition-all duration-200 hover:ring hover:ring-primary hover:bg-primary/10  "
                              >
                                    {" "}
                                    <Download size={16} />
                                    Descargar CV
                              </a>
                        </section>
                  </section>
                  {/* Nav. Mobile */}
                  <section
                        className={` fixed  top-0 right-0  z-10 h-dvh  bg-background/80 flex flex-col border border-border ${!stateMenu ? `translate-x-0 opacity-100` : `translate-x-full `
                              } w-full transition-all duration-300 ease-in-out md:hidden`}
                  >
                        <section className=" absolute right-0 w-10/12 h-full shadow-2xl bg-background">
                              <section className=" flex flex-col items-center justify-center py-12   inset-shadow-sm ">
                                    <p className="  font-bold ">Pablo Zallio Dev</p>
                                    <p className=" text-[.7rem] text-text ">Front-end Developer</p>
                              </section>
                              <section className=" flex flex-col justify-center items-center gap-25 pt-20 border-t border-t-border   ">
                                    <nav className="flex flex-col gap-6 justify-center font-bold ">
                                          <section className="">
                                                <a
                                                      href="#home"
                                                      className="flex items-center gap-4 text-text text-sm "
                                                      onClick={changeMenu}
                                                >
                                                      <section className=" p-2 bg-background-btn rounded-lg ">
                                                            <AiOutlineHome />
                                                      </section>
                                                      Inicio
                                                </a>
                                          </section>
                                          <section className="">
                                                <a
                                                      href="#projects"
                                                      className="flex items-center gap-4 text-text text-sm "
                                                      onClick={changeMenu}
                                                >
                                                      <section className=" p-2 bg-background-btn rounded-lg ">
                                                            <AiOutlineProject />
                                                      </section>
                                                      Proyectos
                                                </a>
                                          </section>
                                          <section className="">
                                                <a
                                                      href="#about"
                                                      className="flex items-center gap-4 text-text text-sm "
                                                      onClick={changeMenu}
                                                >
                                                      <section className=" p-2 bg-background-btn rounded-lg ">
                                                            <AiOutlineUser />
                                                      </section>
                                                      Sobre mi
                                                </a>
                                          </section>
                                          <section className="">
                                                <a
                                                      href="#contact "
                                                      className="flex items-center gap-4 text-text text-sm "
                                                      onClick={changeMenu}
                                                >
                                                      <section className=" p-2 bg-background-btn rounded-lg ">
                                                            <AiOutlineMail />
                                                      </section>
                                                      Contacto
                                                </a>
                                          </section>
                                    </nav>

                                    <section className=" flex flex-col items-center gap-5 w-full pt-3 border-t border-t-border ">
                                          <section className=" flex justify-center gap-30 w-max  p-1.5 px-8 text-text bg-background-btn  rounded-md    ">
                                                <p className="">Theme</p>
                                                {theme === "light" ? (
                                                      <Sun size={24} onClick={changeTheme} />
                                                ) : (
                                                      <Moon size={24} onClick={changeTheme} />
                                                )}
                                          </section>
                                          <section className=" flex gap-4 pb-3 ">
                                                <a
                                                      href="https://www.linkedin.com/in/pablozalliodev/"
                                                      className=" p-2 bg-background-btn rounded-md "
                                                      target="_blank"
                                                      aria-label="Visitar mi perfil de Linkedin"
                                                >
                                                      <Linkedin size={16} color="#545454" />
                                                </a>
                                                <a
                                                      href="https://github.com/Pablo-Zallio-Dev"
                                                      className=" p-2 bg-background-btn rounded-md "
                                                      target="_blank"
                                                      aria-label="Visitar mi perfil de GitHub"
                                                >
                                                      <Github size={16} color="#545454" />
                                                </a>
                                          </section>
                                    </section>
                              </section>
                        </section>
                  </section>
            </>
      );
};

export default Header;

/* 


{`  absolute -top-111 z-0  bg-secondary text-primary-foreground ${!stateMenu ? `translate-x-0 opacity-100` : `translate-x-full `
                              } w-full transition-all duration-300 ease-in-out rounded-t-4xl  md:hidden`}

<nav className=" flex flex-col justify-center items-center font-extralight mt-10 mb-20 px-6  ">
                                    <ul className="flex flex-col items-center pb-16  gap-10 ">
                                          <li className="">
                                                <a
                                                      className="flex flex-col items-center text-4xl  "
                                                      href="#projects"
                                                      onClick={changeMenu}
                                                >
                                                      Proyectos
                                                </a>
                                          </li>
                                          <li className="">
                                                <a
                                                      className="flex flex-col items-center text-4xl "
                                                      href="#about"
                                                      onClick={changeMenu}
                                                >
                                                      Sobre mi
                                                </a>
                                          </li>
                                          <li className="">
                                                <a
                                                      className="flex flex-col items-center text-4xl "
                                                      href="#contact"
                                                      onClick={changeMenu}
                                                >
                                                      Contacto
                                                </a>
                                          </li>
                                    </ul>
                                    <section className=" flex gap-4 pb-3 ">
                                          <a href="" className="">Linkedin</a>
                                          <a href="" className="">Github</a>
                                    </section>
                                    {theme === "light" ? (
                                          <Sun size={24} onClick={changeTheme} />
                                    ) : (
                                          <Moon size={24} onClick={changeTheme} />
                                    )}
                              </nav>
                        
                        
                              */
