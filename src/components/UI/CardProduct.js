import { useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { cartActions } from "../../redux/slices/CartSlice";

const CardProduct = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Product  Berhasil Di Tambahkan");
  };

  return (
    <Col lg="3" md="4" col="12" className="items-card-products">
      <div className="product-item">
        <div className="img-product">
          <Link to={`/product/${item.id}`}>
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt="detail Products"
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="product-info p-3">
          <div className="title-product">
            <h3>
              <Link to={`/product/${item.id}`}>{item.productName}</Link>
            </h3>
            <p>{item.shortDesc}</p>
          </div>
          <div className="bottom-card-product d-flex align-items-center justify-content-between p-2">
            <span className="price-product">Rp. {item.price}</span>
            <motion.span
              whileTap={{ scale: 1.2 }}
              onClick={addToCart}
              className="btn-icon-plus"
            >
              <iconify-icon icon="icons8:add-shopping-cart"></iconify-icon>
            </motion.span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardProduct;
