import { createContext, useState, useContext } from 'react';

export const CartContext = createContext({ numberOfItems: 0, setNumberOfItems: () => {} });
