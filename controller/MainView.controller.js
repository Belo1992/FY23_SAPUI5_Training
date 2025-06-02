sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.MainView", {
        onInit() {
        },
        onClear: function () {
            // Get the View
            let oView = this.getView();
        
            // Clear Input fields
            oView.byId("inptName").setValue("");
            oView.byId("inptStreet").setValue("");
            oView.byId("inptHouse").setValue("");
            oView.byId("inptZip").setValue("");
            oView.byId("lblCity").setValue("");
        
            // Reset the selected key of the Select control
            oView.byId("country").setSelectedKey("");
        }
    });
});