const dateFormat = (date: string) => {
  const dateObj = new Date(date);
  const year = `${dateObj.getFullYear()}`;
  let month = `${
    dateObj.getMonth() + 1 < 10
      ? `0${dateObj.getMonth() + 1}`
      : dateObj.getMonth() + 1
  }`;
  const day = `${
    dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate()
  }`;
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  return `${day}/${month}/${year} at ${hours}:${minutes}`;
};

export default dateFormat;
