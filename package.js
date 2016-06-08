Package.describe({
  name: 'zetoff:lajungla-theme',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Theme for Reaction Commerce',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.mainModule('lajungla-theme.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('lajungla-theme');
  api.mainModule('lajungla-theme-tests.js');
});
