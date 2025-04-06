import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import LoginStyles from "./Login.module.scss";

const Login = () => {
    return (
      <div className={LoginStyles.loginContainer}>
        <div className={LoginStyles.leftSection}>
            <div className={LoginStyles.actionContainer}>
                <div>
                    <Button type="button" severity="secondary">Admin</Button>
                    <Button type="button" severity="secondary">Doctor</Button>
                </div>
                <div>
                    <Button type="button" severity="secondary">Pharmacy</Button>
                    <Button type="button" severity="secondary">Department</Button>
                </div>
            </div>
        </div>
        <div className={LoginStyles.rightSection}>
            <div className={LoginStyles.rightSectionWrapper}>
                <div className={LoginStyles.title}>Hospital Management</div>
                <div className={LoginStyles.subtitle}>Adminstration of public health systems, health</div>
                <div className={LoginStyles.subtitle}>care systems, hospitals and hospital networks</div>
                <div className={LoginStyles.loginWrapper}>
                    <div className={LoginStyles.loginTitle}>Login</div>
                    <span className="p-float-label"> 
                        <InputText
                            type="text"
                            // className={isFormError.title ? 'p-inputtext-lg p-invalid' : 'p-inputtext-lg'}
                        />
                        <label htmlFor="name">Mobile Number/Email</label>
                    </span>
                    <span className="p-float-label"> 
                        <InputText
                            type="password"
                            // className={isFormError.title ? 'p-inputtext-lg p-invalid' : 'p-inputtext-lg'}
                        />
                        <label htmlFor="name">Password</label>
                    </span>
                    <Button type="button" className={LoginStyles.loginBtn}>Login</Button>
                </div>
            </div>
        </div>
      </div>
    )  
    
}



// Tasks:
// 1. Filter products in the "Electronics" category
// 2. Sort the filtered products by price in descending order 
// 3. Transform the result to only include name and price
// const Login = () => {
//     const [flteredProducts, setFilteredProducts] = useState([]);
    
    
//     useEffect(() => {
//         const products = [ { id: 1, name: "Laptop", price: 1000, category: "Electronics" }, { id: 2, name: "Book", price: 20,category: "Books" }, { id: 3, name: "Smartphone", price: 500, category: "Electronics" }, { id: 4, name: "Headphones",price: 100, category: "Electronics" }, { id: 5, name: "Notebook", price: 5, category: "Stationery" } ];
//         setTimeout(() => {
//             setFilteredProducts(products);
//         }, 2000);
//     }, []);
    
//     const filterProducts = () => {
//         const fProducts = flteredProducts.filter((product) => product.category === 'Electronics');
//         setFilteredProducts(fProducts);
//     };

//     const sortProducts = () => {
//         const fProducts = [...flteredProducts].sort((a,b) => b.price - a.price);
//         setFilteredProducts(fProducts);
//     };

//     const transformProducts = () => {
//         const fProducts = flteredProducts.map((product) =>  ({ name: product.name, price: product.price }));
//         setFilteredProducts(fProducts);
//     };

//     const resetFilters = () => {
//         const products = [ { id: 1, name: "Laptop", price: 1000, category: "Electronics" }, { id: 2, name: "Book", price: 20,category: "Books" }, { id: 3, name: "Smartphone", price: 500, category: "Electronics" }, { id: 4, name: "Headphones",price: 100, category: "Electronics" }, { id: 5, name: "Notebook", price: 5, category: "Stationery" } ];
//         setFilteredProducts(products);
//     }

//     return (
//         <>
//             <button onClick={() => filterProducts()}>Filter</button>
//             <button onClick={() => sortProducts()}>Sort</button>
//             <button onClick={() => transformProducts()}>Show price</button>
//             <button onClick={() => resetFilters()}>Reset Filters</button>
//             <ul>
//                 {flteredProducts?.map((product) => {
//                     return <div>
//                         <span>{product?.id}</span>
//                         <span>{product?.name}</span>
//                         <span>{product?.price}</span>
//                         <span>{product?.category}</span>
//                     </div>
//                 })}
//             </ul>
//         </>
//     )
// };

export default Login;