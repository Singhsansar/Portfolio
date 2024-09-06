import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/Data";

const Features = () => {
  return (
    <section
      id="features"
      className="w-auto py-10 border-b-[1px] border-b-black mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        {featuresData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Features;
