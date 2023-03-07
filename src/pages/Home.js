import axios from "axios";
import React, { useEffect, useState } from "react";
import Results from "../components/Results";
import Search from "../components/Search";

const Home = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState({});
  const [userFollowingData, setUserFollowingData] = useState({});
  const [show, setShow] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios(`https://api.github.com/users/${user}`);
    const { data: followingData } = await axios(
      `https://api.github.com/users/${user}/following`
    );

    if (data) {
      setUserData(data);
      setUserFollowingData(followingData);
      setUser("");
      setShow(true);
    }
    console.log(userData);
  };

  return (
    <div className="text-center text-blue-500">
      <Search submitHandler={submitHandler} user={user} setUser={setUser} />
      {show && (
        <Results data={userData} userFollowingData={userFollowingData} />
      )}
    </div>
  );
};

export default Home;
