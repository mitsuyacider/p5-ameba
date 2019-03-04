export default {
    input: './lib/ameba.es.js',
    output: [{
      file: './lib/ameba.js',
      format: 'cjs',
    }],
    external: [
        'p5'
      ]
  };