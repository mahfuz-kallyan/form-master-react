import Cousin from "./Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Rafsan'} asset={asset}></Cousin>
                <Cousin name={'Suhana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;