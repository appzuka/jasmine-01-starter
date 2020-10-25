describe("A group of suites", function () {

  describe("the first suite with 2 specs", function () {

    it("a spec with one expectation", function () {
      expect(true).toBe(true);
    });

    it("a spec with two expectations", function () {
      expect(true).toBe(true);
      expect(false).toBe(false);
    });
    
  });

  describe("the second suite with 2 specs", function () {

    it("a spec with two expectations", function () {
      expect(true).toBe(true);
      expect(false).toBe(false);
    });

    it("a spec with one expectation", function () {
      expect(true).toBe(true);
    });
    
  });

});
