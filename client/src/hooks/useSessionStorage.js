/**
 * Provides access to the Window's session storage.
 * It allows the addition, modification, or deletion of stored data items.
 */
const useSessionStorage = () => {
    /**
     * Sets the value of the pair identified by key to value,
     * creating a new key/value pair if none existed for key previously.
     */
    const setItem = (key, value) => window.sessionStorage.setItem(key, value);

    /**
     * Returns the current value associated with the given key,
     * or null if the given key does not exist.
     */
    const getItem = (key) => window.sessionStorage.getItem(key);

    return { setItem, getItem };
};

export default useSessionStorage;
