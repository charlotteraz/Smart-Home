/**
 * Use `Debug` over `console.log` when printing a statement for production.
 */
export default class Debug {
    /**
     * Print debug statements to the console.
     * @param {*} message
     */
    static log = (message) => {
        // eslint-disable-next-line no-console
        console.log(message);
    };
}
