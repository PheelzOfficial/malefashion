import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

const AllProducts = () => {
    return useQuery({
        queryKey: ["all-products"],
        queryFn: () => axios.get("https://fakestoreapi.com/products"),
        onError: (error) => {
            console.log(error.message);
        }
    });
}
export default AllProducts
