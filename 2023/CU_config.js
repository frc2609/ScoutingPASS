var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023onham",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals<br>",
        "t": "Practice"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "No Show",
      "code": "ns",
      "type": "bool"
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "ag",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Crossed Charging Station",
      "code": "axc",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "code": "tg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Floor Pickup",
      "code": "tft",
      "type": "radio",
      "choices": {
        "o": "Cones<br>",
        "u": "Cubes<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "If defended who defended this bot?<br>(sepparate with commas no spaces)",
      "code": "tdb",
      "type": "text"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "1": "Not Effective<br>",
        "2": "Below Average<br>",
        "3": "Average<br>",
        "4": "Above Average<br>",
        "5": "Very Effective<br>"
      },
      "defaultValue": "3"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "Very Slow<br>",
        "2": "Slow<br>",
        "3": "Average<br>",
        "4": "Fast<br>",
        "5": "Very Fast"
      },
      "defaultValue":"3"
    },
    { "name": "Tippy?",
      "code": "tip",
      "type": "radio",
      "choices": {
        "1": "Very Stable<br>",
        "2": "Stable<br>",
        "3": "Average<br>",
        "4": "Tippy<br>",
        "5": "Very tippy"
      },
      "defaultValue":"3"
    },
    { "name": "Do they make good<br>defence bot?",
      "tooltip": "Did they defend against other bots?",
      "code": "def",
      "type": "bool"
    },
    { "name": "Do they make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "ali",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "ded",
      "type": "bool"
    },  
    { "name": "Other comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 500
    }
  ]
}`;
