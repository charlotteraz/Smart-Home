import { useEffect, useRef } from 'react';

/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The function does **not** run on component mount.
 * @param {*} effect Imperative function that can return a cleanup function.
 * @param {*} deps If present, effect will only activate if the values in the list change.
 */
const useDidMountEffect = (effect, deps) => {
    const didMount = useRef(false);
    useEffect(() => {
        if (didMount.current) {
            const unmount = effect();
            return () => unmount && unmount();
        }
        didMount.current = true;
        return undefined;
    }, deps);
};

export default useDidMountEffect;
