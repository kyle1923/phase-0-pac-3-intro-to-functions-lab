function shout(string) {
    return string.toUpperCase();
    
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
logShout();
function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper();
function sayHiToHeadphonedRoommate(string) {
    if (string===string.toLowerCase())
    return "I can't hear you!"
    if (string===string.toUpperCase())
    return "YES INDEED!"
    if (string==="Let's Have dinner together!");
    return "I would love to!"
}
