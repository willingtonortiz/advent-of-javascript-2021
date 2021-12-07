import { useEffect, useState } from "react";
import styled from "styled-components";

import dollar from "./assets/images/dollar.svg";
import people from "./assets/images/people.svg";

const Body = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700;800&family=Roboto+Mono:wght@700&display=swap");
  background: #f6f6f3;
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Mono", monospace;
  color: #333;

  & label {
    background: #ffffff;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #60c1b6;
    font-family: "Roboto Mono", monospace;
    width: 135px;
    height: 68px;
    font-size: 1.5rem;
    cursor: pointer;
  }

  & input[type="radio"] {
    display: none;
  }

  & input[type="radio"]:checked + label {
    background: #60c1b6;
    color: white;
  }

  & button {
    background: #ed7861;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding: 18px 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Mono", monospace;
    font-size: 1.5rem;
    color: white;
    border: none;
    padding: 20px 100px;
    margin-left: auto;
    cursor: pointer;
  }

  & button:hover {
    background: #254441;
  }

  & input[type="text"] {
    text-align: center;
    font-size: 3.875rem;
    font-family: "Inter", sans-serif;
    border: none;
    background: none;
    outline: none;
    margin-right: 10px;
    width: 100%;
    border-bottom: 3px dotted #b3b3b3;
  }
`;

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 44px rgba(148, 146, 120, 0.23);
  border-radius: 20px;
  width: 765px;
  padding-top: 55px;
`;

const TipAmountOrTotalPerPerson = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 35px;

  & label {
    font-size: 0.875rem;
    text-align: right;
  }

  & .dollars {
    font-size: 5rem;
  }

  & sup {
    font-size: 3rem;
  }

  & .dollars {
    font-family: "Inter", sans-serif;
    font-weight: 700;
  }
`;

const TipAmount = styled(TipAmountOrTotalPerPerson)`
  padding-bottom: 35px;
  border-bottom: 1px solid #dedede;
  margin-bottom: 35px;
`;

const TotalPerPerson = styled(TipAmountOrTotalPerPerson)`
  padding-bottom: 35px;
`;

const InputFields = styled.div`
  background: #f7f7f7;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  padding: 0 35px;

  & .label {
    margin-bottom: 45px;
    text-align: center;
    padding-top: 10px;
  }
`;

const BillAmount = styled.div`
  border-right: 2px solid #dedede;
  padding: 65px 45px 45px 20px;
  width: 70%;

  & .field {
    display: flex;
    align-items: flex-end;
  }

  & input[type="text"] {
    background: url(${dollar}) left 15px no-repeat;
    padding-left: 40px;
    width: 100%;
  }
`;

const NumberOfPeople = styled.div`
  padding: 65px 45px 45px;
  width: 30%;

  & .field {
    display: flex;
    align-items: flex-end;
  }

  & input[type="text"] {
    background: url(${people}) left 20px no-repeat;
    padding-left: 40px;
    text-align: right;
  }
`;

const Field = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TipPercentages = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 35px;
  background: #eeeeee;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
`;

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  text-align: right;
  width: 100%;
  padding: 30px 35px;
  background: #f7f7f7;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #f7f7f7;
`;

const PERCENTAGES = [5, 10, 15, 20];

const Day_07_Page = () => {
  const [selectedRadioTip, setSelectedRadioTip] = useState(20);
  const [numberOfPeople, setNumberOfPeople] = useState<string>("3");
  const [billAmount, setbillAmount] = useState<string>("102.02");
  const [totalPerPerson, settotalPerPerson] = useState(40.81);
  const [tipAmount, settipAmount] = useState(20.4);

  useEffect(() => {
    document.title = "AOJ 2021 - Day 7";
  }, []);

  const calculate = () => {
    const originalBillAmount = parseFloat(billAmount);
    const originalNumberOfPeople = parseInt(numberOfPeople);

    const tipPercentage = selectedRadioTip / 100;
    const totalTip = Math.round(originalBillAmount * tipPercentage * 100) / 100;
    const totalBill = totalTip + originalBillAmount;

    const perPerson =
      Math.round((totalBill / originalNumberOfPeople) * 100) / 100;

    settotalPerPerson(perPerson);
    settipAmount(totalTip);
  };

  return (
    <Body>
      <Wrapper>
        <TipAmount>
          <div className="label">Tip Amount</div>

          <div className="dollars">
            <sup>$</sup>
            <span>{tipAmount}</span>
          </div>
        </TipAmount>

        <TotalPerPerson>
          <div className="label">Total Per Person</div>

          <div className="dollars">
            <sup>$</sup>
            <span>{totalPerPerson}</span>
          </div>
        </TotalPerPerson>

        <InputFields>
          <BillAmount>
            <Field>
              <input
                type="text"
                name="bill-amount"
                value={billAmount}
                onChange={(e) => setbillAmount(e.target.value)}
              />
            </Field>

            <div className="label">Bill Amount</div>
          </BillAmount>

          <NumberOfPeople>
            <Field>
              <input
                type="text"
                name="number-of-people"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
              />
            </Field>

            <div className="label">Number of People</div>
          </NumberOfPeople>
        </InputFields>

        <TipPercentages>
          {PERCENTAGES.map((x, i) => (
            <div key={i}>
              <input
                type="radio"
                name="tip"
                value={x}
                checked={selectedRadioTip === x}
                readOnly
              />

              <label onClick={(_) => setSelectedRadioTip(x)}>{x}%</label>
            </div>
          ))}
        </TipPercentages>

        <ButtonWrapper>
          <button onClick={calculate}>Calculate</button>
        </ButtonWrapper>
      </Wrapper>
    </Body>
  );
};

export default Day_07_Page;
