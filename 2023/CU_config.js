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
      "defaultValue": "2022carv",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
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
      "code": "aut_grd",
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
      "code": "aut_xchr",
      "type": "bool"
    },
    { "name": "Mobility?",
      "code": "aut_mob",
      "type": "bool"
    },
    { "name": "# of FLOOR pickup",
    "code": "aut_flr_cnt",
    "type": "counter"
    },
    { "name": "Docked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "code": "tel_grd",
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
      "code": "fpu",
      "type": "radio",
      "choices": {
        "o": "Cones<br>",
        "u": "Cubes<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "# of FLOOR pickup",
    "code": "tel_flr_cnt",
    "type": "counter"
    },
    { "name": "# of SHELF pickup",
    "code": "tel_shf_cnt",
    "type": "counter"
    },
    { "name": "# of RAMP pickup",
    "code": "tel_rmp_cnt",
    "type": "counter"
    },
    { "name": "Was Fed<br>Game Pieces?",
      "code": "tel_fed_q",
      "type": "bool"
    },
    { "name": "# of FEED to other bot",
    "code": "tel_fed_cnt",
    "type": "counter"
    },
    { "name": "Was Defended?",
      "code": "tel_def_q",
      "type": "bool"
    },
    { "name": "Who Defended this bot?<br>(sepparate with commas)",
      "code": "tel_def_ary",
      "type": "text"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "code": "tel_lnk",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "code": "eg_cnt",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Received RED card",
    "code": "red_cnt",
    "type": "counter"
    },
    { "name": "Received YELLOW card",
      "code": "yel_cnt",
      "type": "counter"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2 (below avg)<br>",
        "3": "3 (average)<br>",
        "4": "4 (above avg)<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "death_stat",
      "type": "bool"
    },
    { "name": "Tippy?",
      "code": "tip",
      "type": "radio",
      "choices": {
        "1": "1 (not tippy)<br>",
        "2": "2 (tippy)<br>",
        "3": "3 (very tippy)<br>",
        "4": "4 (tipped over)"
      },
      "defaultValue":"1"
    },
    { "name": "Dropped Cones (>2)",
      "code": "cone_drp",
      "type": "bool"
    },
    { "name": "Do they make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all_part",
      "type": "bool"
    },
    { "name": "Other comments",
      "code": "comments",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
