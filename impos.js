function imposto(){
    var salario = parseFloat(document.getElementById("imposto").value)
    var msg= " "
    var msg2 = " "
    if(isNaN(salario)){
        msg = "Insira um valor para poder ver o seu imposto"
        document.getElementById('resul').innerHTML = msg
    }
    else if(salario <=70000){
        msg = "o imposto a pagar é de 0%"
        document.getElementById('resul').innerHTML = msg
    }
    else if(salario > 70000 && salario <=150000){
        var ex = salario - 70000
        var imposto = ex*0.10
        msg = `sera aplicado um imposto de 10% sobre o seu salario de ${salario}Kzs`
        msg2= `o  imposto a pagar ser de ${imposto.toFixed(2)}Kzs`
        document.getElementById('resul').innerHTML = msg
        document.getElementById('resul2').innerHTML = msg2

    }
    else if(salario >150000 && salario <=300000){
        var ex = salario -150000
        var imposto = ex *0.20
        msg = `sera aplicado um imposto de 20% sobre o seu salario de ${salario}Kzs`
        msg2= `o imposto a se pagar ser de ${imposto.toFixed(2)}`
        document.getElementById('resul').innerHTML = msg
        document.getElementById('resul2').innerHTML = msg2
    }
    else{
      var ex = salario - 300000
      var imposto = ex *0.30
      msg= `sera aplicado um imposto de 30% sobre o seu salario de ${salario}Kzs`
      msg2 = `o imposto a se pagar ser de ${imposto.toFixed(2)}Kzs`
    document.getElementById('resul').innerHTML = msg
    document.getElementById('resul2').innerHTML = msg2
    }

}