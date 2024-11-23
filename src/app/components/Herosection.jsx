"use client";

import { SwitchTransition, CSSTransition } from "react-transition-group";

import { useState, useRef, useEffect } from "react";
import Category from "./Category";

export default function Herosection() {
  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(true);

  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = state ? helloRef : goodbyeRef;

  // useEffect(() => {
  //   setInterval(() => {
  //     setState((state) => !state)
  //   }, 3000);
  // }, [])
  
  return (
    <section>
      <div className="relative">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            nodeRef={nodeRef}
            addEndListener={(done) => {
              nodeRef.current.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <section ref={nodeRef} className="relative">
              {/* {state ? "Hello, world!" : "Goodbye, world!"} */}
              <div className="bg-[url('/images/hero.png')] bg-no-repeat h-[14vh] md:h-[20vh] lg:h-[391px] bg-center bg-cover "></div>

              {/* <img src="/images/hero.png" alt="" className="object-cover h-[391px]" /> */}

              <section className=" absolute bottom-0 right-0 w-full h-5 lg:h-12 flex justify-center gap-3">
                <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-300 hover:bg-gray-100 cursor-pointer"></div>
                <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-300 hover:bg-gray-100 cursor-pointer"></div>
                <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-primary"></div>
                <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-300 hover:bg-gray-100 cursor-pointer"></div>
                <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-300 hover:bg-gray-100 cursor-pointer"></div>
              </section>
            </section>
          </CSSTransition>
        </SwitchTransition>

        <div className="absolute w-full h-full top-0 right-0">
          <section className="max-w-7xl hidden xl:flex mx-auto  justify-start flex-wrap">
            <Category />
          </section>
        </div>
      </div>
    </section>
  );
}
