/*album:write a function called make_album()that build a object describing a music
album.the function should take in an artist name and an album title,and it should returna  a
object containing these  two pieces of information.use the function to make three dictionaries
representing different albums.print each value to show that object are storing the album 
information correctly .Add an optional parameter to make_album() that allows u to store
the number of track on an album.If the calling line include a value for the number of track,add that value 
to the albums object.make atleast one new function call that include the number
 of tracks on an album*/
 type Album = {
    artist:string;
    title:string;
    tracks?:number;
 }
 function make_album(artist:string,title:string,tracks?:number):Album{
    let album:Album ={ artist,title};
    if(tracks){
        album.tracks = tracks;
    }
    return album;
}
    const album1 = make_album("The Beatles", "AbbeyRoad");
    const album2 = make_album("Pink Floyed","Darkside of the Moon",10);
    const album3  =make_album("Led Zeppelin","IV",8);
    console.log(album1);
    console.log(album2);
    console.log(album3);
   
  
    

    
 
 