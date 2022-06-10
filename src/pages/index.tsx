import Head from "next/head";
import { NextPage } from "next";
import Card from "../components/Card";
import Search from "components/Search";

interface Props {
  data: {
    id: number
    description: string
    price: string
    promotion: string
    avatar: string
  }[]
}

const HomePage: NextPage = ({data}: Props) => {
  return (
    <div className="bg-light" >
      <Head>
        <title>testmayoral</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
      </Head>
      <header className="container fixed-top bg-light pb-3">
        <Search />
        <div className="pt-5 bg-light border-bottom"></div>
      </header>
      <main className="row row-cols-3 row-cols-md-4 row-cols-lg-5 justify-content-center ">
        {data.map(article => <Card key={article.id} article={article} />)}
      </main>

      <style jsx>{`        
        main {
          padding-top: 150px;       
        }`}
      </style>

    </div>
  )
};
// Para cargar datos en la aplicación. Solo en componentes de tipo página
// ESte método se ejecuta en el servidor antes de renderizar el componente para poder hidratar el html
// que le pasamos al cliente y así poder hacerlo dinámico, xq ese html no deja de ser un string estático
HomePage.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/data"); // https://reqres.in/api/users
  const resJSON = await res.json();
  const data = resJSON.data

  return { data }

}
export default HomePage;

