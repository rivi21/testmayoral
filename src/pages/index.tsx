import { NextPage } from "next";
import Card from "../components/Card";
import Search from "components/Search";
import Pagination from "components/Pagination";
import AppLayout from "components/AppLayout/AppLayot";

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
    <AppLayout>     
        <header className="header d-flex flex-column align-items-center fixed-top  pb-3">
          <Pagination />
          <Search />
          <div className="header-bottom-line"></div>
        </header>   
        <article className="d-flex flex-wrap justify-content-center">
          {data.map(article => <Card key={article.id} article={article} />)}
        </article> 
    </AppLayout>
  )
};

HomePage.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/data"); // https://reqres.in/api/users
  const resJSON = await res.json();
  const data = resJSON.data
  return { data }

}
export default HomePage;

