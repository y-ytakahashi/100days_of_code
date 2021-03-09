
var primaryColor = [
  { color: 'red'  },
  { color: 'yellow' },
  { color: 'blue' }
]

// reduce 関数の中で acc は完結するので、イミュータブルを崩してOK
primaryColor.reduce(function(acc, primary){
  acc.push(primaryColor.color)
  return acc
},[])

console.log(primaryColor)



// reduce の活用方法

function balancedParens(string){
  return string.split('').reduce(function(acc, str){
    if( str === '(' ){ return acc + 1; }
    if( str === ')' ){ return acc - 1; }
  }, 0)
}

const ans_baranceParens = balancedParens('())))')
console.log(ans_baranceParens)
