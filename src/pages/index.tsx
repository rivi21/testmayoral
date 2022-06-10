import Head from "next/head";
import { NextPage } from "next";
import Card from "../components/Card"
import Search from "components/Search";


interface Props {
  users: {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }[]
}

const HomePage: NextPage = (props: Props) => {
  console.log(props);
  return (
    <div>
      <Head>
        <title>testmayoral</title>
      </Head>
      <body>
        <Search />
        <main className="">
          {props.users.map(user => <Card key={user.id} user={user} />)}
        </main>
      </body>
      <style jsx>{`
       
      `}
      </style>
      <style jsx global>{`
        body {
          padding: 3%;
        } 
        main {
          display: flex;
          justify-content: space-around;
          
        }`}
      </style>

    </div>
  )
};


// Para cargar datos en la aplicación
HomePage.getInitialProps = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();

  return { users: resJSON.data }

}
export default HomePage;

