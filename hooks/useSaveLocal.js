import { useEffect } from "react";
import { useSelector } from "react-redux";

const useSaveLocal = () => {
  const { people } = useSelector((state) => state.peopleData);
  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);
};
export default useSaveLocal;
