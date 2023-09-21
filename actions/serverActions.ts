"use server";

import { revalidatePath, revalidateTag } from "@/node_modules/next/cache";
import { Product } from "@/typings";
import { useState, useTransition } from "react";

export const addProductToDatabase: any = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();

  if (!product || !price) return;

  const newProuct: Product = {
    product,
    price,
  };

  await fetch("https://64eaea4ae51e1e82c576d7be.mockapi.io/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProuct),
  });

  revalidateTag("todos");
  // revalidatePath("/");
};
