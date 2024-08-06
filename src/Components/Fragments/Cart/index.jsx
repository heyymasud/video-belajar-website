import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTotals, removeFromCart } from "../../../redux/slices/cartSlices";
import { useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  // const totalKeseluruhan = cartItems.reduce(
  //   (acc, item) => acc + item.qty * item.cardPriceNum,
  //   0
  // );

  return (
    <>
      <div className="fixed right-7 top-5">
        <div className="bg-white border border-[#3A35411F] w-12 h-12 rounded-full flex justify-center items-center">
          <FaCartShopping className="h-6 w-6 text-tertiary-400" />
        </div>
        <div>
          <div className="bg-white border border-[#3A35411F] w-[600px] h-auto px-4 py-2 rounded-lg absolute top-14 right-0">
            {cartItems.length === 0 ? (
              <p className="text-center">Cart is empty</p>
            ) : (
              <div className="max-w-4xl mx-auto p-4">
                <h2 className="text-2xl font-bold">Cart</h2>
                <div className="grid grid-cols-5 gap-4 bg-gray-100 p-2 rounded-lg">
                  <div className="font-semibold col-span-2">Nama Item</div>
                  <div className="font-semibold text-center">Qty</div>
                  <div className="font-semibold text-right">Total</div>
                  <div className="font-semibold"></div>

                  {cartItems.map((item, index) => (
                    <div className="contents" key={index}>
                      <div className="col-span-2">{item.cardTitle}</div>
                      <div className="text-center">{item.qty}</div>
                      <div className="text-right">
                        {(item.qty * item.cardPriceNum).toLocaleString(
                          "en-US",
                          {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                          }
                        )}
                      </div>
                      <div className="text-right">
                        <button className="bg-secondary-500 hover:bg-[#ffb03a] text-white px-2 py-1 rounded">
                          <MdEdit />
                        </button>
                        <button className="bg-error-default hover:bg-error-hover text-white px-2 py-1 mx-2 rounded" onClick={() => dispatch(removeFromCart(item))}>
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="col-span-3 font-bold text-right">
                    Total Keseluruhan:
                  </div>
                  <div className="font-bold">
                    {cart.cartTotalAmount.toLocaleString("en-US", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
