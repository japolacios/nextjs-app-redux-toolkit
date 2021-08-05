import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { data } from "@/assets/data";
import { setInitialPeople } from "@/redux/people";
import PersonCard from "./PersonCard";
import useWidth from "@/hooks/useWidth";
import useSaveLocal from "@/hooks/useSaveLocal";
import SelectLayout from "./SelectLayout";

const List = () => {
  const dispatch = useDispatch();
  const { people } = useSelector((state) => state.peopleData);
  const isMobile = useWidth();
  const [isGrid, setIsGrid] = useState(false);

  const handleGridChange = (payload) => {
    setIsGrid(payload);
  };

  useEffect(() => {
    const localPeople = JSON.parse(localStorage.getItem("people"));
    if (!localPeople || !localPeople.length) {
      dispatch(setInitialPeople(data));
    } else {
      dispatch(setInitialPeople(localPeople));
    }
  }, []);
  useSaveLocal();
  return (
    <>
      <div className="list-header">
        <h1>Previous Rulings</h1>
        {!isMobile && <SelectLayout gridChange={handleGridChange} />}
      </div>
      {people.length ? (
        <div className={`list ${isMobile || isGrid ? "box" : ""}`}>
          {people.map((person, index) => {
            return (
              <PersonCard
                key={`key-${index}`}
                data={person}
                personId={index}
                isGrid={isMobile || isGrid}
              />
            );
          })}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default List;
