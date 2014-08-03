jQuery("#simulation")
  .on("click", ".s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_2 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_2": {
                      "attributes": {
                        "background-color": "#804000",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_2 span": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_2": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_2 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_2": {
                      "attributes": {
                        "background-color": "#3C2415",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_2 span": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_2": {
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
                    "target": "screens/97f322a8-1b85-4550-b8b4-5ec1d9c01d60"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_3 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_3": {
                      "attributes": {
                        "background-color": "#804000",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_3 span": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_3": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_3 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_3": {
                      "attributes": {
                        "background-color": "#3C2415",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_3 span": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_3": {
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
                    "target": "screens/3877e25f-9d56-4c77-997a-64a3b6058b0b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_4 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_4": {
                      "attributes": {
                        "background-color": "#804000",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_4 span": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_4": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_4 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_4": {
                      "attributes": {
                        "background-color": "#3C2415",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_4 span": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_4": {
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
                    "target": "screens/7e9a0156-a5ce-406e-b5b7-dd3ce29d35ab"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_101")) {
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
                    "target": "screens/7e9a0156-a5ce-406e-b5b7-dd3ce29d35ab"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
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
                    "target": "screens/97f322a8-1b85-4550-b8b4-5ec1d9c01d60"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_21")) {
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
                    "target": "screens/3877e25f-9d56-4c77-997a-64a3b6058b0b"
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_5 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_5": {
                      "attributes": {
                        "background-color": "#804000",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_5 span": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_5": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_5 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "71px",
                        "height": "90px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_5": {
                      "attributes": {
                        "background-color": "#3C2415",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_5 span": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_5": {
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
    } else if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_1 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "100px",
                        "height": "127px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_1": {
                      "attributes": {
                        "background-color": "#804000",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_1 span": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_1": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_1 .content": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "100px",
                        "height": "127px",
                        "position": "absolute"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_1": {
                      "attributes": {
                        "background-color": "#3C2415",
                        "background-image": "none",
                        "font-size": "18pt",
                        "font-family": "Segoe UI Light,Arial"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #shapewrapper-s-Ellipse_1 span": {
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
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Ellipse_1": {
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
                    "target": "screens/492432ae-2e0f-4b8b-8e93-aca82c356de7",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
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
                    "target": "screens/492432ae-2e0f-4b8b-8e93-aca82c356de7"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Image_2": {
                      "attributes": {
                        "opacity": "0.8"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)",
                        "filter": "alpha(opacity=80)"
                      }
                    }
                  },{
                    "#s-7c28168d-9d94-4c33-b8d7-9697cc1a4351 #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)",
                        "filter": "alpha(opacity=80)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
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