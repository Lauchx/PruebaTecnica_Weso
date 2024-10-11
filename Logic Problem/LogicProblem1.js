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


