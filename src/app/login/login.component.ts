import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface SignUpModel {
  mobileNumber:number;
  fullName:string;
  password:string;
  userName:string;
  pincode:number;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  password:string='';
  userName:string='';
  savedData: any | null = null;

  
    constructor(private http : HttpClient, private _snackBar: MatSnackBar)
    {  }
  
    ngOnInit(): void {
      // console.log('ngoninit of add-item comp');
      
      } 
  
    add()
    {
      this.loginUser();
    }

    loginUser()
    {
      const val = localStorage.getItem(this.userName);
      
      if(val && this.password)
      {
        this.savedData = JSON.parse(val);
        if(this.savedData.password == this.password)
        {
          this. openSnackBar('Login success')
        }
        else
        {
          this.openSnackBar('Incorrect login');
        }
      }
      
      console.log(val);
    }

    

    
    openSnackBar(message: string) {
      this._snackBar.open(message, 'OK');
    }


  }
