export const addToLocalStorage = <T>(key: string, value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLocalStorage = <T>(key: string): T | null => {
    const result = window.localStorage.getItem(key)
    if (result) {
        return JSON.parse(result);
    }
    return null;
}

export const removeFromLocalStorage = (key: string) => {
    window.localStorage.removeItem(key)
}