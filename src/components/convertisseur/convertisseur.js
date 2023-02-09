import React from 'react'
import { useState } from 'react'

export const Convertisseur = () => {
    // Convertisseur de devises : Créez un composant qui convertit une devise en une autre. Utilisez les state pour gérer les taux de change et les montants à convertir.
    let [dollars, setDollars] = useState(0);
    
    const euroToDollars = () => {
        let currentEuro = Number(document.getElementsByTagName('input')[0].value);
        let dollar = 1.0763579062;
        setDollars(dollar * currentEuro);
    }
    
  return (
    <div>
        <div>
            <h1 className='font-bold text-2xl text-center my-3'>Convertisseur</h1>
            <div className='text-center'>
                <input type="text" placeholder='Euro' className='w-40 border border-gray-300 rounded'/>
                <button className='mx-2 px-2 text-white font-bold bg-blue-400 rounded-full' onClick={euroToDollars}>TO</button>
                <span className='inline-block w-40 border border-gray-300 rounded text-start'>{dollars}</span>
            </div>
            
        </div>
    </div>
  )
}
