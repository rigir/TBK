import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { MealesContext } from '../context/Meales.js';

const useFetch = () => {
    const { setMeales } = useContext(MealesContext);
    const [data, setData] = useState({
        slug: "",
        endpoint: "search.php?s",
    });

    useEffect(() => {
        console.log(data);
        if (data.slug !== "") {
            const timeoutId = setTimeout(() => {
                const fetch = async () => {
                    try {
                        const res = await axios.get(`/${data.endpoint}=${data.slug}`);
                        setMeales(res.data.meals);
                    } catch (err) {
                        console.error(err);
                    }
                };
                fetch();
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [data.slug]);

    return { data, setData };
};

export default useFetch;