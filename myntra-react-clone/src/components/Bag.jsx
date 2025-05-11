import Footer from "./Footer";
import Header from "./Header";

const Bag = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="bag-page">
          <div className="bag-items-container"></div>
          <div className="bag-summary"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bag;
