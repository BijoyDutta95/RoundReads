import {API} from '../API/Api'

export async function validateUser (){
    let body = JSON.stringify({
        token : localStorage.getItem('access_token')
    })
    await API.post('auth/jwt/verify/', body, {
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    .then(data=>{
        console.log('success access : ' + JSON.stringify(data.data))
        return true
    })
    .catch(err=>{
        console.log('err access: ' + err)
        getAccess()

    })
}

async function getAccess(){
    let body = JSON.stringify({
        refresh : localStorage.getItem('refresh_token')
    })
    await API.post('auth/jwt/refresh/', body, {
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    .then(data=>{
        console.log('success refresh : ' + (data.data.access))
        localStorage.setItem('access_token', data.data.access)
        return true
        
    })
    .catch(err=>{
        console.log('err refresh: ' + err)
        return false

    })
}