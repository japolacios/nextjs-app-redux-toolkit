import Vote from "./Vote";
import VoteBar from "./VoteBar";
import OverallVotes from "./OverallVotes";

const PersonCard = ({ data, personId }) => {
  const { name, description, category, picture, lastUpdated, votes } = data;

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(assets/img/people/${picture})` }}
    >
      <div className="info-wrapper">
        <div className="info">
          <div className="global-score">
            <OverallVotes votes={votes} />
          </div>
          <div className="text-wrapper">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <Vote
          category={category}
          lastUpdated={lastUpdated}
          personId={personId}
        />
      </div>
      <VoteBar votes={votes} />
      <div className="layer"></div>
    </div>
  );
};

export default PersonCard;
