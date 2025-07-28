import FuzzyText from "../components/animations/FuzzyText";
import ContactForm from "../components/sections/ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="w-full section">
      <div className="space-y-4 text-left">
        <div 
          data-aos="fade-down"
          className="inline- justify-center md:mr-0 mr-5 py-3 flex md:m-0 m-auto border rounded-full w-fit !-z-10 border-neutral-800 backdrop-blur-sm bg-neutral-900/30"
        >
          <FuzzyText baseIntensity={0.1} hoverIntensity={1} enableHover={true} fontSize="clamp(2rem, 10vw, 3.5rem)">
            Contact Me
          </FuzzyText>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <ContactForm />
      </div>
    </div>
  );
}
