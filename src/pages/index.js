import Head from "next/head";
import Header from "../components/Header";
import Banner from '../components/Banner'
import ProductFeed from "../components/ProductFeed";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function Home({ products }) {
  return (
    <div className={"bg-gray-100"}>
      <Head>
        <title>Online Shopping Site</title>
      </Head>
      {/*Header*/}
      <header id={"top"}>
        <Header />
      </header>
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
          <a href={"#top"} >
            <button style={{ scrollBehavior: "smooth" }} className={"animate-bounce absoulte overscroll-auto focus:outline-none bg-amazon_blue-light rounded-full h-20 w-20"}>
              <ArrowUpwardIcon />
            </button>
          </a>
          <br />
                Back to Top
            </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products/').then(
    (res) => res.json()
  )

  return {
    props: {
      products
    }
  }
}