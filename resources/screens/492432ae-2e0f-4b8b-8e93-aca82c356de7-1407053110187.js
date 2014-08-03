jQuery("#simulation")
  .on("click", ".s-492432ae-2e0f-4b8b-8e93-aca82c356de7 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-492432ae-2e0f-4b8b-8e93-aca82c356de7 #s-Ellipse_5 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-492432ae-2e0f-4b8b-8e93-aca82c356de7 #s-Ellipse_5": {
                      "attributes": {
                        "background-color": "#804000",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-492432ae-2e0f-4b8b-8e93-aca82c356de7 #shapewrapper-s-Ellipse_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-492432ae-2e0f-4b8b-8e93-aca82c356de7 #shapewrapper-s-Ellipse_5 span": {
                      "attributes": {
                        "color": "#E5D7AE",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Segoe UI Light,Arial",
                        "font-size": "18pt",
                        "font-style": "normal",
                        "font-weight": "300"
                      }
                    }
                  },{
                    "#s-492432ae-2e0f-4b8b-8e93-aca82c356de7 #s-Ellipse_5": {
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
                    "#s-492432ae-2e0f-4b8b-8e93-aca82c356de7 #s-Ellipse_5 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-492432ae-2e0f-4b8b-8e93-aca82c356de7 #s-Ellipse_5": {
                      "attributes": {
                        "background-color": "#3C2415",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-492432ae-2e0f-4b8b-8e93-aca82c356de7 #shapewrapper-s-Ellipse_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-492432ae-2e0f-4b8b-8e93-aca82c356de7 #shapewrapper-s-Ellipse_5 span": {
                      "attributes": {
                        "color": "#E5D7AE",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Segoe UI Light,Arial",
                        "font-size": "18pt",
                        "font-style": "normal",
                        "font-weight": "300"
                      }
                    }
                  },{
                    "#s-492432ae-2e0f-4b8b-8e93-aca82c356de7 #s-Ellipse_5": {
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
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  }
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
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  }
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