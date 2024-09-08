import React, { useEffect, useState } from "react";
import { Button, SecondaryButton } from "../ui/Button.jsx";
import Modal from "../ui/Modal.jsx";
import Input from "../ui/Input.jsx";
import Label from "../ui/Label.jsx";
import TextArea from "../ui/TextArea.jsx";
import { createProduct } from "../../service/product.js";
import { Product } from "../../entities/product.js";

export default function ProductCreate({ setProducts, openModal, setOpenModal }) {
    const [product, setProduct] = useState(new Product());
    const [errors, setErrors] = useState({});
    const [creating, setCreating] = useState(false);

    const cleanValues = () => {
        setProduct(new Product());
        setErrors({});
    }

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCreateProduct = async () => {
        setCreating(true);

        const response = await createProduct(product);
        if (response.status === 400) {
            setErrors(response.content);
        } else if (response.status === 201) {
            const newProduct = Product.fromJSON(response.content);
            setProducts((prev) => {
                prev.add(newProduct);
                return prev;
            });
            setOpenModal(false);
            cleanValues();
        }
        setCreating(false);
    };

    useEffect(() => {
        if (!openModal) {
            cleanValues();
        }

    }, [openModal]);

    return (
        <>
            <Modal title="Create Product" isOpen={openModal} setIsOpen={setOpenModal}>
                <div className="flex flex-col gap-2">
                    <div>
                        <Label>Name</Label>
                        <Input onChange={handleProductChange} type="text" value={product.name || ""} errors={errors} name="name" placeholder="Name" className={"w-full"} />
                    </div>
                    <div>
                        <Label>Price</Label>
                        <Input onChange={handleProductChange} type="number" value={product.price || ""} errors={errors} name="price" placeholder="Price" className={"w-full"} />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <TextArea onChange={handleProductChange} value={product.description || ''} errors={errors} name="description" placeholder="Description" rows={4} className={"w-full"} />
                    </div>
                </div>

                <div className="flex justify-end mt-4 gap-3">
                    <SecondaryButton onClick={() => setOpenModal(false)}>Cancel</SecondaryButton>
                    <Button onClick={handleCreateProduct} disabled={creating} className={`${creating ? "cursor-not-allowed": ""} text-white`}>
                        {creating ? "Creating..." : "Create"}
                    </Button>
                </div>
            </Modal>
        </>
    );
}
