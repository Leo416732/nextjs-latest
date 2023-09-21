import AddProductButton from "@/components/AddProductForm";
import { Product } from "@/typings";

export default async function User() {
  const res = await fetch("https://64eaea4ae51e1e82c576d7be.mockapi.io/users", {
    next: { tags: ["users"] },
    cache: "no-cache",
  });
  const data = await res.json();

  const itemTemplate = (product: any) => {
    return (
      <div className="col-12 border">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <div className="flex align-items-center gap-3 pt-1">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.city}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main>
      <h1 className="text-center text-[28px]">Add User</h1>
      <AddProductButton />
      <h2 className="my-[20px] text-center text-[28px] font-bold text-900">
        Users list
      </h2>
      <div className="flex justify-center flex-wrap gap-5 container mx-auto">
        {data?.reverse().map((todo: Product) => itemTemplate(todo))}
      </div>
    </main>
  );
}
