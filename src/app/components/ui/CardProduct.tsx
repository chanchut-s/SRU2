import React from 'react'

function CardProduct() {
    return (
        <div className='group relative block w-auto max-w-full'>
            <div className="bg-base-100 w-90 relative grid justify-items-center h-full transform items-end transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 duration-500">
                <figure className="overflow-hidden group-hover:shadow-md group-hover:shadow-gray-700 duration-1000 mt-4">
                    <img
                        src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Shoes"
                        className="h-auto max-h-[14rem] w-full object-cover duration-500 group-hover:scale-110" />
                </figure>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>

                <p className="m-2 max-w-sm text-gray-700 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
                </p>
            </div>
        </div>
    )
}

export default CardProduct