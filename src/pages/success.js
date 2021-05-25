import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Success = () => {
    const router = useRouter()
    const goToOrders = () => {
        router.push("/orders")
    }
    return (
        <div classname={"h-screen bg-gray-100"}>
            <Head>
                <title>Thank you, Your Order is Confirmed</title>
            </Head>
            <Header />
            <main className={"max-w-screen-lg w-50 mx-auto px-16  bg-white shadow-xl dark:shadow-none  p-10 "}>
                <div className={"flex items-center space-x-2 mb-4"}>
                    <CheckCircleIcon
                        style={{
                            fontSize: "2rem"
                        }}
                        className={"text-green-400"}
                    />
                    <p className={"text-3xl ml-3"}>Thank you, Your Order is Confirmed</p>
                    <br />
                </div>
                <p className={"flex-row"}>
                    Thank you for shopping with us. We'll send a confirmation once your item has shipped, if you would like to check the status of your order(s) please press the link below.
                </p>
                <div className={"text-center"}>
                    <button onClick={goToOrders} className={"button mt-5 w-lg w-full"}>
                        Go to my Orders
                    </button>
                </div>
            </main>
        </div >
    )
}

export default Success
