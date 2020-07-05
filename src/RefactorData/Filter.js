function isString (value) {
    return typeof value === 'string' || value instanceof String;
}

function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
}


export const returnString = (item) =>{
    if(isString(item)){
        return(item)
    }
}

export const returnNumber = (item) =>{
    if(isNumber(item)){
        return(item)
    }
}