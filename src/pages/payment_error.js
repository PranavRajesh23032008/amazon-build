import ErrorIcon from '@material-ui/icons/Error';
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { clearBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux'

const Success = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const goBackToHome = () => {
        router.push("/")
    }
    dispatch(clearBasket());
    return (
        <div classname={"h-screen bg-gray-100"}>
            <Head>
                <title>Payment Error!</title>
            </Head>
            <Header />
            <main className={"max-w-screen-lg w-50 mx-auto px-16  bg-white shadow-xl dark:shadow-none  p-10 "}>
                <div className={"flex items-center space-x-2 mb-4"}>
                    <ErrorIcon
                        style={{
                            fontSize: "2rem"
                        }}
                        className={"text-red-500"}
                    />
                    <p className={"text-3xl ml-3"}>Payment Error</p>
                    <br />
                </div>
                <p className={"flex-row"}>
                    Your have reached this page because you have either exitted the payment page or the payment was unsuccessful. Please try again after sometime! Sorry for the inconvenience!
                </p>
                <div className={"text-center"}>
                    <button onClick={goBackToHome} className={"button mt-5 w-lg w-full"}>
                        Go back to the Home Page
                    </button>
                </div>
            </main>
        </div >
    )
}

export default Success
