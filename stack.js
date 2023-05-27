function Stack() {
   this.count = 0;
   this.storage = {};

   this.push = function (newItem) {
      //adding new item to stack
      this.count++;
      this.storage[this.count - 1] = newItem;
      return this.storage;
   };

   this.pop = function () {
      //remove the last item from stack;
      if(!this.count){
         //check if stack is empty
         return undefined;
      } else {
         //saving the referance of last item in const
         const lastItem = this.storage[this.count - 1];
         delete this.storage[this.count - 1];
         this.count--;
         return lastItem;
      }
   };
   this.getLastItem = function () {
      //return the last item
      return this.storage[this.count - 1];
   }
}