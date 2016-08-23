
var indexes = require('../config/indexes');

function update(index){
  return index.update();
}

module.exports = Promise.all(indexes.map(update))
  .then((updatedIndexes) => {
    console.log(updatedIndexes);
  })
  .catch((err, result)=>{
    console.log(err)
  })
