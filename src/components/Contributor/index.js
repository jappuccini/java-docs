import React from "react";

export default function Contributor({ pullRequest, userId }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <img
        style={{ height: "50px" }}
        src={`https://avatars.githubusercontent.com/u/${userId}?s=50&v=4`}
      />
      <a
        style={{ margin: "1rem" }}
        href={`https://github.com/jappuccini/java-exercises/pull/${pullRequest}`}
      >
        #{pullRequest} Fixed wrong for-each loop solution
      </a>
    </div>
  );
}
