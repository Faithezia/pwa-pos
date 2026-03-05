
# Next POS

## Sample Products

Product data structure for QR code scanning:

```javascript
const products = [
    {
        id: "prod1",
        productName: "Doritos",
        price: 80.69,
        description: "One of the customer's favourite",
        imageUrl: "/products/doritos.png",
        productBarcode: "13a2sd654wqe654asd",
        quantity: 1,
        createdAt: Date.now(),
    },
    {
    id: "prod2",
    productName: "Lays",
    price: 120.02,
    description: "The best chips in the world",
    imageUrl: "/products/lays.png",
    productBarcode: "124123133123as",
    quantity: 1,
    createdAt: Date.now(),
  },
  {
    id: "prod3",
    productName: "Cobra",
    price: 24.36,
    description: "The drinks that will make you stronger and kill you",
    imageUrl: "/products/cobra.png",
    productBarcode: "asd3123aeda",
    quantity: 1,
    createdAt: Date.now(),
  },
  {
    id: "prod4",
    productName: "Jack Daniel",
    price: 800.69,
    description: "Whiskey",
    imageUrl: "/products/whiskey.png",
    productBarcode: "3242134sadaa",
    quantity: 1,
    createdAt: Date.now(),
  },
  {
    id: "prod5",
    productName: "Jack Daniel",
    price: 800.69,
    description: "Whiskey",
    imageUrl: "/products/whiskey.png",
    productBarcode: "12312312",
    quantity: 1,
    createdAt: Date.now(),
  },
  {
    id: "prod6",
    productName: "Jack Daniel",
    price: 800.69,
    description: "Whiskey",
    imageUrl: "/products/whiskey.png",
    productBarcode: "112312313",
    quantity: 1,
    createdAt: Date.now(),
  },
  {
    id: "prod7",
    productName: "Jack Daniel",
    price: 800.69,
    description: "Whiskey",
    imageUrl: "/products/whiskey.png",
    productBarcode: "14123123",
    quantity: 1,
    createdAt: Date.now(),
  },
  {
    id: "prod8",
    productName: "Jack Daniel",
    price: 800.69,
    description: "Whiskey",
    imageUrl: "/products/whiskey.png",
    productBarcode: "214555243",
    quantity: 1,
    createdAt: Date.now(),
  },
  {
    id: "prod9",
    productName: "Jack Daniel",
    price: 800.69,
    description: "Whiskey",
    imageUrl: "/products/whiskey.png",
    productBarcode: "12314342",
    quantity: 1,
    createdAt: Date.now(),
  },
  {
    id: "prod10",
    productName: "Jack Daniel",
    price: 800.69,
    description: "Whiskey",
    imageUrl: "/products/whiskey.png",
    productBarcode: "25234123",
    quantity: 1,
    createdAt: Date.now(),
  },
  {
    id: "prod11",
    productName: "Office Warehouse Inc - Panda Pen",
    price: 40.49,
    description: "Pen",
    imageUrl: "/products/panda-pen.png",
    productBarcode: "2998",
    quantity: 1,
    createdAt: Date.now(),
  },
];
```

## User Form Fields

Form configuration for user input:

```javascript
export const IUserFormFields = [
    {
        id: "1",
        label: "First Name",
        fieldName: "firstName",
        fieldType: "text",
        placeholder: "First Name",
    },
    {
        id: "2",
        label: "Last Name",
        fieldName: "lastName",
        fieldType: "text",
        placeholder: "Last Name",
    },
    {
        id: "3",
        label: "Contact Number",
        fieldName: "contactNum",
        fieldType: "text",
        placeholder: "Contact Number",
    },
];
```
