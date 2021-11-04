import { LRUCache } from '../js/questionC';

describe('LRUCache Method', ()=>{

    const capacity = 3;
    const appCache = new LRUCache(capacity);

    test('Expect LRU class to be created',()=>{
        expect( appCache ).toBeTruthy();
    });

    test('Expect to get key=2 on the cache object', ()=>{

      expect( appCache.get(2)).toBeTruthy();
    });

    test('Expect to get -1 if we get key = 3', ()=>{

      expect( appCache.get(3)).toBe(-1);
    });

    test('Expect to get flase answer if we get key = 3', ()=>{

      expect( appCache.put('3',3)).toBeFalsy();
    });

    test('Expect to get -1 if we get key = 3', ()=>{

      expect( appCache.put('3',3)).toBeFalsy();
    });

});