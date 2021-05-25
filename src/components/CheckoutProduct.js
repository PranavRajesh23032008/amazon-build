import { MinusSmIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {
    addToBasket,
    removeFromBasket,
    removeGroupedFromBasket,
} from "../slices/basketSlice";


function CheckoutProduct(props) {
    const dispatch = useDispatch();

    const id = props.id;
    const title = props.title;
    const rating = props.rating;
    const price = props.price;
    const description = props.description;
    const category = props.category;
    const image = props.image;
    const quantity = props.quantity;

    const total = price * quantity;

    function removeItemFromBasket() {
        dispatch(removeFromBasket({ id }));

    }

    function removeGroupFromBasket() {
        dispatch(removeGroupedFromBasket({ id }));
    }

    function addItemToBasket() {
        const product = { id, title, price, description, category, image, rating };

        dispatch(addToBasket(product));

    }

    return (
        <div className="block py-4 sm:grid sm:grid-cols-5 sm:my-3">
            <div className="text-center sm:text-left ">
                <img src={image} width={200} height={200} objectFit="contain" />
            </div>

            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p className="my-3 text-[#023047] dark:text-gray-200">{title}</p>
                <div className="flex">
                    <div className="flex">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <StarIcon key={i} className="h-5 text-yellow-500" />
                            ))}
                    </div>
                    <div className={"flex"}>
                    </div>
                </div>
                <p className="text-xs my-2 line-clamp-3 text-[#023047] dark:text-gray-200">
                    {description}
                </p>
                <div className="flex">
                    <p className="text-[#023047] dark:text-gray-200">
                        {" "}
                        {quantity} × <Currency quantity={price} currency="USD" /> = {"  "}
                    </p>
                    <span className="font-bold ml-1 text-[#023047] dark:text-gray-200">
                        <Currency quantity={total} currency="USD" />
                    </span>
                </div>
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end mr-2">
                <div className="flex justify-between xs:justify-start">
                    <button className="btn sm:p-1" onClick={removeItemFromBasket}>
                        <MinusSmIcon className="h-5 text-[#023047] dark:text-gray-200" />
                    </button>
                    <div className="p-2 whitespace-normal sm:p-1 sm:whitespace-nowrap text-[#023047] dark:text-gray-200">
                        Quantity:{" "}
                        <span className="font-bold text-[#023047] dark:text-gray-200">
                            {quantity}
                        </span>
                    </div>
                    <button className="btn sm:p-1" onClick={addItemToBasket}>
                        <PlusIcon className="h-5 text-[#023047] dark:text-gray-200" />
                    </button>
                </div>
                <button className="p-2 text-xs md:text-sm bg-gradient-to-t from-red-500 to-red-400 border border-red-400 rounded-sm text-white focus:outline-none active:from-red-600  outline-none" onClick={removeGroupFromBasket}>
                    Remove from Basket
        </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;