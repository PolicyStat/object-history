var pkg = require('auto-package')
var ps = require('policystat')

pkg.name = 'object-history'
pkg.versionFile()
pkg.description = 'Object History'
pkg.main = 'lib/index.js'
pkg.githubRepo('PolicyStat/object-history')
pkg.keywords = [
  'object',
  'history',
  'undo',
  'redo',
  'browser'
]
pkg.author = require('mightyiam').authorString
pkg.license = ps.openSource.license.spdx
pkg.copyright = ps.copyrightNotice
pkg.devDependencies = {
  'auto-package': '^1.0.0',
  policystat: '^1.2.2',
  mightyiam: '^1.1.5',
  'es5-shim': '^4.0.3',
  jasmine: '^2.2.0',
  lodash: '^2.4.1',
  semistandard: '*',
  watch: '^0.13.0'
}
pkg.dependencies = {
  changeset: '^0.1.0',
  lodash: '^2.4.1',
  udc: '^1.0.1'
}
pkg.scripts = {
  watch: 'watch "npm test"',
  test: 'semistandard && jasmine'
}
