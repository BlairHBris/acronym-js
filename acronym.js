export function parse(word) {
    return word
        .split(/\s/)
        .reduce(function (accumulator, word) {
            return accumulator + word.charAt(0).toUpperCase();
        }, '');
}

