import { useContext } from "react";
import { AssetContext } from "./Grandpa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>My Precious</h2>
            <p>has: {asset}</p>
            <p>Also: {gift}</p>
        </div>
    );
};

export default Special;