import React, { Suspense } from "react";

import { useSharedContext } from "sharedContext/useSharedContext";

const RemoteSampleApp = React.lazy(() => import("remote1/RemoteSampleApp"));

export default function () {
  const { value } = useSharedContext();
  console.log("Shared Context Value 10 :", value);
  return (
    <>
      <h1>Host Application</h1>
      <p>Shared State: {value}</p>
      <Suspense fallback={<div>Loading MFE1...</div>}>
        <RemoteSampleApp />
      </Suspense>
    </>
  );
}
