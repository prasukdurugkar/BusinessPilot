import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect } from "react";
import { getProduct } from "../../actions/inventory/productAction";
import { useDispatch, useSelector } from "react-redux";

const InventoryTable = () => {
  const { loading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div className="w-full bg-gray-100 m-2 rounded-md ">
      <Table>
        <TableCaption>A list of your recent products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="">Description</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className="">stock</TableHead>
          </TableRow>
        </TableHeader>

        {loading ? (
          "" // should add loading component
        ) : (
          // mapping all products

          <TableBody>
            {products.product &&
              products.product.map((item) => (
                <TableRow key={item._id}>
                  <TableCell className="font-medium">{item.barcode}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell className="">{item.price}</TableCell>
                  <TableCell className="">{item.stock}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>
    </div>
  );
};

export default InventoryTable;
