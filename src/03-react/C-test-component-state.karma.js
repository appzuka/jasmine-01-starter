
describe('Test functional component with state', function () {

  beforeEach(function () {
    var fixture = '<div id="fixture"></div>';
    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
    // Test requires that ComponentWithState is already defined
    ReactDOM.render(
      React.createElement(ComponentWithState, null, null),
      document.getElementById('fixture')
    );
  });

  afterEach(function () {
    let el = document.getElementById('fixture');
    if (el !== null) {
      document.body.removeChild(el);
    }
  });

  it('initial count should be zero', function () {
    let content = document.getElementById('count-result');
    expect(content.innerHTML).toEqual('You clicked 0 times')
  });

  it('count should be incremented after click', function () {
    const incButton = document.getElementById('count-button');
      incButton.click();
    const content = document.getElementById('count-result');
    expect(content.innerHTML).toEqual('You clicked 1 times');
  });

});