import { cn } from "../../utils/cn";

export interface ButtonAnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export function ButtonAnchor(props: ButtonAnchorProps) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "font-semibold text-indigo-900 px-3 py-2 rounded bg-indigo-300 hover:bg-indigo-300/80 transition-colors",
        props.className
      )}
    />
  );
}
