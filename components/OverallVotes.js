import { useState, useEffect } from "react";

import Image from "next/image";
import { thumbsUp, thumbsDown } from "@/utils/imageMap";

const OverallVotes = ({ votes }) => {
  const [overall, setOverall] = useState(null);

  useEffect(() => {
    if (votes.positive > votes.negative) {
      setOverall(true);
    } else {
      setOverall(false);
    }
  }, [votes]);

  return (
    <div className={`overall-votes ${overall ? "positive" : "negative"}`}>
      {overall ? (
        <Image src={thumbsUp} alt="overall thubmbs up" />
      ) : (
        <Image src={thumbsDown} alt="overall thubmbs up" />
      )}
    </div>
  );
};

export default OverallVotes;
