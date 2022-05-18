// LRU算法 最近最少使用
class LRUCache {
    private capacity: number = 0;
    private cache = new Map<number, number>();

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const val = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, val);
            return val;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        const val = this.cache.get(key);
        if (val) {
            this.cache.delete(key);
        } else {
            if (this.cache.size === this.capacity) {
                // 删除map中第一个最近最少使用的数据，这里表示第一个key-value
                this.cache.delete(this.cache.keys().next().value);
            }
        }
        this.cache.set(key, value);
    }

    print(): void {
        console.log(this.cache.entries());
    }
}

const lruCache = new LRUCache(3);
lruCache.put(1, 0);
lruCache.put(2, 2);
console.log(lruCache.get(1));
lruCache.print();
