import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import Button, { ButtonTwo } from "../ui/Button";
import { BiPhone } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = "WybMtnQuS2IE8YfuR";
emailjs.init(PUBLIC_KEY);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus({ type: "", message: "" });

      try {
        await emailjs.send("service_9fqzjgd", "template_cqkzkga", {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Joshua Onyeka",
          reply_to: formData.email,
        });

        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error("Email error:", error);
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="mb-52 w-full md:mb-0">
      <p data-aos="fade-up" data-aos-delay="300" className="pt-6 max-w-6xl text-3xl font-medium normal-case text-neutral-300">
        Ready to start your next project? Let's collaborate and create something amazing together. I'm always excited to work on new challenges and
        innovative ideas.
      </p>
      <div className="flex flex-wrap-reverse gap-12 justify-between items-center mt-20 w-full md:flex-nowrap">
        <div className="w-full md:flex-[2]">
          <div data-aos="fade-right" data-aos-delay="400" className="p-20 space-y-7 w-full text-center rounded-2xl shadow-xl bg-neutral-900">
            <h3 className="text-5xl font-bold text-white normal-case font-monospace">Ready to Start a Project?</h3>
            <p className="text-3xl font-medium normal-case text-neutral-200">
              I'm currently available for freelance opportunities and exciting new projects. Let's discuss how we can bring your ideas to life.
              Schedule a Call
            </p>
            <Button
              onClick={() => window.open("https://calendly.com/jo_shua/")}
              target="no_blank"
              icon={<BiPhone className="text-4xl" />}
              className="flex items-center justify-center w-fit h-[5.5rem] m-auto border-2 normal-case !mt-20"
            >
              schedule a call
            </Button>
          </div>

          <div className="mt-20 space-y-10">
            <div data-aos="fade-up" data-aos-delay="500" className="p-10 m-auto w-full max-w-2xl rounded-2xl shadow-xl bg-neutral-900">
              <h3 className="text-4xl font-bold text-center text-white normal-case font-monospace">My social accounts</h3>
              <div className="flex gap-20 justify-center items-center mt-20">
                <div className="flex justify-center items-center">
                  <div className="flex gap-12 justify-between place-content-center w-full">
                    {[
                      {
                        icon: (
                          <FaXTwitter className="text-5xl text-neutral-400 hover:text-[#000000] dark:hover:text-[#ffffff] cursor-pointer transition-transform duration-300 hover:scale-110" />
                        ),
                        name: "Twitter",
                        href: "https://x.com/jo_shua_9",
                      },
                      {
                        icon: (
                          <FaLinkedin className="text-5xl text-neutral-400 hover:text-[#0A66C2] cursor-pointer transition-transform duration-300 hover:scale-110" />
                        ),
                        name: "linkedin",
                        href: "https://linkedin.com/in/joshua-onyeka",
                      },
                      {
                        icon: (
                          <FaGithub className="text-5xl text-neutral-400 hover:text-[#181717] dark:hover:text-[#ffffff] cursor-pointer transition-transform duration-300 hover:scale-110" />
                        ),
                        name: "github",
                        href: "https://github.com/jo-shua09",
                      },
                    ].map((social, index) => (
                      <div
                        key={social.name}
                        data-aos="fade-up"
                        data-aos-delay={600 + index * 100}
                        className="flex flex-col gap-2 justify-center items-center"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer" className="transition-all duration-300 group">
                          {social.icon}
                          <span className="sr-only">{social.name} profile</span>
                        </a>
                        <p className="text-2xl font-medium text-white font-monospace">{social.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="900"
              onClick={() => (window.location.href = "mailto:joshuaonyeka2020@gmail.com")}
              className="p-10 m-auto w-full max-w-2xl rounded-2xl shadow-xl cursor-pointer hover:scale-95 bg-neutral-900"
            >
              <h3 className="mb-10 text-4xl font-bold text-center text-white normal-case font-monospace">Let's connect</h3>
              <div className="flex gap-5 items-center">
                <div className="flex justify-center items-center p-3 rounded-full bg-neutral-500">
                  <MdMailOutline className="text-5xl text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold text-white">joshua onyeka</h3>
                  <a
                    href="mailto:joshuaonyeka2020@gmail.com"
                    className="text-3xl font-semibold normal-case cursor-pointer text-neutral-300 hover:text-white"
                  >
                    joshuaonyeka2020@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} data-aos="fade-left" data-aos-delay="400" className="w-full md:flex-[2]">
          <div className="p-10 w-full rounded-2xl shadow-xl bg-neutral-900">
            <h3 className="text-5xl font-bold text-white normal-case font-monospace">Send a message</h3>

            {submitStatus.message && (
              <div
                className={`mt-4 p-4 rounded-xl text-2xl ${
                  submitStatus.type === "success" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="mt-16 space-y-10">
              {[
                { label: "full name", name: "fullName", type: "text", placeholder: "Enter full name" },
                { label: "Email", name: "email", type: "email", placeholder: "Enter email address" },
                { label: "subject", name: "subject", type: "text", placeholder: "Enter subject of mail" },
              ].map((field, index) => (
                <div key={field.label} data-aos="fade-left" data-aos-delay={500 + index * 100} className="space-y-2">
                  <label className="text-neutral-200 font-medium text-[1.7rem]">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className={`text-[1.7rem] placeholder:text-2xl font-medium text-white border ${
                      errors[field.name] ? "border-red-500" : "border-neutral-700"
                    } rounded-2xl normal-case pl-4 w-full h-[5.5rem] focus:border-white bg-transparent`}
                  />
                  {errors[field.name] && <p className="mt-1 text-xl text-red-500">{errors[field.name]}</p>}
                </div>
              ))}

              <div data-aos="fade-left" data-aos-delay="800" className="space-y-2">
                <label className="text-neutral-200 font-medium text-[1.7rem]">message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`text-[1.7rem] placeholder:text-2xl font-medium text-white border ${
                    errors.message ? "border-red-500" : "border-neutral-700"
                  } rounded-2xl normal-case p-4 w-full h-[15rem] focus:border-white bg-transparent`}
                />
                {errors.message && <p className="mt-1 text-xl text-red-500">{errors.message}</p>}
              </div>

              <div data-aos="fade-up" data-aos-delay="900" className="w-full">
                <ButtonTwo
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-[5.5rem] flex justify-center text-2xl uppercase font-bold items-center gap-4 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  icon={<FaTelegramPlane className="text-3xl" />}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </ButtonTwo>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
