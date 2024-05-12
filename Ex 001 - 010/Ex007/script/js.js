function calc(){
    let num1 = Number(document.getElementById('num1').value)
    let conta = num1 + (num1 * 0.15)
    let conta1 = num1 - (num1 * 0.2)
    alert(`Seu peso é ${num1}, caso você ganhe 15% ficará: ${conta}, caso você perca 20% ficará: ${conta1} `)

}