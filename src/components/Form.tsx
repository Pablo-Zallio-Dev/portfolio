import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "El nombre no puede contener números ni símbolos"
    ),
  apellido: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "El apellido no puede contener números"
    ),
  email: z.email("Introduce un correo electrónico válido"),
  mensaje: z
    .string()
    .min(10, "El mensaje es demasiado corto (mín. 10 caracteres)")
    .max(200, "El mensaje es demasiado largo (max. 200 caracteres)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

import { BsSend } from "react-icons/bs";
import { useState } from "react";

const Form = () => {
  const [validate, setValidate] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mojvgpyo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Datos validos", data);
        setValidate(true);
        reset();
        setTimeout(() => setValidate(false), 3000);
      } else {
        alert("No se envio el mensaje");
      }
    } catch (error) {
      console.log("Error", error);
      setValidate(false);
    }
  };

  return (
    <section className=" flex justify-center w-full py-10">
      <section className=" w-full p-4 border border-border bg-background-form shadow-lg rounded-xl md:max-w-190 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className=" flex flex-col gap-4 "
        >
          <div className=" flex flex-col items-start gap-1 ">
            <label htmlFor="name" className=" font-semibold text-xs ">
              Nombre
            </label>
            <input
            id="name"
              type="text"
              {...register("nombre")}
              className=" w-full p-1 text-xs bg-background border border-border rounded-md "
            />
            {errors.nombre && (
              <span className="text-[10px] text-red-500">
                {errors.nombre.message}
              </span>
            )}
          </div>

          <div className=" flex flex-col items-start gap-1 ">
            <label htmlFor="lastname" className=" font-semibold text-xs ">
              Apellido
            </label>
            <input
            id="lastname"
              type="text"
              {...register("apellido")}
              className=" w-full p-1 text-xs bg-background border border-border rounded-md "
            />
            {errors.apellido && (
              <span className="text-[10px] text-red-500">
                {errors.apellido.message}
              </span>
            )}
          </div>

          <div className=" flex flex-col items-start gap-1 ">
            <label htmlFor="email" className=" font-semibold text-xs ">
              Email
            </label>
            <input
            id="email"
              type="email"
              {...register("email")}
              className=" w-full p-1 text-xs bg-background border border-border rounded-md "
            />
            {errors.email && (
              <span className="text-[10px] text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className=" flex flex-col items-start gap-1 ">
            <label htmlFor="message" className=" font-semibold text-xs ">
              Mensaje
            </label>
            <textarea
              id="message"
              {...register("mensaje")}
              className=" w-full p-1 text-xs bg-background border border-border rounded-md resize-none "
            ></textarea>
          </div>
            {
                  !validate &&(
                        <p className=" text-[.65rem] text-red-600 ">Todos los campos son requeridos</p>
                  )
            }
          <button
            type="submit"
            className=" flex justify-center items-center gap-2 w-full bg-primary text-background text-[.7rem] p-1.5 border border-border rounded-md transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5 md:hover:bg-primary-hover "
          >
            <BsSend />
            Enviar mensaje
          </button>
          {validate && (
            <p className=" text-center text-xs ">
              El mensaje ha sido enviado conexito 👌
            </p>
          )}
        </form>
      </section>
    </section>
  );
};

export default Form;
