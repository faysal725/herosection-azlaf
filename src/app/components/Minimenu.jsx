import React from 'react'

export default function Minimenu() {
  return (
    <main className='bg-customLightGray py-1 '>
        <ul className='max-w-7xl mx-auto flex justify-between gap-7 text-xs font-normal capitalize px-1 xl:px-0'>
            <li className='text-primary'>English</li>
            <li className='hidden xl:block'>Help Center</li>
            <li className='mr-auto uppercase hidden xl:block'>Helpline: 0964781656</li>
            <li className='ml-auto hidden xl:block'>Become a Seller</li>
            <li className='hidden xl:block'>Order Track</li>
            <li className='text-primary'>Sign up / Login</li>
        </ul>
    </main>
  )
}
