import HeaderCatalog from "./components/HeaderCatalog";
import List from "./components/List"
import "./App.css";

export default function Catalog(){
  return (
    <section className="h-100 w-100">
      <HeaderCatalog/>
      <List />
    </section>
  )
}