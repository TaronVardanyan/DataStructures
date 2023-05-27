function Node(data){
    this.data = data;
    this.next = null;
}

function LinkedList() {
   this.head = null;
   this.length = 0;

   //add a new item from the nested tail
   this.append = function(newNodeData) {
      const node = new Node(newNodeData);

      if(!this.head) {
         //if linked list is empty
         this.head = node;
      } else {
         //if linked list containes other nodes
         let currentNode = this.head;

         while(currentNode?.next) {
            //looping until get the reference of the tail node
            currentNode = currentNode.next;
         }
         currentNode.next = node;
      }
      this.length++;
   };

   //add a new item from the head node
   this.prepend = function (newNodeData) {
      const node = new Node(newNodeData);

      if(!this.head) {
         //if linked list is empty
         this.head = node;
      } else {
         node.next = this.head;
         this.head = node;
      }

      this.length++
   }

   //add a new Node on specific index
   this.addAtSpecificIndex = function (index, newNodeData) {
      const node = new Node(newNodeData);
      let currentNode = this.head;
      let previusNode = null;
      let currentIndex = 0;

      if(index >= this.length) {
         return undefined;
      } else {
         while(currentIndex != index){
            previusNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
         }

         if(!previusNode) {
            this.head = node;
         } else {
            node.next = currentNode;
            previusNode.next = node;
         }

      }
      this.length++;
   };

   //find and remove a node with specific data
   this.removeByData = function (removableData) {
      if(!this.head) {
         //if linked list is empty
         return undefined
      } else {
         let currentNode = this.head;
         let previusNode = null;

         while(currentNode.data !== data) {
            previusNode = currentNode;
            currentNode = currentNode.next;
         }

         //if data was in head node and loop isn't started
         if(!previusNode) {
            this.head = currentNode.next;
         } else {
            previusNode.next = currentNode.next;
         }
         this.length--;

         return currentNode;
      }
   }

   //find node by index and remove it
   this.removeByIndex = function (index) {
      let currentIndex = 0;
      let currentNode = this.head;
      let previusNode = null;

      if(index < 0 || index >= this.length) {
         return undefined;
      } else {
         while(currentIndex !== index) {
            previusNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
         }

         if(!previusNode) {
            this.head = currentNode.next;
         } else {
            previusNode.next = currentNode.next;
         }

      }
      this.length--;
      return currentNode;
   };
}