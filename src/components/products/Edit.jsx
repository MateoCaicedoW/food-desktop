import React, { useEffect, useState } from "react";
import { Button, SecondaryButton } from "../ui/Button.jsx";
import Modal from "../ui/Modal.jsx";
import Input from "../ui/Input.jsx";
import Label from "../ui/Label.jsx";
import TextArea from "../ui/TextArea.jsx";
import { updateProduct } from "../../service/product.js";
import { Product } from "../../entities/product.js";

export default function Edit({ setProducts, openModal, setOpenModal, product, setProduct }) {
    const [errors, setErrors] = useState({});
    const [editing, setEditing] = useState(false);
    const [oldProduct, setOldProduct] = useState({});

    useEffect(() => {
        if (openModal) {
            setOldProduct(product);
        }
    }
    , [openModal]);

    const cleanValues = () => {
        setErrors({});
    }

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdateProduct = async () => {
        setEditing(true);
        
        if (oldProduct.name === product.name && oldProduct.price === product.price && oldProduct.description === product.description && oldProduct.id === product.id) {
            setOpenModal(false);
            cleanValues();
            setEditing(false);
            return;
        }

        const response = await updateProduct(product);
    
        if (response.status === 400) {
            setErrors(response.content);
        } else if (response.status === 200) {
            const newProduct = Product.fromJSON(response.content);
            setProducts((prev) => {
                const index = prev.findIndex(p => p.id === newProduct.id);
                prev[index] = newProduct;
                return prev;
            });
            setOpenModal(false);
            cleanValues();
        }
        setEditing(false);
    };

    useEffect(() => {
        if (!openModal) {
            cleanValues();
        }

    }, [openModal]);

    return (
        <>
            <Modal title="Edit Product" isOpen={openModal} setIsOpen={setOpenModal}>
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
                    <Button onClick={handleUpdateProduct} disabled={editing} className={`${editing ? "cursor-not-allowed": ""} text-white`}>
                        {editing ? "Updating..." : "Update"}
                    </Button>
                </div>
            </Modal>
        </>
    );
}
