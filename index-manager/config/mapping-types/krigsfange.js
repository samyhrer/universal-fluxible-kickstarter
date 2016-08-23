var mapping = {
  displayName: {
    type: 'multi_field',
    fields: {
      trigram: {
        type: 'string',
        index: 'analyzed',
        analyzer: 'trigrams'
      },
      "folded": {
        "type":       "string",
        "analyzer":   "folding"
      }
    }
  },
  sorted_by: {
    type: 'string',
    index: 'analyzed',
    analyzer: 'case_insensitive'
  }
}

module.exports = {
  type: 'krigsfange',
  mapping: mapping
}
