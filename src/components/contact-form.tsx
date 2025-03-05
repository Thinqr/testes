import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useRef,
  useState,
} from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { frutigerRegular } from "@/public/font/font";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { Loader } from "lucide-react";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name."),
  lastName: Yup.string().required("Please enter your last name."),
  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("Email is required."),
  message: Yup.string().required("Don't forget to include your message!"),
});

export default function ContactForm() {
  const form = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [, setCaptcha] = useState<string | null>(null);
  const onChange = (value: string | null) => {
    setCaptcha(value);
  };

  const handleSubmit = async () => {
    const token = await recaptchaRef.current?.executeAsync();
    if (!token) {
      toast.error(
        "Please verify that you are human by completing the captcha."
      );
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          toast(
            "Your request has been successfully submitted, and we will get back to you soon."
          );
        },
        (error) => {
          console.log(error);
          toast.error(
            "There was an error submitting your request. Please try again later."
          );
        }
      )
      .finally(() => {
        setLoading(false);
        form.current.reset();
      });
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form ref={form} className="flex flex-col gap-6">
          <div className="flex flex-col gap-[9px]">
            <div className="flex gap-4 w-full">
              <FormInput
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <FormInput name="lastName" type="text" placeholder="Last Name" />
            </div>

            <FormInput name="email" type="text" placeholder="Email" />
            <TextArea
              name="message"
              placeholder="How can we help you? Tell us your details!"
            />
          </div>
          <Button className="h-[40px] py-0 text-sm leading-5 w-[40px] flex items-center justify-center">
            <div>
              {loading ? <Loader className="w-4 h-4 animate-spin" /> : "Send"}
            </div>
          </Button>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={onChange}
            size="invisible"
          />
        </Form>
      )}
    </Formik>
  );
}

const FormInput = ({
  name,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Field
        name={name}
        {...props}
        className={cn(
          "w-full py-[18px] px-[22px] rounded-[4px] bg-white/10 border border-[#888888]/40 placeholder:text-white/60 text-sm h-[56px]",
          props.className,
          frutigerRegular.className
        )}
      />
      <ErrorInput name={name || ""} />
    </div>
  );
};

const TextArea = ({
  name,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="flex flex-col gap-2">
      <Field
        as="textarea"
        name={name}
        {...props}
        className={cn(
          "w-full py-[18px] px-[22px] rounded-[4px] bg-white/10 border border-[#888888]/40 placeholder:text-white/60 text-sm h-[190px]",
          props.className,
          frutigerRegular.className
        )}
      />
      <ErrorInput name={name || ""} />
    </div>
  );
};

const ErrorInput = ({ name }: { name: string }) => {
  return (
    <div>
      <ErrorMessage
        name={name || ""}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};
