/*global describe, beforeEach, it, __dirname, require*/
(function() {
	"use strict";

	var path = require("path");
	var helpers = require("yeoman-generator").test;

	describe("openui5 app generator", function() {
		beforeEach(function(done) {
			helpers.testDirectory(path.join(__dirname, "temp"), function(err) {
				if (err) {
					return done(err);
				}

				this.app = helpers.createGenerator("openui5:app", [
					"../../app",
					"../../view"
				]);

				done();
			}.bind(this));
		});

		it("creates expected files with args for classical app", function(done) {
			var mockPrompts = {
				applicationName: "My Application",
				appDescription: "Test Description",
				authorName: "John Doe",
				gitRepository: "ssh://github.com/ropository/url.git",
				licenseType: "Apache License, Version 2.0",
				applicationType: "classical",
			};

			var expected = [
				"css/style.css",
				"ext/.gitkeep",
				"test/.gitkeep",
				"i18n/messageBundle.properties",
				"img/.gitkeep",
				"model/Config.js",
				"model/img.json",
				"util/.gitkeep",
				"index.html",
				"Gruntfile.js",
				".jshintrc",
				"bower.json",
				"package.json",
				"README.md",
				"view/Main.controller.js",
				"view/Main.view.js",
				"Application.js"
			];

			helpers.mockPrompt(this.app, mockPrompts);

			// Test the view generation in this case via parameter
			this.app.args = ["Main", false];
			this.app.options["skip-install"] = true;
			this.app.run({}, function() {
				helpers.assertFiles(expected);
				done();
			});
		});

		it("creates expected files with args for classical app with xml view", function(done) {
			var mockPrompts = {
				applicationName: "My Application",
				appDescription: "Test Description",
				authorName: "John Doe",
				gitRepository: "ssh://github.com/ropository/url.git",
				licenseType: "Apache License, Version 2.0",
				applicationType: "classical",
			};

			var expected = [
				"css/style.css",
				"ext/.gitkeep",
				"test/.gitkeep",
				"i18n/messageBundle.properties",
				"img/.gitkeep",
				"model/Config.js",
				"model/img.json",
				"util/.gitkeep",
				"index.html",
				"Gruntfile.js",
				".jshintrc",
				"bower.json",
				"package.json",
				"README.md",
				"view/Main.controller.js",
				"view/Main.view.xml",
				"Application.js"
			];

			helpers.mockPrompt(this.app, mockPrompts);

			// Test the view generation in this case via parameter
			this.app.args = ["Main", false];
			this.app.options["skip-install"] = true;
			this.app.run({}, function() {
				helpers.assertFiles(expected);
				done();
			});
		});

		it("creates expected files with args for fiori master/detail app", function(done) {
			var mockPrompts = {
				applicationName: "My Application",
				appDescription: "Test Description",
				authorName: "John Doe",
				gitRepository: "ssh://github.com/ropository/url.git",
				licenseType: "Apache License, Version 2.0",
				applicationType: "fiori",
				fioriComponentNamespace: "sap.ui.demo",
				fioriAppType: "masterdetail"
			};
			var expected = [
				"test/.gitkeep",
				"i18n/messageBundle.properties",
				"img/.gitkeep",
				"model/Config.js",
				"model/img.json",
				"util/Formatter.js",
				"util/Grouper.js",
				"index.html",
				"Gruntfile.js",
				".jshintrc",
				"bower.json",
				"package.json",
				"README.md",
				"view/Root.controller.js",
				"view/Root.view.xml",
				"view/Master.controller.js",
				"view/Master.view.xml",
				"view/Detail.controller.js",
				"view/Detail.view.xml",
				"view/Empty.view.xml",
				"view/LineItem.controller.js",
				"view/LineItem.view.xml",
				"Component.js"
			];

			helpers.mockPrompt(this.app, mockPrompts);

			this.app.args = ["Main", false];
			this.app.options["skip-install"] = true;
			this.app.run({}, function() {
				helpers.assertFiles(expected);
				done();
			});
		});

	});

	describe("openui5 view generator", function() {
		beforeEach(function(done) {
			//helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
			//  if (err) {
			//      return done(err);
			//  }

			this.view = helpers.createGenerator("openui5:view", [
				"../../view"
			]);

			done();
			//}.bind(this));
		});

		it("creates expected files with args", function(done) {
			var expected = [
				"view/Test.controller.js",
				"view/Test.view.xml"
			];

			helpers.mockPrompt(this.view, {
				viewName: "Test",
				viewType: "xmlView"
			});

			this.view.run({}, function() {
				helpers.assertFiles(expected);
				done();
			});
		});
	});

}());