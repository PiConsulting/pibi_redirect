import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: `import React from 'react';`,
  },
  esbuildOptions: {
    loader: {
      '.js': 'jsx',
    },
  },
};
