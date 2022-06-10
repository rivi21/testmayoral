import Head from "next/head";
import { NextPage } from "next";
import Card from "../components/Card";
import Search from "components/Search";
import Pagination from "components/Pagination";

interface Props {
  data: {
    id: number
    description: string
    price: string
    promotion: string
    avatar: string
  }[]
}

const HomePage: NextPage = ({ data }: Props) => {
  return (

    <div className="bg-light" >

      <Head>
        <title>testmayoral</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
      </Head>

      <header className="d-flex flex-column align-items-center fixed-top bg-light pb-3">
        <Pagination />
        <Search />
        <div className="py-3 header-bottom-line"></div>
      </header>

      <main className="row row-cols-3 row-cols-md-4 row-cols-lg-5 justify-content-center ">
        {data.map(article => <Card key={article.id} article={article} />)}
      </main>

      <style jsx>{`        
        main {
          padding-top: 200px;       
        }
        .header-bottom-line{
          height: 3em;
          width: 90%;
          border-bottom: 1px solid black;
        }`}
      </style>
    </div>
  )
};

HomePage.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/data"); // https://reqres.in/api/users
  const resJSON = await res.json();
  const data = resJSON.data

  return { data }

}
export default HomePage;

