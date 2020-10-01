import React, { useState } from "react";
import { post } from "../../api/api/profile/index";
import { clone } from "../../helpers/index";
import WindowEvent from "../Commons/Hooks/WindowEvent";

export default function Form({ profileDetails, details, onSave, onClose }) {
  const [profile, setProfile] = useState(profileDetails);
  const [selectedField, setSelectedField] = useState(null);
  const [skills, setSkills] = useState((details || {}).skills || []);
  const [skillText, setSkillText] = useState("");
  const [_filename, setFilename] = useState(null);
  const [mediaObj, setMediaObj] = useState(null);
  const socialmedia = Object.values(profile.socialmedia);
  WindowEvent("mouseup", () => setSelectedField(null));
  return (
    <div className="profile_content">
      <div className="d-flex mx-2">
        <img src="/static/images/floppy-disk.svg" onClick={async () => {
          const res = await post(profile);
          onSave(res.data);
        }} width="24px" className="ptr mr-3" alt=""/>
        <img src="/static/images/cancel.svg" onClick={() => onClose()} width="24px" className="ptr" alt=""/>
      </div>
      <h1>
        <input
          className={"form-control " + (selectedField === 0 ? "shadow" : "")}
          onClick={() => setSelectedField(0)}
          type="text"
          placeholder="Full Name"
          value={profile.fullname}
          onChange={(e) => {
            setProfile({ ...profile, fullname: e.target.value });
          }}
        />
      </h1>
      <input
        className={"form-control " + (selectedField === 1 ? "shadow" : "")}
        onClick={() => setSelectedField(1)}
        type="text"
        placeholder="Occupation"
        value={profile.occupation}
        onChange={(e) => {
          setProfile({ ...profile, occupation: e.target.value });
        }}
      />{" "}
      <input
        className={"form-control " + (selectedField === 2 ? "shadow" : "")}
        onClick={() => setSelectedField(2)}
        type="text"
        placeholder="Nick Name"
        value={profile.nickname}
        onChange={(e) => {
          setProfile({ ...profile, nickname: e.target.value });
        }}
      />{" "}
      <input
        className={"form-control mt-2 " + (selectedField === 3 ? "shadow" : "")}
        onClick={() => setSelectedField(3)}
        type="text"
        placeholder="Alias"
        value={profile.alias}
        onChange={(e) => {
          setProfile({ ...profile, alias: e.target.value });
        }}
      />
      <input
        type="text"
        disabled={true}
        className={"form-control mt-2 " + (selectedField === 4 ? "shadow" : "")}
        onClick={() => setSelectedField(4)}
        placeholder="Email"
        readOnly
        value="krhoax7@gmail.com"
      />
      <input
        type="text"
        className={"form-control mt-2 " + (selectedField === 5 ? "shadow" : "")}
        onClick={() => setSelectedField(5)}
        placeholder="Phone"
        value={profile.phone}
        onChange={e => {
          e.preventDefault()
          setProfile({ ...profile, phone: e.target.value })
        }}
      />
      <input
        type="text"
        className={"form-control mt-2 " + (selectedField === 6 ? "shadow" : "")}
        onClick={() => setSelectedField(6)}
        placeholder="Location"
        value={profile.location}
        onChange={e => {
          setProfile({ ...profile, location: e.target.value })
        }}
      />
      <textarea
        type="text"
        className={"form-control mt-2 " + (selectedField === 7 ? "shadow" : "")}
        onClick={() => setSelectedField(7)}
        placeholder="About me"
        value={profile.about}
        onChange={e => {
          setProfile({ ...profile, about: e.target.value })
        }}
      />
      <div className={"skills_block mt-2 " + (selectedField === 8 ? "shadow" : "")}>
        <ul>
          {skills.map((skill, i) => {
            return (
              <li key={"skills_" + i}>
                {skill} <button onClick={() => {
                    const result = clone(skills);
                    result.splice(i, 1);
                    setSkills(result);
                }}>+</button>
              </li>
            );
          })}
          <li className="skill_input">
            <input
              onClick={() => setSelectedField(8)}
              type="text"
              value={skillText}
              placeholder="Skills"
              onKeyDown={e => {
                  if (e.key === "Enter" && e.target.value) {
                      if (skills.find(skill => skill.toLowerCase() === e.target.value.toLowerCase())) return;
                      setSkillText("");
                      const result = clone(skills);
                      result.push(e.target.value);
                      setSkills(result);
                  }
              }}
              onChange={e => setSkillText(e.target.value)}
            />
          </li>
        </ul>
      </div>
      {socialmedia.map((media, i) => {
        return (
          <div className="d-flex mt-2 profile_content" key={"media_" + i}>
            {" "}
            <img width="24px" src={media.icon} className="mr-2" alt="" />
            <input
              type="text"
              key={"social_media_" + i}
              className={
                "form-control mt-2 " + (selectedField === i + 9 ? "shadow" : "")
              }
              onClick={() => {
                setSelectedField(i + 9);
                setMediaObj(media);
              }}
              value={media.url}
              onChange={e => {
                setMediaObj({ ...mediaObj, url: e.target.value });
                media.url = e.target.value;
              }}
            />
          </div>
        );
      })}
      <div>
        <img
          width="24px"
          src="/static/images/plus.svg"
          className="mr-2 ptr mt-3"
          alt=""
        />
      </div>
      <input
        type="file"
        name="file"
        encType="multipart/form-data"
        name="file"
        id="file"
        className="inputfile"
        accept="image/*, .pdf"
        onChange={(e) => {
          setFilename(e.target.files[0].name);
        }}
      />
      <label htmlFor="file" className="ptr mt-3 mr-3 upload_btn btn-sm">
        Upload CV
      </label>{" "}
      {_filename}
    </div>
  );
}
