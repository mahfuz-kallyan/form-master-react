import Friend from "./Friend";
import Special from "./Special";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset &&<Special asset={asset}></Special>}
                {name === 'Rubaba' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;