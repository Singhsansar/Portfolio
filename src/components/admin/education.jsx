import { useEffect, useState, useCallback } from "react";
import InPageNavigation from "./inpagenavigation";
import NoDataMessage from "./nodata";
import { useSearchParams } from "react-router-dom";
import AnimationWrapper from "../common/animationWrapper";

const Editeducations = () => {
  const [educations, seteducations] = useState([]); // Initialize as an empty array
  const [addeducations, setAddeducations] = useState([]); // Initialize as an empty array
  const [query, setQuery] = useState("");
  let activeTab = useSearchParams()[0].get("tab");

  // Dummy function for now, can be updated later
  const geteducations = useCallback(({ page, isAddeducation }) => {
    const mockData = {
      educations: [
        { id: 1, name: "education 1" },
        { id: 2, name: "education 2" },
        { id: 3, name: "education 3" },
      ],
      addeducations: [
        { id: 4, name: "Add education 1" },
        { id: 5, name: "Add education 2" },
      ],
    };

    if (isAddeducation) {
      setAddeducations(mockData.addeducations);
    } else {
      seteducations(mockData.educations);
    }
  }, []);

  useEffect(() => {
    if (educations.length === 0 && addeducations.length === 0) {
      geteducations({ page: 1, isAddeducation: false });
      geteducations({ page: 1, isAddeducation: true });
    }
  }, [geteducations, educations.length, addeducations.length]); // Now watching education lengths to prevent re-rendering when not necessary

  useEffect(() => {
    if (query !== "") {
      const filterededucations = educations.filter((education) =>
        education.name.toLowerCase().includes(query.toLowerCase())
      );
      const filteredAddeducations = addeducations.filter((education) =>
        education.name.toLowerCase().includes(query.toLowerCase())
      );
      seteducations(filterededucations);
      setAddeducations(filteredAddeducations);
    } else {
      geteducations({ page: 1, isAddeducation: false });
      geteducations({ page: 1, isAddeducation: true });
    }
  }, [query, educations, addeducations, geteducations]); // Added missing dependencies here

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
        Manage educations
      </h1>
      <div className="relative max-md:mt-0 mb-2 ">
        <input
          type="search"
          className="w-full bg-grey p-4 pl-12 pr-6 rounded-md placeholder:text-dark-grey"
          placeholder="Search educations"
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-dark-grey"></i>
      </div>

      <InPageNavigation
        routes={["educations", "Add educations"]}
        defaultActiveIndex={activeTab !== "addeducation" ? 0 : 1}
      >
        <>
          {educations.length ? (
            educations.map((education, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for education Card */}
                <div>education Card {education.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No educations available" />
          )}
          {/* Placeholder for Load More button */}
        </>
        <>
          {addeducations.length ? (
            addeducations.map((education, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for Add education Card */}
                <div>Add education Card {education.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No Add educations available" />
          )}
          {/* Placeholder for Load More button */}
        </>
      </InPageNavigation>
    </div>
  );
};

export default Editeducations;
