/*global QUnit*/

sap.ui.define([
	"com/acn/traning/project1/controller/View1_Training.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1_Training Controller");

	QUnit.test("I should test the View1_Training controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
