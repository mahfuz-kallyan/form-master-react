import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";
import './Grandpa.css'

import { createContext, useState } from "react";

export const AssetContext = createContext('Gold')
export const MoneyContext = createContext(2000)

const Grandpa = () => {
    const [money, setMoney] = useState(2000)
    const asset = 'Diamond';
    return (
        <div className="grandpa">
            <h2>Grand Pa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
            <AssetContext.Provider value="gold">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunt></Aunt>
                </section>
            </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a context an export it
 * 2. Add provide for the context with a value
 * 3. useContext to access value in the context API*/ 