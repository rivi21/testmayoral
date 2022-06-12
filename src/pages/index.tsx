import Card from "../components/Card";
import Search from "components/Search";
import Pagination from "components/Pagination";
import AppLayout from "components/AppLayout/AppLayot";
import { useState } from "react";

interface Props {
  data: {
    id: number
    description: string
    price: string
    promotion: string
    picture: string
  }[]
}

const HomePage = (collection: Props) => {
  
  const [collectionArray, setCollectionArray] = useState(collection.data);
  
  return (
    <>
      <AppLayout>
        <header className="header d-flex flex-column align-items-center fixed-top  pb-3">
        <Pagination />
        <Search  collection={collection} setCollectionArray={setCollectionArray}/>
        <div className="header-bottom-line"></div>
        </header>
        <article className="d-flex flex-wrap justify-content-center">
          {collectionArray.map(article => <Card key={article.id} article={article} />)}
        </article>
      </AppLayout>
      <style jsx>
        {`        
      
         .header {
             background-color: #FEFEFE;
         }
         .header-bottom-line {
             height: 3em;
             width: 90%;
             border-bottom: 1px solid #D7DBDD;
         }
         @media only screen 
         and (min-width: 768px) {
             .header-bottom-line {
                 display: none
             }
             .header {
                 flex-direction: row-reverse !important;
                 flex-wrap: wrap;
                 justify-content: space-around !important;
                 padding-top: 2em;  
                 padding.bottom: 2em;                      
             }
         }         
     `}
      </style>
    </>
  )
};

HomePage.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/data"); // https://reqres.in/api/users
  const resJSON = await res.json();
  const collection = resJSON;
  console.log(collection);
  return  collection 

}
export default HomePage;

