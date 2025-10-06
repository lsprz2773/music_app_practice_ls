import {now_title, now_artist, now_img, media, now_header_artist, now_time, max_time} from "../elements/elements.js"

function renderNow(song){
    now_header_artist.innerText = song.artist_name;
    now_title.innerText = song.song_name;
    now_artist.innerText = song.artist_name;
    now_img.src = song.caratula;
    media.src = song.song_url;
    max_time.innerText = song.duration;
}

export {renderNow};


