console.log("Started my third homework");

const inputMin = document.getElementById("minInput");
const inputMax = document.getElementById("maxInput");
const buzzBtn = document.getElementById("buzzBtn");
// const clearBtn = document.getElementById("clearBtn");
// const refreshBtn = document.getElementById("refreshBtn");
// const fizzBtn = document.getElementById("fizzBtn");
// const fizzbuzzBtn = document.getElementById("fizzbuzzBtn");
// const main = document.getElementById("element"); 

inputMin.value = 1;
inputMax.value = 100;

const create = function(){
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

for (let i = 1; i <= 100; i++) {
    let newDiv = document.createElement("div");
    let newPar = document.createElement("p");
    
    newDiv.appendChild(newPar);
    main.appendChild(newDiv).setAttribute("id", "div_" + i);

    if(i < inputMin.value || i > inputMax.value) {
        newDiv.style = "display: none";
    } else {
        if(i % 3 === 0 && i % 5 === 0) {
            newPar.appendChild(document.createTextNode(i + " = FIZZ BUZZ"));
            main.appendChild(newDiv).setAttribute("class", "fizbuz");
        } else if (i % 3 === 0) {
            newPar.appendChild(document.createTextNode(i + " = Fizz"));
            main.appendChild(newDiv).setAttribute("class", "fiz");
        } else if (i % 5 === 0) {
            newPar.appendChild(document.createTextNode(i + " = BUZZ"))
            main.appendChild(newDiv).setAttribute("class", "buz");
        } else {
            newPar.appendChild(doNotTrack.createTextNode(i));
            main.appendChild(newDiv).setAttribute("class", + "num");
        }
    }
};

function addListeners() {
    console.log("Adding listeners");
        //clear and refresh buttons
    clearBtn.addEventListener("click") = function() {
        inputMin.value = 1;
        inputMax.value = 100;
        create();
    }
    refreshBtn.addEventListener("click") = function() {
        inputMin.value = "";
        inputMax.value = "";
        create();
    }

}

function header() {
    console.log("Running header")
    addListeners();
}

function main() {
    console.log("Running main");
    addListeners();
    // es nezinu pagaidām kam viņš tos divus apakšējos domājis
   
    // document.getElementById("elements");

// Es pagaidām nezinu vai šo vajadzēs
// function onClearAll() {
//     console.log("Clear all numbers");
//     while (jobsCont.firstChild); {
//         jobsCont.removeChild(jobsCont.firstChild);
//     }
// }


    
    var clearButton = document.getElementById('clear');
    clearButton.addEventListener("click", onClickClear);
    var submitCustom = document.getElementById('generate2');
    submitCustom.addEventListener("click", onClickCustom);
}
//Tas ir priekš garuma un platuma uztaisīts kods.. nevajag...
// var sl1 = document.getElementById("elWidth");
// var sl1Value = document.getElementById("elWidthOutput");
// sl1.innerHTML = sl1Value.value;

// sl1.oninput = function() {
//   sl1Value.innerHTML = this.value;
// }

// var sl2 = document.getElementById("elHeight");
// var sl2Value = document.getElementById("elHeightOutput");
// sl2.innerHTML = sl2Value.value;

// sl2.oninput = function() {
//   sl2Value.innerHTML = this.value;
// }

function onClick() {
    onClickClear();
    console.log('Button hit');
        for(let i = 1; i<101; i++){
            const element = document.createElement('div');
            element.className="element" + i;
            elements.appendChild(element);
                if (i % 3 ===0 && i % 5 === 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "FizzBuzz");
                    element.innerText="FizzBuzz " + i;
                }
                else if (i % 3 === 0 && i % 5 !== 0) {
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Fizz");
                    element.innerText="Fizz " + i;
                    
                }

                else if (i % 5 === 0 && i % 3 !== 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Buzz");
                    element.innerText="Buzz " + i;
                    
                }

                else if (i % 3 !== 0 && i % 5 !== 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Empty");
                    element.innerText=i;
                    
                }
        }
}

function onClickClear () {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
    console.log('Divs cleared');
}

function onClickCustom (){
    onClickClear();
    console.log('Divs cleared');
    console.log('Generate custom divs');
    var startValue = document.getElementById('startValue').value;
    var endValue = document.getElementById('endValue').value;   
    var fizzValue = document.getElementById('fizzValue').value;
    var buzzValue = document.getElementById('buzzValue').value;
    var fizzColor = document.getElementById('fizzColor').value;
    var buzzColor = document.getElementById('buzzColor').value;
    var fizzBuzzColor = document.getElementById('fizzBuzzColor').value;
    var noneColor = document.getElementById('noneColor').value;
    console.log('start value - ' + startValue);
    console.log('end value - ' + endValue);
    console.log('fizz value - ' + fizzValue);
    console.log('buzz value - ' + buzzValue);
    console.log('fizz color - ' + fizzColor);
    console.log('buzz color - ' + buzzColor);
    console.log('fizzbuzz color - ' + fizzBuzzColor);
    console.log('none color - ' + noneColor);
        for (startValue; startValue<=endValue; startValue++){
            const element = document.createElement('div');
            element.id="element" + startValue;
            
            elements.appendChild(element);
                if (startValue % fizzValue === 0 && startValue % buzzValue === 0){
                    element.setAttribute("id", "element" +startValue);
                    element.setAttribute("class", "FizzBuzz");
                    element.innerText="FizzBuzz " + startValue;
                    element.style.backgroundColor=fizzBuzzColor;
                    element.style.width=sl1.value + "px";
                    element.style.height=sl2.value + "px";
                }
                else if (startValue % fizzValue === 0 && startValue % buzzValue !== 0) {
                    element.setAttribute("id", "element" +startValue);
                    element.setAttribute("class", "Fizz");
                    element.innerText="Fizz " + startValue;
                    element.style.backgroundColor=fizzColor;
                    element.style.width=sl1.value + "px";
                    element.style.height=sl2.value + "px";
                }

                else if (startValue % buzzValue === 0 && startValue % fizzValue !== 0){
                    element.setAttribute("id", "element" +startValue);
                    element.setAttribute("class", "Buzz");
                    element.innerText="Buzz " + startValue;
                    element.style.backgroundColor=buzzColor;
                    element.style.width=sl1.value + "px";
                    element.style.height=sl2.value + "px";
                }

                else if (startValue % fizzValue !== 0 && startValue % buzzValue !== 0){
                    element.setAttribute("id", "element" +startValue);
                    element.setAttribute("class", "Empty");
                    element.innerText=startValue;
                    element.style.backgroundColor=noneColor;
                    element.style.width=sl1.value + "px";
                    element.style.height=sl2.value + "px";

                }
        }
}

// nezinu vai šis ir vajadzīgs
//  function addListeners() {
//     const submit = document.getElementById('generate');
//     submit.onclick = onClick;
// }

main();