// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { IoIosPeople } from "react-icons/io";
// import { getFollowing } from "../services/api";

const Results = ({ data, userFollowingData }) => {
  const {
    name,
    login,
    avatar_url,
    bio,
    company,
    followers,
    following,
    public_repos,
    html_url,
  } = data;
  return (
    <div>
      {/* own data */}
      <div className="user-card bg-slate-400 flex justify-center w-96 m-auto  rounded-md p-3 text-black shadow-lg shadow-cyan-500/50">
        <div className="info flex justify-center flex-col items-center p-2">
          <img
            width="100px"
            src={avatar_url}
            alt={name}
            className="rounded-full"
          />
          <h2>{name}</h2>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-900"
          >
            {login}
          </a>

          <p>{bio}</p>
          {company && <h6>{company}</h6>}
          <div className="follow flex items-center gap-2">
            <IoIosPeople />
            <h5>
              {followers} Followers - {following} Following{" "}
            </h5>
          </div>
          <h4>{public_repos} Repos</h4>
        </div>
      </div>
      {/* followings data */}
      <div className="following-cards flex flex-wrap my-6 gap-2 border-t-2 border-slate-900 py-2 ">
        {
          // userFollowingData.length &&
          userFollowingData?.map((data, index) => {
            return (
              <div
                key={index}
                className="user-card bg-slate-400 flex justify-center w-96 m-auto  rounded-md p-3 text-black shadow-lg shadow-cyan-500/50"
              >
                <div className="info flex justify-center flex-col items-center p-2">
                  <img
                    width="100px"
                    src={data?.avatar_url}
                    alt={data?.name}
                    className="rounded-full"
                  />
                  <h2>{data?.name}</h2>
                  <a
                    href={data?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-900"
                  >
                    {data?.login}
                  </a>

                  <p>{data?.bio}</p>
                  {data?.company && <h6>{data?.company}</h6>}
                  <div className="follow flex items-center gap-2">
                    <IoIosPeople />
                    <h5>
                      {data?.followers} Followers - {data?.following} Following{" "}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Results;
