
describe('Test replace contents of div using functional component', function () {

  beforeAll(function () {
    var fixture = '<div id="fixture"></div>';
    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
    // Test requires that externalComponent is already defined
    ReactDOM.render(
      React.createElement(HelloFunctional, {toWhat: 'World'}, null),
      document.getElementById('fixture')
    );
  });

  afterAll(function () {
    let el = document.getElementById('fixture');
    if (el !== null) {
      document.body.removeChild(el);
    }
  });

  it('contents should have been replaced', function () {
    let content = document.getElementById('react-element');
    expect(content.innerHTML).toEqual('HelloFunctional World')
  });

});