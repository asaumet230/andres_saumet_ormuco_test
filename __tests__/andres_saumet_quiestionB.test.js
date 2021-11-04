import { versionComparison } from "../js/questionB";

describe('version control tests', ()=>{

    test('version one must be greater than the second (1.5, 1.2)',()=>{
        expect( versionComparison('1.5', '1.2') ).toEqual('The version 1.5 is grather than version 1.2');
    });

    test('version two must be greater than the firts one (1.5, 2.2)',()=>{
        expect( versionComparison('2.2', '1.5') ).toEqual('The version 2.2 is grather than version 1.5');
    });

    test('Both Versions are equals (2.2, 2.2)',()=>{
        expect( versionComparison('2.2', '2.2') ).toEqual('Both versions are equal');
    });

    test('the versions do not have the correct values',()=>{
        expect( versionComparison('40', '50') ).toEqual('Write correct values');
    });

})