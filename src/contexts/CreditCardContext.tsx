import React, { createContext, ReactNode, Dispatch, SetStateAction } from 'react';

import useCreditCard from '../hooks/useCreditCard';
import { IPayment } from '../services/api/Payments';

type CreditCardContextProps = {
  children: ReactNode;
};

interface IValidationCreditCard {
  numeroCartao: {
      status: boolean;
      messageError?: string;
  },
  nome: {
      status: boolean;
      messageError?: string;
  },
  validade: {
      status: boolean;
      messageError?: string;
  },
  cvv: {
      status: boolean;
      messageError?: string;
  },
  numeroParcelas: {
      status: boolean;
      messageError?: string;
  },

}

type CreditCardContextType = {
    creditCard: IPayment;
    setCreditCard: Dispatch<SetStateAction<IPayment>>;
    validationCard:IValidationCreditCard; 
    setValidationCard: Dispatch<SetStateAction<IValidationCreditCard>>;
    checkCard: Function;
};

const CreditCardContext = createContext<CreditCardContextType>({} as CreditCardContextType);

function CreditCardProvider({ children }: CreditCardContextProps) {
  const {
    creditCard, setCreditCard, validationCard, setValidationCard, checkCard
  } = useCreditCard();

  return (
    <CreditCardContext.Provider value={{ creditCard, setCreditCard, validationCard, setValidationCard, checkCard }}>
      {children}
    </CreditCardContext.Provider>
  );
}

export { CreditCardContext, CreditCardProvider };