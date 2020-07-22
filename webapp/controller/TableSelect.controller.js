sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.ah.ut.UI5_Traininig.controller.TableSelect", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.ah.ut.UI5_Traininig.view.TableSelect
		 */
		onInit: function () {
			// that = this;
			var editModel = new sap.ui.model.json.JSONModel();

			editModel.loadData("JSON/editTable.json", null, false);
			this.getView().setModel(editModel, "editModel");

			this.test();
			// that.tableLoad();
			// that.designTable();
		},

		test: function () {
			var oPanel = this.getView().byId("id-panelBottom");
			oPanel.destroyContent();
			// jQuery(function () {
			sap.ui.table.Table.extend("DemoTable", {
				renderer: function (oRm, oControl) {
					sap.ui.table.TableRenderer.render(oRm, oControl);
				},
				setRowEditable: function (edit, rowindex) {
					// var model = this.getModel();
					// var rowPath = this.getBindingInfo('rows').path;
					// var rows = model.getProperty(rowPath);
					// for (var i = 0; i < rows.length; i++) {
					// 	var row = rows[i];
					// 	if (i === rowindex) {
					// 		row[edit] = true; // make the selected row editable and rest non editable
					// 	} else {
					// 		row[edit] = false;
					// 	}
					// }
					// this.invalidate();
				}
			});
			// Model Data (local)
			var aData = [{
				ID: "MEM1",
				lname: "Jung",
				fname: "Thomas",
				gender: "Male",
				rating: 5,
				edit: false
			}, {
				ID: "MEM2",
				lname: "Valluru",
				fname: "Kiran",
				gender: "Male",
				rating: 2,
				edit: false
			}, {
				ID: "MEM3",
				lname: "Powlas",
				fname: "Tammy",
				gender: "Female",
				rating: 5,
				edit: false
			}, {
				ID: "MEM4",
				lname: "Padmanabhan",
				fname: "Bharath",
				gender: "Male",
				rating: 4,
				edit: false
			}, {
				ID: "MEM5",
				lname: "Nampoothiri",
				fname: "Sreejith",
				gender: "Male",
				rating: 5,
				edit: false
			}, {
				ID: "MEM6",
				lname: "Valluru",
				fname: "Kishore",
				gender: "Male",
				rating: 5,
				edit: false
			}, {
				ID: "MEM1",
				lname: "Jung",
				fname: "Thomas",
				gender: "Male",
				rating: 5,
				edit: false
			}, {
				ID: "MEM2",
				lname: "Valluru",
				fname: "Kiran",
				gender: "Male",
				rating: 2,
				edit: false
			}, {
				ID: "MEM3",
				lname: "Powlas",
				fname: "Tammy",
				gender: "Female",
				rating: 5,
				edit: false
			}, {
				ID: "MEM4",
				lname: "Padmanabhan",
				fname: "Bharath",
				gender: "Male",
				rating: 4,
				edit: false
			}, {
				ID: "MEM5",
				lname: "Nampoothiri",
				fname: "Sreejith",
				gender: "Male",
				rating: 5,
				edit: false
			}, {
				ID: "MEM6",
				lname: "Valluru",
				fname: "Kishore",
				gender: "Male",
				rating: 5,
				edit: false
			}, {
				ID: "MEM1",
				lname: "Jung",
				fname: "Thomas",
				gender: "Male",
				rating: 5,
				edit: false
			}, {
				ID: "MEM2",
				lname: "Valluru",
				fname: "Kiran",
				gender: "Male",
				rating: 2,
				edit: false
			}, {
				ID: "MEM3",
				lname: "Powlas",
				fname: "Tammy",
				gender: "Female",
				rating: 5,
				edit: false
			}, {
				ID: "MEM4",
				lname: "Padmanabhan",
				fname: "Bharath",
				gender: "Male",
				rating: 4,
				edit: false
			}, {
				ID: "MEM5",
				lname: "Nampoothiri",
				fname: "Sreejith",
				gender: "Male",
				rating: 5,
				edit: false
			}, {
				ID: "MEM6",
				lname: "Valluru",
				fname: "Kishore",
				gender: "Male",
				rating: 5,
				edit: false
			}, ];
			// Define a table 
			var oTable = new DemoTable({
				title: "Member Details", // heading of the table
				visibleRowCount: aData.length, // Visible no of Rows of table
				selectionMode: sap.ui.table.SelectionMode.MultiToggle, // Singe or Multi
				selectionBehavior: sap.ui.table.SelectionBehavior.RowSelector,
				// navigationMode: sap.ui.table.NavigationMode.Paginator, //Paginator or Scrollbar
				fixedColumnCount: 3, // Freezes the number of columns
				enableColumnReordering: true // Allows you to drag and drop the column and reorder the position of the column
			});
			// Use the Object defined for table to add new column into the table
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Member ID" // Creates an Header with value defined for the text attribute
				}),
				template: new sap.ui.commons.TextField({
					value: '{ID}', // binds the value into the text field defined using JSON
					editable: false // Non editable
				}),
				sortProperty: "ID", // enables sorting on the column
				filterProperty: "ID", // enables set filter on the column
				width: "200px" // width of the column
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Last Name"
				}),
				template: new sap.m.Input({
					value: '{lname}',
					editable: false // Binding editable property of text field to 'edit' attribute of Model
				}),
				sortProperty: "lname",
				filterProperty: "lname",
				width: "200px"
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "First Name"
				}),
				template: new sap.ui.commons.TextField({
					value: '{fname}',
					editable: false // Non editable ( bind to control editable property dynamically)
				}),
				sortProperty: "fname",
				filterProperty: "fname",
				width: "125px"
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Gender"
				}),
				template: new sap.ui.commons.ComboBox({
					items: [new sap.ui.core.ListItem({
						text: "Female"
					}), new sap.ui.core.ListItem({
						text: "Male"
					})]
				}).bindProperty("value", "gender"),
				sortProperty: "gender",
				filterProperty: "gender",
				width: "75px"
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Rating"
				}),
				template: new sap.ui.commons.RatingIndicator().bindProperty("value", "rating"),
				sortProperty: "rating",
				filterProperty: "rating",
				width: "80px"
			}));
			//Create a model and bind the table rows to this model
			var oModel = new sap.ui.model.json.JSONModel(); // created a JSON model     
			oModel.setData({ // Set the data to the model using the JSON object defined already
				modelData: aData
			});
			oTable.setModel(oModel);
			oTable.bindRows("/modelData"); // binding all the rows into the model
			// Event Handler for Table Lead/Row selection
			oTable.attachRowSelectionChange(function (oEvent) {
				var selectedindex = oEvent.getParameter("rowIndex"); // selected Row Index

				if (selectedindex !== null) {
					oTable.getRows()[selectedindex].getCells()[1].setEditable(true);
				} else {
					oTable.getRows()[0].getCells()[1].setEditable(false);
				}

				// Set Selected Row Editable
				// oTable.setRowEditable("edit", selectedindex); // 'edit' is feild name to which editable property is bound
			});

			oPanel.addContent(oTable);
			//Place the Table on the UI
			// oTable.placeAt("content");
			// });
		}

		// tableLoad: function () {
		// 	// jQuery(function () {
		// 	sap.ui.table.Table.extend('DemoTable', {
		// 		renderer: function (oRm, oControl) {
		// 			sap.ui.table.TableRenderer.render(oRm, oControl);
		// 		},
		// 		setRowEditable: function (edit, rowindex) {
		// 			var model = this.getView().getModel("editModel");
		// 			var rowPath = this.getBindingInfo('rows').path;
		// 			var rows = model.getProperty(rowPath);
		// 			for (i = 0; i < rows.length; i++) {
		// 				row = rows[i];
		// 				if (i == rowindex) {
		// 					row[edit] = true; // make the selected row editable and rest non editable
		// 				} else {
		// 					row[edit] = false;
		// 				}
		// 			}
		// 			this.invalidate();
		// 		}
		// 	});
		// },

		// designTable: function () {
		// 	// Define a table 
		// 	var oTable = new DemoTable({
		// 		title: "Member Details", // heading of the table
		// 		visibleRowCount: 4, // Visible no of Rows of table
		// 		selectionMode: sap.ui.table.SelectionMode.Single, // Singe or Multi
		// 		navigationMode: sap.ui.table.NavigationMode.Paginator, //Paginator or Scrollbar
		// 		fixedColumnCount: 3, // Freezes the number of columns
		// 		enableColumnReordering: true, // Allows you to drag and drop the column and reorder the position of the column
		// 	});
		// 	// Use the Object defined for table to add new column into the table
		// 	oTable.addColumn(new sap.ui.table.Column({
		// 		label: new sap.ui.commons.Label({
		// 			text: "Member ID" // Creates an Header with value defined for the text attribute
		// 		}),
		// 		template: new sap.ui.commons.TextField({
		// 			value: '{ID}', // binds the value into the text field defined using JSON
		// 			editable: false // Non editable
		// 		}),
		// 		sortProperty: "ID", // enables sorting on the column
		// 		filterProperty: "ID", // enables set filter on the column
		// 		width: "200px" // width of the column
		// 	}));
		// 	oTable.addColumn(new sap.ui.table.Column({
		// 		label: new sap.ui.commons.Label({
		// 			text: "Last Name"
		// 		}),
		// 		template: new sap.ui.commons.TextField({
		// 			value: '{lname}',
		// 			editable: '{edit}' // Binding editable property of text field to 'edit' attribute of Model
		// 		}),
		// 		sortProperty: "lname",
		// 		filterProperty: "lname",
		// 		width: "200px"
		// 	}));
		// 	oTable.addColumn(new sap.ui.table.Column({
		// 		label: new sap.ui.commons.Label({
		// 			text: "First Name"
		// 		}),
		// 		template: new sap.ui.commons.TextField({
		// 			value: '{fname}',
		// 			editable: false // Non editable ( bind to control editable property dynamically)
		// 		}),
		// 		sortProperty: "fname",
		// 		filterProperty: "fname",
		// 		width: "125px"
		// 	}));
		// 	oTable.addColumn(new sap.ui.table.Column({
		// 		label: new sap.ui.commons.Label({
		// 			text: "Gender"
		// 		}),
		// 		template: new sap.ui.commons.ComboBox({
		// 			items: [new sap.ui.core.ListItem({
		// 				text: "Female"
		// 			}), new sap.ui.core.ListItem({
		// 				text: "Male"
		// 			})]
		// 		}).bindProperty("value", "gender"),
		// 		sortProperty: "gender",
		// 		filterProperty: "gender",
		// 		width: "75px"
		// 	}));
		// 	oTable.addColumn(new sap.ui.table.Column({
		// 		label: new sap.ui.commons.Label({
		// 			text: "Rating"
		// 		}),
		// 		template: new sap.ui.commons.RatingIndicator().bindProperty("value", "rating"),
		// 		sortProperty: "rating",
		// 		filterProperty: "rating",
		// 		width: "80px"
		// 	}));
		// 	//Create a model and bind the table rows to this model
		// 	var oModel = new sap.ui.model.json.JSONModel(); // created a JSON model     
		// 	oModel.setData({ // Set the data to the model using the JSON object defined already
		// 		modelData: aData
		// 	});
		// 	oTable.setModel(oModel);
		// 	oTable.bindRows("/modelData"); // binding all the rows into the model
		// 	// Event Handler for Table Lead/Row selection
		// 	oTable.attachRowSelectionChange(function (oEvent) {
		// 		var selectedindex = oEvent.getParameter("rowIndex"); // selected Row Index
		// 		// Set Selected Row Editable
		// 		oTable.setRowEditable('edit', selectedindex); // 'edit' is feild name to which editable property is bound
		// 	});
		// 	//Place the Table on the UI
		// 	oTable.placeAt("content");
		// }

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.ah.ut.UI5_Traininig.view.TableSelect
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.ah.ut.UI5_Traininig.view.TableSelect
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.ah.ut.UI5_Traininig.view.TableSelect
		 */
		//	onExit: function() {
		//
		//	}

	});

});