function Node(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}
function BST() {
    this.root = null;
    this.insert = function (data){
        let node = new Node(data);
        let current = this.root;
        if(current === null) {
            this.root = node;
            return;
        } else {
            function searchNode(current){
                if(data > current.data){
                    if(current.right === null){
                        current.right = node;
                        return;
                    } else {
                        return searchNode(current.right);
                    }
                } else if(data < current.data) {
                    if(current.left === null) {
                        current.left = node;
                        return;
                    } else {
                        return searchNode(current.left);
                    }
                } else {
                    return null;
                }
            }
            return searchNode(current);
        }
    };
    this.findMin = function () {
        let current = this.root;
        while(current.left != null) {
            current = current.left;
        }
        return current.data;
    };
    this.findMax = function () {
        let current = this.root;
        while(current.right != null) {
            current = current.right;
        }
        return current.data;
    };
    this.find = function (data) {
        let current = this.root;
        while(current) {
            if(current.data === data) {
                return current;
            } else if(data > current.data) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return false;
    };
    this.remove = function (data) {
        function removeNode(current, data) {
            if(current === null) {
                return null;
            }
            if(data === current.data) {
                if(current.left === null && current.right === null) {
                    return null
                } else if(current.left === null) {
                    return current.right;
                } else if(current.right === null) {
                    return current.left;
                } else {
                    let tempNode = current.right;

                    while(tempNode.left != null) {
                        tempNode = tempNode.left;
                    }
                    current.data = tempNode.data;
                    current.right = removeNode(current.right, tempNode.data)
                }
            } else if(data < current.data) {
                current.left = removeNode(current.left, data);
                return current;
            } else if(data > current.data) {
                current.right = removeNode(current.right, data);
                return current;
            } else {
                return null;
            }
        }

        this.root = removeNode(this.root, data)
    }
}