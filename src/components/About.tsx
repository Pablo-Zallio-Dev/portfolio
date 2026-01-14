import imageAbout from "../../public/assets/images/image-about.webp";

import projectsTech from "../json/projectsTech.json";

import { useThemeStore } from "../store/store";

export interface Project {
      id: string;
      imageLight?: string;
      imageDark?: string;
      title: string;
      link: string;
}

const projects: Project[] = Object.values(projectsTech);

const About = () => {

      const theme = useThemeStore((state) => state.theme)
      return (
            <>
                  <section
                        id="about"
                        className=" flex flex-col justify-center items-center w-full pt-30 "
                  >
                        <h1 className=" mb-10 text-2xl font-bold text-center md:text-4xl ">
                              Sobre mi
                        </h1>
                        <section className=" flex flex-col justify-center items-center gap-22 p-3 lg:flex-row md:p-10 xl:max-w-325  ">
                              {/* contenedor del texto */}
                              <section className=" px-3 md:w-10/12 lg:w-1/2 ">
                                    <p className=" text-sm text-text leading-6 md:text-base md:leading-7  ">
                                          Desarrollador Frontend enfocado en la creación de interfaces modulares y experiencias de usuario de alta fidelidad.
                                          <span className=" block my-2.5 ">
                                          Me enfoco en el desarrollo de interfaces modernas mediante el uso de componentes reutilizables. Aplico React, TypeScript y Storybook para garantizar que cada elemento visual sea consistente, escalable y esté alineado con los estándares actuales de desarrollo web.
                                          </span>
                                          Domino el ecosistema moderno de CSS (Tailwind, Sass) y la traducción precisa de prototipos de Figma a componentes funcionales (pixel-perfect). Mi enfoque prioriza la estructura limpia de carpetas y la mantenibilidad, buscando siempre que la interfaz no solo sea estética, sino técnica y funcionalmente sólida.

                                    </p>
                              </section>
                              <section className=" flex justify-center items-center max-w-105 md:w-1/2  ">
                                    <img
                                          src={imageAbout}
                                          alt=""
                                          className="  rounded-md border border-border shadow-lg "
                                    />
                              </section>
                        </section>
                        <section className=" flex flex-col items-center mt-30 ">
                              <p className=" text-xl font-semibold ">Mis tecnologias</p>
                              <section className=" max-w-lg   p-3 m-4 mt-10 border border-border/35 shadow-sm rounded-xl md:p-5 md:max-w-3xl  ">
                                    <section className=" flex flex-wrap justify-center gap-4 md:gap-10 lg:gap-14 ">
                                          {projects.map((tech) => (
                                                <section className="  flex flex-col items-center gap-2 p-2 w-22 rounded-md    transition-all duration-200 ">

                                                      <img src={(theme === "dark" && tech.imageDark) ? tech.imageDark : tech.imageLight} alt={`Icono de  ${tech.title}`} className=" w-6 md:w-8 " />


                                                      <a
                                                            className="text-sm font-semibold text-text p-1 rounded-md md:text-sm md:transition-all md:duration-200 hover:text-primary hover:shadow-lg  "
                                                            href={tech.link}
                                                            target="_blank"
                                                      >
                                                            {tech.title}
                                                      </a>
                                                </section>
                                          ))}
                                    </section>
                              </section>
                        </section>
                  </section>
            </>
      );
};

export default About;

/* 
<img src="" alt="" className="" />
                                          <p className="">HTML</p>
                                           */
