import { useEffect, useState } from "react"

interface CountDownProps {
  startDate: number
  endDate: number
}

export const useCountdown = ({ startDate, endDate }: CountDownProps) => {
  const currentDateTime = new Date().getTime()
  const endDateTime = new Date(Number(endDate)).getTime()
  const startDateTime = new Date(Number(startDate)).getTime()

  const [countDown, setCountDown] = useState(
    currentDateTime >= startDateTime && currentDateTime <= endDateTime ? endDateTime - currentDateTime : 0
  )

  useEffect(() => {
    if (currentDateTime >= startDateTime && currentDateTime <= endDateTime) {
      const interval = setInterval(() => {
        const updatedCountDown = Math.max(endDateTime - new Date().getTime(), 0)
        setCountDown(updatedCountDown)
      }, 1000)

      return () => clearInterval(interval)
    } else {
      setCountDown(0)
    }
  }, [currentDateTime, startDateTime, endDateTime])

  return getReturnValues(countDown)
}

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0")
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0")
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0")
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0")

  return [days, hours, minutes, seconds]
}
