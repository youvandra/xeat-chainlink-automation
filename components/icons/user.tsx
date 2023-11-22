import { SVGAttributes } from "react"

function UserIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.6673 18.3413V16.6746C16.6673 15.7906 16.3161 14.9427 15.691 14.3176C15.0659 13.6925 14.218 13.3413 13.334 13.3413H6.66732C5.78326 13.3413 4.93542 13.6925 4.31029 14.3176C3.68517 14.9427 3.33398 15.7906 3.33398 16.6746V18.3413"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99935 10.008C11.8403 10.008 13.3327 8.51559 13.3327 6.67464C13.3327 4.83369 11.8403 3.34131 9.99935 3.34131C8.1584 3.34131 6.66602 4.83369 6.66602 6.67464C6.66602 8.51559 8.1584 10.008 9.99935 10.008Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default UserIcon
