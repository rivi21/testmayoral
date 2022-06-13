import { useEffect, useState } from "react";
import Card from "../components/Card";
import Search from "components/Search";
import Pagination from "components/Pagination";
import AppLayout from "components/AppLayout/AppLayot";
import Order from "components/Order";

interface Props {
  data: {
    id: number
    description: string
    price: string
    promotion: string
    picture: string
  }[]
}

interface Pages {
  id: number
  description: string
  price: string
  promotion: string
  picture: string
}[]

const HomePage = (collection: Props) => {

  const [articles, setArticles] = useState(collection.data);
  const [currentPage, setCurrentPage] = useState(1);
 
  let dataPages = []
  const totalArticles = articles.length;
  for (let i = 0; i < totalArticles; i = i + 6) {
    dataPages.push(articles.slice(i, i + 6)); 
  };
  const [pages, setPages] = useState(dataPages);
  const [collectionArray, setCollectionArray] = useState(pages[0]);
  console.log(pages)

  return (
    <>
      <AppLayout>
        <header className="header d-flex flex-column align-items-center fixed-top  pb-3">
          <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setCollectionArray={setCollectionArray} />
          <Search
            collection={collection}
            setCollectionArray={setCollectionArray} />
          <Order
            articles={articles}
            setCurrentPage={setCurrentPage}
            setPages={setPages}
            setCollectionArray={setCollectionArray} />
          <div className="header-bottom-line"></div>
        </header>
        <article className="d-flex flex-wrap justify-content-center">
          {collectionArray.map(
            article => <Card key={article.id} article={article} />
          )}
        </article>
      </AppLayout>
    </>
  )
};

HomePage.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/data");
  const resJSON = await res.json();
  const collection = resJSON;
  return collection

}
export default HomePage;

