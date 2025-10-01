import React, { useEffect, useState } from "react";
import SignatureEditor from "../components/SignatureEditor";

export default function Home() {
  const [globalSignature, setGlobalSignature] = useState("");
  // TODO: Fetch global signature from backend

  return (
    <div>
      <h1>FollowUpSignature</h1>
      <SignatureEditor
        value={globalSignature}
        onChange={setGlobalSignature}
        readOnly={true}
      />
      <p>
        Marketer's signature shown above. Users can opt-in to automatically append it to their own Gmail signature!
      </p>
    </div>
  );
}