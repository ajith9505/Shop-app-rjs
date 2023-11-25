import React, { useState } from 'react'

// Section component for webpage section
function Section(props) {
    return (
        <div>
            <section className="py-5">
                <div className='container px-4 px-lg-5 mt-5'>
                    <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>

                        {/* Creating cards for each product in array using map method*/}
                        {props.products.map((product) => (
                            <Card key={product.id} product={product} cartItemsCount={props.cartItemsCount} />
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

//Function creating cards for each product with their data;
function Card(props) {

    const [addCart, setAddCart] = useState(true);

    return (
        <div>
            <div className='col mb-5'>
                <div className="card h-100">
                    <img className="card-img-top" src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg' alt='...'></img>
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">{props.product.name}</h5>
                            {props.product.price}.00$
                        </div>
                    </div>
                    <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                        <div className="text-center">
                            <a className='btn btn-outline-dark mt-auto' href="#" role='button'
                            //onClick function for products
                                onClick={() => {
                                    props.cartItemsCount(addCart);
                                    setAddCart(!addCart);
                                }}>
                                {addCart ? 'Add to Cart' : 'Remove from Cart'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section