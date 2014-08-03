jQuery("#simulation")
  .on("click", ".s-8a638ee1-d936-47c6-b4d7-1fa17ca84294 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": "asd@mail.com"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_5",
                    "value": null
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a638ee1-d936-47c6-b4d7-1fa17ca84294 #s-Button_2": {
                      "attributes": {
                        "background-color": "#804000",
                        "background-image": "none",
                        "color": "#E5D7AE",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Segoe UI Light,Arial",
                        "font-size": "18pt",
                        "font-style": "normal",
                        "font-weight": "300",
                        "line-height": "18pt"
                      }
                    }
                  },{
                    "#s-8a638ee1-d936-47c6-b4d7-1fa17ca84294 #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-8a638ee1-d936-47c6-b4d7-1fa17ca84294 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#804000",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a638ee1-d936-47c6-b4d7-1fa17ca84294 #s-Button_2": {
                      "attributes": {
                        "background-color": "#3C2415",
                        "background-image": "none",
                        "color": "#E5D7AE",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Segoe UI Light,Arial",
                        "font-size": "18pt",
                        "font-style": "normal",
                        "font-weight": "300",
                        "line-height": "18pt"
                      }
                    }
                  },{
                    "#s-8a638ee1-d936-47c6-b4d7-1fa17ca84294 #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-8a638ee1-d936-47c6-b4d7-1fa17ca84294 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#3C2415",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7c28168d-9d94-4c33-b8d7-9697cc1a4351"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });