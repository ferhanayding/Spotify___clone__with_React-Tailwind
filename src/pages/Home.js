import Section from "components/Section";
import sound from "data/sound";
import React from "react";

const Home = () => {
  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/blablabla" items={sound} />
      <Section title="Shows to try" more="/blablabla" items={sound} />
      <Section title="habule played" more="/blablabla" items={sound} />
      <Section title="sakla played" more="/blablabla" items={sound} />
    </div>
  );
};

export default Home;
