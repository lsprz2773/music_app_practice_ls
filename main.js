import createPlaylist from "./utils/playlist.js";
import {renderSongs} from "./domain/render-songs.js";
import {renderNow} from "./domain/now-playing.js";
import {song_list} from "./elements/elements.js";

const songs = [
        {
            song_name : "I'll See You There Tomorrow",
            artist_name: "TOMORROW X TOGETHER",
            song_url: "./media/audio/illseeyoutheretomorrow.mp3",
            caratula: "./media/covers/mnsd3.jpg",
            duration: "03:16"
        },
        {
            song_name : "Blue Hour",
            artist_name: "TOMORROW X TOGETHER",
            song_url: "./media/audio/bluehour.mp3",
            caratula: "./media/covers/mnsd1.jpg",
            duration: "03:29"
        },
        {
            song_name : "CROWN",
            artist_name: "TOMORROW X TOGETHER",
            song_url: "./media/audio/crown.mp3",
            caratula: "./media/covers/tdc.jpg",
            duration: "03:50"
        },
        {
            song_name : "Do It Like That",
            artist_name: "TOMORROW X TOGETHER",
            song_url: "./media/audio/doitlikethat.mp3",
            caratula: "./media/covers/ff.jpg",
            duration: "02:25"
        },
        {
            song_name : "Ghost Girl",
            artist_name: "TOMORROW X TOGETHER",
            song_url: "./media/audio/ghostgirl.mp3",
            caratula: "./media/covers/tsc.jpg",
            duration: "03:06"
        },
        {
            song_name : "Happily Ever After",
            artist_name: "TOMORROW X TOGETHER",
            song_url: "./media/audio/happilyeverafter.mp3",
            caratula: "./media/covers/ff.jpg",
            duration: "02:31"
        },
        {
            song_name : "Magic",
            artist_name: "TOMORROW X TOGETHER",
            song_url: "./media/audio/magic.mp3",
            caratula: "./media/covers/fr.jpg",
            duration: "02:39"
        },
        {
            song_name : "Deja Vu",
            artist_name: "TOMORROW X TOGETHER",
            song_url: "./media/audio/dejavu.mp3",
            caratula: "./media/covers/mnsd3.jpg",
            duration: "02:51"
        }
    ];

renderSongs(songs);
renderNow(songs[0])

/*const playlist = createPlaylist(songs);*/

/*const player = player;*/

window.addEventListener('DOMContentLoaded', ()=>{
    /*player.Player(songs);*/

    song_list.addEventListener('click', (event)=>{
        const clickedSong = event.target.closest('.song-card');
        if (!clickedSong) { return; }
        const songIndex = Number(clickedSong.dataset.index);
        console.log(songIndex);
        renderNow(songs[songIndex])
    });
})



export {songs}