import Fraction from 'fraction.js'


export const limitString = (string, limit = 17) => {
    const limitedString = [];

    if (string.length > limit) {
        string.split(' ').reduce((accumulator, current) => {
            if (accumulator + current.length <= limit) {
                limitedString.push(current);
            }
            return accumulator + current.length;
        }, 0);

        return `${limitedString.join(' ')}...`;
    }

    return string;
};


export const formatCount = (count) => {
    let cantFetch = '?';
    if (count) {
        const [int, dec] = count.toString().split('.').map(item => Number(item));

        if (!dec) return count;

        if (int === 0) {
            const fraction = Fraction(count);
            return `${fraction.n}/${fraction.d}`;
        } else {
            const fraction = new Fraction(count - int);
            return `${int} ${fraction.n}/${fraction.d}`;
        }
    }

    return cantFetch;
};

