const decrEsEl=document.getElementById("descr-es");
const viaEl=document.getElementById("via");
const numeriEstrattiEl=document.getElementById("numeri-estratti");
const timerEl=document.getElementById("timer");
let arrayNumeri=[];
const timerTitleEl=document.getElementById("timer-title");
let time;
let tempoScadutoEl= document.getElementById("tempo-scaduto");
let secondsLeft=10;
//let numero1El=document.getElementById("numero1");
//let numero2El=document.getElementById("numero2");
//let numero3El=document.getElementById("numero3");
//let numero4El=document.getElementById("numero4");
//let numero5El=document.getElementById("numero5");
let inserisciEl=document.getElementById("inserisci");
let okEl=document.getElementById("ok");
let bloccoInserisciEl=document.getElementById("blocco-inserisci");
//let inputs=document.querySelectorAll(".campo");

viaEl.addEventListener("click", function(){
    decrEsEl.classList.add("d-none");
    viaEl.classList.add("d-none");
    arrayNumeri= generaTotNumCasuali(1, 100, 5);
    for(let i=0; i<arrayNumeri.length; i++){
        let numeroCasuale=document.createElement("span");
        numeroCasuale.innerHTML=arrayNumeri[i];
        numeroCasuale.style.fontSize="40px";
        numeriEstrattiEl.append(numeroCasuale);
    }
    timerTitleEl.style.display="block";
    timerEl.style.display="block";
    time= setInterval(tick, 1000);
})

const arrayIndovinati=[];

okEl.addEventListener("click", function(){
    let indovinatiEl=0;
    let inputs=[];
    inputs=document.querySelectorAll(".campo");
    for(let l=0; l<arrayNumeri.length; l++){
        for(let m=0; m<inputs.length; m++){
            if(inputs[m].value==arrayNumeri[l]){
                indovinatiEl++;
                arrayIndovinati.push(inputs[m].value);
            }
        }     
    }
    let testoIndovinatiEl=document.getElementById("testo-indovinati");
    bloccoInserisciEl.style.display="none";
    testoIndovinatiEl.innerHTML="Hai indovinato " + indovinatiEl +" numeri"
    if(indovinatiEl>0){
        let str=testoIndovinatiEl.innerHTML +": "
        for(let n=0;n<arrayIndovinati.length;n++){
          str= testoIndovinatiEl.innerHTML= testoIndovinatiEl.innerHTML+"  " + arrayIndovinati[n] + "   ";
        }
        testoIndovinatiEl.innerHTML=str;
    }
})





//----------------------------------functions-------------------------------------------------
function generaTotNumCasuali(min, max, quanti){
    let arrayCasuali=[];
    for(let i=0; i<quanti; i++){
        numero=Math.floor(Math.random()*max + min);
        arrayCasuali.push(numero);
    }
    return arrayCasuali;
}

function tick(){
    secondsLeft--;
    timerEl.innerText=secondsLeft;
    
    if(secondsLeft==0){
        numeriEstrattiEl.innerHTML=" ";
        clearInterval(time);
        bloccoInserisciEl.style.display="block";
        //inserisciEl.style.display="block";
        okEl.style.display="block";
            //numero1El.style.display="inline-block";
            //numero2El.style.display="inline-block";
            //numero3El.style.display="inline-block";
            //numero4El.style.display="inline-block";
            //numero5El.style.display="inline-block";
    }
}
