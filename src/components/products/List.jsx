import React, { useState } from "react";
import { TableLayout, TableCell, TableHeader, TableHeaderTH, TableRow, TableBody, EmptyState, TableSkeleton } from "../ui/Table.jsx";
import { Edit, Trash } from "lucide-react";
import EditProduct from "./Edit.jsx";
import { Product } from "../../entities/product.js";
export default function ProductList({setProducts, products, loading }) {
    const [openModal, setOpenModal] = useState(false);
    const [product, setProduct] = useState(new Product());
    const titles = ["Name", "Description", "Price", "Actions"];
    

    return (
        <>
            {
                loading ? (
                    <TableSkeleton />
                ) : (
                    products.length === 0 ? (
                        <EmptyState className={`bg-white text-black`}>No products found</EmptyState>
                    ) : (
                        <>
                        <TableLayout>
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
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <button onClick={() => {
                                                    setProduct(product);
                                                    setOpenModal(true);
                                                }}><Edit height={18}/></button>
                                                <button className="text-red-500" ><Trash height={18}/></button>
                                            </div>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </TableLayout>

                        <EditProduct product={product} setProducts={setProducts} setProduct={setProduct}  openModal={openModal} setOpenModal={setOpenModal} />
                        </>
                    )
                )
            }
        </>
    );
}
