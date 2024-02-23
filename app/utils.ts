import React from "react";

export const cachedFn = React.cache(async () => {
  console.log("=================INSIDE CACHED FUNCTION=================");
  return "CACHED?";
});
