const BASE_URL = 'https://www.prestigefloor.com.au';

/**
 * Hàm lấy thông tin cấu hình/mô tả của một Collection
 * @param collectionHandle Tên đường dẫn của collection (ví dụ: "prestige-oak-flooring")
 */
export const getCollectionDetails = async (collectionHandle: string) => {
  try {
    const response = await fetch(`${BASE_URL}/collections/${collectionHandle}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Thêm cache control của Next.js (tuỳ chọn)
      // next: { revalidate: 3600 } 
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch collection details: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching collection details for ${collectionHandle}:`, error);
    throw error;
  }
};

/**
 * Hàm lấy danh sách toàn bộ data các sản phẩm (Products) thuộc một Collection cụ thể
 * @param collectionHandle Tên đường dẫn của collection (ví dụ: "prestige-oak-flooring")
 */
export const getProductsInCollection = async (collectionHandle: string) => {
  try {
    const response = await fetch(`${BASE_URL}/collections/${collectionHandle}/products.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching products for collection ${collectionHandle}:`, error);
    throw error;
  }
};

/**
 * (Mở rộng) Hàm lấy danh sách sản phẩm có phân trang/giới hạn số lượng
 * @param collectionHandle Tên đường dẫn của collection
 * @param limit Số lượng sản phẩm muốn lấy
 * @param page Số trang hiện tại
 */
export const getProductsInCollectionPaginated = async (collectionHandle: string, limit = 20, page = 1) => {
  try {
    // Với fetch, ta sẽ build params query string trực tiếp vào URL
    const url = new URL(`${BASE_URL}/collections/${collectionHandle}/products.json`);
    url.searchParams.append('limit', limit.toString());
    url.searchParams.append('page', page.toString());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch paginated products: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching paginated products for ${collectionHandle}:`, error);
    throw error;
  }
};
