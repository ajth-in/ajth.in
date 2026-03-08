import { cx } from "styled-system/css"

export { cx }

export function cn(...inputs: (string | undefined | null | false)[]) {
  return cx(...inputs.filter(Boolean) as string[])
}
