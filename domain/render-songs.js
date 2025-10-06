import {song_list} from "../elements/elements.js";

let render = '';
function renderSongs(songs) {
    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];

        render += `
            <div class="song-card" data-index="${i}">
                <img src="${song.caratula}" alt="" id="song-img-playlist"/>
                <div class="song-info-container">
                     <h3 class="song-card-title">${song.song_name}</h3>
                     <p class="song-card-artist">${song.artist_name}</p>
                </div>
                <p class="song-duration">${song.duration}</p>
            </div>`
    }
    song_list.innerHTML = render;
}

export {renderSongs}
