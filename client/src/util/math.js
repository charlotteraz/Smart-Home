/**
 * Clamps a middle value within a range of values
 * between a defined minimum bound and a maximum bound.
 * @param {*} value Input value.
 * @param {*} min Minimum bound.
 * @param {*} max Maximum bound.
 * @returns number
 */
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export { clamp };
