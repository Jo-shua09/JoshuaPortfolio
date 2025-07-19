const StarBorder = ({ as: Component = "button", className = "", color = "white", speed = "6s", thickness = 1, children, ...rest }) => {
  return (
    <Component
      className={`relative inline-block rounded-2xl ${className}`}
      style={{
        padding: `${thickness}px`,
        backgroundColor: "transparent",
        ...rest.style,
      }}
      {...rest}
    >
      {/* Glowing border using inset box-shadow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: `0 0 8px ${color}80`,
          border: `${thickness}px solid ${color}40`,
          zIndex: 1,
        }}
      ></div>

      {/* Animated star trail (bottom) */}
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-0 right-[-250%] rounded-2xl animate-star-movement-bottom pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          animationDuration: speed,
          zIndex: 0,
        }}
      ></div>

      {/* Animated star trail (top) */}
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-0 left-[-250%] rounded-2xl animate-star-movement-top pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          animationDuration: speed,
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center px-6 py-4 text-[1.7rem] font-medium text-white gap-x-5 rounded-xl bg-transparent">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
