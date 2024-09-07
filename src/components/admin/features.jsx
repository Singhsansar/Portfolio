import { useEffect, useState, useCallback } from "react";
import InPageNavigation from "./inpagenavigation";
import NoDataMessage from "./nodata";
import { useSearchParams } from "react-router-dom";
import AnimationWrapper from "../common/animationWrapper";

const EditFeatures = () => {
  const [features, setFeatures] = useState([]); // Initialize as an empty array
  const [addFeatures, setAddFeatures] = useState([]); // Initialize as an empty array
  const [query, setQuery] = useState("");
  let activeTab = useSearchParams()[0].get("tab");

  // Dummy function for now, can be updated later
  const getFeatures = useCallback(({ page, isAddFeature }) => {
    const mockData = {
      features: [
        { id: 1, name: "Feature 1" },
        { id: 2, name: "Feature 2" },
        { id: 3, name: "Feature 3" },
      ],
      addFeatures: [
        { id: 4, name: "Add Feature 1" },
        { id: 5, name: "Add Feature 2" },
      ],
    };

    if (isAddFeature) {
      setAddFeatures(mockData.addFeatures);
    } else {
      setFeatures(mockData.features);
    }
  }, []);

  useEffect(() => {
    if (features.length === 0 && addFeatures.length === 0) {
      getFeatures({ page: 1, isAddFeature: false });
      getFeatures({ page: 1, isAddFeature: true });
    }
  }, [getFeatures, features.length, addFeatures.length]); // Now watching feature lengths to prevent re-rendering when not necessary

  useEffect(() => {
    if (query !== "") {
      const filteredFeatures = features.filter((feature) =>
        feature.name.toLowerCase().includes(query.toLowerCase())
      );
      const filteredAddFeatures = addFeatures.filter((feature) =>
        feature.name.toLowerCase().includes(query.toLowerCase())
      );
      setFeatures(filteredFeatures);
      setAddFeatures(filteredAddFeatures);
    } else {
      getFeatures({ page: 1, isAddFeature: false });
      getFeatures({ page: 1, isAddFeature: true });
    }
  }, [query, features, addFeatures, getFeatures]); // Added missing dependencies here

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
        Manage Features
      </h1>
      <div className="relative max-md:mt-0 mb-2 ">
        <input
          type="search"
          className="w-full bg-grey p-4 pl-12 pr-6 rounded-md placeholder:text-dark-grey"
          placeholder="Search Features"
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-dark-grey"></i>
      </div>

      <InPageNavigation
        routes={["Features", "Add Features"]}
        defaultActiveIndex={activeTab !== "addFeature" ? 0 : 1}
      >
        <>
          {features.length ? (
            features.map((feature, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for Feature Card */}
                <div>Feature Card {feature.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No Features available" />
          )}
          {/* Placeholder for Load More button */}
        </>
        <>
          {addFeatures.length ? (
            addFeatures.map((feature, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for Add Feature Card */}
                <div>Add Feature Card {feature.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No Add Features available" />
          )}
          {/* Placeholder for Load More button */}
        </>
      </InPageNavigation>
    </div>
  );
};

export default EditFeatures;
