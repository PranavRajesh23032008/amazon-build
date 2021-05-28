import Head from "next/head";
import Header from "../components/Header";
import Banner from '../components/Banner'
import ProductFeed from "../components/ProductFeed";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link, animateScroll as scroll } from "react-scroll";
import { getSession } from "next-auth/client";

export default function Home({ products, session }) {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className={"bg-gray-100"}>
      <Head>
        <title>Online Shopping Site</title>
      </Head>
      {/*Header*/}

      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <header id={"top"}>
          <Header />
        </header>
      </Link>
      {/* Main Part */}

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Products */}
        <ProductFeed products={products} />
      </main>
      {/* Footer */}
      <footer>
        <div className={"sm:col-span-full w-full bg-amazon_blue text-white p-10 text-lg text-center"}>
          <button onClick={scrollToTop} style={{ scrollBehavior: "smooth" }} className={"animate-bounce absoulte overscroll-auto focus:outline-none bg-amazon_blue-light rounded-full h-20 w-20"}>
            <ArrowUpwardIcon />
          </button>
          <br />
                Back to Top
            </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products/').then(
    (res) => res.json()
  )

  return {
    props: {
      products,
      session
    }
  }
}