import FuzzyText from "../components/animations/FuzzyText";

export default function Portfolio() {
  return (
    <div className="w-full mt-20 section">
      <div className="space-y-4 text-left">
        <div className="inline-block m-auto border rounded-full border-neutral-800">
          <FuzzyText baseIntensity={0.15} hoverIntensity={1} enableHover={true} fontSize="32px">
            Featured Projects
          </FuzzyText>
        </div>
        {/* <p className="text-3xl font-medium normal-case text-neutral-300">Showcasing my expertise through practical applications.</p> */}
      </div>
      <div className="w-full"></div>
    </div>
  );
}
