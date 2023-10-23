import { Link, type LinkProps } from "react-router-dom";

interface ButtonLinkProps extends LinkProps {}

export function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className="font-semibold text-indigo-900 px-3 py-2 rounded bg-indigo-300 hover:bg-indigo-300/80 transition-colors"
    />
  );
}
