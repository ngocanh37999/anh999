# project

# Thông tin API

URL: https://api-ecom.duthanhduoc.com/

## Register: `/register`

Với phương thức POST, truyền body lên:

```json
{
  "email": "admin999@gmail.com",
  "password": "dev999"
}
```

Sau khi truyền lên(request) thì sẽ trả về(response):

```json
{
  "message": "Đăng ký thành công",
  "data": {
    "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjY3MzE4ZDUwYTQxMDM4YWRlNDYzNyIsImVtYWlsIjoiYWRtaW45OTlAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0wOS0yMlQwOToyNDoyMi4yMzdaIiwiaWF0IjoxNjYzODM4NjYyLCJleHAiOjE2NjQ0NDM0NjJ9.AiEJKV5vV0PJys8x0DDVTTT8F3vNF9BeqjT09WOG_MM",
    "expires": "7d",
    "user": {
      "roles": ["User"],
      "_id": "63267318d50a41038ade4637",
      "email": "admin999@gmail.com",
      "createdAt": "2022-09-18T01:23:36.386Z",
      "updatedAt": "2022-09-18T01:23:36.386Z",
      "__v": 0
    }
  }
}
```

## Login: `/login`

Với phương thức POST, truyền body lên:

```json
{
  "email": "admin999@gmail.com",
  "password": "dev999"
}
```

Sau khi truyền lên(request) thì sẽ trả về(response):

```json
{
  "message": "Đăng nhập thành công",
  "data": {
    "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjY3MzE4ZDUwYTQxMDM4YWRlNDYzNyIsImVtYWlsIjoiYWRtaW45OTlAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0wOS0yMlQwOToyNDoyMi4yMzdaIiwiaWF0IjoxNjYzODM4NjYyLCJleHAiOjE2NjQ0NDM0NjJ9.AiEJKV5vV0PJys8x0DDVTTT8F3vNF9BeqjT09WOG_MM",
    "expires": "7d",
    "user": {
      "roles": ["User"],
      "_id": "63267318d50a41038ade4637",
      "email": "admin999@gmail.com",
      "createdAt": "2022-09-18T01:23:36.386Z",
      "updatedAt": "2022-09-18T01:23:36.386Z",
      "__v": 0
    }
  }
}
```

## Logout: `/logout`

Method: POST

## Format lỗi

### Trong trường hợp lỗi 422 (thường do form) hoặc lỗi do truyền query / param bị sai

Ví dụ đăng ký email đã tồn tại

```json
{
  "message": "Lỗi",
  "data": {
    "email": "Email đã tồn tại"
  }
}
```

## Read Products: `/products`

## Products: `/products`

Với phương thức GET thì sẽ trả về(response):

Response

```json
{
  "message": "Lấy các sản phẩm thành công",
  "data": {
    "products": [],
    "pagination": {
      "page": 1,
      "limit": 30,
      "page_size": 2
    }
  }
}
```

Ví dụ:
`/products?page=1&limit=30`
`/products?order=createAt`
`/products?sort_by=createdAt`
`/products?sortBy=asc`
`/products?sort_by=price&order=asc`
`/products?sortBy=desc`
`/products?sort_by=price&order=desc`
`/products?sortBy=view`
`/products?sortBy=sold`
`/products?page=2`
`/products?rating_filter=4`
`/products?price_max=10000&price_min=20`
`/products?name=điện thoại`

Query Params:
`page`: number. Số trang. Mặc định là 1
`limit`: number. Số product trên 1 trang. Mặc định là 30
`order`: 'desc' || 'asc'. Sắp xếp theo thứ tự. Mặc định là 'desc'
`sort_by`: 'createdAt' || 'view' || 'sold' || 'price'. Sắp xếp theo trường. Mặc định là 'createdAt'.
`category`: categoryId. Lọc sản phẩm theo category
`exclude`: productId. Loại trừ sản phẩm nào đó
`rating_filter`: number. Lọc sản phẩm có số sao lớn hơn hoặc bằng rating_filter
`price_max`: number. Giá cao nhất
`price_min`: number. Giá thấp nhất
`name`: string. Tên sản phẩm (lưu ý Tên sản phẩm tiếng Việt phải gõ đầy đủ dấu)

## Read Product Detail: `/products/productId`

Method: POST: purchases ban đầu là một Array rỗng. Khi truyền body lên thì purchases sẽ có một hoặc nhiều item...

## Add To Cart: `/purchases/add-to-cart`

Method: POST : Delete truyền id lên với method DELETE

## Delete purchases: /purchases: `["purchase_id"]`
