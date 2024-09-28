// Assuming you will create or import this component for the list
import ConnectionLost from "./ConnectionLost";
// Assuming you will create or import this component for the map
import List from "./List";
import Map from "./Map";
import React, { useState, useEffect } from "react";
// Assuming this component handles connection lost UI
import { Button } from "shadcn-ui";

// Using shadcn UI's Button component

const LandingPage: React.FC = () => {
  const [connectionLost, setConnectionLost] = useState(false);

  // Mocking the service logic as useEffect
  useEffect(() => {
    const connectionLostSubscription = mapDataService.subscribe(
      (status: boolean) => {
        setConnectionLost(status);
      }
    );

    // Clean up the subscription
    return () => {
      connectionLostSubscription.unsubscribe();
    };
  }, []);

  const addPropertyDialog = () => {
    // Placeholder for your actual logic
    console.log("Add Property Dialog");
  };

  const deletePropertyDialog = () => {
    // Placeholder for your actual logic
    console.log("Delete Property Dialog");
  };

  return (
    <div className="container relative w-full h-[calc(100vh-77px)] overflow-hidden">
      {/* Connection Lost Section */}
      {connectionLost && (
        <div className="flex items-center justify-center">
          <ConnectionLost />
        </div>
      )}

      {/* Main Content Section */}
      <section
        className={`${
          connectionLost ? "opacity-40" : ""
        } flex flex-col mt-5 h-full`}
      >
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
          {/* Map Section */}
          <div className="flex flex-col w-2/3 max-md:w-full">
            <form className="flex flex-col p-5 min-h-[600px]">
              <Map />
            </form>
          </div>

          {/* List Section */}
          <div className="flex flex-col w-1/3 ml-5 max-md:w-full">
            <form className="flex flex-col p-5 min-h-[599px]">
              <List />
            </form>

            {/* Add Property Button */}
            <div className="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow dark:bg-gray-800">
              <Button onClick={addPropertyDialog} className="w-full text-lg">
                Add Property
              </Button>
            </div>

            {/* Delete Property Button */}
            <div className="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow dark:bg-gray-800">
              <Button onClick={deletePropertyDialog} className="w-full text-lg">
                Delete Property
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
