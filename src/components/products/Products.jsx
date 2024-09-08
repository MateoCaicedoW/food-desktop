import React, { useEffect, useState } from "react";
import { getProducts } from "../../service/product.js";
import List from "./List.jsx";
import Create from "./Create.jsx";
import Input from "../ui/Input.jsx";
import { Search } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Products } from "../../entities/product.js";

export default function ProductsComponent() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(new Products());
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts();
            if (response.status === 200) {
                setProducts(response.content);
            }
            setLoading(false);
        };

        fetchProducts();
    }, []);


    return (
        <div>
            <div className="pb-5">
                <div className="flex justify-between">
                    <div className="relative">
                        <Input type="text" placeholder="Search" className="rounded-lg pl-9" />
                        <Search height={20} className="absolute top-[10px] left-2 text-gray-400" />
                    </div>
                    <Button onClick={() => setOpenModal(true)} className="text-white">Add Product</Button>
                    <Create openModal={openModal} setOpenModal={setOpenModal} setProducts={setProducts} />
                </div>
            </div>
            <List setProducts={setProducts} products={products} loading={loading} />
        </div>
    );
}
