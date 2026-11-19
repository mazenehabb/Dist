import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

/** A restrained, editorial route reveal that does not block navigation or focus. */
export function RouteTransition() {
  const curtain = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeline = gsap.timeline();
    timeline
      .set(curtain.current, { autoAlpha: 1, scaleY: 1, transformOrigin: "bottom center" })
      .to(curtain.current, { duration: 0.72, ease: "power4.inOut", scaleY: 0 })
      .set(curtain.current, { autoAlpha: 0 });

    return () => timeline.kill();
  }, { dependencies: [location.pathname] });

  return (
    <div aria-hidden="true" className="route-transition">
      <div className="route-transition__curtain" ref={curtain} />
    </div>
  );
}
