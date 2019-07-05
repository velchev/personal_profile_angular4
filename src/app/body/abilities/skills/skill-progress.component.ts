import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  template: `

  <span [ngClass]="skillProgress >= 1 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'"></span>
  <span [ngClass]="skillProgress >= 2 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'"></span>
  <span [ngClass]="skillProgress >= 3 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'"></span>
  <span [ngClass]="skillProgress >= 4 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'"></span>
  <span [ngClass]="skillProgress >= 5 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'"></span>

  `,
  styleUrls: ['./skills.component.css']
})
export class SkillProgressComponent implements OnInit {
  @Input() skillProgress: number;
  ngOnInit() {
  }

}
