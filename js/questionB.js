
export const versionComparison = (version1, version2) => {

     let message= ''

     if( !version1.includes('.') || !version2.includes('.') ) {
        console.log('Write correct values');
        return message = 'Write correct values' ;
     }
  
    const versionOne =Number.parseFloat(version1.replace('.', ''));
    const versionTwo = Number.parseFloat(version2.replace('.', ''));
   

    if(versionOne < versionTwo ) {
        
        console.log(`The version ${ version2 } is grather than version ${ version1 }`);
        return message = `The version ${ version2 } is grather than version ${ version1 }`;

    } else if( versionOne > versionTwo ) {

        console.log(`The version ${ version1 } is grather than version ${ version2 }`);
        return message = `The version ${ version1 } is grather than version ${ version2 }`;
    
    } else {

        console.log('Both versions are equal');
        return message = 'Both versions are equal';
    }

}

versionComparison('1.5', '1.6');
