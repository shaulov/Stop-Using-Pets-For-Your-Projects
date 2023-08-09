'use client';

import { useState, useEffect } from "react";
import CardModal from "@/modules/ProjectList/components/CardModal";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {
        isMounted &&
        <>
          <CardModal />
        </>
      }
    </>
  );
}

export default ModalProvider;