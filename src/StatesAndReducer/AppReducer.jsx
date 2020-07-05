export default (state,action)=>{
    switch(action.type){
        case 'get':
            console.log(`In reducer ${action.payLoad}`)
            return {
                ...state,
                countryName:action.payLoad
            }
        default :
            return ''      
    }
}