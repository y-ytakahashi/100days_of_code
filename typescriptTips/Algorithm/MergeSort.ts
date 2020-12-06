/**
 * JS Algorithms
 * https://medium.com/better-programming/algorithms-101-how-to-use-merge-sort-and-quicksort-in-javascript-6d8908562fe0
 */

// MergeSort
function mergeSort(array) {
  if (array.length === 1) {
    // console.info({array});
    return array;
  }
  // 配列の要素を半分に分割する
  const middle = Math.floor(array.length / 2);

  // 左半分
  const left: number[] = array.slice(0, middle);

  // 右半分
  const right: number[] = array.slice(middle);
  console.log("left", left, "right", right);
  // ログ出力
  // console.info(left);
  // console.info(right);
  /** 出力結果
   * left [ 10, -1, 2, 5 ]
   * right [ 0, 6, 4, -5 ]
   */
  // mergeSort(left);
  // mergeSort(right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      console.log("IF True");
      console.log(
        "leftValue=",
        left[leftIndex],
        "rightValue=",
        right[rightIndex]
      );

      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      console.log("IF False");
      console.log(
        "leftValue=",
        left[leftIndex],
        "rightValue=",
        right[rightIndex]
      );
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const sampleArray: number[] = [10, -1, 2, 5, 0, 6, 4, -5];
console.log(mergeSort(sampleArray));
