import { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { positive, negative } from "@/redux/people";

const Vote = ({ category, lastUpdated, personId }) => {
  const [selected, setSelected] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const dispatch = useDispatch();

  moment().format();
  const ago = moment(lastUpdated).fromNow();

  const handleSelect = (select) => {
    setSelected(select);
  };

  const handleVote = () => {
    if (selected && !hasVoted) {
      console.log(selected);
      console.log("Do the vote");
      selected === "up"
        ? dispatch(positive(personId))
        : dispatch(negative(personId));
      setHasVoted(true);
      setSelected(null);
      console.log("has Voted >>", hasVoted);
    } else {
      setHasVoted(false);
    }
  };
  return (
    <div className="voting">
      <p>
        {ago} in {category}
      </p>
      <div className="vote">
        {!hasVoted ? (
          <>
            <button
              className={`up ${selected === "up" ? "selected" : ""}`}
              onClick={() => handleSelect("up")}
            >
              <img src="assets/img/thumbs-up.svg" />
            </button>
            <button
              className={`down ${selected === "down" ? "selected" : ""}`}
              onClick={() => handleSelect("down")}
            >
              <img src="assets/img/thumbs-down.svg" />
            </button>
          </>
        ) : (
          <></>
        )}

        <button className="vote-button" onClick={handleVote}>
          {hasVoted ? "Vote Again" : "Vote Now"}
        </button>
      </div>
    </div>
  );
};

export default Vote;
