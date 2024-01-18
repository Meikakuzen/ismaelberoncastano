import React from 'react'

const SoundCloud = () => {
  return (
    <div className="mt-10 mb-6 w-70 h-70 lg:w-60">
         <iframe width="100%" height="400" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1758194328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div style={{fontSize: 10, color: "#cccccc",wordBreak: "normal", overflow: "hidden",whiteSpace: "nowrap",textOverflow: "ellipsis", fontFamily: 'Playfair Display',fontWeight: 100}}><a href="https://soundcloud.com/ismael-beron-miguel-castano" title="Meikakuzen" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Meikakuzen</a> · <a href="https://soundcloud.com/ismael-beron-miguel-castano/sets/fragments" title="Fragments" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Fragments</a></div>
      
    </div>
  )
}

export default SoundCloud