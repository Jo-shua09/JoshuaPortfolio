import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const cx = (...parts) => parts.filter(Boolean).join(" ");

export const LogoLoop = memo(
  ({
    logos,
    speed = 3000,
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = "Partner logos",
    className,
    style,
    slidesPerView = "auto",
  }) => {
    const cssVariables = {
      "--logoloop-gap": `${gap}px`,
      "--logoloop-logoHeight": `${logoHeight}px`,
      ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
    };

    const rootClasses = cx(
      "relative overflow-x-hidden group",
      "[--logoloop-gap:32px]",
      "[--logoloop-logoHeight:28px]",
      "[--logoloop-fadeColorAuto:#ffffff]",
      "dark:[--logoloop-fadeColorAuto:#0b0b0b]",
      scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
      className
    );

    const renderLogoItem = (item, key) => {
      const isNodeItem = "node" in item;

      const content = isNodeItem ? (
        <span
          className={cx(
            "inline-flex items-center",
            "motion-reduce:transition-none",
            scaleOnHover && "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"
          )}
          aria-hidden={!!item.href && !item.ariaLabel}
        >
          {item.node}
        </span>
      ) : (
        <img
          className={cx(
            "h-[var(--logoloop-logoHeight)] w-auto block object-contain",
            "[-webkit-user-drag:none] pointer-events-none",
            "[image-rendering:-webkit-optimize-contrast]",
            "motion-reduce:transition-none",
            scaleOnHover && "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"
          )}
          src={item.src}
          srcSet={item.srcSet}
          sizes={item.sizes}
          width={item.width}
          height={item.height}
          alt={item.alt ?? ""}
          title={item.title}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      );

      const itemAriaLabel = isNodeItem ? item.ariaLabel ?? item.title : item.alt ?? item.title;

      const inner = item.href ? (
        <a
          className={cx(
            "inline-flex items-center no-underline rounded",
            "transition-opacity duration-200 ease-linear",
            "hover:opacity-80",
            "focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"
          )}
          href={item.href}
          aria-label={itemAriaLabel || "logo link"}
          target="_blank"
          rel="noreferrer noopener"
        >
          {content}
        </a>
      ) : (
        content
      );

      return (
        <div
          className={cx(
            "flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]",
            scaleOnHover && "overflow-visible group/item"
          )}
          key={key}
        >
          {inner}
        </div>
      );
    };

    const containerStyle = {
      width: typeof width === "number" ? `${width}px` : width ?? "100%",
      ...cssVariables,
      ...style,
    };

    return (
      <div className={rootClasses} style={containerStyle} role="region" aria-label={ariaLabel}>
        {fadeOut && (
          <>
            <div
              aria-hidden
              className={cx(
                "pointer-events-none absolute inset-y-0 left-0 z-[1]",
                "w-[clamp(24px,8%,120px)]",
                "bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
              )}
            />
            <div
              aria-hidden
              className={cx(
                "pointer-events-none absolute inset-y-0 right-0 z-[1]",
                "w-[clamp(24px,8%,120px)]",
                "bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
              )}
            />
          </>
        )}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={gap}
          slidesPerView={slidesPerView}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: pauseOnHover,
            reverseDirection: direction === "right",
          }}
          speed={speed}
          allowTouchMove={false}
          className="select-none"
          style={{
            width: "100%",
            // Higher speed for smoother continuous movement
            transitionTimingFunction: "linear",
          }}
        >
          {logos.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              {renderLogoItem(item, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
);

LogoLoop.displayName = "LogoLoop";

export default LogoLoop;
