import { NextPage } from "next";
import Collection from "../components/Collection"

interface Props {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string

}[]

const HomePage: NextPage = (props:Props) => {
 
  return (
    <div>
        <Collection props={props} />
    </div>   
  )
};


// Para cargar datos en la aplicación
HomePage.getInitialProps = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  /* console.log(resJSON); */
  return {users: resJSON.data}

}
export default HomePage;

