function whisper(string) {
    return string.toLowerCase();
  }
function shout(string) {
    return string.toUpperCase();
  }
  const word='HELLO';
function logShout(){
    console.log(shout(word));
}
function logWhisper() {
    console.log(whisper(word));
}

function sayHiToHeadphonedRoommate(method){
    if(word===logShout()){
        return "YES INDEED!";

    }
    else if(word===logWhisper()){
        return "I can't hear you!";
    }

}
sayHiToHeadphonedRoommate(logShout());