import { useEffect, useState, useCallback } from "react";
import InPageNavigation from "./inpagenavigation";
import NoDataMessage from "./nodata";
import { useSearchParams } from "react-router-dom";
import AnimationWrapper from "../common/animationWrapper";

const Editpublications = () => {
  const [publications, setpublications] = useState([]); // Initialize as an empty array
  const [addpublications, setAddpublications] = useState([]); // Initialize as an empty array
  const [query, setQuery] = useState("");
  let activeTab = useSearchParams()[0].get("tab");

  // Dummy function for now, can be updated later
  const getpublications = useCallback(({ page, isAddpublication }) => {
    const mockData = {
      publications: [
        { id: 1, name: "publication 1" },
        { id: 2, name: "publication 2" },
        { id: 3, name: "publication 3" },
      ],
      addpublications: [
        { id: 4, name: "Add publication 1" },
        { id: 5, name: "Add publication 2" },
      ],
    };

    if (isAddpublication) {
      setAddpublications(mockData.addpublications);
    } else {
      setpublications(mockData.publications);
    }
  }, []);

  useEffect(() => {
    if (publications.length === 0 && addpublications.length === 0) {
      getpublications({ page: 1, isAddpublication: false });
      getpublications({ page: 1, isAddpublication: true });
    }
  }, [getpublications, publications.length, addpublications.length]); // Now watching publication lengths to prevent re-rendering when not necessary

  useEffect(() => {
    if (query !== "") {
      const filteredpublications = publications.filter((publication) =>
        publication.name.toLowerCase().includes(query.toLowerCase())
      );
      const filteredAddpublications = addpublications.filter((publication) =>
        publication.name.toLowerCase().includes(query.toLowerCase())
      );
      setpublications(filteredpublications);
      setAddpublications(filteredAddpublications);
    } else {
      getpublications({ page: 1, isAddpublication: false });
      getpublications({ page: 1, isAddpublication: true });
    }
  }, [query, publications, addpublications, getpublications]); // Added missing dependencies here

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
        Manage publications
      </h1>
      <div className="relative max-md:mt-0 mb-2 ">
        <input
          type="search"
          className="w-full bg-grey p-4 pl-12 pr-6 rounded-md placeholder:text-dark-grey"
          placeholder="Search publications"
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-dark-grey"></i>
      </div>

      <InPageNavigation
        routes={["publications", "Add publications"]}
        defaultActiveIndex={activeTab !== "addpublication" ? 0 : 1}
      >
        <>
          {publications.length ? (
            publications.map((publication, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for publication Card */}
                <div>publication Card {publication.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No publications available" />
          )}
          {/* Placeholder for Load More button */}
        </>
        <>
          {addpublications.length ? (
            addpublications.map((publication, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for Add publication Card */}
                <div>Add publication Card {publication.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No Add publications available" />
          )}
          {/* Placeholder for Load More button */}
        </>
      </InPageNavigation>
    </div>
  );
};

export default Editpublications;
