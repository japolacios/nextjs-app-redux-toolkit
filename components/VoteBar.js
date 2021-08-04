import { useState, useEffect } from "react";

const VoteBar = ({ votes }) => {
  const [totalVotes, setTotalVotes] = useState(votes.positive + votes.negative);

  const calculatePercentage = (votes, totalVotes) => {
    return ((votes / totalVotes) * 100).toFixed(1);
  };

  const [positiveVotes, setPositiveVotes] = useState(
    calculatePercentage(votes.positive, totalVotes)
  );
  const [negativeVotes, setNegativeVotes] = useState(
    calculatePercentage(votes.negative, totalVotes)
  );

  useEffect(() => {
    setTotalVotes(votes.positive + votes.negative);
    setPositiveVotes(calculatePercentage(votes.positive, totalVotes));
    setNegativeVotes(calculatePercentage(votes.negative, totalVotes));
  }, [votes]);

  return (
    <div className="vote-bar">
      <div
        className="section-bar positive"
        style={{ width: `${positiveVotes}%` }}
      >
        <img src="assets/img/thumbs-up.svg" />
        <p>{positiveVotes}%</p>
      </div>
      <div
        className="section-bar negative"
        style={{ width: `${negativeVotes}%` }}
      >
        <p>{negativeVotes}%</p>
        <img src="assets/img/thumbs-down.svg" />
      </div>
    </div>
  );
};

export default VoteBar;
