import { auth } from "@/firebase";
import { Slot, useRouter } from "expo-router";
import { Block } from "galio-framework";
import React, { useEffect } from "react";

export default function _layout() {
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      if (data) {
        router.push("/");
      }
    });
  }, []);

  return <Slot />;
}
