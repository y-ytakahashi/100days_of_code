/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
  const searchVal = jewels.split('');
  let matchCount = [] 
  for( let item of searchVal){
   
      // console.log(stones.match(new RegExp( item, "g" )));
      if(stones.match(new RegExp( item, "g" )) ){
          matchCount.push(stones.match(new RegExp( item, "g" )))
      }
     
  }
   
  return matchCount.flat().length;
  
};