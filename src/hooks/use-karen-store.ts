import { useCallback, useEffect, useState } from "react";
import { STORAGE_KEY } from "@/content/karen";

type Store = Record<string, string | boolean>;

function read(): Store {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Store) : {};
  } catch {
    return {};
  }
}

export function useKarenStore() {
  const [store, setStore] = useState<Store>({});

  useEffect(() => {
    setStore(read());
  }, []);

  const set = useCallback((key: string, value: string | boolean) => {
    setStore((prev) => {
      const next = { ...prev, [key]: value };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return { store, set };
}
