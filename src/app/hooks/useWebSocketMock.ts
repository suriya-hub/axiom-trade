"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateRandomToken } from "../store/tokenSlice";

export const useWebSocketMock = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      (["A", "B", "C"] as const).forEach(set => {
        dispatch(updateRandomToken({ set }));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);
};
