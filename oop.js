function Song(singer, title, release){
    this.singer = singer;
    this.title = title;
    this.release = release;

    console.log(this);
}
//new 를 안할 경우 window를 가르킨다
//인스턴스화
const song1= new Song();

