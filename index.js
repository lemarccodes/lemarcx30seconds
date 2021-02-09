// words to be used on the cards
let words = [
    "ED SHEERAN", "THE PREMIER LEAGUE", "GORDON RAMSAY",
    "HERTZ", "KATY PERRY", "COPPER FACE JACKS", "COCA-COLA",
    "CHILE", "DUSTIN THE TURKEY", "RAMADAN", "PAUL McGRATH",
    "SURNAME", "SAINT PATRICK", "ROW", "CUCUMBER", "BURP",
    "PRINCE WILLIAM", "DRAGON'S DEN", "THE REBEL COUNTRY", "LEVI'S",
    "DANCING WITH THE STARS", "RAFAEL NADAL", "LOURDES", "SALT",
    "PRESIDENT", "SCHOOL BOOKS", "SHELF", "DORA THE EXPLORER",
    "NIALL HORAN", "INTERNET EXPLORER", "CONOR McGREGOR", "ARMAGEDDON",
    "KNIGHT RIDER", "NEW YORK", "LIQUIFRUIT", "GARY KIRSTEN", "SPIN CITY", 
    "THE BOY SCOUTS", "JAMES BOND", "VALENTINE'S DAY", "PEPSI",
    "OSCAR PISTORIUS", "THE WILD COAST", "FATHER'S DAY", "DIAMONDS",
    "TEA CUP", "CRUMPETS", "THRONE", "CANDLE", "SPEECH", "LAMPSHADE",
    "THERMOMETER", "TRICYCLE", "PRAM", "FATHER", "PAGE", "FIREPLACE",
    "XBOX", "COUNTY", "RECORD", "THE NATIONAL LOTTERY", "MICHAEL B JORDAN", "APPLE",
    "POTATO", "WATCH", "ELASTIC", "COOKIE", "BUFFALO", "PLACEMAT", "ARROW", "KEY",
    "SIA", "ANIMAL PLANET", "THE UNITED STATES", "CAPE TOWN",
    "CATWOMAN", "MARK WAHLBERG", "THE QUEEN MARY 2", "READER'S DIGEST",
    "THE DALAI LAMA", "THE BRONX", "VIRGIN ACTIVE", "PIRATES OF THE CARRIBBEAN",
    "TINA TURNER", "PLATO", "BOTSWANA", "JOHAN STEMMET", "THE SPICE GILRS",
    "NEIL ARMSTRONG", "BLOEMFONTEIN", "CUPID", "CATHERINE ZETA-JONES",
    "THE PINK PANTHER", "BMW", "ISIDINGO", "7DE LAAN", "ABBA", "SAMSON",
    "MICKEY MOUSE", "PARIS HILTON", "THE JACKSON FIVE", "HARVARD", "MICHAEL JACKSON",
    "THE HOBITT", "STEVIE WONDER", "ENERGADE", "GUCCI", "KIM KARDASHIAN", "ARIANA GRANDE",
    "PENGUINS", "BREAKFAST", "TRUTH", "TORNADO", "MEXICO", "MILITARY",
    "OLYMPICS", "APPLE", "GOLD", "ZODIAC", "SATURN", "MILK", "BRUSH",
    "YOUTUBE", "ELEPHANT", "WORLD WAR I", "NOBEL PRIZE", "KARATE", "MOROCCO",
    "LIVER", "SILVER", "SPAIN","BEIJING", "SERENA WILLIAMS", "CAMERA", 
    "ISAAC NEWTON", "NELSON MANDELA", "JACOB ZUMA", "DONALD TRUMP", "ROBERT MUGABE", "BEYONCE",
    "DESTINY'S CHILD", "THE GRAMMY AWARDS", "VIOLA DAVIS", "HOW TO GET AWAY WITH MURDER", "NETFLIX", "NICKI MINAJ",
    "GOOGLE", "BARBIE", "ALBERT EINSTEIN", "SPOTIFY", "DRAGON BALL Z", "ANIME", "BTS", "MARVEL", "FACEBOOK", "INSTAGRAM",
    "LAPTOP", "WIFI", "TWITTER", "NEW YORK CITY", "SANITIZER", "SOCIAL DISTANCE", "FEDICS", "ROOIPLEIN", "EN ROUTE", "VAN DER STERR",
    "INETKEY", "KLEIN SATERDAG", "THE SQUARE", "VARSITY CUP", "HUISDANS", "GEES", "SECOND OPPORTUNITY", "CENTURY CITY",
    "WINELAND", "iPHONE", "KURT DARREN", "McDONALDS", "CHALKBOARD", "BATTERY", "ANGELINA JOLIE", "MNET", "DSTV", "DISNEY",
    "SELENA GOMEZ", "CARDI B", "DESPACITO", "JUSTIN BIEBER", "TAYLOR SWIFT", "AMERICAN IDOL", "SIMON COWELL", "EGYPT", "IBIZA",
    "RYAN SEACREST", "KRIS JENNER", "DIE NEELSIE", "MILEY CYRUS", "ANGEL", "PERFUME", "CURTAINS"
 ]

 //make variable outside of function, in order for the array to not be overridden 
let usedNum = [];
let copies = 5;

/* this function will be used to generate 5 words from the 'words' array above and put them together as a card
    in order to make this work, I will be generating random numbers and checking whether that number has been used before
    , if it hasn't , that word associated with that number's position in the array will be printer, otherwise it will generate
    a different random number
*/
function newCard() {
    //timer functions
    let timeLeft = 30;
    let elem = document.getElementById('timer');


    // everytime the function is called, count needs to be set to 0
    let count = 0;

    //initiate a new array each time, this will correct all the number (up to 5) which haven't been displayed
    let thisCard = [];
    
    // this while loop will keep running until 5 unused numbers have been generated
    while (count < copies) {
        // generate random number between 0 and the length of the array "words"
        let randomNumber = Math.floor(Math.random() * (words.length));
        
        //check if the number has been used
        //if it has not been used (stored in the array of all previously used numbers) it will execute the following
        if (!usedNum.includes(randomNumber)) {
            //add this unused number to used numbers as it will now be used
            usedNum.push(randomNumber);
            //add number to be displayed
            thisCard.push(randomNumber);
            //increment count
            count = count + 1;
        }
        //if the number has been used
        else {
            //count stays the same
           count = count;
        }
    }

    //this is just to check what numbers are generated and printed
    console.log("So far you have used " + usedNum + " and count: " + usedNum.length);
    console.log("this card contains: " + thisCard);

    // this will parse through the 5 elements in the array 'thisCard' to the HTML to display words associated with the numbers
    document.getElementById('wordDisplay1').innerHTML = words[thisCard[0]];
    document.getElementById('wordDisplay2').innerHTML = words[thisCard[1]];
    document.getElementById('wordDisplay3').innerHTML = words[thisCard[2]];
    document.getElementById('wordDisplay4').innerHTML = words[thisCard[3]];
    document.getElementById('wordDisplay5').innerHTML = words[thisCard[4]];
    
    let timerId = setInterval(countdown, 1000);
    function countdown() {
        //let timeLeft = 30;
        if (timeLeft == -1) {
        clearTimeout(timerId);
        document.getElementById('timer').innerHTML = "TIMES UP!";
        vibrate();
        //insert what must happen.  Look into Vibrating phones / Vibration APIs
        } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
        }
    }
}


// rolling the die functions
function rollDice() {
    let die = Math.floor(Math.random() * 2);
    document.getElementById('dice').innerHTML = "the die landed on: " + die;

}

function vibrate() {
    navigator.vibrate(500, 200, 500, 200, 500);
}