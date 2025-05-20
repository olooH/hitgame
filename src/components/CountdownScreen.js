import React, { useEffect, useState } from "react";

export default function CountdownScreen() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="text-6xl font-bold">{count > 0 ? count : "시작!"}</div>
  );
}
