export const toThousand = (
  value: number | string,
  opts: Intl.NumberFormatOptions = {},
) => {
  // 先把字串裡的逗號拿掉再轉數字
  const n =
    typeof value === "string" ? Number(value.replace(/,/g, "")) : Number(value);

  if (!Number.isFinite(n)) return String(value); // 非數字就原樣回傳

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 20, // 不裁小數位，保留原始精度
    ...opts,
  }).format(n);
};
