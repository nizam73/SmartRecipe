(function(window, undefined) {
  var dictionary = {
    "70bb128e-46f2-4626-8d71-4815e1caf146": "Loading screen",
    "492432ae-2e0f-4b8b-8e93-aca82c356de7": "Your Recipe",
    "8a638ee1-d936-47c6-b4d7-1fa17ca84294": "Sign in",
    "7e9a0156-a5ce-406e-b5b7-dd3ce29d35ab": "Camera",
    "97f322a8-1b85-4550-b8b4-5ec1d9c01d60": "Collect Recipe",
    "3877e25f-9d56-4c77-997a-64a3b6058b0b": "Your Drawer",
    "7c28168d-9d94-4c33-b8d7-9697cc1a4351": "Home_Screen",
    "1e8a452c-0c3e-434b-9a69-9f88c989dab1": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);