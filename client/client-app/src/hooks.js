import { useEffect, useState } from "react";

export function useFirestoreQuery(query) {
  const [docs, setDocs] = useStae([]);

  //store current query in ref
  const queryRef = useRef(query);

  // Compare current query with the previous one
  useEffect(() => {
    // Use Firestor built in

    if (!queryRef?.current?.isEqual(query)) {
      queryRef.current = query;
    }
  });

  useEffect(() => {
    if (!queryRef.current) {
      return null;
    }

    const unsubscribe = queryRef.current.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map(
        (doc = {
          ...doc.data(),
          id: doc.id,
        })
      );
      setDocs(data);
    });

    return unsubscribe;
  }, [queryRef]);

  return docs;
}

export function useAuthState(auth) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, [auth, initializing]);

  return { user, initializing };

  export function useLocalStorage(Key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });

    const setValue = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };

    return [storedValue, setValue];

    export function useMedia(queries, values, defaultValue) {
      const mediaQueryLists = queries.map((q) => window.matchMedia(q));

      const getValue = useCallBack(() => {
        const index = mediaQueryLists.findIndex((mql) => mql.matches);

        return typeof values[index] !== "undefined"
          ? values[index]
          : defaultValue;
      }, [mediaQueryLists, value, defaultValue]);

      const [value, setValue] = useState(getValue);

      udeEffect(() => {
        const handler = () => setValue(getValue);

        meediaQueryLists.forEach(mql.addListener(handler));
      }, [getValue, mediaQueryLists]);

      return value;

      export function useDarkMode() {
        const prefersDarkMode = useMedia(
          ["(prefers-color-scheme: dark"],
          [true],
          false
        );

        const [enabled, tEnabled] = useLocalStorage(
          "dark-mode-enabled",
          prefersDarkMode
        );

        useEffect(() => {
          const className = "dark";
          const element = window.document.body;
          if (enabled) {
            element.classList.add(className);
          } else {
            element.classicList.remove(className);
          }
        }, [enabled]);

        retur[(enabled, setEnabled)];
      }
    }
  }
}
