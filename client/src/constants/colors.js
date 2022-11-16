const Colors = {
    white: '#ffffff',
    offWhite: '#eeeeee',
    black: '#000000',
    offBlack: '#343434',
    purple: '#ba55d3',
    blue: '#2d5e85',
    red: '#ed4337',
    lightRed: '#ff918f',
    loginButtonColor: '#1a4568',
    lightGray: '#dedede',

    lightBlue: '#5f84a1',
    darkBlue: '#1a4568',
    strongBlue: '#378acd',
    yellow: '#fddA0d',
};

export default Colors;

/**
 * Converts a Color attribute to RGB(A).
 * @param hex The hexadecimal string value.
 * @param alpha Optional alpha value [0, 1].
 */
export const HexToRGB = (hex, alpha = undefined) => {
    const h = '0123456789ABCDEF';
    const r = h.indexOf(hex[1]) * 16 + h.indexOf(hex[2]);
    const g = h.indexOf(hex[3]) * 16 + h.indexOf(hex[4]);
    const b = h.indexOf(hex[5]) * 16 + h.indexOf(hex[6]);
    if (alpha !== undefined) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `rgb(${r}, ${g}, ${b})`;
};
