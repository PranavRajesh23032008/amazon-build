import Product from "./Product"

const ProductFeed = ({ products }) => {
    return (
        <div className={"grid grid-flow-row-denses md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-40"}>
            {products.slice(0, 4).map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    title={title}
                    id={id}
                    price={price}
                    description={description}
                    category={category}
                    image={image}

                />
            ))}
            <img className={"sm:col-span-full w-full"} src="https://links.papareact.com/dyz" alt="" />
            {products.slice(4, products.length - 8).map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}

                />
            ))}
            <img className={"sm:col-span-full w-full"} src={"https://links.papareact.com/ikj"} />
            {products.slice(products.length - 8, products.length).map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}

                />
            ))}

        </div>
    )
}

export default ProductFeed