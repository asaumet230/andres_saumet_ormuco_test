
 
 export function overlaps(lineA = [], lineB = []) {

    //Data entry validation:
    if (lineA.length < 2 || lineB.length < 2) {
        console.log('both lines must have two ordinates, one in (x) and the other in (y)');
        return;
    }

    let answer = null;
    let mensaje = '';
  

    for (let index = 0; index < 2; index++) {

        // For negative coordinates:
        if (lineA[index] < 0 && lineB[index] < 0) {

            console.log('both points are negative');

            for (let index = 0; index < 2; index++) {

                if (lineB[index] >= lineA[0] || lineB[index] >= lineA[1]) {

                    answer = true;

                }
            }
        } else {

            //For positive coordinates
            if (lineA[index] >= lineB[0] || lineA[index] >= lineB[1]) {

                answer = true;

            }

        }
    }

    if(answer){

        console.log('the lines overloap');
        mensaje = 'the lines overloap';
        return mensaje;

    } else {
         
        console.log('the lines dont overloap');
         mensaje = 'the lines dont overloap';
        return mensaje;

    }
    
   
}

overlaps([1,5], [2,6]);


