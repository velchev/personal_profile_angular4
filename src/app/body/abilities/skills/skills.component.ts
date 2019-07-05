import { Component, OnInit } from '@angular/core';
import {UserAbilitiesService} from '../user-abilities.service';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public userInfo;
  private userAbilitiesInfo;
  public arraylength;
  public skillsList = [];


  constructor(private userService: UserService, private userAbilitiesService: UserAbilitiesService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
    this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
    this.arraylength = this.userAbilitiesInfo['skills'].length;
    this.skillsList = this.userAbilitiesInfo['skills'];
  }

}
