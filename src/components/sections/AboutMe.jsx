import FuzzyText from "../animations/FuzzyText";
import ProfileCard from "../animations/ProfileCard/ProfileCard";
import myImage from "../../assets/images/avatar.png";

export default function AboutMe() {
  return (
    <div className="w-full flex items-center gap-20 sm:flex-nowrap flex-wrap">
      <div className="space-y-4 text-left">
        <div className="inline- justify-center md:mr-0 mr-5 py-3 flex md:m-0 m-auto border rounded-full w-fit !-z-10 border-neutral-800 backdrop-blur-sm bg-neutral-900/30">
          <FuzzyText baseIntensity={0.15} hoverIntensity={1} enableHover={true} fontSize="clamp(2rem, 10vw, 3.5rem)">
            About Me
          </FuzzyText>
        </div>
        <article className="text-3xl leading-relaxed font-semibold sm:font-medium italic md:font-serif normal-case text-center text-neutral-300 !mt-20">
          Welcome to my portfolio! I'm a software developer specializing in web applications, passionately creating engaging digital experiences that
          seamlessly blend functionality and aesthetics. With expertise in building responsive and high-performance solutions, particularly with
          React.js, Next.js, and TypeScript, I focus on delivering clean code, scalable architecture, and intuitive user experiences that consistently
          drive real results. I prioritize captivating audiences through meticulous UI/UX design, ensuring every website is user-friendly and
          optimized flawlessly across all devices and browsers. My commitment to modern web development means I'm continuously learning and adapting
          to emerging technologies, guaranteeing that every project I undertake is efficient and impactful. Collaboration and clear communication are
          fundamental to my approach, as I guide clients seamlessly from initial concept through to successful launch. Explore my portfolio to see how
          I bring innovative ideas to life. Let’s connect and work together to turn your vision into a compelling digital reality!
        </article>
      </div>

      <div className="m-auto w-fit flex justify-center md:mt-0 mt-16">
        <ProfileCard
          name="Joshua Onyeka"
          title="Software Developer"
          handle="Joshua"
          status="Online"
          contactText="Contact Me"
          avatarUrl={myImage}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </div>
  );
}
