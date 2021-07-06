
/* 
window.screen.height
window.onscroll = function(){
    const yscr = window.scrollY;
    console.log(yscr)
    detectScroll();
}; */

window.addEventListener('scroll',function(){
    var ventana = window.screen.height;
    var promedio = ventana / 1.5;
    var promedioDos = ventana / 2.6;
    var promedioTres = ventana / 2;




/*  ###### Animaciones del paso a paso crear cuenta ###### */


 /*   Capturando div padres */
    var recargCnos = document.getElementById("recargCnos");
    var inforReqf = document.getElementById("inforReqf");
    var enviarInform = document.getElementById("enviarInform");
    var reaUTransf = document.getElementById("reaUTransf");
    var compraCasopay = document.getElementById("compraCasopay");



 /*   Calculando distancia entre el div y la ventana */

    var distanciarecargCnos = recargCnos.getBoundingClientRect().top;
    var distanciainforReqf = inforReqf.getBoundingClientRect().top;
    var distanciaenviarInform = enviarInform.getBoundingClientRect().top;
    var distanciareaUTransf = reaUTransf.getBoundingClientRect().top;
    var distanciacompraCasopay = compraCasopay.getBoundingClientRect().top;



      if(distanciarecargCnos < promedio){

        let laptop = document.getElementById("laptopImg");
        let recarga = document.getElementById("recar");
        let txtRecar = document.getElementById("txtRecar");
        let circulo2 = document.getElementById("circulo2");


        laptop.classList.add("animate__animated","animate__backInLeft","animate__slow","3s");
        recarga.classList.add("animate__animated","animate__backInRight", "animate__slow","3s");
        txtRecar.classList.add("animate__animated","animate__heartBeat","animate__delay-3s","animate__slow","animate__repeat-1");
        circulo2.classList.add("animate__animated","animate__heartBeat","animate__delay-2s","animate__slow","animate__repeat-1");
    
    }

    if(distanciainforReqf < promedio){

        let request = document.getElementById("request");
        let txtRequest = document.getElementById("txtRequest");
        let formRequest = document.getElementById("formRequest");

        request.classList.add("animate__animated","animate__backInLeft","animate__slow","3s");
        txtRequest.classList.add("animate__animated","animate__jello","animate__delay-3s","animate__slow","animate__repeat-1");
        formRequest.classList.add("animate__animated","animate__backInRight", "animate__slow","3s");
    }


    if(distanciaenviarInform < promedio){

        let enviarPas = document.getElementById("enviarPas");
        let txtenviar = document.getElementById("txtenviar");
        let circulo3 = document.getElementById("circulo3");
        let crear = document.getElementById("crear");
        let txtcrear = document.getElementById("txtcrearx");
        let circulo4 = document.getElementById("circulo4");

        enviarPas.classList.add("animate__animated","animate__backInLeft","animate__slow","3s");
        txtenviar.classList.add("animate__animated","animate__tada","animate__delay-3s","animate__slow","animate__repeat-1");
        circulo3.classList.add("animate__animated","animate__heartBeat","animate__delay-2s","animate__slow","animate__repeat-1");
        crear.classList.add("animate__animated","animate__backInRight", "animate__slow","3s");
        txtcrear.classList.add("animate__animated","animate__tada","animate__delay-3s","animate__slow","animate__repeat-1");
        circulo4.classList.add("animate__animated","animate__heartBeat","animate__delay-2s","animate__slow","animate__repeat-1");
    }


    if(distanciareaUTransf < promedio){

        let transf = document.getElementById("transf");
        let txttransf = document.getElementById("txttransf");

        transf.classList.add("animate__animated","animate__rotateInUpLeft","animate__slow","3s");
        txttransf.classList.add("animate__animated","animate__pulse","animate__delay-3s","animate__slow","animate__repeat-1");

    }

    if(distanciacompraCasopay < promedioDos){
        let regist = document.getElementById("regist");
        let txtregist = document.getElementById("txtregist");
        let payy = document.getElementById("payy"); 
        let txt = document.getElementById("txt");
        let txtDs = document.getElementById("txtDs");
        let circ5 = document.getElementById("circ5"); 

        regist.classList.add("animate__animated","animate__flipInX","animate__slow","3s");
        txtregist.classList.add("animate__animated","animate__tada","animate__delay-3s","animate__slow","animate__repeat-1");
        payy.classList.add("animate__animated","animate__flipInX","animate__slow","3s");
        txt.classList.add("animate__animated","animate__tada","animate__delay-3s","animate__slow","animate__repeat-1");
        txtDs.classList.add("animate__animated","animate__flash","animate__delay-3s","animate__slow","animate__repeat-1");
        circ5.classList.add("animate__animated","animate__flip","animate__delay-2s","animate__slow","animate__repeat-1"); 

    }
/*  ###### Fin Animaciones del paso a paso crear cuenta ###### */




/*  ###### Animaciones del paso a paso como recargar en la web ###### */

 /*   Capturando div padres */

 let laptopW = document.getElementById("laptopW");
 let comoRec = document.getElementById("comoRec");
 let accesoPO = document.getElementById("accesoPO");
 let cajeroUser = document.getElementById("cajeroUser");
 let ventan = document.getElementById("ventan");
 let pasoModif = document.getElementById("pasoModif");
 let numYmont = document.getElementById("numYmont");
 let pas4Reca = document.getElementById("pas4Reca");
 let recc = document.getElementById("recc");
 let pasoModi = document.getElementById("pasoModi");
 let procesarImg = document.getElementById("procesarImg");
 let ultImg = document.getElementById("ultImg");
 let ultPas = document.getElementById("ultPas");













  /*   Calculando distancia entre el div y la ventana */

  var distancialaptopW = laptopW.getBoundingClientRect().top;
  var distanciacajeroUser = cajeroUser.getBoundingClientRect().top;
  var distanciacajeroventan = ventan.getBoundingClientRect().top;
  var distanciacajeronumYmont = numYmont.getBoundingClientRect().top;
  var distanciapasoModi = pasoModi.getBoundingClientRect().top;
  var distanciapasoulti = ultImg.getBoundingClientRect().top;
  var distanciapasoultiD = ultPas.getBoundingClientRect().top;








  if(distancialaptopW < promedioDos){

    laptopW.classList.add("animate__animated","animate__backInLeft","animate__repeat-1");
    comoRec.classList.add("animate__animated","animate__tada","animate__repeat-1");
    accesoPO.classList.add("animate__animated","animate__backInRight","animate__faster","animate__repeat-1");

  
}


if(distanciacajeroUser < promedio){

    cajeroUser.classList.add("animate__animated","animate__flipInX","animate__slow","3s");
    ventan.classList.add("animate__animated","animate__fadeInBottomLeft","animate__slow","3s");
    pasoModif.classList.add("animate__animated","animate__backInRight", "animate__slow","3s");
    
}

if(distanciacajeronumYmont < promedio){

    pas4Reca.classList.add("animate__animated","animate__backInLeft","animate__slow","3s");
    recc.classList.add("animate__animated","animate__backInRight", "animate__slow","3s");
   
    
}



if(distanciapasoModi < promedio){

    pasoModi.classList.add("animate__animated","animate__backInLeft","animate__slow","3s");
    procesarImg.classList.add("animate__animated","animate__backInRight", "animate__slow","3s");
   
    
}

if(distanciapasoulti < promedio){

    ultImg.classList.add("animate__animated","animate__flipInY","animate__slow","3s");
    ultPas.classList.add("animate__animated","animate__rotateInUpLeft", "animate__slow","3s");
   
    
}


  
  })
