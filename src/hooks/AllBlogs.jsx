import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

const AllBlogs = () => {
    return useQuery({
        queryKey: ["all-blogs"],
        queryFn: () => axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=56dc4feaf1824229b1755dfd076861e3"),
        onError: (error) => {
            console.log(error.message);
        }
    });
}
export default AllBlogs
