import MenuItem from "./MenuItem";

export default function MenuList({ items }: { items: string[] }) {
  return items.map((card) => <MenuItem key={card} itemKey={card} />);
}
