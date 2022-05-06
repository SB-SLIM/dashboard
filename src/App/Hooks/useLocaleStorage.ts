import { useState } from 'react'

const useLocaleStorage = <T extends string>(
  key: string,
  initialValue: T
): [T, (newValue: T | ((previous: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    } catch (err) {
      return initialValue;
    }
  })

  const setValue = (value: T | ((previous: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    } catch (err) {
      // A more advanced implementation would handle the error case
      console.log("🚀 ~ file: useLocaleStorage.ts ~ line 28 ~ setValue ~ error", err)
    }

  }

  return [storedValue, setValue]
}

export default useLocaleStorage
