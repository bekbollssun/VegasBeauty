import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function ProductCard () {

    return (
        <Card 
            style={{ width: 500 }}
            cover={<img src=""/>}>
            <Meta title='Sunsreen Cream' description='50$' />
        </Card>
    )
}

export default ProductCard;