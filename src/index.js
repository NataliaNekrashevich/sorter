class Sorter {
  constructor() {
    this.array = [];
    this.comparatorFunction =/* (a, b)=> (a - b);*/    function(a, b){return a>b?true:false;}
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  } 



  sort(indices) {

    function bubbleSort(arr,comparator) {
      for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
          if (comparator(arr[j], arr[j + 1])) {
            var swap = arr[j];
              arr[j] = arr[j + 1];
                arr[j + 1] = swap;
          }
        }
      }
      return arr;
    }

    if(!indices || indices.length <= 0){
      return this.array;
    }
    indices.sort();
    var bufArray = [];  
    indices.forEach(item => {
      bufArray.push(this.array[item]);
    });
        
    bubbleSort(bufArray, this.comparatorFunction);
    //console.log(bufArray);  
    indices.forEach((item, i) => {
      //console.log(item+"  "+i+ "  "+this.array[item]+"   "+bufArray[i]);
      this.array[item]=bufArray[i];
    })
    bufArray.length = 0;
    //console.log(bufArray);
  }

  setComparator(compareFunction) {
    this.comparatorFunction = compareFunction;
  }

}

module.exports = Sorter;