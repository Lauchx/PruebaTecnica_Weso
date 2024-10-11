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
            average = Math.round((average / count ?? 0))
            return average
        })
    })

    

    return organizedGifts

}

function distributeGifts2(weights) {
    let organizedGifts = Array.from({ length: weights.length }, () => Array(weights[0].length).fill(0));

  for (let i = 0; i < weights.length; i++) {
    let average = 0
    let count = 0
    for (let j = 0; j < weights[i].length; j++) {
      average = 0
      count = 0
      count += weights[i - 1]?.[j] == null ? 0 : 1
      console.log("1: " + count)
      count += weights[i + 1]?.[j] == null ? 0 : 1
      console.log("2: " + count)
      count += weights[i]?.[j - 1] == null ? 0 : 1
      console.log("3: " + count)
      count += weights[i]?.[j + 1] == null ? 0 : 1
      console.log("4: " + count)
      count += weights[i][j] == null ? 0 : 1
      console.log("5: " + count)

      average += weights[i - 1]?.[j] ?? 0
      console.log("b:" + average)
      average += weights[i + 1]?.[j] ?? 0
      console.log("c:" + average)
      average += weights[i]?.[j - 1] ?? 0
      console.log("d:" + average)
      average += weights[i]?.[j + 1] ?? 0
      console.log("e:" + average)
      average += weights[i][j] ?? 0
      console.log("f:" + average)

      console.log("av: " +average + " count: " + count)
      average = count > 0 ? Math.round(average / count) : 0

      console.log("s" + average)
      organizedGifts[i][j] = average

    }
  }
  return organizedGifts
  }


let y = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4],
]


distributeGifts(y)

console.log(distributeGifts2(y))