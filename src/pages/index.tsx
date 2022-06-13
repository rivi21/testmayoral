import { useState } from "react";
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

  let pages = [];
  const collectionData: Pages[] = collection.data;
  const totalArticles = collection.data.length;

  for (let i = 0; i < totalArticles; i = i + 6) {
    pages.push(collectionData.slice(i, i + 6));
  };

  const [collectionArray, setCollectionArray] = useState(pages[0]);
  const [currentPage, setCurrentPage] = useState(1);

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

