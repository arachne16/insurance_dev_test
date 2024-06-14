import Link from "next/link";

const BuyPage = () => {
    return (
        <div>
            {/* /insurance_dev */}
            <Link
                href={"/buy/insurance_dev"}
            className="btn btn-primary" >
                Insurance Dev
            </Link>
            <br/>
            <Link
                href={"/buy/designer_dev"}
                className="btn btn-primary mt-3" >
                Designer
            </Link>
        </div>
    );
}
 
export default BuyPage;