
function generateRandomNumber() {
   return Math.floor(Math.random() * 4)
}

function generateSmallRandomNumber() {
    return Math.floor(Math.random() * 3)
}

const Sentences = {
    neutral: ['maybe so', 'not today', 'some other time', 'possibly'],
    good: ['no doubt', 'absolutely', 'yes', 'very soon'],
    bad: ['no', 'doubtful', 'absolutely not', 'never']
}

var fullSentence = ''

function generateSentence() {
    let small = generateSmallRandomNumber()
    console.log(`Random number is: ${small}`)
    switch(small) {
        case 0:
            fullSentence = `The magic 8 ball brings neutral news: ${Sentences.neutral[generateRandomNumber()]}`
            console.log(fullSentence)
            break
        case 1:
            fullSentence = `The magic 8 ball brings good news: ${Sentences.good[generateRandomNumber()]}`
            console.log(fullSentence)
            break
        case 2:
            fullSentence = `The magic 8 ball brings bad news: ${Sentences.bad[generateRandomNumber()]}`
            console.log(fullSentence)
            break
        default:
            break
    }
}

generateSentence()