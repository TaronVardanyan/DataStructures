function Node(data){
    this.data = data;
    this.next = null;
}
function LinkedList () {
    let head = null;
    let length = 0;
    //add a new Item from the tail
    this.append = function (data) {
        let node = new Node(data);
        if(head === null){
            head = node;
        } else {
            let currentNode = head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };
    //add a new item from head
    this.prepend = function (data) {
        let node = new Node(data);
        if(head === null) {
            head = node;
        } else {
            node.next = head;
            head = node;
        }
        length++;
    };
    //remove certain node with particular data
    this.remove = function (data) {
        let currentNode = head;
        let previusNode;
        if(head.data === data) {
            head = currentNode.next
        } else {
            while(currentNode.data != data) {
                previusNode = currentNode;
                currentNode = currentNode.next;
            }
            previusNode.next = currentNode.next;
        }
        length--;
        return currentNode;
    };
    //add a new item on specific index
    this.addAt = function (data, index) {
        let node = new Node(data);
        let currentNode = head;
        let previusNode;
        let currentIndex = 0;
        if(index > length){
            return null;
        }
        if(index === 0){
            node.next = currentNode;
            head = node;
        } else {
            while(currentIndex < index){
                previusNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            node.next = currentNode;
            previusNode.next = node;
        }
        length++;
    };

    //remove a item on specific index
    this.removeAt = function (index) {
        let currentNode = head;
        let previusNode;
        let currentIndex = 0;
        if(index < 0 || index >= length) {
            return null;
        }
        if(index === 0){
            head = currentNode.next;
        } else {
            while(currentIndex < index){
                previusNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            previusNode.next = currentNode.next;
        }
        length--;
        return currentNode;
    };

    //get specific node by index
    this.elementAt = function (index) {
        let currentNode = head;
        let currentIndex = 0;
        if(index >= length){
            return null;
        }
        if(index === 0) {
            return head;
        } else {
            while(currentIndex < index){
                currentNode = currentNode.next;
                currentIndex++;
            }
            return currentNode;
        }
    }
    this.indexOf = function (data) {
        let currentNode = head;
        let index = 0;
        if(head.data === data){
            return 0;
        } else {
            while(currentNode.data != data){
                currentNode = currentNode.next;
                index++;
            }
            return index;
        }
        return -1;
    };
    this.size = function () {
        return length;
    };
}