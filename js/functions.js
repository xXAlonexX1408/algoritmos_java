
// document.body.onload = function () {
// alert(" buenas noches ")
// }

function operaciones() {

    var a = 0;
    var b = 0;
    var suma = 0;
    var resta = 0;
    var multi = 0;
    var divi = 0;

    alert( "este algoritmo realizara las operaciones basicas de dos numeros ingresados por el usuario" );

   a = parseInt (prompt(" por favor digite el primer numero a operar "));
   b = parseInt  (prompt(" por favor digite el segundo numero a operar "));
 
   suma = a + b;
   resta = a - b;
   multi = a * b;
   divi = a / b;

   alert(" el resultado de la suma de los dos numeros es = " + suma +"  el resultado de la resta es = "+ resta + "  el resultado de la multiplicacion es = "+ multi +"  el resultado de la division es =  "+ divi );
   
}

function numeropar() {

    var a = 0;
    

    alert(" este algoritmo mostrara en pantalla si el numero ingresado por un usuario es par o impar ");

    a = parseInt ( prompt ( " por favor digite un numero " )  );

    if ( a % 2 == 1) {

         alert(" el numero es impar ");
        
    } else {

         alert(" el numero es par ");   
    }

}

function mayordosnumeros() {

    var a = 0;
    var b = 0;

    alert(" este algoritmo mostrara en pantalla si de dos numeros ingresados por el usuario cual es mayor  ");

    a = parseInt ( prompt ( " por favor digite el primer numero " )  );
    b = parseInt ( prompt ( " por favor digite el segundo numero " )  );

    if ( a>b) {

         alert(" el numero "+ a + " es mayor ");
        
    } else {

         alert(" el numero " + b + " es mayor ");   
    }

}

    function menortresnumeros() {

        var a = 0;
        var b = 0;
        var c = 0;

        alert(" este algoritmo mostrara en pantalla si de tres numeros ingresados por el usuario cual  de ellos es menor  ");
    
        a = parseInt ( prompt ( " por favor digite el primer numero " )  );
        b = parseInt ( prompt ( " por favor digite el segundo numero " )  );
        c = parseInt ( prompt ( " por favor digite el tercer numero " )  );

        if ( a == b && b == c ) {
    
             alert(" los numeros son iguales ");
            
        } else if ( a < b && a < c) {
    
             alert(" el numero " + a + " es menor ");   
        }

        else  if  ( b < c && b < a)    {

            alert(" el numero " + b + " es menor "); 
        }

        else {

            alert(" el numero " + c + " es menor "); 

        }

    }

    function numerocuadrado () {

    var a = 0;
 
    alert(" este algoritmo realizara la operacion de llevar un numero al cuadrado ingresado por el usuario  ");

    a = parseInt ( prompt ( " por favor digite un numero " )  );

    a = a ** 2

    alert(" el numero registrado al cuadrado es = " + a )

    }

    function areatriangulo()  {

        var a = 0;
        var b = 0;
        var area = 0;

        alert(" este algoritmo puede hallar el area de triangulo  ");

        a = parseInt ( prompt ( " por favor digite la altura del triangulo " )  );
        b = parseInt ( prompt ( " por favor digite la base del triangulo " )  );
       
        area = (a * b) / 2

        alert(" el area del traingulo es =  " + area )

    }

    function conversiones() {

        var m = 0;
        var conver = 0;
        
    
        alert( "este algoritmo realizara conversion de  una medida ingresada por el usuario en metros a cm, km y pulgadas" );
    
       m = parseInt (prompt(" por favor digite una medida en metros "));
      
     
       cm = m * 100;
       km = m / 1000;
       pul = m * 39.37;
       
    
       alert(" la conversion en centimetros es = " + cm +"cm  la conversion en kilometros es = "+ km + "km  la conversion en pulgadas es = "+ pul+"pul" );
       
    }

    function cifras() {

        var a = 0;
        
    
        alert( "este algoritmo mostrata cuantas cifras tiene un numero digitado por el usuario" );
    
       a = parseInt (prompt(" por favor digite un numero "));
      
     
      if (a < 10) {

        alert(" el numero tiene una cifras ")
          
      } else if ( a <100  ) {


        alert(" el numero tiene dos cifras ")

      }
        else if ( a <1000  ) {

            alert(" el numero tiene tres cifras ")
          
      }

      else {

        alert(" el numero tiene cuatro cifras ")

      }
       
    
       
       
    }

    function edad() {

        var a = 0;
        var edad = 0;
        
    
        alert( "este algoritmo mostrata tu año de nacimiento segun tu edad" );
    
       edad = parseInt (prompt(" por favor digita tu edad "));
      
     
       a = 2022 - edad;
      
       
        alert(" el año en el cual usted nacio es = " + a)
       
    }


    function manzanas() {

        var a = 0;
        var b = 0;
        var p = 0;
        var c = 0;
    
        alert( "este algoritmo mostrata el descuento que tiene un usuario por la compra de unas manzanas" );
    
       a = parseInt (prompt(" por favor digite cuantos kilos de manzanas adquirio"));
      
     
      if (a < 3) {

        c = a * 4500
        
      } else if ( a <5  ) {

       b = a * 4500
       p = b *0.10
       c = b - p

      }
        else if ( a <10  ) {

       b = a * 4500
       p = b *0.15
       c = b - p
          
      }

      else {

        b = a * 4500
        p = b *0.20
        c = b - p
                
       }

      alert(" el valor total que debe pagar por las manzanas es = " + c)

    }


    function notas() {

        var a = 0;
        var b = 0;
        var p = 0;
        var c = 1;
    
        alert( "este algoritmo realizara el promedio de un alumno con 5 calificaciones " );
    
     while (c < 6) {

        a = parseInt (prompt(" por favor digite la " + c + " nota "));

        c = c + 1;
        b = b + a;

         
     }

     p = b/5

     if (p == 3 ) {

        alert(" el alumno aprobo");
         
     }

     else {

        alert(" el alumno no aprobo ");

     }

       
      
    }

    function inversion() {


      var a = 0;
      var b = 0;
      var n = 0;
      var c = 0;
      var i = 0;

      alert( "este algoritmo dara el resultado de las ganancias de una inversion  " );

      a = parseInt (prompt(" por favor digite los años de la inversion "));
      b = parseInt (prompt(" por favor digite el valor de la inversion "));

      n = a * 12
      i = b * 0.02
      i = i * n
      a = a * n
      c = a + i


      alert(" las ganancias reflejafas seran de = " + c)


    }

       

