import { Button } from "@/components/ui/button";
import React, { useState } from "react";


const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl text-amber-300 text-center font-medium">
        Hello world!
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at
        quod et, soluta corrupti dolore fugit beatae ipsa iste placeat,
        explicabo harum molestiae aliquid deserunt repudiandae blanditiis,
        accusamus minus quisquam? Quibusdam adipisci quod blanditiis repellat
        minima. Optio saepe perferendis vitae, beatae, sunt perspiciatis, ex
        iste praesentium iure hic tempora minus?
      </p>
      <Button onClick={() => setCount((prev) => prev + 1)} className="mt-4 text-center">
        {" "}
        Hello Count: {count}
      </Button>
    </div>
  );
};

export default Home;