interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

//상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]>{
    // .. 
}

// 중복 코드 발생
// interface ProductDetail{
//     id: number;
//     name: string;
//     price: number;
// }

type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
}