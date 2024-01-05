import Layout from "@/components/layout";
import { MenuToggle } from "@/components/MenuToggle";
import "@/styles/globals.css";
import { stagger, useAnimate } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
import Menus from "@/components/Menus";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  type AnimationKeyframe = [string, Record<string, any>, Record<string, any>];

  const useMenuAnimation = (isOpen: boolean) => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      const menuAnimations: AnimationKeyframe[] = isOpen
        ? [
            [
              "nav",
              { transform: "translateX(0%)" },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
            ],
            [
              "li",
              { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
              { delay: stagger(0.05), at: "-0.1" },
            ],
          ]
        : [
            [
              "li",
              { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
              { delay: stagger(0.05, { from: "last" }), at: "<" },
            ],
            ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
          ];

      animate([
        [
          "path.top",
          { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<" },
        ],
        ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
        [
          "path.bottom",
          { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<" },
        ],
        ...menuAnimations,
      ]);
    }, [isOpen, animate]);

    return scope;
  };

  const scope = useMenuAnimation(isOpen);

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const scrollToSection = (index: number) => {
    const ref = sectionRefs[index];

    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // const scrollToSection = (index: number) => {
  //   if (sectionRefs[index] && sectionRefs[index].current) {
  //     sectionRefs[index].current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // };


  return (
    <>
      <div ref={scope} className="menu-wrapper">
        <Menus scrollToSection={scrollToSection} />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div>
      <Layout>
        <div className="leftPainting"></div>
        <Component
          {...pageProps}
          sectionRefs={sectionRefs}
        />
        <div className="rightPainting"></div>
      </Layout>
    </>
  );
}
