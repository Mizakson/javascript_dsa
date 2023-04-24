// sub module 4 final mini program
// record collection

// base record collection
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  // function to update records
  function updateRecords(records, id, prop, value) {
    if (value === "") {
      delete records[id][prop]; // if there is no value entered in, the entry will be deleted
    } else if (prop != "tracks" && value != "") {
      records[id][prop] = value
    } else if (prop == "tracks" && value != "" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop == "tracks" && value != "") {
      records[id][prop].push(value);
    }
  
    return records;
  }


// updateRecords(recordCollection, 5439, 'artist', 'ABBA'); // testing the function

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA')); 
