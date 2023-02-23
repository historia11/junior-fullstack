import React, { useState, useEffect } from 'react';

function FruitsInfo() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
   
    const fetchedFruits = [
      {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
      },
      {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
      },
      {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
      },
      {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
      },
      {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
      },
      {
        fruitId: 6,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
      },
      {
        fruitId: 7,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
      }
    ];
    setFruits(fetchedFruits);
  }, []);

  // 1. Buah apa saja yang dimiliki Andi?
  const fruitNames = fruits.map((fruit) => fruit.fruitName);
  const uniqueFruitNames = [...new Set(fruitNames)];

  // 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
  //    (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
  //    masing-masing wadah?
  const fruitTypes = fruits.map((fruit) => fruit.fruitType);
  const uniqueFruitTypes = [...new Set(fruitTypes)];

  const fruitTypeDetails = uniqueFruitTypes.map((fruitType) => {
    const fruitsByType = fruits.filter((fruit) => fruit.fruitType === fruitType);
    const fruitNamesByType = fruitsByType.map((fruit) => fruit.fruitName);
    const uniqueFruitNamesByType = [...new Set(fruitNamesByType)];
    return { fruitType, fruitNames: uniqueFruitNamesByType };
  });

  return (
    <div>
      <h1 className='font-medium'>Buah yang dimiliki Andi:</h1>
      <ul>
        {uniqueFruitNames.map((fruitName) => (
          <li key={fruitName}>{fruitName}</li>
        ))}
      </ul>
        
        <h2 className='font-medium'>Jumlah wadah yang dibutuhkan: {uniqueFruitTypes.length} </h2>
 
      <h2 className='font-medium'>Wadah buah berdasarkan tipe:</h2>
      {fruitTypeDetails.map((typeDetail) => (
        <div key={typeDetail.fruitType}>
          <h2 className='font-medium'>{typeDetail.fruitType}:</h2>
          <ul>
            {typeDetail.fruitNames.map((fruitName) => (
              <li key={fruitName}>{fruitName}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FruitsInfo;
