import { use, useEffect } from "react"

function SimpleEffect() {
useEffect(() => {
    console.log("useEffect has run");
  });

  return (
    <div>
      <h1>Simple Effect</h1>
    </div>
  );
}

export default SimpleEffect;
