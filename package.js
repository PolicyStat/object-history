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
  'verb-cli': '^0.4.5',
  'call-n-times': '^1.1.0',
  'auto-package': '^1.0.0',
  policystat: '^1.2.2',
  mightyiam: '^1.1.5',
  'es5-shim': '^4.0.3',
  mocha: '^2.2.1',
  proclaim: '^3.2.0',
  standard: '*'
}
pkg.dependencies = {
  xtend: '^4.0.0',
  changeset: '^0.1.0',
  lodash: '^2.4.1',
  udc: '^1.0.1'
}
pkg.scripts = {
  lint: 'standard',
  doc: 'verb',
  unit: 'mocha test/unit',
  test: 'npm run lint && npm run unit'
}
