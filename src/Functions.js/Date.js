export const strDate = (date) => {
  const addZero = (x) => {
    if (String(x).length === 1) {
      return `0${x}`;
    }
    return x;
  };

  const dateObj = new Date(date);
  const m = dateObj.getMonth();
  const d = dateObj.getDate();
  const y = dateObj.getFullYear();
  const h = dateObj.getHours();
  const min = dateObj.getMinutes();
  const s = dateObj.getSeconds();
  return `${addZero(d)}-${addZero(m + 1)}-${y} ${addZero(h)}:${addZero(
    min
  )}:${addZero(s)}`;
};

export const constDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const addZero = (x) => {
    if (String(x).length === 1) {
      return `0${x}`;
    }
    return x;
  };
  const dateObj = new Date(date);
  const d = dateObj.getDay();
  const m = dateObj.getMonth();
  const y = dateObj.getFullYear();
  const h = dateObj.getHours();
  const min = dateObj.getMinutes();

  const newDate = `${months[+m]} ${d}, ${y} - ${addZero(h)}:${addZero(min)}`;
  return newDate
};
