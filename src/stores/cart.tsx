import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface CartContextType {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  confirmEmail: string;
  setConfirmEmail: Dispatch<SetStateAction<string>>;
  voucherCode: string;
  setVoucherCode: Dispatch<SetStateAction<string>>;
  cardNumber: string;
  setCardNumber: Dispatch<SetStateAction<string>>;
  expiryDate: string;
  setExpiryDate: Dispatch<SetStateAction<string>>;
  cvv: string;
  setCvv: Dispatch<SetStateAction<string>>;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  bookingId: string;
  setBookingId: Dispatch<SetStateAction<string>>;
  basketId: string;
  setBasketId: Dispatch<SetStateAction<string>>;
}

const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: PropsWithChildren) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [voucherCode, setVoucherCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [country, setCountry] = useState("");
  const [basketId, setBasketId] = useState("");

  // TODO: Remove if not needed
  const [bookingId, setBookingId] = useState("");

  const context: CartContextType = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    voucherCode,
    setVoucherCode,
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cvv,
    setCvv,
    country,
    setCountry,
    bookingId,
    setBookingId,
    basketId,
    setBasketId,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
