jQuery.sap.require("flight.resources.utils.utility");

/**
 * First Application View - this is the application's starting point. It builds the application window.   
 */
sap.ui.jsview("flight.resources.flightView", {

      getControllerName : function() {
         return "flight.resources.flightView";
    	 
      },
      
      createContent : function(oController) {
		var oShell = this.createShell();
       	oShell.addContent(this.createFlightTable());	
       	return oShell;
       	
      },

      createShell:function(oController){
      
    	  var oShell = sap.ui.ux3.Shell("ID_FLIGHTShell",{
    	      appIcon: "images/SAPLogo.gif",
    		  appTitle: oBundle.getText("APP_TITLE"),
    		  showLogoutButton:false,
    		  showSearchTool: false,
    		  showInspectorTool: false,
    		  showFeederTool: false,
    		  worksetItems: [new sap.ui.ux3.NavigationItem("navItemList",{key: "FLIGHTList",text:oBundle.getText("WORKSET_TITLE")})]
    	  });
    	  return oShell;
      },
      
      /**
	 * Returns a table with the required columns, each column is bound for a specific odata service property   
	 * @returns {sap.ui.table.Table}
	 */
      createFlightTable:function(){
      
    	var oTable = new sap.ui.table.Table("ID_FLIGHTTable", {
    		visibleRowCount  : 20,
  			selectionMode: sap.ui.table.SelectionMode.None
  		});
    	
 
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_CODE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "Code"),
			sortProperty: "Code",
			filterProperty: "Code"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_CONNECTIONNO")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "connectionNo"),
			sortProperty: "connectionNo",
			filterProperty: "connectionNo"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_FLIGHTDATE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "flightDate",new sap.ui.model.type.DateTime({style: "medium"})),
			sortProperty: "flightDate",
			filterProperty: "flightDate"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_PRICE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "price"),
			sortProperty: "price",
			filterProperty: "price"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_CURRENCY")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "currency"),
			sortProperty: "currency",
			filterProperty: "currency"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_AIRCRAFTTYPE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "AircraftType"),
			sortProperty: "AircraftType",
			filterProperty: "AircraftType"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_MAXCAPACITY")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "maxCapacity"),
			sortProperty: "maxCapacity",
			filterProperty: "maxCapacity"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_OCCUPIEDSEATS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "occupiedSeats"),
			sortProperty: "occupiedSeats",
			filterProperty: "occupiedSeats"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_TOTALOFBOOKINGS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "totalOfBookings"),
			sortProperty: "totalOfBookings",
			filterProperty: "totalOfBookings"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_MAXCAPACITYBUS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "MaxCapacityBus"),
			sortProperty: "MaxCapacityBus",
			filterProperty: "MaxCapacityBus"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_OCCUPIEDSEATSBUSINESS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "occupiedSeatsBusiness"),
			sortProperty: "occupiedSeatsBusiness",
			filterProperty: "occupiedSeatsBusiness"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_MAXIMUMINFIRST")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "maximumInFirst"),
			sortProperty: "maximumInFirst",
			filterProperty: "maximumInFirst"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_OCCUPIEDSEATSFIRST")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "occupiedSeatsFirst"),
			sortProperty: "occupiedSeatsFirst",
			filterProperty: "occupiedSeatsFirst"
 		}));
 		return oTable;   		
      }
      
});
