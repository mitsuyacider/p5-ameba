export default {
    input: './lib/ameba.es.js',
    output: [{
      file: './lib/ameba.js',
      format: 'umd',
      name: "p5-ameba"
    }],
    external: [
        'p5'
      ]
  };