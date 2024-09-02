import Link from 'next/link'
import React from 'react'

function CardPartner() {
    return (
        <Link href="">
            <div className='group relative block w-auto max-w-full'>
                <div className="relative transform transition-transform duration-500 flex flex-col">
                    <figure className="flex justify-center overflow-hidden flex-shrink-0 group-hover:shadow-gray-400 group-hover:shadow-md duration-1000 border-2 border-blue-900 group-hover:border-transparent">
                        <img
                            src="https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Shoes"
                            className="h-auto max-h-[5rem] object-cover duration-500 group-hover:scale-110" />
                    </figure>
                </div>
            </div>
        </Link>
    )
}

export default CardPartner