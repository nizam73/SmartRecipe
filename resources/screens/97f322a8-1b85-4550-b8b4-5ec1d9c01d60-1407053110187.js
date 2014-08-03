jQuery("#simulation")
  .on("click", ".s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60")) {
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
    } else if(jFirer.is("#s-Ellipse_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Ellipse_5 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Ellipse_5": {
                      "attributes": {
                        "background-color": "#804000",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #shapewrapper-s-Ellipse_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #shapewrapper-s-Ellipse_5 span": {
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
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Ellipse_5": {
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
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Ellipse_5 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Ellipse_5": {
                      "attributes": {
                        "background-color": "#3C2415",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #shapewrapper-s-Ellipse_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #shapewrapper-s-Ellipse_5 span": {
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
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Ellipse_5": {
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Button_2": {
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
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Button_2": {
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
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Button_2": {
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
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-97f322a8-1b85-4550-b8b4-5ec1d9c01d60 #s-Button_2": {
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
                    "target": "screens/492432ae-2e0f-4b8b-8e93-aca82c356de7"
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