export const addToLocalStorage = <T extends string>(key: string, value: T) => {
    localStorage.setItem(key, value)
}

export const getFromLocalStorage = (key: string) => {
    const result = localStorage.getItem(key)
    return result ? JSON.parse(result) : null
}

export const removeFromLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}