import audioController from "../domain/audio-controller.js"
import createPlaylist from "../utils/playlist.js";
import interface_data from "../domain/interface_data.js";

const player = {
    _progress_bar: document.getElementById("progress"),
    _play_btn: document.getElementById("play"),
    _last_btn: document.getElementById("lastest"),
    _forwd_btn: document.getElementById("forward"),
    _audioController: audioController,
    _interface: interface_data,
    Player(songs){
        this._progress_bar.max = 100;
        this._progress_bar.value = 0;
        const media_controller = document.getElementById("media");
        const playlist = createPlaylist(songs, null);
        this._audioController.AudioController(playlist, media_controller);
        this._interface.Interface(
            document.getElementById("song-img"),
            document.getElementById("title"),
            document.getElementById("artist")
        );
        this._interface.loadSong(this._audioController._actualSong)
    },
    eventListeners(){
        this._audioController._controller.addEventListener('timeupdate', function(){
            progress_value = (player._audioController.currentTime/player._audioController.duration) * 100;
            player._progress_bar.value = progress_value;
        });
        this._progress_bar.addEventListener('input', function(){
            player._audioController._controller.currentTime = (this.value/100) * player._audioController._controller.duration;
        });
        this._forwd_btn.addEventListener('click', function(){
            audioController.nextSong();
            player._interface.loadSong(
                player._audioController._actualSong
            );
        });
        this._last_btn.addEventListener('click', function(){
            audioController.prevSong();
        });
        this._play_btn.addEventListener('click', function(){
            player._audioController.playPause(event.targer.classList[0]);
        });
        this._audioController._controller.addEventListener('loadedmetadata', function(){
            player._progress_bar.value = 0;
        });
    }
}

export default player;