import { useEffect, useState, useCallback } from "react";
import InPageNavigation from "./inpagenavigation";
import NoDataMessage from "./nodata";
import { useSearchParams } from "react-router-dom";
import AnimationWrapper from "../common/animationWrapper";

const Edithobbys = () => {
  const [hobbys, sethobbys] = useState([]); // Initialize as an empty array
  const [addhobbys, setAddhobbys] = useState([]); // Initialize as an empty array
  const [query, setQuery] = useState("");
  let activeTab = useSearchParams()[0].get("tab");

  // Dummy function for now, can be updated later
  const gethobbys = useCallback(({ page, isAddhobby }) => {
    const mockData = {
      hobbys: [
        { id: 1, name: "hobby 1" },
        { id: 2, name: "hobby 2" },
        { id: 3, name: "hobby 3" },
      ],
      addhobbys: [
        { id: 4, name: "Add hobby 1" },
        { id: 5, name: "Add hobby 2" },
      ],
    };

    if (isAddhobby) {
      setAddhobbys(mockData.addhobbys);
    } else {
      sethobbys(mockData.hobbys);
    }
  }, []);

  useEffect(() => {
    if (hobbys.length === 0 && addhobbys.length === 0) {
      gethobbys({ page: 1, isAddhobby: false });
      gethobbys({ page: 1, isAddhobby: true });
    }
  }, [gethobbys, hobbys.length, addhobbys.length]); // Now watching hobby lengths to prevent re-rendering when not necessary

  useEffect(() => {
    if (query !== "") {
      const filteredhobbys = hobbys.filter((hobby) =>
        hobby.name.toLowerCase().includes(query.toLowerCase())
      );
      const filteredAddhobbys = addhobbys.filter((hobby) =>
        hobby.name.toLowerCase().includes(query.toLowerCase())
      );
      sethobbys(filteredhobbys);
      setAddhobbys(filteredAddhobbys);
    } else {
      gethobbys({ page: 1, isAddhobby: false });
      gethobbys({ page: 1, isAddhobby: true });
    }
  }, [query, hobbys, addhobbys, gethobbys]); // Added missing dependencies here

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
    }
  };

  const handleChange = (e) => {
    if (!e.target.value) {
      setQuery("");
    }
  };

  return (
    <div className="md:w-[80%] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] h-full lg:px-10 lg:py-10 max-md:py-2 sm:w-full md:ml-[10vw]  items-center">
      <h1 className="max-md:hidden text-2xl lg:my-4 text-white ">
        Manage hobbys
      </h1>
      <div className="relative max-md:mt-0 mb-2 ">
        <input
          type="search"
          className="w-full bg-grey p-4 pl-12 pr-6 rounded-md placeholder:text-dark-grey"
          placeholder="Search hobbys"
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-dark-grey"></i>
      </div>

      <InPageNavigation
        routes={["hobbys", "Add hobbys"]}
        defaultActiveIndex={activeTab !== "addhobby" ? 0 : 1}
      >
        <>
          {hobbys.length ? (
            hobbys.map((hobby, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for hobby Card */}
                <div>hobby Card {hobby.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No hobbys available" />
          )}
          {/* Placeholder for Load More button */}
        </>
        <>
          {addhobbys.length ? (
            addhobbys.map((hobby, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for Add hobby Card */}
                <div>Add hobby Card {hobby.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No Add hobbys available" />
          )}
          {/* Placeholder for Load More button */}
        </>
      </InPageNavigation>
    </div>
  );
};

export default Edithobbys;
