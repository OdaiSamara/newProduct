import React from "react"
import "../css/forms.css"
import { useState } from "react"
export default function Forms() {
    const [inputvalue, setinputvalue] = useState([{ catgorey: "", product: "", discription: "", price: "" }])

    const handelAdd = () => {
        setinputvalue([...inputvalue, { catgorey: "", product: "", discription: "", price: "" }])
    }
    const handelChange = (e, i) => {
        const { name, value } = e.target
        const onchangeval = [...inputvalue]
        onchangeval[i][name] = value
        setinputvalue(onchangeval)


    }
    const handelDelete = (i) => {
        const deleteval = [...inputvalue]
        deleteval.splice(i, 1)
        setinputvalue(deleteval)
    }
    return (
        <div className="container">
            <button onClick={handelAdd} className="btn">Add</button>
            {
                inputvalue.map((val, i) =>
                    <div className="od-form">
                        <input type="text" name="catgorey" value={val.catgorey} placeholder="categorey" onChange={(e) => handelChange(e, i)} />
                        <input type="text" name="product" value={val.product} placeholder="product" onChange={(e) => handelChange(e, i)} />
                        <input type="text" name="discription" value={val.discription} placeholder="discrpition" onChange={(e) => handelChange(e, i)} />
                        <input type="number" name="price" value={val.price} placeholder="price" onChange={(e) => handelChange(e, i)} />
                        <button onClick={() => handelDelete(i)} className="btn">Delete</button>
                    </div>
                )}
        </div>


    )
}