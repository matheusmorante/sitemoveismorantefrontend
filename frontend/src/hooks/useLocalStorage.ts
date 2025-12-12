import { useEffect, useState } from "react"


export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [value, setValue] = useState<T>(() => {
        try {
            const json = localStorage.getItem(key);
            return json ? (JSON.parse(json) as T) : initialValue;
        } catch {
            return initialValue
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch { }
    }, [key, value]);

    useEffect(() => {
        const handleStorage = (event: StorageEvent) => {
            if (event.key === key && event.newValue) {
                try {
                    setValue(JSON.parse(event.newValue));
                } catch { }
            }
        };

        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, [key]);

    return [value, setValue] as const;
}
