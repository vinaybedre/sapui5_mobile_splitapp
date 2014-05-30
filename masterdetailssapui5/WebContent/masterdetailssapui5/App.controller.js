sap.ui.controller("masterdetailssapui5.App", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf masterdetailssapui5.App
	 */
	onInit : function() {
		var oSplitApp = this.byId("mySplitApp");
		
		var oDetailPage1 = new sap.m.Page("detail1", {
			title : "Detail 1",
			content : [ new sap.m.Label({
				text : "this is Detail 1"
			}) ]
		});

		var oDetailPage2 = new sap.m.Page("detail2", {
			title : "Detail 2",
			content : [ new sap.m.Label({
				text : "this is Detail 2"
			}) ]
		});

		var oMasterPage1 = new sap.m.Page("master1", {
			
			title : "Master",
			content : [ new sap.m.List({
				items : [ new sap.m.StandardListItem({
					title : "To Master 2",
					type : "Navigation",
					press : function() {
						oSplitApp.toMaster("master2");
					}
				}) ]
			}) ]
		});

		var oMasterPage2 = new sap.m.Page("master2", {
			showNavButton:true,
			title : "Master2",
			navButtonPress : function() {
				oSplitApp.backMaster();
			},
			content : [ new sap.m.List({
				mode : "SingleSelectMaster",
				select : function(oEv) {
					if (oEv.getParameter("listItem").getId() == "listDetail2") {
						oSplitApp.toDetail("detail2");
					} else {
						oSplitApp.toDetail("detail1");
					}
				},
				items : [ new sap.m.StandardListItem("listDetail2", {
					title : "To Detail 2"
				}), new sap.m.StandardListItem("listDetail", {
					title : "To Detail 1"
				}) ]
			}) ]
		});
		
		oSplitApp.addMasterPage(oMasterPage1).addMasterPage(oMasterPage2);
		oSplitApp.addDetailPage(oDetailPage1).addDetailPage(oDetailPage2);
		
		oSplitApp.setInitialDetail("detail1");
		oSplitApp.setInitialMaster("master1");
		oSplitApp.setMode("PopoverMode");

		
		//oSplitApp.setDefaultTransitionNameDetail("fade");

	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf masterdetailssapui5.App
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf masterdetailssapui5.App
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf masterdetailssapui5.App
 */
// onExit: function() {
//
// }
});