import axios from "axios";

export const getUser = async (user) => {
  try {
    return await axios(`https://api.github.com/users/${user}`);
  } catch (err) {
    console.error(err);
  }
};

export const getFollowing = async (user) => {
  try {
    return await axios(`https://api.github.com/users/${user}/following`);
  } catch (err) {
    console.error(err);
  }
};
