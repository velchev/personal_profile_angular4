import { Component, OnInit } from '@angular/core';
import {UserAbilitiesService} from '../user-abilities.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  userAbilitiesInfo;
  arraylength;
  languagesList = [];

  constructor(private userAbilitiesService: UserAbilitiesService) { }

  ngOnInit() {
    this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
    this.arraylength = this.userAbilitiesInfo['languages'].length;
    this.languagesList = this.userAbilitiesInfo['languages'];
  }

}
