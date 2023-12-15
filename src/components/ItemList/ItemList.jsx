import Item from "../Item/Item"


const ItemList = ({products }) => {
    return(
        <div classname='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList