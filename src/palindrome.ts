function Palindrome(str: String) {

    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()


    const reversedStr = cleanStr.split('').reverse().join('')

    return cleanStr === reversedStr
}

const string = "Level level"

console.log(`${string} is palindrome: ${Palindrome(string)}`);


