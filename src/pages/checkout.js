import { useSelector } from "react-redux";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession, signIn } from "next-auth/client";
import { groupBy } from "lodash";
import Head from "next/head";
import { loadStripe } from '@stripe/stripe-js'
import axios from "axios";

const stripePromise = loadStripe("pk_test_51ItwkaSGrizcP6culwZLm2MHh2Gx1Mf0IsAXwyJrM03j4iC4vfTSiWJRj9WJPSr79Y4P912ipdwtR6WtdmTIDJgR00UMYz9RQD");
function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();

    const createCheckOutSession = async () => {
        const stripe = await stripePromise;
        console.log(stripe)
        const checkoutSession = await axios.post("/api/create-checkout-session", {
            items: items,
            email: session.user.email,
        });

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if (result.error) {
            alert(result.error.message);
        }
    };

    const groupedItems = Object.values(groupBy(items, "id"));
    return (
        <div className="dark:bg-gray-800 min-h-screen">
            <Header />
            <Head>
                <title>Checkout</title>
            </Head>
            <main className="m-5 lg:flex max-w-screen-2xl mx-auto dark:bg-gray-800">
                {/* Left */}

                <div className="backdrop-filter bg-white bg-opacity-25 dark:text-white dark:bg-opacity-10 shadow-xl dark:shadow-none flex flex-col p-5 space-y-50 mt-5 mb-5 rounded-lg ml-5 mr-5">
                    <h1
                        className={`text-3xl dark:text-gray-200 ${items.length > 0 ? "border-b pb-4" : "pb-2"
                            }`}
                    >
                        {items.length === 0
                            ? "Your Amazon Basket is empty."
                            : "Shopping Basket"}
                    </h1>
                    <div>
                        {groupedItems.map((group, i) => (
                            <div
                                key={group[0].image}
                                timeout={500}
                                classNames="item"
                            >
                                <CheckoutProduct
                                    id={group[0].id}
                                    title={group[0].title}
                                    rating={group[0].rating}
                                    price={group[0].price}
                                    description={group[0].description}
                                    category={group[0].category}
                                    image={group[0].image}
                                    prime={group[0].prime}
                                    quantity={group.length}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right */}
                {items.length > 0 && (
                    <div
                        className="backdrop-filter bg-white bg-opacity-25 dark:text-white dark:bg-opacity-10 shadow-xl dark:shadow-none flex flex-col p-5 space-y-50 mt-5 mb-5 rounded-lg ml-5 mr-5"
                    >
                        <h2 className="whitespace-nowrap text-[#023047] dark:text-gray-200">
                            Subtotal ({items.length} items):{" "}
                            <span className="font-bold text-[#023047] dark:text-gray-200">
                                <Currency quantity={total} currency="USD" />
                            </span>
                        </h2>

                        <button
                            role={"link"}
                            onClick={!session ? signIn : createCheckOutSession}
                            className={"button"}
                        >
                            {!session ? "Sign in to checkout" : "Proceed to Checkout"}
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Checkout;