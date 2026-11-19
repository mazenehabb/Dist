import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PageMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    const cleanupListeners: Array<() => void> = [];
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]", scope.current);
      if (heroItems.length) {
        gsap.fromTo(heroItems,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.82,
            stagger: 0.095,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          },
        );
      }

      const heroMedia = gsap.utils.toArray<HTMLElement>("[data-hero-media-reveal]", scope.current);
      heroMedia.forEach((mediaItem) => {
        const image = mediaItem.querySelector("img");
        const timeline = gsap.timeline();
        timeline
          .fromTo(mediaItem, { clipPath: "inset(0 0 100% 0)", autoAlpha: 0 }, { clipPath: "inset(0 0 0% 0)", autoAlpha: 1, duration: 1.05, ease: "power4.inOut" })
          .fromTo(image, { scale: 1.14 }, { scale: 1, duration: 1.25, ease: "power3.out" }, 0.03);
      });

      const groups = gsap.utils.toArray<HTMLElement>("[data-reveal-group]", scope.current);
      groups.forEach((group) => {
        const targets = Array.from(group.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
        if (!targets.length) return;
        gsap.fromTo(targets,
          { autoAlpha: 0, y: 34, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.86,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility,filter",
            scrollTrigger: { trigger: group, start: "top 84%", once: true },
          },
        );
      });

      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", scope.current);
      items.filter((item) => !item.parentElement?.closest("[data-reveal-group]")).forEach((item) => {
        gsap.fromTo(item,
          { autoAlpha: 0, y: 40, filter: "blur(7px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.88,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility,filter",
            scrollTrigger: { trigger: item, start: "top 88%", once: true },
          },
        );
      });

      const imageReveals = gsap.utils.toArray<HTMLElement>("[data-image-reveal]", scope.current);
      imageReveals.forEach((image) => {
        const innerImage = image.querySelector("img");
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: image, start: "top 86%", once: true },
        });
        timeline.fromTo(image,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.05,
            ease: "power3.inOut",
            clearProps: "clipPath",
          },
        );
        if (innerImage) {
          timeline.fromTo(innerImage, { scale: 1.12 }, { scale: 1, duration: 1.15, ease: "power3.out" }, 0);
        }
      });

      const parallaxImages = gsap.utils.toArray<HTMLElement>("[data-parallax]", scope.current);
      parallaxImages.forEach((image) => {
        gsap.fromTo(image,
          { yPercent: -3 },
          {
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: image.parentElement ?? image,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.45,
            },
          },
        );
      });

      const stages = gsap.utils.toArray<HTMLElement>("[data-scroll-stage]", scope.current);
      stages.forEach((stage) => {
        const line = stage.querySelector<HTMLElement>(".approach-detail__line, .service-preview-list");
        if (!line) return;
        gsap.fromTo(line,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { trigger: stage, start: "top 78%", end: "top 33%", scrub: 0.55 },
          },
        );
      });

      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const tiltItems = gsap.utils.toArray<HTMLElement>("[data-tilt]", scope.current);
        tiltItems.forEach((item) => {
          const onMove = (event: PointerEvent) => {
            const bounds = item.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            gsap.to(item, { duration: 0.45, ease: "power3.out", overwrite: "auto", rotateX: -y * 4, rotateY: x * 4, transformPerspective: 900, x: x * 2, y: y * 2 });
          };
          const onLeave = () => gsap.to(item, { duration: 0.65, ease: "elastic.out(1, .55)", overwrite: "auto", rotateX: 0, rotateY: 0, x: 0, y: 0 });
          item.addEventListener("pointermove", onMove);
          item.addEventListener("pointerleave", onLeave);
          cleanupListeners.push(() => {
            item.removeEventListener("pointermove", onMove);
            item.removeEventListener("pointerleave", onLeave);
          });
        });

        const magneticItems = gsap.utils.toArray<HTMLElement>("[data-magnetic]", scope.current);
        magneticItems.forEach((item) => {
          const onMove = (event: PointerEvent) => {
            const bounds = item.getBoundingClientRect();
            gsap.to(item, { duration: 0.38, ease: "power3.out", overwrite: "auto", x: (event.clientX - bounds.left - bounds.width / 2) * .13, y: (event.clientY - bounds.top - bounds.height / 2) * .13 });
          };
          const onLeave = () => gsap.to(item, { duration: 0.55, ease: "elastic.out(1, .5)", overwrite: "auto", x: 0, y: 0 });
          item.addEventListener("pointermove", onMove);
          item.addEventListener("pointerleave", onLeave);
          cleanupListeners.push(() => {
            item.removeEventListener("pointermove", onMove);
            item.removeEventListener("pointerleave", onLeave);
          });
        });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    return () => {
      cleanupListeners.forEach((cleanup) => cleanup());
      media.revert();
    };
  }, { scope });

  return <div ref={scope} className="page-motion">{children}</div>;
}
