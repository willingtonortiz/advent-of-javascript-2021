import { useEffect } from "react";
import styled from "styled-components";

import "./styles.css";
import PLATE_LIST from "./data/plates";

// Background
import bgBtmRight from "./images/bg__btm-right.svg";
import bgTopRight from "./images/bg__top-right.svg";

// Icons
import chevron from "./images/chevron.svg";
import check from "./images/check.svg";

import useCart from "./state/store";

const Body = styled.div`
  background: url(${bgBtmRight}) left 10% no-repeat,
    url(${bgTopRight}) right top no-repeat,
    #eff0f6 url(${bgBtmRight}) right bottom no-repeat;
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100%;
  min-width: 100%;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100vw;
  gap: 50px;
  height: 100vh;
`;

const Panel = styled.div`
  background: white;
  border-radius: 25px;
  box-sizing: border-box;
  box-shadow: 0px 0px 70px #c7cbe3;
  height: 875px;
  padding-top: 50px;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 375px;
`;

const CartSummary = styled.ul`
  border-bottom: 5px solid #d7d7f9;
  margin: 0 30px 0 25px;

  & li {
    display: grid;
    grid-template-areas:
      "plate content content"
      "plate quantity price";
  }

  & .menu-item {
    margin-bottom: 5px;
  }

  & p {
    margin-bottom: 0;
  }

  & .price {
    margin: 0 0 16px 0;
    font-size: 1rem;
  }

  & .content {
    grid-area: content;
  }

  & li {
    border-bottom: 1px solid #d7d7f9;
    margin-bottom: 45px;
    padding-bottom: 45px;
  }

  & li:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  & li .subtotal {
    text-align: right;
  }
`;

const Title = styled.h1`
  padding-left: 40px;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 20px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & li {
    margin-left: 15px;
    display: flex;
    padding-right: 30px;
    position: relative;
    gap: 20px;
    margin-bottom: 45px;
  }

  & li:nth-child(4n + 1):before {
    --background: #e1f1fe;
  }

  & li:nth-child(4n + 2):before {
    --background: #ffe2f0;
  }

  & li:nth-child(4n + 3):before {
    --background: #f7f7fe;
  }

  & li:nth-child(4n + 4):before {
    --background: #defef0;
  }

  & li:before {
    background: var(--background);
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 30px;
    top: 0;
    z-index: 1;
  }

  & .plate {
    height: 148px;
    width: 148px;
    position: relative;
    z-index: 2;
    top: -15px;
  }

  & .content {
    padding-top: 30px;
    position: relative;
    width: 100%;
    z-index: 3;
  }

  & .price {
    margin: 0 0 20px 0;
    padding: 0;
  }

  & button {
    position: absolute;
  }
`;

const Totals = styled.div`
  padding: 35px 30px;

  & .line-item {
    display: flex;
    align-items: flex-end;
    text-align: right;
    margin-bottom: 20px;
  }

  & .line-item .label {
    font-size: 1rem;
    font-weight: bold;
    width: 60%;
  }

  & .line-item .amount {
    width: 40%;
  }

  & .line-item.total .price {
    color: #6b00f5;
  }
`;

const Day_02_Page = () => {
  const { cartItems, subtotal, tax, total } = useCart((state) => ({
    cartItems: state.items,
    subtotal: state.subtotal,
    tax: state.tax,
    total: state.total,
  }));
  const addToCart = useCart((state) => state.addItemToCart);
  const incrementCount = useCart((state) => state.incrementItemCount);
  const decrementCount = useCart((state) => state.decrementItemCount);

  useEffect(() => {
    document.title = "Day 2";
  }, []);

  return (
    <Body>
      <Wrapper className="menu">
        <Panel>
          <Title>To Go Menu</Title>

          <MenuList>
            {PLATE_LIST.map((plate) => (
              <li key={plate.id}>
                <div className="plate">
                  <img src={plate.image} alt={plate.alt} className="plate" />
                </div>

                <div className="content">
                  <p className="menu-item">{plate.name}</p>

                  <p className="price">${plate.price}</p>

                  {cartItems.findIndex((x) => x.id === plate.id) !== -1 ? (
                    <button className="in-cart">
                      <img src={check} alt="Check" />
                      In Cart
                    </button>
                  ) : (
                    <button className="add" onClick={(_) => addToCart(plate)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </li>
            ))}
          </MenuList>
        </Panel>

        <Panel className="cart">
          <Title>Your Cart</Title>
          {cartItems.isEmpty() && <p className="empty">Your cart is empty.</p>}

          {!cartItems.isEmpty() && (
            <>
              <CartSummary>
                {cartItems
                  .map((plate) => (
                    <li key={plate.id}>
                      <div className="plate">
                        <img
                          src={plate.image}
                          alt={plate.alt}
                          className="plate"
                        />
                        <div className="quantity">{plate.count}</div>
                      </div>

                      <div className="content">
                        <p className="menu-item">{plate.name}</p>
                        <p className="price">${plate.price}</p>
                      </div>

                      <div className="quantity__wrapper">
                        <button
                          className="decrease"
                          onClick={(_) => decrementCount(plate.id)}
                        >
                          <img src={chevron} />
                        </button>

                        <div className="quantity">{plate.count}</div>

                        <button
                          className="increase"
                          onClick={(_) => incrementCount(plate.id)}
                        >
                          <img src={chevron} />
                        </button>
                      </div>
                      <div className="subtotal">
                        ${(plate.price * plate.count).toFixed(2)}
                      </div>
                    </li>
                  ))
                  .toArray()}
              </CartSummary>

              <Totals>
                <div className="line-item">
                  <div className="label">Subtotal:</div>
                  <div className="amount price subtotal">
                    ${subtotal.toFixed(2)}
                  </div>
                </div>
                <div className="line-item">
                  <div className="label">Tax:</div>
                  <div className="amount price tax">${tax.toFixed(2)}</div>
                </div>
                <div className="line-item total">
                  <div className="label">Total:</div>
                  <div className="amount price total">${total.toFixed(2)}</div>
                </div>
              </Totals>
            </>
          )}
        </Panel>
      </Wrapper>
    </Body>
  );
};

export default Day_02_Page;
