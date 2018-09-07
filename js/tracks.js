let currentTrack;
let trackIndex = 0;

let vowelTrackLevelIndex = 0;
let vowelTrackLevels = [
   ["phonice","phonico"],
   ["phonici","phonicu"],
   ["phonice","phonico","phonici"],
   ["phonica","phonici"],
   ["phonica","phonice"],
   ["phonica","phonice","phonici"],
   ["phonico","phonicu"],
   ["phonica","phonico"],
   ["phonica","phonico","phonicu"],
   ["phonica","phonico","phonicu","phonici"],
   ["phonica","phonice","phonici","phonico"],
   ["phonica","phonice","phonici","phonico","phonicu"]
];

let consonantTrackLevelIndex = 0;
let consonantTrackLevels = [
  ["phonicb","phonicc"],//section 1
  ["phonicc","phonicd"],
  ["phonicb","phonicd"],
  ["phonicb","phonicc","phonicd"],
  ["phonicc","phonicx"],
  ["phonicc","phonicx","phonicd"],
  ["phonicc","phonicx","phonicb","phonicd"],
  ["phonicb","phonicp",],
  ["phonicb","phonicp","phonicd"],
  ["phonicb","phonicp","phonicd","phonicc","phonicx"],
  ["phonick","phonicx"],
  ["phonicb","phonicp","phonicd","phonick","phonicx"],
  ["phonicf","phonicv"],//section 2
  ["phonicf","phonicv","phonicb"],
  ["phonicf","phonicv","phonicb","phonicp"],
  ["phonicf","phonicv","phonicb","phonicp","phonicc"],
  ["phonicf","phonicv","phonicb","phonicp","phonicc","phonicx"],
  ["phonicf","phonicv","phonicb","phonicp","phonicc","phonicx","phonicd"],
  ["phonicg","phonick"],//section 3
  ["phonicj","phonicg"],
  ["phonicj","phonicg","phonick"],
  ["phonicg","phonich"],
  ["phonicg","phonich","phonicj"],
  ["phonicg","phonich","phonicj","phonick"],
  ["phonicg","phonich","phonicj","phonick","phonicx"],
  ["phonicl","phonicn"],//section 4
  ["phonicl","phonicn","phonicg"],
  ["phonicl","phonicn","phonicg","phonick"],
  ["phonicl","phonicn","phonicg","phonick","phonicj"],
  ["phonicm","phonicn"],
  ["phonicl","phonicm","phonicn"],
  ["phonicl","phonicm","phonicn","phonicg","phonick"],
  ["phonicl","phonicm","phonicn","phonicg","phonick","phonicj"],
  ["phonicf","phonicv","phonicb","phonicp","phonicc","phonicx","phonicd","phonicl","phonicm","phonicn","phonicg","phonick","phonicj"],
  ["phonicq","phonicw"],//section 5
  ["phonicq","phonicw","phonicr"],
  ["phonicr","phonicl"],
  ["phonicr","phonicl","phonicm"],
  ["phonicr","phonicl","phonicm","phonicn"],
  ["phonicr","phonicl","phonicm","phonicn","phonicq","phonicw"],
  ["phonics","phonicz"],//section 6
  ["phonicd","phonict"],
  ["phonicd","phonict","phonicb"],
  ["phonicd","phonict","phonicb","phonicp"],
  ["phonicv","phonicw"],
  ["phonicv","phonicw","phonicf"],
  ["phonicx","phonicy"],
  ["phonicw","phonicx","phonicy"],
  ["phonicv","phonicw","phonicy"],
  ["phonicv","phonicw","phonicy","phonicf"],
  ["phonicr","phonicl","phonicm","phonicn","phonicq","phonicw","phonics","phonicz"],//section 7
  ["phonicv","phonicw","phonicf","phonicd","phonict","phonicb","phonicp"],
  ["phonicc","phonicg","phonich","phonicj","phonick","phonicx","phonicy"],
  ["phonicb","phonicc","phonicd","phonicf","phonicg","phonich","phonicj","phonick","phonicl","phonicm","phonicn","phonicp","phonicq",
  "phonicr","phonics","phonict","phonicv","phonicw","phonicx","phonicy","phonicz"]
]

let bigLettersTrackLevels = [
  ["A","B"],//section 1
  ["B","C"],
  ["A","B","C"],
  ["B","D"],
  ["A","B","C","D"],
  ["A","E"],
  ["A","B","E"],
  ["A","B","C","D","E"],
  ["E","F"],
  ["A","B","C","D","E","F"],
  ["E","G"],
  ["A","B","C","D","E","F","G"],
  ["F","G","H"],
  ["A","B","C","D","E","F","G","H"],
  ["I","J"],//section 2
  ["J","K"],
  ["I","J","K"],
  ["K","L"],
  ["I","J","K","L"],
  ["L","M"],
  ["I","J","K","L","M"],
  ["M","W"],
  ["M","N"],
  ["M","W","N"],
  ["W","V"],
  ["M","W","V","N"],
  ["W","U","V"],
  ["M","N","U","V","W"],
  ["I","J","K","L","M","N"],
  ["N","O"],
  ["N","O","P"],
  ["I","J","K","L","M","N","O","P"],
  ["Q","R"],//section 3
  ["R","S"],
  ["Q","R","S"],
  ["S","T"],
  ["Q","R","S","T"],
  ["T","U"],
  ["Q","R","S","T","U"],
  ["U","V"],
  ["V","W"],
  ["U","V","W"],
  ["Q","R","S","T","U","V","W"],
  ["W","X"],
  ["W","X","Y"],
  ["W","X","Y","Z"],
  ["Q","R","S","T","U","V","W","X","Y","Z"],
  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
];

let smallLettersTrackLevels = [
  ["a","b"],//section 1
  ["a","o"],
  ["a","o","b"],
  ["b","d"],
  ["a","b","o","d"],
  ["a","b","c"],
  ["a","b","c","d","o"],
  ["b","p","d"],
  ["a","b","c","d","p","o"],
  ["e","f"],//section 2
  ["f","t"],
  ["e","f"],
  ["e","f","t"],
  ["f","g"],
  ["e","f","g","t"],
  ["g","h"],
  ["e","f","g","h","t"],
  ["h","i"],
  ["e","f","g","h","i","t"],
  ["i","j"],
  ["e","f","g","h","i","j","t"],
  ["k","l"],//section 3
  ["l","m"],
  ["k","l","m"],
  ["m","n"],
  ["k","l","m","n"],
  ["m","n","o"],
  ["a","o"],
  ["m","n","o","a"],
  ["k","l","m","n","o","a"],
  ["o","p"],
  ["k","l","m","n","o","p"],
  ["p","q"],//section 4
  ["q","r"],
  ["p","q","r"],
  ["r","s"],
  ["p","q","r","s"],
  ["s","t"],
  ["p","q","r","s","t"],
  ["u","v"], //section 5
  ["v","w"],
  ["u","v","w"],
  ["x","y"],
  ["u","v","w","x","y"],
  ["y","z"],
  ["u","v","w","x","y","z"],
  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
];

let mixedSizeLetterNameLevels = [
  ["a","o"],//section 1
  ["o","O"],
  ["a","O","o"],
  ["a","A"],
  ["a","A","o","O"],
  ["c","o"],
  ["a","A","o","O","c"],
  ["c","C"],
  ["a","A","o","O","c","C"],
  ["b","P"],//section 2
  ["b","d"],
  ["b","d","P"],
  ["b","B"],
  ["b","d","B","P"],
  ["p","P"],
  ["b","d","p","B","P"],
  ["d","D"],
  ["b","d","p","B","P","D"],
  ["b","d","p","q","B","P","D"],
  ["q","Q"],
  ["b","d","p","q","D","B","D","Q"],
  ["I","l"],//section 3, make sure that the capital I is the font version that looks like lower case l
  ["i","I","l"],
  ["i","L"],
  ["i","I","l","L"],
  ["i","j"],
  ["i","I","j","l","L"],
  ["j","J"],
  ["i","j","J"],
  ["i","I","j","J","l","L"],
  ["m","W"],//section 4
  ["m","M"],
  ["m","M","W"],
  ["w","W"],
  ["m","M","w","W"],
  ["m","n"],
  ["m","M","n"],
  ["n","N"],
  ["m","M","n","N"],
  ["m","M","n","N","w","W"],
  ["w","V"],
  ["v","V"],
  ["w","W","v","V"],
  ["m","M","n","N","w","W","v","V"],
  ["u","V"],
  ["u","U"],
  ["u","U","V"],
  ["v","V"],
  ["u","U","v","V"],
  ["u","U","v","V","w","W"],
  ["m","M","n","N","u","U","v","V","w","W"],
  ["s","Z"]//bonus
  ["s","S"],
  ["s","Z","S"],
  ["z","Z"],
  ["s","S","z","Z"],
];

let mixedSizePhonics = mixedSizeLetterNameLevels;

let customTrack = [];

/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param chunk_size {Integer} Size of every group
 */
function chunkArray(myArray, chunk_size){

    let arrayLength = myArray.length;
    let tempArray = [];

    for (let index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}
//example
// Split in group of 3 items
//var result = chunkArray([1,2,3,4,5,6,7,8], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
//console.log(result);
