import Header from '../components/Header'
import { getSession, useSession } from 'next-auth/client'
import OrderedProducts from '../components/OrderedProducts'
import { db } from '../../firebase'
import moment from 'moment'
import Head from 'next/head'

const Orders = ({ orders }) => {
    const [session] = useSession()
    console.log(orders)
    return (
        <div>
            <Head>
                <title>Your Orders</title>
            </Head>
            <Header />
            {!session ?

                <main className={"my-10 max-w-screen-lg w-50 mx-auto px-16 rounded-lg bg-white shadow-xl dark:shadow-none p-10 "}>
                    <h1 className={`text-3xl dark:text-gray-200 pb-2`}>
                        Login to view your orders.
                    </h1>
                </main>
                :
                <main className={"my-5 max-w-screen-lg w-50 mx-auto px-16 rounded-lg bg-white shadow-xl dark:shadow-none p-10 "}>
                    <h1 style={{ borderBottom: "0.5px solid #F79B34" }} className={`mb-8 text-3xl dark:text-gray-200 pb-2`}>
                        Your Orders
            </h1>
                    {/* Orders */}
                    <div>
                        {orders ? orders && orders?.map(order => (
                            <OrderedProducts amount={order.amount} amountShipping={order.amountShipping} items={order.items} timestamp={order.timestamp} images={order.images} />
                        )) : "You currently do not have any orders"}
                    </div>
                </main>

            }
        </div>
    )
}

export default Orders

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // Get the logged in user's credentials
    const session = await getSession(context);

    if (!session) {
        return {
            props: {},
        };
    }

    const stripeOrders = await db.collection('users').doc(session.user.email).collection('orders').orderBy('timestamp', 'desc').get();

    const orders = await Promise.all(stripeOrders.docs.map(async (order) => ({
        id: order.id,
        amount: order.data().amount,
        amountShipping: order.data().amount_shipping,
        images: order.data().images,
        timestamp: moment(order.data().timestamp.toDate()).unix(),
        items: (
            await stripe.checkout.sessions.listLineItems(order.id, {
                limit: 100
            })
        ).data,
    })));

    return {
        props: {
            orders,
        }
    }
}