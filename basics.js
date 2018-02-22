
console.log("hello");


(function () {
    'use strict'
    // minden amit ide irok az strict mode-ban fog futni
    // a strict mode szigorubb szabalyokkal futattja
    // a javascript kodot, és több hibát fog kiírni a böngésző
    // amit enélkül nem tenne meg
    
    // ez egy újradeklarálható változó lesz:
    var szoveg2 = "valami";
    console.log(szoveg2);
    // erre nem kapunk hibat, mert a var kulcsszóval deklarált változót
    // újradeklarálhatjuk:
    var szoveg2 = "valami";
    
    let szoveg3 = "szöveg3 ezt let-tel hoztuk létre";
    console.log(szoveg3);
    // a let kulcsszóval létrehozott változókat nem lehet újradeklarálni,
    // a következő sort, ha nem kommentezzükki , hibát kapunk:
    // let szoveg3 = "szöveg3 ezt let-tel hoztuk létre";
    
    // ez egy érték adás, nem deklarálás:
    szoveg3 = "uj erteket kap a szoveg3"
    
    // a console.log egy fuggveny, aminek atadjuk a szoveg3 valtozot
    // a console.log egy más ember által írt kód, ami azt csinálja
    // a neki adott változóval, hogy kiírja a console-ra
    console.log(szoveg3);
    
    // kiirathatunk egyszerre szoveget és változót is:
    let szam1 = 94;
    console.log("a szam1 valtozo értéke: "+szam1);
    
}()); //itt van vége a strict mode-nak, ez után már nem fog strict
        // mode-ban futni a kód



// implicit global változó lesz a szöveg
// global: a szöveg változó mindenhol elérhető lesz a kódban
// implicit global változót lehetőleg ne használjunk!
szoveg = "3";

console.log(szoveg);


