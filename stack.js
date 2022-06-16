function Stack() {
    this.count = 0;
    this.storage = {};
    this.push = function (data) {
        this.storage[this.count] = data;
        this.count++;
    };
    this.pop = function () {
        if(this.count === 0) {
            return undefined;
        } else {
            let lastItem = this.storage[this.count - 1];
            delete this.storage[this.count - 1];
            this.count--;
            return lastItem;
        }
    };
    this.peek = function () {
        return this.storage[this.count - 1];
    };
}