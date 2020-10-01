import React from "react";
import Auth from "../../helpers/auth";

export default function Home({ profile, setEdit }) {
  const socialmedia = Object.values(profile.socialmedia);
  return (
    <div className="profile_content">
      {Auth.isLoggedIn() && <div className="mx-2 mb-3">
        <img src="/static/images/edit.svg" className="ptr" onClick={() => setEdit(true)} width="24px" alt="" />
      </div>}
     <h1>{profile.fullname}</h1>
      <h6 className="mt-1">{profile.occupation}</h6>
      <div className="mt-3 profile_info">
        <div className="text-muted">
            <img src="/static/images/phone-call.svg" width="18px" className="mr-2" alt=""/> {profile.phone}
        </div>
        <div className="mt-2 text-muted">
            <img src="/static/images/pin.svg" className="mr-2" width="18px" alt=""/> {profile.location}
        </div>
        <div className="text-muted mt-2">
        <img src="/static/images/envelope.svg" className="mr-2" width="18px" alt=""/> krhoax7@gmail.com
        </div>
      </div>
      <div className="mt-3">
        {socialmedia &&
          socialmedia.map((media, i) => {
            return (
              <a href={media.url} key={i} target="_blank">
                <img
                  className="mr-2 ptr"
                  src={media.icon}
                  width="24px"
                  alt=""
                />
              </a>
            );
          })}
      </div>
    </div>
  );
}
