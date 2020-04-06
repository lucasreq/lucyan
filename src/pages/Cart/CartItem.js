import React from 'react'

export default function CartItem({item,value}) {
    const {id,title,img,price,total} = item;
    const {removeItem} = value;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:'5rem'}}
                className="img-fluid" alt="product"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-ls-none">product :</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-ls-none">price :</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-ls-none">remove :</span>
                <button onClick={()=>removeItem(id)}>delete</button>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-ls-none">total :</span>
                {total}
            </div>
        </div>
    )
}

