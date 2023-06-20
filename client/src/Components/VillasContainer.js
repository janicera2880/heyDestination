import React from "react";
import VillasCard from "./VillasCard";
import InquireForm from "./InquireForm";


//Renders a container component for displaying villas information and attach a form to it.
function VillasContainer() {
  return (
    <div>
      <VillasCard />
      <InquireForm />
    </div>
  );
}

export default VillasContainer;
