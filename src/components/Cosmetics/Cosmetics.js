 
import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {

    const cosmetics = [
        {
          "id": "64245774e9851f56253f98f1",
          "price": "$2,024.13",
          "name": "Simone Maynard",
          "gender": "female"
        },
        {
          "id": "64245774c4740c3eb692a254",
          "price": "$3,609.31",
          "name": "Bernadette Green",
          "gender": "female"
        },
        {
          "id": "642457742f42e5d88c926f10",
          "price": "$3,372.45",
          "name": "Ellis Sims",
          "gender": "male"
        },
        {
          "id": "6424577429033fc5889daf92",
          "price": "$2,209.38",
          "name": "Hoffman Mitchell",
          "gender": "male"
        },
        {
          "id": "642457748362510d6908fec3",
          "price": "$2,765.17",
          "name": "Phelps Wise",
          "gender": "male"
        },
        {
          "id": "64245774f9956fba34ab4ad7",
          "price": "$3,600.24",
          "name": "Agnes Huff",
          "gender": "female"
        },
        {
          "id": "642457747cdca381bef26fea",
          "price": "$3,461.81",
          "name": "Audra Harrington",
          "gender": "female"
        }
      ]
    return (
        <div >
            
            {
                cosmetics.map( cosmetic => <Cosmetic
                     key={cosmetic.id}
                     cosmetic = {cosmetic}
                     ></Cosmetic> )
            }
        </div>
    );
};

export default Cosmetics;
 