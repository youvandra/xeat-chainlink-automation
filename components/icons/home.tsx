import { SVGAttributes } from "react"

function HomeIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.5 8.34115L10 2.50781L17.5 8.34115V17.5078C17.5 17.9498 17.3244 18.3738 17.0118 18.6863C16.6993 18.9989 16.2754 19.1745 15.8333 19.1745H4.16667C3.72464 19.1745 3.30072 18.9989 2.98816 18.6863C2.67559 18.3738 2.5 17.9498 2.5 17.5078V8.34115Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M7.5 19.1746V10.8413H12.5V19.1746" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default HomeIcon
