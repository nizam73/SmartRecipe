jQuery("#simulation")
  .on("pageload", ".s-70bb128e-46f2-4626-8d71-4815e1caf146 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-70bb128e-46f2-4626-8d71-4815e1caf146")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8a638ee1-d936-47c6-b4d7-1fa17ca84294",
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
    }
  });