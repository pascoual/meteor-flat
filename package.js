Package.describe({
  name: 'pascoual:flat',
  version: '1.6.0-0',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for Hughsk Flat node package: https://github.com/hughsk/flat',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/pascoual/meteor-flat',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({flat: "1.6.0"});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('flat.js');
  api.export('flatten');
  api.export('unflatten');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pascoual:flat');
  api.addFiles('flat-tests.js');
});
