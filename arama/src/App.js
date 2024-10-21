// import logo from './logo.svg';
import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from './Api'
import ImageList from "./Component/İmageList";
import { useState } from "react";
import FooterBox from "./Footer";

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => {
   const result = await searchImages(term)
   setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images}/>
      <FooterBox/>
    </div>
  );
}

export default App;
