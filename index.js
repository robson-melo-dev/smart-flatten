function smartFlattenAdvanced(array, depth = 1, filterFn = null, sortFn = null, removeDuplicates = false) {
    // Core flattening logic
    const coreFlatten = (array, depth) => {
      if (depth === 0) {
        return array;
      }
      let flattened = [];
      for (const item of array) {
        if (Array.isArray(item)) {
          flattened = flattened.concat(coreFlatten(item, depth - 1));
        } else {
          flattened.push(item);
        }
      }
      return flattened;
    };
  
    let flattened = coreFlatten(array, depth);
  
    // Apply additional functionalities
    if (filterFn) {
      flattened = flattened.filter(filterFn);
    }
    if (sortFn) {
      flattened.sort(sortFn);
    }
    if (removeDuplicates) {
      flattened = [...new Set(flattened)];
    }
  
    return flattened;
  }
  
  module.exports = smartFlattenAdvanced;
  

  