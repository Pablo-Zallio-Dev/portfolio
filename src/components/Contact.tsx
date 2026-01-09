import Form from "./Form"

const Contact = () => {
  return (
    <>
    <section id='contact' className="  flex flex-col  items-center gap-8 pt-20 px-4 ">
      <h1 className=" text-2xl font-bold text-center ">¿Tienes un proyecto en mente?</h1>
      <p className="  w-10/12 text-xs text-text text-center  leading-5 md:text-base md:w-127.5 ">Estoy siempre interesado en nuevas oportunidades y colaboraciones. No dudes en contactarme para discutir tu proyecto.
</p>
      <Form />
    </section>
    </>
  )
}

export default Contact