var esClient = require('./elasticsearch-client');

function buildUpdateOperation(indexName, mappingTypesConfig){
  return () => {
    var promises = mappingTypesConfig.map((config)=>{
      return new Promise((resolve, reject)=>{
        esClient.indices.putMapping({
          index: indexName,
          type: config.type,
          body: {
            properties: config.mapping
          }
        }, (err) => {
          if(err){
            return reject(err)
          }
          resolve({
            indexName: indexName,
            type: config.type,
            operation: 'updateTypeMapping'
          });
        });
      });
    });
    return Promise.all(promises);
  }
}

function buildCreateOperation(indexName, config){
  return () => {
    return new Promise((resolve, reject) => {
      esClient.indices.create(config, (err) => {
        if(err){
          return reject(err)
        }
        resolve({
          indexName: indexName,
          operation: 'create'
        });
      });
    });
  }
}

function buildDestroyOperation(indexName){
  return () => {
    return new Promise((resolve, reject) => {
      esClient.indices.delete({
        index: indexName
      }, (err)=>{
        resolve({
          indexName: indexName,
          operation: 'destroy'
        })
      });
    });
  }
}

module.exports = {
  buildCreateOperation: buildCreateOperation,
  buildDestroyOperation: buildDestroyOperation,
  buildUpdateOperation: buildUpdateOperation
}