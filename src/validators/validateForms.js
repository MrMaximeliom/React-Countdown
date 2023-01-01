import api from "../api/events"
import axios from '../api/users'
const ValidateTextField = (value) => {
    let stringOnlyRegex = /^[a-zA-Z\s]*$/g
    if(!stringOnlyRegex.test(value))
    return false
    else
    return true

}
const ValidateEmailField= (value) => {
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if(!emailRegex.test(value))
    return false
    else
    return true


}
const IsEmailAvailable = async (email) =>{
    try{
        
        const response = await axios.get(`emails/${email}`)
        if(response.status === 200){

            return false
        }
        else{
            return true
        }

    }
    catch(error){
        return true
        
    }
}
const ValidateUsernameField = (username) =>{
    let usernameRegex = /^[a-zA-Z]{4,}$|^[_][a-zA-Z]{4,}$|^[a-zA-Z]{2,}[_]{1}[a-zA-Z]{2,}/g
    if(!usernameRegex.test(username))
    return false
    else
    return true
}
const IsUsernameAvailable = async (username) =>{
    try{
    const response = await axios.get(`usernames/${username}`)
    if(response.status === 200)
    {
        return false

    }
    }
    catch(error)
    {
        return true
    }
}

/*
password policy :
    password must contain 1 number (0-9)
    password must contain 1 uppercase letters
    password must contain 1 lowercase letters
    password must contain 1 non-alpha numeric number
    password is 8-16 characters with no space
*/

const ValidatePasswordField = (password) =>{
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/g
    if(!passwordRegex.test(password))
    {
        return false

    }
   
    else
    {
        return true
    }
   
}

const ValidateConfirmPasswordField = (password,confirmPassword) =>{
    if(password === confirmPassword)
    return true
    else
    return false
}


const validator = {
    validateTextField : ValidateTextField,
    validateEmailField : ValidateEmailField,
    validateUsernameField : ValidateUsernameField,
    validatePasswordField:ValidatePasswordField,
    validateConfirmPasswordField:ValidateConfirmPasswordField,
    isEmailAvailable:IsEmailAvailable,
    isUsernameAvailable:IsUsernameAvailable
}
 
export default validator;