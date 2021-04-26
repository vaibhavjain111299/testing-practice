module.exports = capitalize;

function capitalize(string) {
    const splitStr = string.split("");
    splitStr[0] = splitStr[0].toUpperCase();
    return splitStr.join("");
}