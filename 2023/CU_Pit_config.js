var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023onwat",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Length",
      "code": "len",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "Tank<br>",
        "m": "Mechanum/Holonomic<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Primary station",
      "code": "ps",
      "type": "radio",
      "choices": {
        "s": "Single<br>",
        "d": "Double<br>",
        "b": "Both<br>",
        "x": "None"
      },
      "defaultValue": "x"
    },
    { "name": "Floor Pickup",
      "code": "fp",
      "type": "radio",
      "choices": {
        "s": "Cube<br>",
        "d": "Cone<br>",
        "b": "Both<br>",
        "x": "None"
      },
      "defaultValue": "x"
    },
    { "name": "Cross Charging Station",
      "code": "ccs",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
