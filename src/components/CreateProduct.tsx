import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./Error";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 40,
    count: 10,
  },
};

interface CreateProductProps {
    onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate}: CreateProductProps ) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    productData.title = value;

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return 
    }

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data);
  };

  //   const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //     setValue(event.target.value)
  //   }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        // onChange={changeHandler}
        onChange={(event) => setValue(event.target.value)}
      />

      {error && <ErrorMessage error={error} />}

      <button
        type="submit"
        className="py-2 px-4 border bg-gray-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
}
