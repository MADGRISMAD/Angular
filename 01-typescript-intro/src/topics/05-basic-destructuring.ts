interface AudioPlayer {
    audioVolume: number;
    SongDuration: number;
    Song: string;
    Details: Details;
}
interface Details {
    Autor: string;
    Year: number;
}
const details = {
    Autor: "Ed Sheeran",
    Year: 2015
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    SongDuration: 36,
    Song: "mess",
    Details:details
}


const Song='Shape of you';
const {Autor:escritor}=details
const {Song:anotherSong, SongDuration:duration,} = audioPlayer;

// console.log(Song);
// console.log(anotherSong);
// console.log(duration);
// console.log(escritor);

const [p1,p2,trunks='not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];


console.error('personaje 3:', trunks);

export {}