import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItemCart,
  editCartQuantity,
  removeItemFromCart,
} from "../../../redux/slices/cartSlices";
import { useState } from "react";
import { MdDelete, MdEdit, MdOutlineClear, MdSave } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { entities: courses } = useSelector((state) => state.courses);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [dropDown, isDropDown] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [editQuantity, setEditQuantity] = useState(1);

  const handleDropDown = () => {
    isDropDown(!dropDown);
  };

  const handleEdit = (item) => {
    setEditItemId(item.ids);
    setEditQuantity(item.quantity);
  };

  const handleUpdate = (item) => {
    dispatch(
      editCartQuantity({
        userId: isAuthenticated.userId,
        courseId: item.ids,
        quantity: editQuantity,
      })
    );
    setEditItemId(null);
  };

  const handleQuantityChange = (event) => {
    setEditQuantity(Number(event.target.value));
  };

  const cartItems = items
    .map((item) => ({ ...courses[item.courseId], quantity: item.quantity }))
    .filter(Boolean);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.cardPriceNum * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="fixed right-14 top-5">
        <div
          className="bg-white border border-[#3A35411F] w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
          onClick={handleDropDown}
        >
          <FaCartShopping className="h-6 w-6 text-tertiary-400" />
        </div>
        <div className="bg-error-default w-4 h-4 rounded-full absolute top-0 right-0 text-xs text-white flex justify-center items-center">
          {totalQuantity}
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
                      onClick={() =>
                        dispatch(clearItemCart(isAuthenticated.userId))
                      }
                    >
                      <MdOutlineClear />
                    </button>
                  </div>

                  {cartItems.map((item) => (
                    <div className="contents" key={item.id}>
                      <div className="md:col-span-2">{item.cardTitle}</div>
                      <div className="text-center">
                        {editItemId === item.ids ? (
                          <input
                            type="number"
                            value={editQuantity}
                            onChange={handleQuantityChange}
                            className="w-16 px-2 py-1 border rounded"
                          />
                        ) : (
                          item.quantity
                        )}
                      </div>
                      <div className="text-right">
                        {(item.cardPriceNum * item.quantity).toLocaleString(
                          "en-US",
                          {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                          }
                        )}
                      </div>
                      <div className="text-right flex flex-col justify-evenly md:block mx-4 md:mx-0">
                        {editItemId === item.ids ? (
                          <button
                            className="bg-primary-400 hover:bg-primary-500 text-white px-2 py-1 rounded mr-2"
                            onClick={() => handleUpdate(item)}
                          >
                            <MdSave />
                          </button>
                        ) : (
                          <button
                            className="bg-secondary-500 hover:bg-[#ffb03a] text-white px-2 py-1 rounded mr-2"
                            onClick={() => handleEdit(item)}
                          >
                            <MdEdit />
                          </button>
                        )}
                        <button
                          className="bg-error-default hover:bg-error-hover text-white px-2 py-1 md:mx-2 rounded"
                          onClick={() =>
                            dispatch(
                              removeItemFromCart({
                                userId: isAuthenticated.userId,
                                courseId: item.ids,
                              })
                            )
                          }
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
                    {totalAmount.toLocaleString("en-US", {
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
