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
    return false;
  }

  test2 = (username): boolean => {
    return false;
  }

  test3 = (password): number => {
    return 1;
  }

  onSubmit() {
    return false;
  }

}
