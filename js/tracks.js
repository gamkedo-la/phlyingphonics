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
  ["bigA","bigB"],//section 1
  ["bigB","bigC"],
  ["bigA","bigB","bigC"],
  ["bigB","bigD"],
  ["bigA","bigB","bigC","bigD"],
  ["bigA","bigE"],
  ["bigA","bigB","bigE"],
  ["bigA","bigB","bigC","bigD","bigE"],
  ["bigE","bigF"],
  ["bigA","bigB","bigC","bigD","bigE","bigF"],
  ["bigE","bigG"],
  ["bigA","bigB","bigC","bigD","bigE","bigF","bigG"],
  ["bigF","bigG","bigH"],
  ["bigA","bigB","bigC","bigD","bigE","bigF","bigG","bigH"],
  ["bigI","bigJ"],//section 2
  ["bigJ","bigK"],
  ["bigI","bigJ","bigK"],
  ["bigK","bigL"],
  ["bigI","bigJ","bigK","bigL"],
  ["bigL","bigM"],
  ["bigI","bigJ","bigK","bigL","bigM"],
  ["bigM","bigW"],
  ["bigM","bigN"],
  ["bigM","bigW","bigN"],
  ["bigW","bigV"],
  ["bigM","bigW","bigV","bigN"],
  ["bigW","bigU","bigV"],
  ["bigM","bigN","bigU","bigV","bigW"],
  ["bigI","bigJ","bigK","bigL","bigM","bigN"],
  ["bigN","bigO"],
  ["bigN","bigO","bigP"],
  ["bigI","bigJ","bigK","bigL","bigM","bigN","bigO","bigP"],
  ["bigQ","bigR"],//section 3
  ["bigR","bigS"],
  ["bigQ","bigR","bigS"],
  ["bigS","bigT"],
  ["bigQ","bigR","bigS","bigT"],
  ["bigT","bigU"],
  ["bigQ","bigR","bigS","bigT","bigU"],
  ["bigU","bigV"],
  ["bigV","bigW"],
  ["bigU","bigV","bigW"],
  ["bigQ","bigR","bigS","bigT","bigU","bigV","bigW"],
  ["bigW","bigX"],
  ["bigW","bigX","bigY"],
  ["bigW","bigX","bigY","bigZ"],
  ["bigQ","bigR","bigS","bigT","bigU","bigV","bigW","bigX","bigY","bigZ"],
  ["bigA","bigB","bigC","bigD","bigE","bigF","bigG","bigH","bigI","bigJ","bigK","bigL","bigM","bigN","bigO","bigP","bigQ","bigR",
   "bigS","bigT","bigU","bigV","bigW","bigX","bigY","bigZ"]
];

let smallLettersTrackLevels = [
  ["smalla","smallb"],//section 1
  ["smalla","smallo"],
  ["smalla","smallo","smallb"],
  ["smallb","smalld"],
  ["smalla","smallb","smallo","smalld"],
  ["smalla","smallb","smallc"],
  ["smalla","smallb","smallc","smalld","smallo"],
  ["smallb","smallp","smalld"],
  ["smalla","smallb","smallc","smalld","smallp","smallo"],
  ["smalle","smallf"],//section 2
  ["smallf","smallt"],
  ["smalle","smallf"],
  ["smalle","smallf","smallt"],
  ["smallf","smallg"],
  ["smalle","smallf","smallg","smallt"],
  ["smallg","smallh"],
  ["smalle","smallf","smallg","smallh","smallt"],
  ["smallh","smalli"],
  ["smalle","smallf","smallg","smallh","smalli","smallt"],
  ["smalli","smallj"],
  ["smalle","smallf","smallg","smallh","smalli","smallj","smallt"],
  ["smallk","smalll"],//section 3
  ["smalll","smallm"],
  ["smallk","smalll","smallm"],
  ["smallm","smalln"],
  ["smallk","smalll","smallm","smalln"],
  ["smallm","smalln","smallo"],
  ["smalla","smallo"],
  ["smallm","smalln","smallo","smalla"],
  ["smallk","smalll","smallm","smalln","smallo","smalla"],
  ["smallo","smallp"],
  ["smallk","smalll","smallm","smalln","smallo","smallp"],
  ["smallp","smallq"],//section 4
  ["smallq","smallr"],
  ["smallp","smallq","smallr"],
  ["smallr","smalls"],
  ["smallp","smallq","smallr","smalls"],
  ["smalls","smallt"],
  ["smallp","smallq","smallr","smalls","smallt"],
  ["smallu","smallv"], //section 5
  ["smallv","smallw"],
  ["smallu","smallv","smallw"],
  ["smallx","smally"],
  ["smallu","smallv","smallw","smallx","smally"],
  ["smally","smallz"],
  ["smallu","smallv","smallw","smallx","smally","smallz"],
  ["smalla","smallb","smallc","smalld","smalle","smallf","smallg","smallh","smalli","smallj","smallk","smalll","smallm","smalln","smallo",
   "smallp","smallq","smallr","smalls","smallt","smallu","smallv","smallw","smallx","smally","smallz"]
];

let mixedSizeLetterNameLevels = [
  ["smalla","smallo"],//section 1
  ["smallo","bigO"],
  ["smalla","bigO","smallo"],
  ["smalla","bigA"],
  ["smalla","bigA","smallo","bigO"],
  ["smallc","smallo"],
  ["smalla","bigA","smallo","bigO","smallc"],
  ["smallc","bigC"],
  ["smalla","bigA","smallo","bigO","smallc","bigC"],
  ["smallb","bigP"],//section 2
  ["smallb","smalld"],
  ["smallb","smalld","bigP"],
  ["smallb","bigB"],
  ["smallb","smalld","bigB","bigP"],
  ["smallp","bigP"],
  ["smallb","smalld","smallp","bigB","bigP"],
  ["smalld","bigD"],
  ["smallb","smalld","smallp","bigB","bigP","bigD"],
  ["smallb","smalld","smallp","smallq","bigB","bigP","bigD"],
  ["smallq","bigQ"],
  ["smallb","smalld","smallp","smallq","bigD","bigB","bigD","bigQ"],
  ["bigI","smalll"],//section 3, make sure that the capital I is the font version that looks like lower case l
  ["smalli","bigI","smalll"],
  ["smalli","bigL"],
  ["smalli","bigI","smalll","bigL"],
  ["smalli","bigj"],
  ["smalli","bigI","smallj","smalll","bigL"],
  ["smallj","bigJ"],
  ["smalli","smallj","bigJ"],
  ["smalli","bigI","smallj","bigJ","smalll","bigL"],
  ["smallm","bigW"],//section 4
  ["smallm","bigM"],
  ["smallm","bigM","bigW"],
  ["smallw","bigW"],
  ["smallm","bigM","smallw","bigW"],
  ["smallm","smalln"],
  ["smallm","bigM","smalln"],
  ["smalln","bigN"],
  ["smallm","bigM","smalln","bigN"],
  ["smallm","bigM","smalln","bigN","smallw","bigW"],
  ["smallw","bigV"],
  ["smallv","bigV"],
  ["smallw","bigW","smallv","bigV"],
  ["smallm","bigM","smalln","bigN","smallw","bigW","smallv","bigV"],
  ["smallu","bigV"],
  ["smallu","bigU"],
  ["smallu","bigU","bigV"],
  ["smallv","bigV"],
  ["smallu","bigU","smallv","bigV"],
  ["smallu","bigU","smallv","bigV","smallw","bigW"],
  ["smallm","bigM","smalln","bigN","smallu","bigU","smallv","bigV","smallw","bigW"],
  ["smalls","bigZ"]//bonus
  ["smalls","bigS"],
  ["smalls","bigZ","bigS"],
  ["smallz","bigZ"],
  ["smalls","bigS","smallz","bigZ"],
];

let mixedSizeLetters = mixedSizeLetterNameLevels;

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
