describe("Player", function() {
    var view;
    var model;
    var controller;

    beforeEach(function() {
        view = new View();
        model = new Model();
        controller = new Controller(view, model);
    });

    it("Test validation of first page", function() {
        expect(controller.validatePageOneForm()).toBe(true);
    });

    it("Test validation of second page", function() {
        expect(controller.validatePageTwoForm()).toBe(true);
    });

    it("Test validation of Australian phone number", function() {
        expect(controller.validatePageTwoForm()).toBe(true);
    });

    it("Test post code is in between 0800 - 7999", function() {
        expect(controller.checkPostCodeInBetween("4000")).toBe(true);
    });

});