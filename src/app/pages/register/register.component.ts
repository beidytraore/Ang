import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  public user = {
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
  }

  ngOnInit(): void {
  }

  formSubmit() {
    // alert('submit');
    console.log(this.user);
    if(this.user.username=='' || this.user.username ==null) {
      // alert('User is required !!');
      this.snack.open('Username is required !!','', {
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;
    }

    //validate

    //adduser:userService
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data)
        // alert("Success");
        Swal.fire('Success done !!','User id is ' + data.id,'success');
      },
      (error)=>{
        //error
        console.log(error);
        // alert('something went wrong');
        this.snack.open('something went wrong !!','', {
          duration:3000,
        })
      }
    )
  }

}
