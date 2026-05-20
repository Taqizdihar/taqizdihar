import { useEffect } from "react";

export default function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `MTI - ${title}`;
  }, [title]);
}
