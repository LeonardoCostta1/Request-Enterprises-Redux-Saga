export function authentication(auth){
    return{
        type:'AUTH',
        payload:auth
    }
}

export function listEnterprises(){
    return{
        type:'@LIST_ENTERPRISES',
    }
}

export function id(id){
    return{
        type:'@ENTERPRISE_ID',
        payload:id
    }
}