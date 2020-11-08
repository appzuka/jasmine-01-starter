const replaceContents = function(target) {
  const el=document.getElementById(target);
  el.innerHTML = 'inserted-contents';
}

describe('Test replace contents of div', function () {

  beforeAll(function () {
    var fixture = '<div id="fixture"></div>';
    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
    replaceContents('fixture');
  });

  afterAll(function () {
    let el = document.getElementById('fixture');
    if (el !== null) {
      document.body.removeChild(el);
    }
  });

  it('contents should have been replaced', function () {
    let content = document.getElementById('fixture');
    expect(content.innerHTML).toEqual('inserted-contents')
  });

});