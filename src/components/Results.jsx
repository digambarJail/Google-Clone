import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "./Search";

const GetResults = () => {
    const { searchText } = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => {
                setComments(response.data)
                console.log(response.data.name)
            })
            .catch(error => {
                console.log("Error in fetching results", error);
            });
    }, []);

    const filterComments = (comments, searchText) => {
        return comments.filter(comment =>
            comment.name.toLowerCase().startsWith(searchText.toLowerCase())
        );
    };

    const filteredComments = filterComments(comments,searchText);

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <Search />
            <div className="mt-8">
                {filteredComments.length > 0 ? (
                    filteredComments.map(comment => (
                        <div key={comment.id} className="border-b py-4">
                            <p className="text-lg font-semibold mb-1">Name: {comment.name}</p>
                            <p className="text-gray-600 mb-1">Email: {comment.email}</p>
                            <p className="text-gray-700">Content: {comment.body}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 text-center">No data available</p>
                )}
            </div>
        </div>
    );
};

export default GetResults;
