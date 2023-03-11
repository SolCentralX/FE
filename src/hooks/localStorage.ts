
export const getItem = (name: any) => {
    return localStorage.getItem(name)
}

export const setItem = (name: any, value: any) => {
    return localStorage.setItem(name, value)
}
