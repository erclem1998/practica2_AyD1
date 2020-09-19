import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdateUserService } from '../../services/update_user/update-user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  updateForm: FormGroup;

  constructor(private fb: FormBuilder, private uus: UpdateUserService) {
    this.updateForm = this.fb.group({
      dpi: ['', []],
      username: ['', []],
      passwd: ['', []],
      correo: ['', []],
      edad: ['', []]
    });
  }

  ngOnInit(): void {
  }

  test1 = (username): boolean => {
    return username.length >= 5;
  }

  test2 = (username): boolean => {
    var number = 0;
    for (var i = 0; i < username.length; i++) {
      if (username.charCodeAt(i) >= 48 && username.charCodeAt(i) <= 57) {
        number++;
      }
      else if (username.charCodeAt(i) >= 65 && username.charCodeAt(i) <= 90) {
        number++;
      }
      else if (username.charCodeAt(i) >= 97 && username.charCodeAt(i) <= 122) {
        number++;
      }
    }
    return number == username.length;
  }

  test3 = (password): number => {
    var number = 0;
    for (var i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
        number++;
      }
    }
    return number;
  }

  onSubmit() {
    return false;
  }

}
