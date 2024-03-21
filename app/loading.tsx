"use client";

import { useState } from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader
        loading={loading}
        color="#fff"
        size={150}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loading;
