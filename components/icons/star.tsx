import { SVGAttributes } from "react"

function StarIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.99935 2.50781L12.5743 7.72448L18.3327 8.56615L14.166 12.6245L15.1493 18.3578L9.99935 15.6495L4.84935 18.3578L5.83268 12.6245L1.66602 8.56615L7.42435 7.72448L9.99935 2.50781Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default StarIcon
