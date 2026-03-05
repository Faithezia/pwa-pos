interface Product {
  id: string;
  productName: string;
  productBarcode: string;
  quantity: number;
  price: double;
  description: string;
  imageUrl: string;
  createdAt: number | null;
}

interface IUserFields {
  id: string;
  label: string;
  fieldName: string;
  fieldType: string;
  placeholder: string;
}

interface IKycFields{
  id: string;
  label: string;
  value: string;
}