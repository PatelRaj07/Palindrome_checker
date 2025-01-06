function checkPalindrome() {
    const text = document.getElementById('inputText').value;
    const reversedText = text.split('').reverse().join('');
    const result = document.getElementById('result');
    if (text === reversedText) {
        result.textContent = `"${text}" is a palindrome.`;
    } else {
        result.textContent = `"${text}" is not a palindrome.`;
    }
}