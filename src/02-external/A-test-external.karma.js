
describe('Test replace contents of div using external component', function () {

  beforeAll(function () {
    var fixture = '<div id="fixture"></div>';
    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
    // Test requires that externalComponent is already defined
    externalComponent('fixture');
  });

  afterAll(function () {
    let el = document.getElementById('fixture');
    if (el !== null) {
      document.body.removeChild(el);
    }
  });

  it('contents should have been replaced', function () {
    let content = document.getElementById('fixture');
    expect(content.innerHTML).toEqual('external-inserted-contents')
  });

});