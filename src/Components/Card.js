import React from "react";

import artworkData from "../artworkData";
import Star from "./Star";

export default function Card() {

  const [artwork, setArtwork] = React.useState(artworkData);

  function toggle(id) {
    setArtwork(prevArtwork => {
      return prevArtwork.map((artwork) => {
        return artwork.id === id ? {...artwork, on : !artwork.on} : artwork
      })
    })
  }

  const artworkElements = artwork.map((artwork) => (
    <section className="card" key={artwork.id}>
      <div className="card-image">
        <img src={artwork.image} alt="pic"  />
      </div>
      <div className="card_info">
        <div className="card_info-header">
          <Star 
            key={artwork.id} 
            id={artwork.id}
            on={artwork.on} 
            toggle={() => toggle(artwork.id)}
          />
          <div className="card_info-name">
            <h2>{artwork.firstName}</h2>
            {artwork.lastName && <h2>{artwork.lastName}</h2>}
          </div>

        </div>
        {artwork.genre && <p className="card_info-contact">{artwork.genre}</p>}
        {artwork.genreTitle && <p className="card_info-contact">{artwork.genreTitle}</p>}
        {artwork.detail && <p className="card_info-contact">{artwork.detail}</p>}
      </div>
    </section>
  ))

  return (
    <main>
      {artworkElements}
    </main>
  )
}

