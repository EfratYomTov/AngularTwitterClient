import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component ({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{

    loginForm:FormGroup;

    constructor(private formBuilder: FormBuilder){
        this.loginForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password:  new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
        if(this.loginForm.invalid)
        {
            alert("login failed, email or password is invalid");
            return;
        }
        else
        {   
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
        }
    }

}