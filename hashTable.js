function hashedKey(key, tableSize) {
    let hash = 0;
    for(let i = 0; i < key.length; i++){
        hash = hash + key.charCodeAt(i);
    }
    return hash % tableSize
}
function HashTable () {
    this.table = [];
    this.length = 0
    this.setItem = function (key, value) {
        this.length++;
        const idx = hashedKey(key, this.length);
        if(this.table[idx]){
            this.table[idx].push([key, value]);
        } else {
            this.table[idx] = [[key, value]];
        }
    };
    this.getItem = function (key) {
        const idx = hashedKey(key, this.length);
        return this.table[idx].find(item => item[1] === values)[1];
    };
    this.removeItem = function (key) {
        const idx = hashedKey(key, this.length);
        if(this.table[idx]) {
            let subIndex = this.table[idx].findIndex(item => item[1] === key);
            return this.table[idx].slice(subIndex, 1);
        }
        return null;
    };
}