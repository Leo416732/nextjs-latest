"use client";

import { addProductToDatabase } from "@/actions/serverActions";
import { useTransition } from "react";
import { Spinner } from "@chakra-ui/react";

function AddProductButton() {
  const [isPending, startTransition] = useTransition();

  const submit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product", e.target.product.value);
    formData.append("price", e.target.price.value);
    startTransition(() => addProductToDatabase(formData));
  };

  return (
    <div>
      <form
        onSubmit={submit}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          type="text"
          name="product"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="number"
          className="border border-gray-300 p-2 rounded-md"
          name="price"
        />
        <button
          type="submit"
          disabled={isPending}
          className="border bg-green-500 tet-white p-2 rounded-md"
        >
          {isPending ? <Spinner className="w-[20px] h-[20px]" /> : "AddProduct"}
        </button>
      </form>
    </div>
  );
}

export default AddProductButton;
