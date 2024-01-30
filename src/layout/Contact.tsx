import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { useMotion } from "../utils/useMotion";
import {motion} from "framer-motion";
import { Trait } from "../components/svg";
import { Footer } from "./Footer";

export const Contact = () => {

  const ref = useRef<HTMLElement>(null);
  const contactFormRef = useRef<HTMLFormElement>(null);
  const [isSend, setIsSend] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const animation = useMotion(ref);

  const translateTopVariants = {
    hidden: {y: -300},
    visible: {y: 0}
  }

  

  useEffect(() => {

    if(isSend) {
        const timeSuccess = setTimeout(() => setIsSend(false), 3000)
        return () => clearTimeout(timeSuccess);
    }
  }, [isSend])

  

  const contactSchema = yup.object({
    user_firstname: yup.string().required("First name is required"),
    user_lastname: yup.string().required("Last name is required"),
    user_subject: yup.string().required("Subject is required"),
    user_email: yup
      .string()
      .email("Provide a valid mail")
      .required("Mail is required"),
    message: yup.string().required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = () => {
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        contactFormRef.current ? contactFormRef.current : "",
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(() => {
        console.log("OK");
        setIsSend(true);
        reset();
      })
      .catch(() => {
        console.log("err");
        
        setIsFormError(true);
        setIsSend(false);
      });
  };

  return (
    <article className="contact" id="contact" ref={ref}>
      <div className="contact-container">
      <motion.div
      initial="hidden"
      animate={animation}
      variants={translateTopVariants}
      transition={{duration: 0.6, ease: "easeOut"}}
      >
      <h2 className="contact-title">Do you have a project ?</h2>
      <form
        className="contact-form"
        ref={contactFormRef}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="contact-form_grid">
          <div className="contact-form_item">
            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" {...register("user_firstname")} />
            {errors.user_firstname && (
              <p className="contact-form_item_error">
                {errors.user_firstname.message}
              </p>
            )}
          </div>
          <div className="contact-form_item">
            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" {...register("user_lastname")} />
            {errors.user_lastname && (
              <p className="contact-form_item_error">
                {errors.user_lastname.message}
              </p>
            )}
          </div>
          <div className="contact-form_item">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" {...register("user_subject")} />
            {errors.user_subject && (
              <p className="contact-form_item_error">
                {errors.user_subject.message}
              </p>
            )}
          </div>
          <div className="contact-form_item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("user_email")} />
            {errors.user_email && (
              <p className="contact-form_item_error">
                {errors.user_email.message}
              </p>
            )}
          </div>
          <div className="contact-form_item">
            <label htmlFor="message">Message</label>
            <textarea id="message" {...register("message")}></textarea>
            {errors.message && (
              <p className="contact-form_item_error">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        {isFormError && <p className="contact-form_error">Something went wrong, try again</p>}
         {isSend ? <p className="contact-form_success">Message sent</p> : <button type="submit" className="contact-form_btn yellow">
            <img src="./icones/hand.svg" alt="Main signe V" />
            Send
          </button>}
      </form>
      </motion.div>

      </div>
      <div className="contact-decoration">
        <Trait animation={animation} />
      </div>
      <Footer />
    </article>
  );
};
