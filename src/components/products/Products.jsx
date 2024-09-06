import React, { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";
import { FilePen, Search } from "lucide-react";
import  {TableLayout, TableCell, TableHeader, TableHeaderTH, TableRow, TableBody, EmptyState, TableSkeleton } from "../ui/Table.jsx";
import { Product, Products } from "../../entities/product.js";
import { getProducts } from "../../service/product.js";
import Modal from "../ui/Modal.jsx";
import Label from "../ui/Label.jsx";
import TextArea from "../ui/TextArea.jsx";


export default function ProductsComponent() {
    const [loading, setLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [products, setProducts] = useState(new Products())

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts()    
            if (response.status !== 200) {
                return
            }

            setProducts(Products.fromJSON(response.content))
            setLoading(false)
        }

        fetchProducts()
    }, [])

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const titles = ["Name", "Description", "",]
    return (   
        <div>
            <div className="pb-5">
                <div className="flex justify-between">
                    
                    <div className="relative">
                        <Input type="text" placeholder="Search" className="rounded-lg pl-9" />

                        <Search height={20} className="absolute top-[10px] left-2 text-gray-400" />
                    </div>

                    <Button onClick={handleOpenModal} className="text-white">Add Product</Button>
                </div>
            </div>
            {
                loading === true ? (
                    <TableSkeleton />
                ): (
                    products.length === 0 ? (
                        <EmptyState className={`bg-white text-black`}>No products found</EmptyState>
                    ): <TableLayout>
                    <TableHeader>
                        {titles.map((title, index) => (
                            <TableHeaderTH key={index}>{title}</TableHeaderTH>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>$ {product.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </TableLayout>
                )
            }

            <Modal title="Create Product" isOpen={openModal} setIsOpen={setOpenModal}>
                <div className="flex flex-col gap-2">
                    <div>
                        <Label>Name</Label>
                        <Input type="text" placeholder="Name" className={"w-full"} />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <TextArea placeholder="Description" rows={4} className={"w-full"} />
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <Button className="text-white">Create</Button>
                </div>
            </Modal>

        </div>
    )
}