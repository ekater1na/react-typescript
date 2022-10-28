import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { IProduct } from "../models";

export function useProducts(value: number) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function fetchProducts(value: number) {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        `https://fakestoreapi.com/products?limit=${value}`
      );
      console.log(response);
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts(value);
  }, []);

  return { products, error, loading, addProduct };
}
