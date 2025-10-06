let play_btn = document.getElementById("play");
const now_header_artist = document.getElementById("artist-header")
const song_img = document.getElementsByClassName("song-img")
let progress_bar = document.getElementById("progress");
let lastest =  document.getElementById("lastest");
let forward = document.getElementById("forward");
const media = document.getElementById("media");
let song_list = document.getElementById("song-list");
const now_title = document.getElementById("now-title");
const now_artist = document.getElementById("now-artist");
const now_img = document.getElementById("now-img");
const now_time = document.getElementById("now-time");
const max_time = document.getElementById("max-time");

export {progress_bar, media, play_btn, song_img, lastest, forward, song_list, now_title, now_artist, now_img, now_header_artist, max_time, now_time};