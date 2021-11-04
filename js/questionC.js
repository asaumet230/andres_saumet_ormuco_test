

export class LRUCache {

    capacity;
    cache;
    set;

    constructor( capacity ) {

        this.capacity = capacity;
        this.cache = {}
        this.set = new Set();
    }

    get(key) {
        if(!this.set.has(key)) {
            return -1;
        }
        this.refresh(key);
        return this.cache[key];
    }
    
    put(key, value) {
        this.cache[key] = { 'value': value, 'additon_date': Date.now(), 'location': new Promise((resolve, reject)=>{

                navigator.geolocation.getCurrentPosition((position)=>{
            
                    const postionNow = position;
                    const latitude = postionNow.coords.latitude;
                    const longitude = postionNow.coords.longitude;
                    const getPosition = {
                        longitude,
                        latitude
                    }

                    if( latitude ) {
                        resolve(getPosition);
                    }
                })
            }).then( data => data )
        };

        this.refresh(key);
        if(this.set.size > this.capacity ) {
            this.removeOldest();
        }
    }

    refresh(key){
        this.set.delete(key);
        this.set.add(key);

    }

    removeOldest(){
        let it = this.set[Symbol.iterator]();
        let key = it.next().value;
        this.set.delete(key);
        delete this.cache[key];
    }
}


const cache = new LRUCache( 5 );
cache.put(1, 1);
cache.put(2, 2);
console.log( cache.cache );