import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

import projectsData from "../json/projectsData.json";

export interface Project {
  id: string;
  image:string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  links: {
    demo?: string;
    code?: string;
  };
  uiStyle: string;
}



const projects: Project[] = Object.values(projectsData);


const Projects = () => {







  return (
    <>
      <section
        id="projects"
        className=" flex flex-col items-center justify-center gap-6 w-full pt-8 px-3 md:pt-20  "
      >
        {/* Titulo Proyectos */}
        <h1 className=" text-2xl font-bold md:text-4xl  ">Proyectos Destacados</h1>

        {/* Texto proyectos */}
        <p className=" text-text text-sm text-center leading-5 md:w-110 md:text-base  ">
          Una selección de proyectos que demuestran mi experiencia en desarrollo
          frontend.
        </p>

        {/* Contenedor de tarjetas */}
        <section className=" flex justify-center w-full ">
          <section className=" flex flex-wrap justify-center w-75 md:w-200 xl:w-300  items-center gap-8  py-6 rounded-xl  md:px-6  ">
            {

                  projects.map((project) => (
                         <section className="  bg-secondary-foreground w-75 xl:w-120 shadow-lg py-6 rounded-xl border border-border/50 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl ">

                                    <section className=" overflow-hidden ">
                                          <img src={project.image} alt={`Imagen del proyecto ${project.title}`} className=" aspect-video w-full object-cover object-top " />
                                    </section>
                                    <section className=" flex flex-col justify-between gap-3 h-52 p-6 md:h-60  ">
                                          <h2 className=" font-bold md:text-lg ">{project.title}</h2>
                                          <p className="  text-text text-[.8rem] md:text-sm  ">{project.description}</p>

                                          <section className=" flex gap-1  ">
                                                {
                                                      project.technologies.map((tech) => (
                                                            <p className=" w-max py-0.5 px-1 text-[.65rem] rounded-sm text-primary border border-primary/50 bg-primary/20 "> { tech } </p>

                                                ))
                                                }
                                          </section>

                                          <section className=" flex w-full justify-center gap-4 justify-self-center mt-4 ">

                                                <a href={project.links.demo} className=" flex items-center justify-center gap-2 px-3 text-[.7rem] text-secondary font-semibold  rounded-md shadow-xs shadow-muted cursor-pointer md:transition-all md:duration-200 hover:ring hover:ring-primary hover:bg-primary/10 md:py md:text-sm " target="_blank"> <HiOutlineExternalLink /> Demo en vivo</a>
                                                {
                                                      project.links.code && (

                                                            <a href={project.links.code} className=" flex items-center justify-center gap-2 px-3 text-[.7rem] text-secondary font-semibold  rounded-md shadow-xs shadow-muted cursor-pointer md:transition-all md:duration-200  hover:ring hover:ring-primary hover:bg-primary/10 md:py md:text-sm " target="_blank"> <FiGithub /> Código</a>
                                                      )
                                                }
                                                


                                          </section>
                                    </section>


                              </section>
                  ))

            }
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;


/* 


<section className=" grid grid-cols-1 justify-items-center gap-8 w-full md:w-200 2xl:w-250 py-6 rounded-xl md:grid-cols-2 md:px-6 xl:gap-10  ">

*/