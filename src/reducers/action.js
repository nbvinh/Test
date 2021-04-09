
export const add = (data) => {
    return {
        type: 'ADD',
        data: data
    }
}
export const addtext = (value) => {
    return {
        type: 'TEXT',
        text : value
    }
}
export const remove = (item) => {
    return {
        type: 'DELETE',
        data : item
    }
}