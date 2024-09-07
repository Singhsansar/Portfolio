import { useEffect, useRef, useState } from "react";

export let activeTabRef;
export let activeTabLineRef;

const InPageNavigation = ({
  routes,
  defaultHidden = [],
  defaultActiveIndex = 0,
  children,
}) => {
  const [inPageNavIndex, setInPageNavIndex] = useState(defaultActiveIndex);
  activeTabLineRef = useRef(null);
  activeTabRef = useRef(null);

  const changePageState = (btn, i) => {
    const { offsetWidth, offsetLeft } = btn;
    if (activeTabLineRef.current) {
      activeTabLineRef.current.style.width = offsetWidth + "px";
      activeTabLineRef.current.style.left = offsetLeft + "px";
    }
    setInPageNavIndex(i);
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (activeTabRef.current) {
      changePageState(activeTabRef.current, defaultActiveIndex);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [defaultActiveIndex]);

  useEffect(() => {
    if (width > 766 && activeTabRef.current) {
      changePageState(activeTabRef.current, defaultActiveIndex);
    }
  }, [width, defaultActiveIndex]);

  return (
    <>
      <div className="relative mb-9 bg-white border-b border-grey flex flex-nowrap overflow-x-auto">
        {routes.map((route, i) => {
          const isHidden = defaultHidden.includes(i);
          return (
            <button
              ref={i === defaultActiveIndex ? activeTabRef : null}
              key={i}
              className={
                "p-4 px-5 capitalize " +
                (inPageNavIndex === i ? "text-black" : "text-dark-grey ") +
                (isHidden ? "md:hidden" : "")
              }
              onClick={(e) => {
                changePageState(e.target, i);
              }}
            >
              {route}
            </button>
          );
        })}
        <hr
          ref={activeTabLineRef}
          className="absolute bottom-0 duration-300 border-black"
        />
      </div>

      {Array.isArray(children) && children.length > 0
        ? children[inPageNavIndex]
        : " "}
    </>
  );
};

export default InPageNavigation;
