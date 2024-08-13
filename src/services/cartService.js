import api from "./api";

export const getCart = async (userId) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }
    const response = await api.get(`/cart?userId=${userId}`);
    return response.data[0];
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null;
    } else {
      console.error("Error fetching cart:", error);
      throw error;
    } 
  }
};

export const addToCart = async (userId, courseId) => {
  try {
    if (!userId || !courseId) {
      throw new Error("User ID and course ID on addToCart service is empty");
    }
    const cart = await getCart(userId);
    if (cart) {
      const existingItem = cart.items.find(
        (item) => item.courseId === courseId
      );
      let updatedItems;
      if (existingItem) {
        updatedItems = cart.items.map((item) =>
          item.courseId === courseId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...cart.items, { courseId, quantity: 1 }];
      }

      // const updatedItems = [...cart.items, courseId];
      const response = await api.put(`/cart/${cart.id}`, {
        ...cart,
        items: updatedItems,
      });
      return response.data;
    } else {
      const response = await api.post("/cart", {
        userId,
        items: [{ courseId, quantity: 1 }],
      });
      return response.data;
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const updateCartQuantity = async (userId, courseId, quantity) => {
  try {
    const cart = await getCart(userId);
    if (cart) {
      const updatedItems = cart.items.map((item) =>
        item.courseId === courseId ? { ...item, quantity } : item
      );
      const response = await api.put(`/cart/${cart.id}`, {
        ...cart,
        items: updatedItems,
      });
      return response.data;
    }
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    throw error;
  }
};

export const removeFromCart = async (userId, courseId) => {
  try {
    const cart = await getCart(userId);
    if (cart) {
      const updatedItems = cart.items.filter(
        (item) => item.courseId !== courseId
      );
      const response = await api.put(`/cart/${cart.id}`, {
        ...cart,
        items: updatedItems,
      });
      return response.data;
    }
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};

export const clearCart = async (userId) => {
  try {
    const cart = await getCart(userId);
    if (cart) {
      const response = await api.put(`/cart/${cart.id}`, {
        ...cart,
        items: [],
      });
      return response.data;
    }
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};
