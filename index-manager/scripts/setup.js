
var indexes = require('../config/indexes');

function destroy(index){
  return index.destroy();
}
function create(index){
  return index.create()
}
function update(index){
  return index.update();
}

module.exports = Promise.all(indexes.map(destroy))
  .then((destroyedIndexes)=>{
    console.log(destroyedIndexes);
    return Promise.all(indexes.map(create));
  })
  .then((createdIndexes)=>{
    console.log(createdIndexes);
    return Promise.all(indexes.map(update));
  })
  .then((updatedIndexes) => {
    console.log(updatedIndexes);
  })
  .catch((err, result)=>{
    console.log(err)
  })
