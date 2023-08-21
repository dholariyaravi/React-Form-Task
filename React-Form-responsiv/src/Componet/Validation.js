export default function Validation(data) {

    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/; 
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/; 


    if(!data.Fristname){
        errors.Fristname = "Fristname is Requrired!";
    }
    else if(data.Fristname.length < 5){
        errors.Fristname = 'hbwbw bjdw jdd djd wndwjdw n'
    } 
    if(!data.Lastname){
        errors.Lastname = "Lastname is Requrired!";
    }
    else if(data.Lastname.length < 5){
        errors.Lastname = 'hbwbw bjdw jdd djd wndwjdw n'
    } 

    // ================================================ 
    
    if (data.email === "") {
       errors.email = "Email is Requrired"
    }
    else if(!email_pattern.test(data.email)) {
        errors.email = "Email did'nt match"
    }

    if(data.password === ""){
       errors.password = "password is Requrired"
    }
    else if(!password_pattern.test(data.password)){
        errors.password = "password did'nt match"
    }

    return errors ;

}