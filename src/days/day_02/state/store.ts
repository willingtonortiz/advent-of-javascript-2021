import create from "zustand";
import { List } from "immutable";

import { Plate } from "../models/plate";

type PlateOrder = Plate & { count: number };

const useCart = create<{
  items: List<PlateOrder>;
  tax: number;
  subtotal: number;
  total: number;
  addItemToCart: (item: Plate) => void;
  incrementItemCount: (itemId: string) => void;
  decrementItemCount: (itemId: string) => void;
}>((set) => ({
  items: List(),
  addItemToCart: (item: Plate) => {
    set((state) => {
      const items = state.items.push({ ...item, count: 1 });
      const subtotal = items.reduce((accu, curr) => {
        return accu + curr.price * curr.count;
      }, 0);
      const total = subtotal + state.tax;

      return { items, subtotal, total };
    });
  },
  tax: 1.05,
  subtotal: 0,
  total: 0,
  incrementItemCount: (itemId: string) => {
    set((state) => {
      const items = state.items.map((x) => {
        if (x.id !== itemId) {
          return x;
        }

        return { ...x, count: x.count + 1 };
      });

      const subtotal = items.reduce((accu, curr) => {
        return accu + curr.price * curr.count;
      }, 0);
      const total = subtotal + state.tax;

      return {
        items,
        subtotal,
        total,
      };
    });
  },
  decrementItemCount: (itemId: string) => {
    set((state) => {
      const items = state.items
        .map((x) => {
          if (x.id !== itemId) {
            return x;
          }

          return { ...x, count: x.count - 1 };
        })
        .filter((x) => x.count > 0);

      const subtotal = items.reduce((accu, curr) => {
        return accu + curr.price * curr.count;
      }, 0);
      const total = subtotal + state.tax;

      return {
        items,
        subtotal,
        total,
      };
    });
  },
}));

export default useCart;
