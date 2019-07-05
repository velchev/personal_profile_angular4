import { Injectable } from '@angular/core';

@Injectable()
export class UserAbilitiesService {
  private abilitiesInfo = {
    myAbilities: 'Full Stack Software Engineer',
    skills: [
      {
        skillName: 'C#',
        proficiency: 10
      },
      {
        skillName: ".NET",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "[Skill name]",
        proficiency: 3
      },
      {
        skillName: "[Skill name]",
        proficiency: 4
      },
      {
        skillName: "[Skill name]",
        proficiency: 1
      }
    ],
    languages: [
      {
        languageName: "English",
        level: "Proficient",
        proficiency: 5
      },
      {
        languageName: "Bulgarian",
        level: "Native",
        proficiency: 5
      },
      {
        languageName: "German",
        level: "Basic",
        proficiency: 2
      },
      {
        languageName: "French",
        level: "first steps into Language",
        proficiency: 1
      }
    ],
    tools: [
      {
        toolName: "[Tool name]",
        year: "[Used Year Here]",
        proficiency: 5 //"[5 to 0]"
      },
      {
        toolName: "[Tool name]",
        year: "[Used Year Here]",
        proficiency: 4 //"[5 to 0]"
      },
      {
        toolName: "[Tool name]",
        year: "[Used Year Here]",
        proficiency: 3 //"[5 to 0]"
      },
      {
        toolName: "[Tool name]",
        year: "[Used Year Here]",
        proficiency: 2 //"[5 to 0]"
      },
      {
        toolName: "[Tool name]",
        year: "[Used Year Here]",
        proficiency: 1 //"[5 to 0]"
      }
    ]
  };

  getAbilitiesInfo() {
    return this.abilitiesInfo;
  }

}
