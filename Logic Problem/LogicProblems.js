function organizeGifts(gifts) {
    let number = ''
    let auxiliar = ''
    let [numberPallets, numberBox, looseGift] = [0, 0, 0]
    let result = []
    for (let i = 0; i < gifts.length; i++) {
        if (!isNaN(Number(gifts[i]))) 
        {
            number += gifts[i].toString()  
        }
        else {
            number = Number(number) 
            numberPallets = Math.floor(number / 50) 
            number = number - (50 * numberPallets)  
            numberBox = Math.floor((number / 10))  
            looseGift = number - (10 * numberBox) 

            let numberFor = numberPallets + numberBox + looseGift

            let bol = false
            for (let j = 0; j < numberFor; j++) { 
                if (numberPallets !== 0) {
                    auxiliar += `[${gifts[i]}]`
                    numberPallets -= 1
                }
                else if (numberBox !== 0) {
                    auxiliar += `{${gifts[i]}}`  
                    numberBox -= 1
                }
                else {
                    if ((looseGift - 1) === 0) {
                        if (bol === false) {
                            auxiliar += `(${gifts[i]})`
                        } else {
                            auxiliar += `${gifts[i]})`
                        }
                    }
                    else if (bol === false) {
                        auxiliar += `(${gifts[i]}`
                        bol = true
                    }
                    else {
                        auxiliar += `${gifts[i]}`
                    }
                    looseGift -= 1
                }
            }
            result.push(auxiliar)
            [numberPallets, numberBox, looseGift] = [0, 0, 0]
            auxiliar = ''
            number = ""
        }
    }
    return result.join('')
}

function distributeGifts(input) {
    let organizedGifts = input.map((row, i) => {
        return row.map((nGift, j) => {
            let average = 0
            let count = 0
            // count es el contador de lugares null o undefined, que existen 
            count += input[i - 1]?.[j] == null ? 0 : 1
            count += input[i + 1]?.[j] == null ? 0 : 1
            count += input[i]?.[j - 1] == null ? 0 : 1
            count += input[i]?.[j + 1] == null ? 0 : 1
            count += nGift == null ? 0 : 1
            // se hace la suma de todos los vecinos, incluyendo el propio. Corrobora que ninguno sea null, o undefined y si lo es, se suma 0
            average = (input[i - 1]?.[j] ?? 0) + (input[i + 1]?.[j] ?? 0) + (input[i]?.[j - 1] ?? 0) + (input[i]?.[j + 1] ?? 0) + (nGift ?? 0)
            average = count > 0 ? Math.round(average / count) : 0
            return average
        })
    })
    return organizedGifts
}



