function fn1(){
    let rng1 = document.getElementById('r1').value;
    let rng2 = document.getElementById('r2').value;
    let rng3 = document.getElementById('r3').value;
    let rng4 = document.getElementById('r4').value;
    let a1 = document.getElementById('a1')
    let a2 = document.getElementById('a2')
    let a3 = document.getElementById('a3')
    let a4 = document.getElementById('a4')
    let box = document.querySelector('.box')
    a1.value = rng1;
    a2.value = rng2;
    a3.value = rng3;
    a4.value = rng4;
    box.style.borderRadius = `${rng1}px ${rng2}px ${rng3}px ${rng4}px`
}