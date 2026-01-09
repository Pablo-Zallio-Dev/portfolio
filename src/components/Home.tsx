import { ArrowRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowLongDown } from "react-icons/hi2";
import logo from '../../public/assets/images/logo.webp'





const Home = () => {
      return (
            <>
                  {/* Contenedor Home */}
                  <section id="home" className=" flex justify-center items-center w-full h-dvh  ">

                        <section className=" flex flex-col items-center gap-8 px-2 pt-18 max-w-lg  md:gap-12  md:max-w-3xl lg:max-w-4xl ">
                              <img src={logo} alt="Imagen de logo Pablo Zallio developer" className=" w-70 sm:w-100 md:hidden " />
                              <p className=" font-geist text-2xl text-center font-bold md:text-3xl lg:text-4xl xl:text-6xl ">Construyo interfaces web que combinan <span className=' text-primary '>rendimiento técnico</span> con <span className=' text-primary '>experiencia de usuario</span>.</p>
                              <p className=" text-center text-sm text-text leading-6 md:max-w-xl lg:max-w-2xl lg:text-lg lg:leading-8 ">Soy un desarrollador Frontend especializado en React, TypeScript y Tailwind. Me apasiona crear experiencias web rápidas, accesibles y escalables que resuelven problemas reales de usuarios.</p>
                              <section className=" flex flex-col gap-3 items-center lg:mt-10 ">
                                    <a href="#projects" className=" flex items-center gap-3 py-1.5 px-3 rounded-md text-[.7rem] bg-primary text-background md:transition-colors md:duration-200 md:hover:bg-primary-hover group ">Ver Proyectos <ArrowRight size={12} className=" group-hover:translate-x-1 transition-transform " /></a>
                                    <section className=" flex gap-6 ">
                                          <a href="https://www.linkedin.com/in/pablozalliodev/" target="_blank" className="" aria-label="Visitar mi perfil de Linkedin">
                                                <FaLinkedin className="md:hover:text-primary transition-colors duration-200" />

                                          </a>
                                          <a href="https://github.com/Pablo-Zallio-Dev" target="_blank" className="" aria-label="Visitar mi perfil de GitHub">
                                                <FaGithub className="md:hover:text-primary transition-colors duration-200" />

                                          </a>
                                    </section>
                                    <section className=" pt-3 pb-2 mt-15  rounded-full border border-secondary ">
                                          <HiArrowLongDown className=" text-secondary animate-bounce " />
                                    </section>
                                    <p className=" text-[.6rem] tracking-[.2rem] ">SCROLL</p>

                              </section>
                        </section>


                  </section>
            </>
      )
}

export default Home