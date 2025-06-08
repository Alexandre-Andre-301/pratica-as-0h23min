function converter(){
    var p = parseFloat(document.getElementById('celcios').value)
    var f = (p * 9/5) +32
    var k = p + 273.15
    var msg = " "
    var msg2 = " "
    if(isNaN(p)){
        msg = "insira um valor se deseja ver a conversão"
        document.getElementById('resul').innerHTML= msg
       
    }
    else{
        msg = `a temperatura em farenheit ser: ${f.toFixed(2)}`
        msg2 = `A temperatura em kelvin ser: ${k.toFixed(2)}`
        document.getElementById('resul').innerHTML= msg
        document.getElementById('resul2').innerHTML= msg2
    }
}