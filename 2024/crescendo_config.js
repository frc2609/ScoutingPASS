var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
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
      "defaultValue": "2024onwat",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
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
      "code": "no",
      "type": "bool"
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "field_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one"
    }
  ],
  "auton": [
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    },
    {
      "name": "Left zone",
      "code": "al",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Successful Speaker Shot",
    "code": "tsp",
    "type": "field_image",
    "filename": "2024/field_image.png"
    },
    { "name": "Speaker Scores",
    "code": "tss",
    "type": "counter"
    },
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Missed",
      "code": "tm",
      "type": "counter"
    },
    { "name": "Fed Pieces",
      "code": "fp",
      "type": "counter"
    },
    { "name": "Fell from chain",
      "code": "fell",
      "type": "bool"
    },
    { "name": "Note in Trap",
      "code": "nit",
      "type": "bool"
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
        "5": "Very Effective<br>",
        "0": "Not Observed<br>"
      },
      "defaultValue": "0"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "1": "Not Effective<br>",
        "2": "Below Average<br>",
        "3": "Average<br>",
        "4": "Above Average<br>",
        "5": "Very Effective<br>",
        "0": "Not Observed<br>"
      },
      "defaultValue": "0"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Notes (2+)",
      "code": "dn",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 100
    }
  ]
}`;
