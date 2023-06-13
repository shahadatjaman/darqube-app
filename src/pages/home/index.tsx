import SearchBar from "../../shared/search_bar";
import Layout from "../layout";

const Home = () => {
  return (
    <Layout>
      <h1>Home page</h1>

      <SearchBar
        placeholder="Search ticker"
        onChange={() => ""}
        onFocus={() => ""}
        value={""}
        name="search"
      />
    </Layout>
  );
};

export default Home;
