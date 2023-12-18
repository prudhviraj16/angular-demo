import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalsComponent } from '../modals/modals.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, public dialog: MatDialog) { }


  /* Login form */
  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  ngOnInit() {
  }

  /* Checking whether username and password are valid and then if yes, navigate to login or showing error*/
  public login(): void {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');
  
    if (usernameControl && passwordControl) {
      const username = usernameControl.value;
      const password = passwordControl.value;
  
      const users = this.authService.getRegisteredUsers();
      const foundUser = users?.find(user => user?.username === username && user?.password === password);
  
      if (foundUser) {
        // User found
        this.authService.userRole.next(foundUser?.role);
        this.router.navigate(["/"]);
        this.authService.login();
      } else {
        // No matching user found
        // alert("Please fill valid credentials");
        this.openDialog();
        this.loginForm.get('username')?.setValue(null);
        this.loginForm.get('password')?.setValue(null);
        this.loginForm.get('username')?.setErrors(null);
        this.loginForm.get('password')?.setErrors(null);
      }
    }
  }
  
  // Modal as a popup, if any errors
  openDialog() {
    const dialogRef = this.dialog.open(ModalsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /* Navigate to register router if clicked on register*/
  public register(): void {
    this.router.navigate(["/register"])
  }
}
