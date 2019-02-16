import React, { Fragment } from 'react'
import Button from '../../UI/Button/Button'

const orderSummary  = (props) => {
    const ingredientSummary = Object.entries(props.ingredients)
                                    .map(([igkey, igvalue]) => {
                                      return (<li key={igkey}>
                                            <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {igvalue}
                                           </li>)
                                      })
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
              {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
      )
  }

export default orderSummary
