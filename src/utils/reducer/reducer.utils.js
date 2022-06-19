export const createAction = (type,payload) => {
    console.log("type is",type)
    console.log("payload is",payload)
    return {type,payload}
}