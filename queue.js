function PriorityQueue() {
    this.collection = [];
    this.length = 0;
    this.dequeue = function() {
        this.length--;
        return this.collection.shift();
    };
    this.enqueue = function (data){
        if(this.length === 0){
            this.collection.push(data);
        } else {
            let added = false;
            for(let i = 0; i < this.collection.length; i++) {
                if(data[1] < this.collection[i][1]){
                    this.collection.splice(i, 0, data);
                    added = true;
                    break;
                }
            }
            if(!added){
                this.collection.push(data);
            }
        }
        this.length++;
    };
}