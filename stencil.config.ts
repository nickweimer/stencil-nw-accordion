import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'slideoutpagenav',
  plugins: [
    sass()
  ],
  generateDistribution: true,
  generateWWW: false,
  bundles: [{ components: ['nw-accordion'] }],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
