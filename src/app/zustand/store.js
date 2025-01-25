import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const UseAddData = create(
    persist(
        (set)=>({
            data: {},
            addData: (params)=>set({data:params})
        }),
        {
            name: 'detail-product',
            storage: createJSONStorage(()=>localStorage)
        }
    )
);

export const UseAddProduct = create(
    persist(
        (set)=>({
            dataAddProduct: {},
            addProduct: (params)=>set({dataAddProduct:params})
        }),
        {
            name: 'data-add-product',
            storage: createJSONStorage(()=>localStorage)
        }
    )
);

export const UseEditProduct = create(
    persist(
        (set)=>({
            dataEditProduct: {},
            editProduct: (params)=>set({dataEditProduct:params})
        }),
        {
            name: 'data-Edit-product',
            storage: createJSONStorage(()=>localStorage)
        }
    )
);