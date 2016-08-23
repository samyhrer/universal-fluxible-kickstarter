var indexOperationsFactory = require('../../lib/index-operations-factory');
var indexName = 'fangeregisteret';

var indexConfig = {
  index: indexName,
  body: {
    analysis: {
      filter: {
        trigrams_filter: {
          type:  'ngram',
          min_gram: 3,
          max_gram: 3
        }
      },
      analyzer: {
        trigrams: {
          type: 'custom',
          tokenizer: 'standard',
          filter: [
            'lowercase',
            'trigrams_filter'
          ]
        },
        case_insensitive: {
          type: 'custom',
          tokenizer: 'keyword',
          filter: [ 'lowercase' ]
        },
        folding: {
          tokenizer: "standard",
          filter:  [ "lowercase", "asciifolding" ]
        }
      }
    }
  }
}

var mappingTypesConfig = [
  require('../mapping-types/krigsfange')
]

module.exports = {
  create: indexOperationsFactory.buildCreateOperation(indexName, indexConfig),
  destroy: indexOperationsFactory.buildDestroyOperation(indexName),
  update: indexOperationsFactory.buildUpdateOperation(indexName, mappingTypesConfig)
}
