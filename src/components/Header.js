import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { clearBasket, selectItems } from '../slices/basketSlice'

const Header = () => {
    const [session] = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)
    const dispatch = useDispatch()
    return (
        <div className={{ position: "sticky" }}>
            {/*Top div*/}
            <div className={"p-3 bg-amazon_blue flex items-center"}>
                {/*Image*/}
                <div className={"mt-2 flex sm:flex-grow-8"}>
                    <img
                        onClick={() => router.push("/")}
                        className={"cursor-pointer"}
                        src="https://links.papareact.com/f90"
                        height={40}
                        width={115}

                    />
                </div>
                <div className={"hidden sm:flex rounded-md h-100 bg-amazon_yellow-light flex-1 ml-2  hover:bg-amazon_yellow-dark"}>
                    <input
                        className={" rounded-l-md p-2 h-10 w-6 flex-grow outline-none"}
                    />
                    <span className={"p-2 text-black cursor-pointer"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                </div>
                <div className={"mt-1 text-white ml-4 flex space-x-5 whitespace-nowrap text-right"}>
                    <div className={"link text-xs"}>
                        <p>{session ? `Hello, ${session.user.name}` : "Accounds & Details"}</p>
                        <p onClick={!session ? signIn : signOut} className={"underline-text Bold"}>{session ? `Sign Out` : "Sign in"}</p>
                    </div>
                    <div onClick={() => { router.push('/orders') }} className={"link text-xs underline-text"}>
                        <p>Returns</p>
                        <p className={"Bold"}>& Orders</p>
                    </div>
                    <div onClick={() => router.push("/checkout")} className={"link text-xs"}>
                        <div className={"flex flex-col mt-1"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg><sup className={"text-sm -mt-8  text-amazon_yellow-dark"}>{items.length}</sup>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header