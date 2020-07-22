var that;
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.ah.ut.UI5_Traininig.controller.binding", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.ah.ut.UI5_Traininig.view.binding
		 */
		onInit: function () {
			that = this;
			var masterModel = new sap.ui.model.json.JSONModel();
			var empModel = new sap.ui.model.json.JSONModel();

			masterModel.loadData("JSON/form.json", null, false);
			that.getView().byId("fLayout").setModel(masterModel); // Element Binding
			that.getView().setModel(masterModel, "propertyModel"); // Property Binding

			empModel.loadData("JSON/table.json", null, false);
			that.getView().byId("fLayout2").setModel(empModel); // Element Binding
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.ah.ut.UI5_Traininig.view.binding
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.ah.ut.UI5_Traininig.view.binding
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.ah.ut.UI5_Traininig.view.binding
		 */
		//	onExit: function() {
		//
		//	}

	});

});