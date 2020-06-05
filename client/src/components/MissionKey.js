import React from "react";

const MissionKey = () => {
  return (
    <div>
      <p>
        <span
          className="mr-2 px-3 bg-success"
          style={{ borderRadius: "4px" }}
        />{" "}
        = Success
      </p>
      <p>
        <span className="mr-2 px-3 bg-danger" style={{ borderRadius: "4px" }} />{" "}
        = Failure
      </p>
    </div>
  );
};

export default MissionKey;
