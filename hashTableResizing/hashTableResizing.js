/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  // input is the key and value, in our case it is string
  // output, should insert into the hash table

  result.insert = function(key, value) {
    // TODO: implement `insert`
    var idx = getIndexBelowMaxForKey(key, storageLimit);
   //console.log(idx);
    if(!storage[idx]) {
      var obj = {};
      obj[key] = value;
      size++;
    } else {
      obj[idx][key] = value;
      size++;
    }
    storage.push(obj);
    //console.log(storage);
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve`
    var idx = getIndexBelowMaxForKey(key, storageLimit);
    //console.log(storage[idx-1][key]);
    var value = storage[idx-1][key] ? storage[idx-1][key] : undefined;
    return value;
  };

  result.remove = function(key) {
    // TODO: implement `remove`
    var idx = getIndexBelowMaxForKey(key, storageLimit);
    delete storage[idx-1][key];
    //console.log(storage);
  };
  return result;
};

var hashTable1 = makeHashTable();
hashTable1.insert('priya', 'koneru');
hashTable1.insert('priya1', 'koneru1');
hashTable1.insert('priya2', 'koneru2');
hashTable1.retrieve('priya1');
hashTable1.remove('priya2');
