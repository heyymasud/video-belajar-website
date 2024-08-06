import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTotals, removeFromCart, editQty, clearCart } from "../../../redux/slices/cartSlices";
import { useEffect } from "react";
import { MdDelete, MdEdit, MdOutlineClear, MdSave } from "react-icons/md";
import { useState } from "react";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [dropDown, isDropDown] = useState(false)
  const [editItemId, setEditItemId] = useState(null);
  const [editQtyItem, setEditQtyItem] = useState(0);

  const handleDropDown = () => {
    isDropDown(!dropDown);
  }

  const handleEdit = (item) => {
    setEditItemId(item.id);
    setEditQtyItem(item.qty);
  };

  const handleUpdate = (item) => {
    dispatch(editQty({ id: item.id, qty: editQtyItem }));
    setEditItemId(null);
  };

  const handleQtyChange = (event) => {
    setEditQtyItem(Number(event.target.value));
  };


  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      <div className="fixed right-14 top-5">
        <div className="bg-white border border-[#3A35411F] w-12 h-12 rounded-full flex justify-center items-center cursor-pointer" onClick={handleDropDown}>
          <FaCartShopping className="h-6 w-6 text-tertiary-400" />
        </div>
        <div className="bg-error-default w-4 h-4 rounded-full absolute top-0 right-0 text-xs text-white flex justify-center items-center">
          {cart.cartTotalQuantity}
        </div>
        <div className={`${dropDown ? "" : "hidden"}`}>
          <div className="bg-white border border-[#3A35411F] w-screen md:w-[600px] h-auto px-4 py-2 rounded-lg absolute md:top-14 md:right-0 -right-14">
            {cartItems.length === 0 ? (
              <p className="text-center">Cart is empty</p>
            ) : (
              <div className="max-w-4xl mx-auto p-1 md:p-4">
                <h2 className="text-xl md:text-2xl font-bold">Cart</h2>
                <div className="grid grid-cols-4 md:grid-cols-5 text-xs md:text-base gap-4 bg-gray-100 p-2 rounded-lg">
                  <div className="font-semibold md:col-span-2">Nama Item</div>
                  <div className="font-semibold text-center">Qty</div>
                  <div className="font-semibold text-right">Total</div>
                  <div className="font-semibold text-right">
                  <button
                          className="bg-error-default hover:bg-error-hover text-white px-2 py-1 mx-2 rounded"
                          onClick={() => dispatch(clearCart())}
                        >
                          <MdOutlineClear />
                        </button>
                  </div>

                  {cartItems.map((item, index) => (
                    <div className="contents" key={index}>
                      <div className="md:col-span-2">{item.cardTitle}</div>
                      <div className="text-center">
                        {editItemId === item.id ? (
                          <input
                            type="number"
                            value={editQtyItem}
                            onChange={handleQtyChange}
                            // onBlur={() => handleUpdate(item)}
                            className="border border-gray-300 rounded px-2 py-1 w-16"
                          />
                        ) : (
                          item.qty
                        )}
                      </div>
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
                      <div className="text-right flex flex-col justify-evenly md:block mx-4 md:mx-0">
                        {editItemId === item.id ? (
                          <button
                            className="bg-primary-400 hover:bg-primary-500 text-white px-2 py-1 rounded"
                            onClick={() => {
                              handleUpdate(item);
                            }}
                          >
                            <MdSave />
                          </button>
                        ) : (
                          <button className="bg-secondary-500 hover:bg-[#ffb03a] text-white px-2 py-1 rounded" onClick={() => handleEdit(item)}>
                            <MdEdit />
                          </button>
                        )}
                        <button
                          className="bg-error-default hover:bg-error-hover text-white px-2 py-1 md:mx-2 rounded"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="col-span-2 md:col-span-3 font-bold text-right">
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
