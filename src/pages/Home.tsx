import React from "react";
// import { SearchFilters } from '../types';
import FeaturedDestinations from "../components/layout/FeaturedDestinations";
import PopularActivities from "../components/layout/PopularActivities";
import WhyChooseUs from "../components/layout/WhyChooseUs";

const Home: React.FC = () => {

  return (
    <main>
      {/* <Hero onSearch={handleSearch} /> */}
      <FeaturedDestinations />
      <PopularActivities />
      <WhyChooseUs />
    </main>
  );
};

export default Home;
