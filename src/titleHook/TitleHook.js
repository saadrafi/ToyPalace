import { useEffect } from "react";

const setTitle = (title) => {
  useEffect(() => {
    document.title = `Lego Palace | ${title} `;
  }, []);
};

export default setTitle;
