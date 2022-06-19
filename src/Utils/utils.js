export const isEmptyObject = (obj) => {
  return Object.keys(obj).length == 0;
};

export const formatPrice = (number, curr = "INR", noStyle) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: curr,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

export const formatTravelTime = (mins) => {
  const h = Math.floor(mins / 3600),
    m = Math.floor((mins % 3600) / 60),
    s = Math.floor((mins % 3600) % 60);
  return `${h ? `${h}h ` : ""}${m ? `${m}m ` : ""}${s ? `${s}s ` : ""}`;
};
