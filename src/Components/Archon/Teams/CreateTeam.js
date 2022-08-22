import React, { useState } from "react";
import InputBox from "../../../Utils/Components/InputBox";
import { IoMdClose } from "react-icons/io";
import { IoImage } from "react-icons/io5";
import { BiFootball } from "react-icons/bi";
import { useHistory } from "react-router-dom";

function CreateTeam() {
  const [playerImage, setPlayerImage] = useState("");
  const [teamLogo, setTeamLogo] = useState("");
  const [teamBadge, setTeamBadge] = useState("");
  const history = useHistory();

  return (
    <div className="form-main-container">
      <h3 className="form-main-title">
        <BiFootball /> CREATE TEAM
      </h3>
      <div className="horizontal-padding-large"></div>
      <div className="horizontal-padding-large"></div>

      <p className="forms-title">TEAM INFORMATION</p>
      <div className="horizontal-padding-medium"></div>
      <div className="data-submission-form team-creation-form-grid">
        <span className="grid-components">
          <InputBox titleName="Team Name" type="text" />
        </span>
        <span className="grid-components">
          <InputBox titleName="Short Name" type="text" maxLength="3" />
        </span>
      </div>
      <div className="horizontal-padding-large"></div>
      <p className="forms-title">TEAM MEDIAS</p>
      <div className="horizontal-padding-medium"></div>
      <div className="file-uploading-section">
        <div className="file-uploading-section-container section-container-1">
          <input
            type="file"
            id="player-image-upload"
            hidden
            onChange={(e) => {
              if (e.target.files[0]) {
                setPlayerImage(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          <label
            htmlFor="player-image-upload"
            className="file-uploading-section-sub-container"
          >
            {playerImage ? (
              <img
                src={playerImage}
                className="form-uploaded-image"
                alt="player-img"
              />
            ) : (
              <span>
                <IoImage className="form-upload-icon" />
                <p className="forms-title text-inside-upload">Player Image</p>
              </span>
            )}
          </label>
        </div>
        <div className="file-uploading-section-container section-container-2">
          <input
            type="file"
            id="team-flag-upload"
            hidden
            onChange={(e) => {
              if (e.target.files[0]) {
                setTeamLogo(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          <label
            htmlFor="team-flag-upload"
            className="file-uploading-section-sub-container"
          >
            {teamLogo ? (
              <img
                src={teamLogo}
                className="form-uploaded-image"
                alt="player-img"
              />
            ) : (
              <span>
                <IoImage className="form-upload-icon" />
                <p className="forms-title text-inside-upload">Team Flag</p>
              </span>
            )}
          </label>
        </div>
        <div className="file-uploading-section-container section-container-3">
          <input
            type="file"
            id="team-badge-upload"
            hidden
            onChange={(e) => {
              if (e.target.files[0]) {
                setTeamBadge(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          <label
            htmlFor="team-badge-upload"
            className="file-uploading-section-sub-container"
          >
            {teamBadge ? (
              <img
                src={teamBadge}
                className="form-uploaded-image"
                alt="player-img"
              />
            ) : (
              <span>
                <IoImage className="form-upload-icon" />
                <p className="forms-title text-inside-upload">Team Badge</p>
              </span>
            )}
          </label>
        </div>
      </div>
      <div className="horizontal-padding-large"></div>
      <div className="submission-area">
        <button
          className="sub-button sub-cancel-button"
          onClick={() => history.goBack()}
        >
          <IoMdClose />
        </button>
        <button className="sub-button sub-continue-button">save info</button>
      </div>
    </div>
  );
}

export default CreateTeam;
