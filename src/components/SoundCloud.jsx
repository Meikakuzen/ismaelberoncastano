import React from 'react'

const SoundCloud = () => {
  return (
    <div>
         <iframe width="100%" height="300" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1758194328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div style={{fontSize: 10, color: "#cccccc",lineBreak: "anywhere",wordBreak: "normal", overflow: "hidden",whiteSpace: "nowrap",textOverflow: "ellipsis", fontFamily: 'Playfair Display',fontWeight: 100}}><a href="https://soundcloud.com/ismael-beron-miguel-castano" title="Meikakuzen" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Meikakuzen</a> · <a href="https://soundcloud.com/ismael-beron-miguel-castano/sets/fragments" title="Fragments" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Fragments</a></div>
      
    </div>
  )
}

export default SoundCloud