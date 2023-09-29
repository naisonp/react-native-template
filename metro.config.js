/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'jsx', 'js', 'json', 'ts', 'tsx', 'svg'],
      resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
    },
  };
})();
