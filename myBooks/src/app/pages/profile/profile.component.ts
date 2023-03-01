import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public newUser: User

  constructor(){
    this.newUser = new User( 1, "Fernando" , "Marini" , "fer.ms114@gmail.com" , "../../../assets/fm.jpg" , "fer123" )
  };

  // Tomo dato del Html
  public newDate( newName: HTMLInputElement, newLastName: HTMLInputElement, newEmail: HTMLInputElement, newPhoto: HTMLInputElement){ 

      this.newUser.name = newName.value;
      this.newUser.last_name = newLastName.value;
      this.newUser.email = newEmail.value;
      this.newUser.photo = newPhoto.value;
  };

};




