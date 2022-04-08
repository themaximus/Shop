import c from './Product.module.css'


const Product = (props) => {
    return (
        <div className={c.gg}>
            <div className={c.Product} >
            <img className={c.img} src="https://www.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/5/6/5671I-02X-010-1_6.jpg" />
            </div>
            <div className={c.nameProduct}>
            <h1>Пижама для карликов </h1>
            </div>
        </div>
    )
}

export default Product;