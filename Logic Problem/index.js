




function decode(message) {
    let insideParenthesis = false
    let string = ''
    let result = ''
    let auxiliar = ''
    let doubleParenthesis = false

    // hola (odnum)
    for (let i = 0; i < message.length; i++) {

        if (message[i] == '(') {
            if (insideParenthesis == true) {
                doubleParenthesis = true
            }
            else {
                insideParenthesis = true
                string = ''
            }
        }
        else if (message[i] == ')') {
            if (auxiliar !== '') {
                auxiliar = auxiliar.split('').reverse().join('')
                console.log("rever: " + auxiliar)
                string += auxiliar
                doubleParenthesis = false
                auxiliar = ''
            } else {
                insideParenthesis = false
                result += string.split('').reverse().join('')
            }
        }
        else if (doubleParenthesis == true) {
            auxiliar += message[i]
        }
        else if (insideParenthesis === true) {
            string += message[i]
        }
        else {
            result += message[i]
            console.log("result: " + result)
        }

        console.log(string)

    }
    console.log("Este es el auxiliar: " + auxiliar)
    console.log("Este es el resultado: " + result)


    return result

}


//decode('sa(u(cla)atn)s')