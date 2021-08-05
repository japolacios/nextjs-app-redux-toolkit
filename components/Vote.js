import { useState } from "react";
import Image from "next/image";
import moment from "moment";
import { useDispatch } from "react-redux";
import { positive, negative } from "@/redux/people";

import { thumbsUp, thumbsDown } from "@/utils/imageMap";

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
      selected === "up"
        ? dispatch(positive(personId))
        : dispatch(negative(personId));
      setHasVoted(true);
      setSelected(null);
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
              aria-label="Select positive vote"
              className={`up ${selected === "up" ? "selected" : ""}`}
              onClick={() => handleSelect("up")}
            >
              <Image src={thumbsUp} alt="thubmbs up" />
            </button>
            <button
              aria-label="Select negative vote"
              className={`down ${selected === "down" ? "selected" : ""}`}
              onClick={() => handleSelect("down")}
            >
              <Image src={thumbsDown} alt="thubmbs down" />
            </button>
          </>
        ) : (
          <></>
        )}

        <button
          aria-label="Submit vote"
          className={`vote-button ${selected ? "" : "disabled"}`}
          onClick={handleVote}
        >
          {hasVoted ? "Vote Again" : "Vote Now"}
        </button>
      </div>
    </div>
  );
};

export default Vote;
