import "./App.css";
import Products from "././Component/Products";
import data from "./data.js";
function App() {
  return (
    <>
      <div className="gridContainer">
        <header>
          <div>
            <a className="brand" href="index.html"> AnuragShop</a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sigin</a>
          </div>
        </header>
        <main>
          <div className="gridProducts">
            <div className="gridCards">
              {data.products.map((val) => {
                return (
                  <Products
                    name={val.name}
                    price={val.price}
                    rating={val.rating}
                    image={val.image}
                    key={val._id}
                    caption={val.caption}
                    numReviews={val.numReviews}
                  />
                );
              })}
            </div>
          </div>
        </main>
        <footer className="row center">
          <h3>All rights reserved</h3>
        </footer>
      </div>
    </>
  );
}

export default App;
