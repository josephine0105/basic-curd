import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  userDetails=[];
  details:any=[];
  constructor(public router:Router,public toastr: ToastrService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      "name": new FormControl('', Validators.required),
      "phone": new FormControl('', Validators.required),
      "email": new FormControl('', Validators.required),
    });
  }
  login() {
    
   
   console.log(this.details);
   if(this.userForm.valid){
    this.details=this.userForm.value;
      // this.userDetails.push(this.details)
      this.toastr.success('everything is broken', 'Major Error', {
        timeOut: 3000,
      });
      this.userForm.reset()
   }
  
  }
  viewDetails()
  {
    this.router.navigate(['/view'])
  }
  
  
}
