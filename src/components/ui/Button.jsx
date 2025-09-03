// Button.tsx
const Button = ({ href = "#", onClick, children, target, icon, title, aria, className, download }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <a
      onClick={handleClick}
      href={href}
      title={title}
      target={target || "_blank"}
      aria-label={aria}
      download={download} // <-- enables downloading
      className={`relative flex rounded-2xl hover:scale-95 text-center font-bold text-2xl text-nowrap items-center tracking-widest px-8 py-5 border border-neutral-800 shadow-sm text-white bg-transparent overflow-hidden z-10 group ${className}`}
    >
      <span className="absolute inset-0 bg-neutral-500 shadow-inner rounded-full scale-[2] -translate-y-[-1000%] group-hover:-translate-y-[50%] z-0 transition-all duration-500 ease-in-out" />
      {icon && <span className="z-10 mr-5 text-4xl">{icon}</span>}
      <span className="relative z-10 font-bold text-white uppercase">{children}</span>
    </a>
  );
};

export default Button;

export const ButtonTwo = ({ onClick, children, download, icon, title, aria, className, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      title={title}
      aria-label={aria}
      download={download} // <-- enables downloading
      className={` relative flex rounded-2xl hover:scale-95 text-center font-bold text-2xl text-nowrap items-center tracking-widest px-8 py-5 border border-neutral-800 shadow-sm text-white bg-transparent overflow-hidden z-10 group ${className} `}
    >
      <span className="absolute inset-0 bg-neutral-500  shadow-inner rounded-full scale-[2] -translate-y-[-1000%] group-hover:-translate-y-[50%] z-0 transition-all duration-500 ease-in-out" />
      <span className="z-10 mr-5 text-4xl">{icon}</span>
      <span className="relative z-10 font-bold text-white uppercase">{children}</span>
    </button>
  );
};
