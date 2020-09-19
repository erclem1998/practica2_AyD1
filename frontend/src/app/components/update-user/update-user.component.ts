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

  async onSubmit() {
    if (this.updateForm.value.username == "") this.updateForm.value.username = undefined;
    if (this.updateForm.value.passwd == "") this.updateForm.value.passwd = undefined;
    if (this.updateForm.value.correo == "") this.updateForm.value.correo = undefined;
    if (this.updateForm.value.edad == "") this.updateForm.value.edad = undefined;
    console.log(this.updateForm.value)
    await this.uus.updateuser(this.updateForm.value).subscribe((res: any) => {
      if (res.affectedRows == 1) {
        alert("El usuario se actualizo correctamente!!!");
        return true;
      }
    });
  }

}
