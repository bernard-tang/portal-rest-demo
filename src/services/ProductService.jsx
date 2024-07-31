import { post, get } from '../utils/apiUtils'

// Function to get all products data
export const getAllProducts = async (offset, limit) => {
    try {
        const response = await get(`/getAllProducts`, {
            offset: offset,
            limit: limit
          });
        return response;
    }
    catch(error) {
            throw error;
    }
  };