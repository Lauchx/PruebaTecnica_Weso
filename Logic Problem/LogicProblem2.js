const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4],
];

function distributeGifts(input) {

    /*[null, 5],
    [3, null] */
    let average = 0;
    let count = 0
    let ordeganizedGifts = input.map((row, i) => {

       return row.map((nGift, j) => {

            // count es el contador de lugares null o undefined, que existen 
            count += input[i - 1]?.[j] == null ? 0 : 1
            count += input[i + 1]?.[j] == null ? 0 : 1
            count += input[i]?.[j - 1] == null ? 0 : 1
            count += input[i]?.[j + 1] == null ? 0 : 1
            count += nGift == null ? 0 : 1


            // se hace la suma de todos los vecinos, incluyendo el propio. Corrobora que ninguno sea null, o undefined y si lo es, se suma 0


            average = input[i - 1]?.[j] ?? 0 + input[i + 1]?.[j] ?? 0 + input[i]?.[j - 1] ?? 0 + input[i]?.[j + 1] ?? 0 + nGift ?? 0

            average = average / count ?? 0

            input[i][j] = average

            average = 0
            count = 0
        })
    })

    return ordeganizedGifts

}