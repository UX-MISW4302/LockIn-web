import React from "react";
import "./Details.css"; // Styles in Details.css

const profileData = {
    username: "Gato",
    level: 13,
    name: "Daniel Pedroza",
    email: "d.pedroza@uniandes.edo.co",
    phone: "+57 3183820947",
    profilePicture: "/profilePic.png", // Correct path for public folder image
  };
  

function Details() {
  return (
    <div className="profile-fullscreen">
      {/* Profile Header */}
      <div className="profile-header">
        <img src={profileData.profilePicture} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <span className="profile-username">{profileData.username}</span>
          <span className="profile-level">Nivel: {profileData.level}</span>
        </div>
      </div>

      {/* Profile Details */}
      <div className="profile-details">
        <div className="info-row">
          <span className="info-label">Nombre</span>
          <span className="info-value">{profileData.name}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Correo</span>
          <span className="info-value">{profileData.email}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Teléfono</span>
          <span className="info-value">{profileData.phone}</span>
        </div>
      </div>

      <button className="edit-button">Editar perfil</button>
    </div>
  );
}

export default Details;
