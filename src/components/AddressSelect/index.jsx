import { useEffect, useState } from "react";
import cx from "classnames";
import s from "./address.module.scss";
import { useDebounceValue } from "../../utils/hooks/useDebounceValue";
import { useOnClickOutside } from "../../utils/hooks/useOnClickOutside";

const ADDRESS_BASE_URL =
  "https://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws?Key=gz38-nt61-zz89-db43&SearchFor=Everything&OrderBy=UserLocation&$block=true&$cache=true";

const fetchAddress = async (searchTerm, lastId) => {
  try {
    const res = await fetch(
      `${ADDRESS_BASE_URL}&searchTerm=${searchTerm}&lastId=${lastId}`
    );
    const data = await res.json();
    return data.Items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const AddressSelect = ({ onChange }) => {
  const [search, setSearch] = useState("");
  const [addresses, setAddresses] = useState({
    loading: false,
    data: [],
  });
  const [isOpen, setIsOpen] = useState(false);
  const debouncedSearch = useDebounceValue(search);
  const dropdownRef = useOnClickOutside(() => setIsOpen(false));

  useEffect(() => {
    setAddresses((a) => ({ ...a, loading: true }));
    fetchAddress(search)
      .then((data) => {
        setAddresses({ data, loading: false });
      })
      .catch(() => {
        setAddresses({ data: [], loading: false });
      });
  }, [debouncedSearch]);

  const handleSelect = async ({ Next, ...option }) => {
    if (Next === "Find") {
      setAddresses((a) => ({ ...a, loading: true }));
      fetchAddress(option.Text, option.Id)
        .then((data) => {
          setAddresses({ data, loading: false });
        })
        .catch(() => {
          setAddresses({ data: [], loading: false });
        });
    } else {
      onChange(option);
      setIsOpen(false);
      setSearch("");
    }
  };

  return (
    <div className={s.dropdownWrapper} ref={dropdownRef}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => setIsOpen(true)}
      />

      <ul className={cx(s.dropdown, { [s.open]: isOpen })}>
        {addresses.loading && <li>Loading...</li>}
        {addresses.data.length > 0 ? (
          addresses.data.map(({ Text, Description, Next, ...rest }, idx) => (
            <li
              key={idx}
              data-value={Description}
              onClick={() => handleSelect({ Text, Description, Next, ...rest })}
            >
              <span>{`${Text} ${Description}`}</span>
              {Next === "Find" && <span>&gt;</span>}
            </li>
          ))
        ) : (
          <li>No Data</li>
        )}
      </ul>
    </div>
  );
};
