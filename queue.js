function PriorityQueue() {
    this.collection = [];
    this.length = 0;

    this.dequeue = function() {
       //removes first element from collection
       if(!this.length){
          return undefined
       } else {
          this.length--;
          return this.collection.shift();
       }
    };

    this.enqueue = function (newItem){
        if(!this.length){
           this.collection.push(newItem);
        } else {
            let added = false;
            //looping threw the collection, to put priotiezed item
            for(let i = 0; i < this.collection.length; i++) {
               if(newItem[1] < this.collection[i][1]){
                  this.collection.splice(i, 0, newItem);
                    added = true;
                    break;
                }
            }
           //if the priority item is not included in collection just push it to the end
            if(!added){
               this.collection.push(newItem);
            }
        }
        this.length++;
    };
}