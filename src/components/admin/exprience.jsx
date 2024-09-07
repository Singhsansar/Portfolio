import { useEffect, useState, useCallback } from "react";
import InPageNavigation from "./inpagenavigation";
import NoDataMessage from "./nodata";
import { useSearchParams } from "react-router-dom";
import AnimationWrapper from "../common/animationWrapper";

const Editexpriences = () => {
  const [expriences, setexpriences] = useState([]); // Initialize as an empty array
  const [addexpriences, setAddexpriences] = useState([]); // Initialize as an empty array
  const [query, setQuery] = useState("");
  let activeTab = useSearchParams()[0].get("tab");

  // Dummy function for now, can be updated later
  const getexpriences = useCallback(({ page, isAddexprience }) => {
    const mockData = {
      expriences: [
        { id: 1, name: "exprience 1" },
        { id: 2, name: "exprience 2" },
        { id: 3, name: "exprience 3" },
      ],
      addexpriences: [
        { id: 4, name: "Add exprience 1" },
        { id: 5, name: "Add exprience 2" },
      ],
    };

    if (isAddexprience) {
      setAddexpriences(mockData.addexpriences);
    } else {
      setexpriences(mockData.expriences);
    }
  }, []);

  useEffect(() => {
    if (expriences.length === 0 && addexpriences.length === 0) {
      getexpriences({ page: 1, isAddexprience: false });
      getexpriences({ page: 1, isAddexprience: true });
    }
  }, [getexpriences, expriences.length, addexpriences.length]); // Now watching exprience lengths to prevent re-rendering when not necessary

  useEffect(() => {
    if (query !== "") {
      const filteredexpriences = expriences.filter((exprience) =>
        exprience.name.toLowerCase().includes(query.toLowerCase())
      );
      const filteredAddexpriences = addexpriences.filter((exprience) =>
        exprience.name.toLowerCase().includes(query.toLowerCase())
      );
      setexpriences(filteredexpriences);
      setAddexpriences(filteredAddexpriences);
    } else {
      getexpriences({ page: 1, isAddexprience: false });
      getexpriences({ page: 1, isAddexprience: true });
    }
  }, [query, expriences, addexpriences, getexpriences]); // Added missing dependencies here

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
        Manage expriences
      </h1>
      <div className="relative max-md:mt-0 mb-2 ">
        <input
          type="search"
          className="w-full bg-grey p-4 pl-12 pr-6 rounded-md placeholder:text-dark-grey"
          placeholder="Search expriences"
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-dark-grey"></i>
      </div>

      <InPageNavigation
        routes={["expriences", "Add expriences"]}
        defaultActiveIndex={activeTab !== "addexprience" ? 0 : 1}
      >
        <>
          {expriences.length ? (
            expriences.map((exprience, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for exprience Card */}
                <div>exprience Card {exprience.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No expriences available" />
          )}
          {/* Placeholder for Load More button */}
        </>
        <>
          {addexpriences.length ? (
            addexpriences.map((exprience, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for Add exprience Card */}
                <div>Add exprience Card {exprience.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No Add expriences available" />
          )}
          {/* Placeholder for Load More button */}
        </>
      </InPageNavigation>
    </div>
  );
};

export default Editexpriences;
