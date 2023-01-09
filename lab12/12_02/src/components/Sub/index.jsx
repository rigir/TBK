import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function index() {
  const [result, setResult] = useState("");
  let [searchParams] = useSearchParams();

  useEffect(() => {
    const x = parseInt(searchParams.get("x"));
    const y = parseInt(searchParams.get("y"));

    setResult(`${x - y}`);
  }, []);

  return (
    <div>
      {result}
    </div>
  )
}