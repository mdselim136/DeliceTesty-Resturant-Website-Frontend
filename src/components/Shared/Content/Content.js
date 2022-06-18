import { useEffect, useState } from "react";

const Content = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("/allfood.json")
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { food };
};

export default Content;
