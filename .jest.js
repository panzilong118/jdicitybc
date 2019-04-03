const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [
  '/dist/',
  'node_modules\/[^/]+?\/(?!(es|node_modules)\/)', // Ignore modules without es dir
];

module.exports = {
  setupFiles: [
    './tests/setup.js',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'md',
  ],
  modulePathIgnorePatterns: [
    '/_site/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    'dekko',
    'node',
  ],
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    '!components/*/style/index.jsx',
    '!components/style/index.jsx',
    '!components/*/locale/index.jsx',
    '!components/*/__tests__/**/type.jsx',
    '!components/**/*/interface.{js,jsx}',
  ],
  transformIgnorePatterns,
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ]
};
