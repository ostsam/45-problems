const cipher = (str, num) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (alphabet.includes(char)) {
        const index = (alphabet.indexOf(char) + num) % alphabet.length;
        result += alphabet[index];
        } else {
        result += char;
        }
    }
    
    return result;
}