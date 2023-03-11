
export const getItem = (name: any) => {
    if (window) {
        return window.localStorage.getItem(name)
    }
}

export const setItem = (name: any, value: any) => {
    if (window) {
        return window.localStorage.setItem(name, value)
    }
}
