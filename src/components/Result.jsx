import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "./Search";

const GetResult = () => {
    const { commentId } = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
            .then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
                setContent(response.data.body);
            })
            .catch(error => {
                console.log("Error in fetching result", error);
            });
    }, [commentId]);

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <Search />
            <h2 className="text-2xl font-bold mb-4">Comment Details</h2>
            <div className="mb-4">
                <p className="text-gray-600 font-semibold">Name:</p>
                <p className="text-gray-800">{name}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-600 font-semibold">Email:</p>
                <p className="text-gray-800">{email}</p>
            </div>
            <div>
                <p className="text-gray-600 font-semibold">Content:</p>
                <p className="text-gray-800">{content}</p>
            </div>
        </div>
    );
};

export default GetResult;
