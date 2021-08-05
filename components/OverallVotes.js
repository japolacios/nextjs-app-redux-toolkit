import { useState, useEffect } from "react";

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
        <img src="assets/img/thumbs-up.svg" alt="overall thubmbs up" />
      ) : (
        <img src="assets/img/thumbs-down.svg" alt="overall thubmbs up" />
      )}
    </div>
  );
};

export default OverallVotes;
