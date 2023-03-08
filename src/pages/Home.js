import axios from "axios";
import React, { useEffect, useState } from "react";
import Results from "../components/Results";
import Search from "../components/Search";

const Home = () => {
  const [user, setUser] = useState(""); // for searching username
  const [userData, setUserData] = useState({}); // keeping user's data
  const [userFollowingData, setUserFollowingData] = useState({}); // keeping user's following data
  const [newUrl, setNewUrl] = useState([]); // keeping user's followings' urls
  const [newUrlFetch, setNewUrlFetch] = useState([]); // fetching user's followings' urls

  const [show, setShow] = useState(false); // show or hide the results

  const submitHandler = async (e) => {
    setNewUrlFetch([]);
    e.preventDefault();
    newUrl.length && setNewUrl([]);
    const { data } = await axios(`https://api.github.com/users/${user}`);
    const { data: followingData } = await axios(
      `https://api.github.com/users/${user}/following`
    );
    await axios(`https://api.github.com/users/${user}/following`).then(
      (responses) => {
        return responses.data.map((response) => {
          return setNewUrl((oldUrl) => [response.url, ...oldUrl]);
        });
      }
    );

    if (data) {
      setUserData(data);
      setUserFollowingData(followingData);
      setUser("");
      setShow(true);
    }
  };

  const fetchData = async () => {
    newUrl?.map(
      async (url) =>
        await axios(url).then((urlResponse) => {
          console.log(urlResponse.data);
          return setNewUrlFetch((oldRes) => [...oldRes, urlResponse]);
        })
    );
  };
  useEffect(() => {
    fetchData();
    console.log(newUrlFetch);
  }, [userData]);

  return (
    <div className="text-center text-blue-500">
      <Search submitHandler={submitHandler} user={user} setUser={setUser} />
      {show && (
        <Results
          data={userData}
          userFollowingData={userFollowingData}
          newUrlFetch={newUrlFetch}
        />
      )}
    </div>
  );
};

export default Home;
