var that;
var factCVTable;
var oScrollContainer;

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../util/formatter",
	"sap/ui/core/Fragment"

], function (Controller, formatter) {
	"use strict";

	return Controller.extend("com.ah.ut.UI5_Traininig.controller.main", {
		formatter: formatter,
		onInit: function () {
			that = this;
			var masterModel = new sap.ui.model.json.JSONModel();
			var empModel = new sap.ui.model.json.JSONModel();

			masterModel.loadData("JSON/form.json", null, false);
			masterModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay); //apply one way binding
			that.getView().setModel(masterModel, "masterModel");

			empModel.loadData("JSON/table.json", null, false);
			that.getView().setModel(empModel, "empModel");

			// this._buildTable();
		},

		showModel: function () {
			var masterData = that.getView().getModel("masterModel");
		},

		openFragment: function () {
			if (!that._oDialog) {
				that._oDialog = sap.ui.xmlfragment("com.ah.ut.UI5_Traininig.fragments.sample", that);
				that.getView().addDependent(that._oDialog);
			}
			that._oDialog.open();
		},

		onClose: function () {
			if (that._oDialog) {
				that._oDialog.close();
			}
		},

		scrollTop: function () {
			// var oItem = factCVTable.getColumns()[0];
			// // jQuery.sap.delayedCall(0, null, function () {
			// oScrollContainer.scrollToElement(oItem);

			var array = factCVTable.getSelectedIndices();
			if (array.length > 0) {
				factCVTable.getRows()[0].getCells()[0].setEditable(true);
			} else {
				factCVTable.getRows()[0].getCells()[0].setEditable(false);
			}

			// factCVTable.setRowEditable('test', 0);
			// });
		},

		onBeforeRendering: function () {
			this._buildTable();
		},

		_buildTable: function () {
			var oPanel = that.getView().byId("id-panelBottom");
			oPanel.destroyContent();

			factCVTable = new sap.ui.table.Table({
				id: "id-panelBottom-Table",
				selectionMode: sap.ui.table.SelectionMode.MultiToggle,
				alternateRowColors: true,
				visibleRowCount: 10,
				selectionBehavior: sap.ui.table.SelectionBehavior.Row,
				enableSelectAll: false,
				// sticky: [sap.m.Sticky.ColumnHeaders]
			});

			var factCVModel = that.getView().getModel("empModel");
			// var factCVTable = this.getView().byId("empTable");
			var data = factCVModel.oData.results;
			// factCVTable.setVisibleRowCount(factCVModel.oData.results.length);
			for (var i = 0; i < 3; i++) {
				if (i === 2) {
					factCVTable.addColumn(new sap.ui.table.Column({
						width: "7rem",
						tooltip: "Switch",
						label: new sap.m.Label({
							text: "Switch"
						}),

						visible: true,
						template: new sap.m.Switch({
							// value: "{empModel>EmployeeID}",
							// value: {
							// 	path: "empModel>FirstName",
							// 	formatter: ".formatter.test"
							// },
							// value: { path: "empModel>FirstName", formatter: function(){ return "Ashikesh";} },
							enabled: true,
							state: {
								path: "empModel>Switch",
								formatter: function (test) {
									if (test === 1) {
										return true;
									}

									if (test === 0) {
										return false;
									}

								}
							}
						}),

						sorted: true,
						filtered: true,
						sortProperty: data[i],
						filterProperty: data[i],
						flexible: true,
						resizable: true,
						autoResizable: true

					}));
				} else {
					factCVTable.addColumn(new sap.ui.table.Column({
						// id: "test" + i,
						width: "7rem",
						tooltip: "Test",
						label: new sap.m.Label({
							text: "Test"
						}),

						visible: true,
						template: new sap.m.Input({
							// value: "{empModel>EmployeeID}",
							value: {
								path: "empModel>FirstName",
							},
							// value: { path: "empModel>FirstName", formatter: function(){ return "Ashikesh";} },
							// enabled: false
							editable: false
						}),

						sorted: true,
						filtered: true,
						sortProperty: data[i],
						filterProperty: data[i],
						flexible: true,
						resizable: true,
						autoResizable: true

					}));
				}

			}

			// factCVTable.setModel(factCVModel);

			// factCVTable.bindRows("/d/results");
			oScrollContainer = new sap.m.ScrollContainer({
				height: "525px",
				vertical: true,
				focusable: true,
				content: [factCVTable]
			});

			oPanel.addContent(oScrollContainer);
			factCVTable.bindRows("empModel>/results");
			factCVTable.attachRowSelectionChange(function (oEvent) {
				var selectedindex = oEvent.getParameter("rowIndex"); // selected Row Index
				// Set Selected Row Editable
				factCVTable.setRowEditable('test1', selectedindex); // 'edit' is feild name to which editable property is bound
			}); //Semi colon added Git Hub
		},

		test: function () {
			return 'ashikesh';
		}

		// showPopover: function (oEvent) {
		// 	if (oEvent.getParameter("columnIndex") === "0") {
		// 		var popText = oEvent.getParameter("cellControl").getProperty("text");
		// 		if (popText) {
		// 			var oSelectedCell = oEvent.getParameter("cellDomRef");
		// 			if (!that._oPopover) {
		// 				that._oPopover = sap.ui.xmlfragment("com.ah.ut.UI5_Traininig.fragments.popover", that);
		// 				that.getView().addDependent(that._oPopover);
		// 				sap.ui.getCore().byId("mPop").setText(popText);
		// 				that._oPopover.openBy(oSelectedCell);
		// 			} else {
		// 				sap.ui.getCore().byId("mPop").setText(popText);
		// 				that._oPopover.openBy(oSelectedCell);
		// 			}
		// 		} else if (that._oPopover) {
		// 			that._oPopover.close();
		// 		}
		// 	} else {
		// 		if (that._oPopover) {
		// 			sap.ui.getCore().byId("mPop").setText(undefined);
		// 			that._oPopover.close();
		// 		}
		// 	}
		// },

		// closePopover: function () {
		// 	sap.ui.getCore().byId("mPop").setText(undefined);
		// 	that._oPopover.close();
		// },
	});
});