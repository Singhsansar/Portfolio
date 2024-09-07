import { useEffect, useState, useCallback } from "react";
import InPageNavigation from "./inpagenavigation";
import NoDataMessage from "./nodata";
import { useSearchParams } from "react-router-dom";
import AnimationWrapper from "../common/animationWrapper";

const Editachievements = () => {
  const [achievements, setachievements] = useState([]); // Initialize as an empty array
  const [addachievements, setAddachievements] = useState([]); // Initialize as an empty array
  const [query, setQuery] = useState("");
  let activeTab = useSearchParams()[0].get("tab");

  // Dummy function for now, can be updated later
  const getachievements = useCallback(({ page, isAddachievement }) => {
    const mockData = {
      achievements: [
        { id: 1, name: "achievement 1" },
        { id: 2, name: "achievement 2" },
        { id: 3, name: "achievement 3" },
      ],
      addachievements: [
        { id: 4, name: "Add achievement 1" },
        { id: 5, name: "Add achievement 2" },
      ],
    };

    if (isAddachievement) {
      setAddachievements(mockData.addachievements);
    } else {
      setachievements(mockData.achievements);
    }
  }, []);

  useEffect(() => {
    if (achievements.length === 0 && addachievements.length === 0) {
      getachievements({ page: 1, isAddachievement: false });
      getachievements({ page: 1, isAddachievement: true });
    }
  }, [getachievements, achievements.length, addachievements.length]); // Now watching achievement lengths to prevent re-rendering when not necessary

  useEffect(() => {
    if (query !== "") {
      const filteredachievements = achievements.filter((achievement) =>
        achievement.name.toLowerCase().includes(query.toLowerCase())
      );
      const filteredAddachievements = addachievements.filter((achievement) =>
        achievement.name.toLowerCase().includes(query.toLowerCase())
      );
      setachievements(filteredachievements);
      setAddachievements(filteredAddachievements);
    } else {
      getachievements({ page: 1, isAddachievement: false });
      getachievements({ page: 1, isAddachievement: true });
    }
  }, [query, achievements, addachievements, getachievements]); // Added missing dependencies here

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
        Manage achievements
      </h1>
      <div className="relative max-md:mt-0 mb-2 ">
        <input
          type="search"
          className="w-full bg-grey p-4 pl-12 pr-6 rounded-md placeholder:text-dark-grey"
          placeholder="Search achievements"
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-dark-grey"></i>
      </div>

      <InPageNavigation
        routes={["achievements", "Add achievements"]}
        defaultActiveIndex={activeTab !== "addachievement" ? 0 : 1}
      >
        <>
          {achievements.length ? (
            achievements.map((achievement, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for achievement Card */}
                <div>achievement Card {achievement.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No achievements available" />
          )}
          {/* Placeholder for Load More button */}
        </>
        <>
          {addachievements.length ? (
            addachievements.map((achievement, i) => (
              <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                {/* Placeholder for Add achievement Card */}
                <div>Add achievement Card {achievement.name}</div>
              </AnimationWrapper>
            ))
          ) : (
            <NoDataMessage message="No Add achievements available" />
          )}
          {/* Placeholder for Load More button */}
        </>
      </InPageNavigation>
    </div>
  );
};

export default Editachievements;
