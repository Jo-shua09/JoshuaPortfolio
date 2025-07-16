const StarBorder = ({ as: Component = "button", className = "", color = "white", speed = "6s", thickness = 1, children, ...rest }) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-2xl ${className}`}
      style={{
        padding: `${thickness}px`,
        background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5))`,
        ...rest.style,
      }}
      {...rest}
    >
      {/* Glow effect that follows the border */}
      <div
        className="absolute inset-0 border border-transparent rounded-2xl"
        style={{
          boxShadow: `0 0 0 ${thickness}px ${color}20`,
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: "exclude",
          padding: `${thickness}px`,
        }}
      ></div>

      {/* Animated star trails */}
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-0 right-[-250%] rounded-2xl animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-0 left-[-250%] rounded-2xl animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          animationDuration: speed,
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 flex items-center px-6 py-4 text-[1.7rem] font-medium text-center text-white bg-none gap-x-5 rounded-xl">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
