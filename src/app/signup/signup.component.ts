import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export interface SignUpModel {
  mobileNumber:number;
  fullName:string;
  password:string;
  userName:string;
  pincode:number;
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  mobileNumber:any;
  fullName:string='';
  password:string='';
  userName:string='';
  pincode:any;

  
  
    constructor(private http : HttpClient, private _snackBar: MatSnackBar, private router: Router)
    {  }
  
    ngOnInit(): void {
      // console.log('ngoninit of add-item comp');
      
      } 
  
    add()
    {
      this.registerUser();
    }

    registerUser()
    {
      // let receiverurl = 'http://localhost:8080/order/customer/id/'+this.receiverid;
      // this.http.get<CustomerModel>(receiverurl).subscribe(data => 
      //   {
      //     // console.log(data);
      //     this.receiverModel.age = data.age;
      //     this.receiverModel.name = data.name;
      //     this.receiverModel.phone = data.phone;
      //     this.receiverAddressModel.area = data.address.area;
      //     this.receiverAddressModel.housenumber = data.address.housenumber;
      //     this.receiverAddressModel.pincode = data.address.pincode;
      //     this.receiverModel.address = this.receiverAddressModel;
      //     this.getItem();
      //   });

      let signupModel = {mobileNumber: this.mobileNumber, fullName: this.fullName, password:this.password, userName:this.userName , pincode:this.pincode};
      const data = JSON.stringify(signupModel);
      localStorage.setItem(this.userName, data);

      this.router.navigate(['/login']);
    }

    add1()
    {
      const val = localStorage.getItem('user1');
      console.log(val);
    }

    
    openSnackBar(message: string) {
      this._snackBar.open(message, 'OK');
    }


  }
