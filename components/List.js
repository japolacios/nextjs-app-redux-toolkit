import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { data } from "@/assets/data";
import { setInitialPeople } from "@/redux/people";
import PersonCard from "./PersonCard";

const List = () => {
  const dispatch = useDispatch();
  const { people } = useSelector((state) => state.peopleData);

  useEffect(() => {
    const localPeople = JSON.parse(localStorage.getItem("people"));
    if (!localPeople || !localPeople.length) {
      dispatch(setInitialPeople(data));
      localStorage.setItem("people", JSON.stringify(people));
    } else {
      dispatch(setInitialPeople(localPeople));
    }
  }, []);

  return (
    <>
      <div className="list-header">
        <h1>Previous Rulings</h1>
      </div>
      {people.length ? (
        <div className="list box">
          {people.map((person, index) => {
            return <PersonCard data={person} personId={index} />;
          })}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default List;
