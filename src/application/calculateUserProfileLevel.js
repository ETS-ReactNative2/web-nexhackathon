/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import { useRef, useEffect, useState} from 'react'

export default function CalculateProfileLevel(user) {
  var Ref = useRef(0)
  const [percentValue, setPercentValue] = useState(0)

  useEffect(() => {
    {user.profile_image ? Ref.current+=25 : 0}
    {user.headline ? Ref.current+=25 : 0}
    {user.description ? Ref.current+=25 : 0}
    {user.skills.length >= 1 ? Ref.current+=25 : 0}
    setPercentValue(Ref.current)
  }, [user.description, user.headline, user.profile_image, user.skills.length])

  return percentValue
}
