// This file will be inserted in the browser because it is listed
// in karma.conf.js.  Therefore externalComponent will be available in the 
// tests.

const externalComponent = function(target) {
  const el=document.getElementById(target);
  el.innerHTML = 'external-inserted-contents';
}

// Note that you cannot use export/import or require.  The browser does
// not understand these statements.  To do this you will need to pre-process
// the files using browserify or webpack