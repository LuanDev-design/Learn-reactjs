
import React, {useState} from 'react'

    export default function Number() {

        const [name, setName] = useState('Guest');
        const [quatity, setQuatity] = useState();
        const [payment, setPayment] = useState();
        const [shipping, setShipping] = useState();

        function handleNameChange(event){
            setName(event.target.value);
        }

        function handleQuatityChange(event){
            setQuatity(event.target.value);
        }
        
        function handlePaymentChange(event){
            setPayment(event.target.value);
        }
        function handleShippingChange(event){
            setShipping(event.target.value);
        }

        
    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quatity} onChange={handleQuatityChange} type='number' />
            <p>Quatity: {quatity}</p>    

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment} </p>

            <label>
                <input type="radio" value="Pick up"
                        checked={shipping === "Pick up"}
                        onChange={handleShippingChange} />
                        Pick up
            </label>
            <label>
                <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange} />
                        Delivery
            </label>
            <p>Shipping: {shipping} </p>
        </div>
    )
    }
