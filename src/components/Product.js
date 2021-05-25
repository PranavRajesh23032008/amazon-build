import Image from 'next/image'
import { useState } from 'react'
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice';

const Product = ({ id, title, price, description, category, image }) => {
    const dispatch = useDispatch()
    const max = 5
    const min = 1
    const [rating, setRating] = useState(Math.floor(Math.random() * (max - min + 1)) + min)
    const [prime, setPrime] = useState(Math.random() < 0.5)
    const addToCart = () => {
        const product = { id, title, price, description, category, image, rating, prime }
        dispatch(addToBasket(product))
    }


    return (
        <div className={"shadow-xl dark:shadow-none bg-white relative flex flex-col m-10 p-10 rounded-lg text-black"}>
            {/* Main */}
            <p className={"text-right text-sm text-gray-400"}>
                {category}
            </p>
            <div className={"flex flex-col"}>
                {/* Product Image */}
                <div className={"mx-auto"}>
                    <img
                        src={image}
                        height={200}
                        width={200}
                    />
                </div>
                {/* Product Name */}

                <p className={"flex font-bold text-lg"}>{title}</p>

                {/* Rating */}
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amazon_yellow-dark" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                </div>

                {/* Prime?? */}
                <div className={"flex"}>
                    {prime && <img
                        src={"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF"}
                        height={50}
                        width={50}
                        objectfit={"contain"}
                    />}
                </div>
                {/* Description */}
                <p className={"text-xs my-2 line-clamp-2"}>{description}</p>
                {/* Cost */}
                <div className={"my-5 text-sm font-bold"}>
                    <Currency quantity={(price)} currency="USD" />
                </div>
                {/* Add */}
                <button className={"button"} onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product
