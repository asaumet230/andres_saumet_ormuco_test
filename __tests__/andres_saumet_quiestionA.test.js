import { overlaps } from '../js/questionA';

describe("Test to define if two lines overlap", ()=> {


    test("Line (1,5) and line (2,6) must be overloaps",()=>{

        expect( overlaps([1,5], [2,6]) ).toEqual('the lines overloap');

    });

    test("Line (1,5) and line (6,8) must dont be overloaps",()=>{

        expect( overlaps([1,5], [6,8]) ).toEqual('the lines dont overloap');

    });

    test("Line (-1,-5) and line (-6,-8) must dont be overloaps",()=>{

        expect( overlaps([-1,-5], [-6,-8]) ).toEqual('the lines dont overloap');

    });

    test("Line (-1,-5) and line (-2,-6) must be overloaps",()=>{

        expect( overlaps([-1,-5], [-2,-6]) ).toEqual('the lines overloap');

    });

    


});