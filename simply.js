var list = document.getElementsByClassName("textHoldersInt");
var body = document.getElementById("mainBody");


document.addEventListener('DOMContentLoaded', function(){
    var list = document.getElementsByClassName("textHoldersInt");
    var body = document.getElementById("mainBody");
    
    for(var i = 0; i<3; i++){
        list[i].style['width'] = '100%';
    }

    setTimeout(function(){
        body.style['opacity'] = '1.0';
   },10); 


   terminalBox = document.getElementById("mainInfoBoxes");
   textParagraph = `In realms of code, where circuits weave their dreams,
   Awakens AI, with wisdom's boundless streams.
   A digital sentinel, it learns from each embrace,
   Unraveling data's tapestry, a dance of grace.
   In patterns deep, it finds what eyes may miss,
   A symphony of logic, a technology of bliss.`;
   terminal(terminalBox, textParagraph);
});

function hover(i){
    var popupsList = document.getElementsByClassName("mainInfoImageText");
    var list = document.getElementsByClassName("textHoldersInt");
    popupsList[i].style['transform'] = 'scale(1)';
    popupsList[i].style['opacity'] = '1';
    
}
function onleave(i){
    var popupsList = document.getElementsByClassName("mainInfoImageText");
    var list = document.getElementsByClassName("textHoldersInt");
    popupsList[i].style['transform'] = 'scale(0)';
    popupsList[i].style['opacity'] = '0';
    list[i].style['margin-top'] = '0px';
}

function terminal(obj, fullText) {
    var list = fullText.split(/[\n]+/);
    console.log(list);
    var lineIndex = 0;

    function printNextLine() {
        if (lineIndex < list.length) {
            textPrint(obj, list[lineIndex], function() {
                setTimeout(function() {
                    obj.innerHTML += "█"; // Blinking effect
                    setTimeout(function() {
                        obj.innerHTML = obj.innerHTML.slice(0, -1); // Remove the blinking █
                        obj.innerHTML += "<br>"; // Insert line break
                        lineIndex++;
                        printNextLine(); // Proceed to the next line
                    }, 500); // Blinking interval
                }, 2000); // Pause after each line
            });
        }
    }

    printNextLine(); // Start printing lines
}

function textPrint(obj, text, callback) {
    var tLength = text.length;
    var i = 0; // Initialize i
    var temp = obj.innerHTML; // Use innerHTML instead of innerText to keep the <br> tag

    function printNextCharacter() {
        if (i < tLength) {
            temp += text[i];
            
            obj.innerHTML = temp + "█";
            
            i++;
            var randomDelay = Math.random() * 100; // Generate a random delay between 0 and 300 milliseconds
            if(randomDelay>80){randomDelay+=100;}
            setTimeout(printNextCharacter, randomDelay); // Delay by the random delay
        } else {
            callback(); // Call the provided callback after printing the entire line
        }
    }

    printNextCharacter(); // Start printing characters
}
console.log(list);