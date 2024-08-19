/**
 * dev - 'dev'
 * homolog - 'homolog'
 * prod - ''
 */
export const environment = 'dev'

export function setLocalStorage(key: string, value: string): void {
    localStorage.setItem(`${environment}-${key}`, value)
}

export function getLocalStorage(key: string): string | null {
    return localStorage.getItem(`${environment}-${key}`)
}

export function removeLocalStorage(key: string): void {
    localStorage.removeItem(`${environment}-${key}`)
}
