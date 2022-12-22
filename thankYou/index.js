import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { device } from '@/common/constants/device'
import Link from '@/components/common/Link'

import { UserPayments } from 'common/services/api/UserPayments'
import Loader from 'components/Loader/Loader'

import styled from 'styled-components'

const NAVIGATION_LINKS_BOTTOM = [
  {
    id: 1,
    href: 'https://adheart.me/support/',
    text: 'navigationLinkSupport',
  },
  {
    id: 2,
    href: 'https://t.me/adheart_support',
    text: 'navigationLinkSupportTelegram',
  },
]

const NavigationItem = styled(Link)`
  font-size: 0.875em;
  position: relative;

  &:nth-child(2) {
    display: list-item;
  }

  &:nth-child(3) {
    display: list-item;
  }

  &:nth-child(5) {
    display: list-item;
  }

  &:not(:last-child) {
    margin-right: 1.5em;
  }

  @media ${device.tablet} {
    margin-bottom: 0;
  }

  @media ${device.laptopL} {
    font-size: 1em;
  }
`

const Wrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  & h1 {
    font-size: 16px;
  }

  & .loader {
    width: 250px;
  }
`

const ThankYou = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { payment_id } = router.query

  console.log(t)

  const statusTemplate = {
    pending: (
      <div className="loader">
        <Loader />
      </div>
    ),
    success: <h1>Дякуємо за покупку, вдалого користування сервісом.</h1>,
    failed: (
      <>
        <h1>Помилка</h1>
        {NAVIGATION_LINKS_BOTTOM.map((link) => (
          <NavigationItem key={link.id} href={link.href}>
            {t(`${link.text}`)}
          </NavigationItem>
        ))}
      </>
    ),
  }

  // state
  const [condition, setСondition] = useState('pending')

  //   useEffect(() => {
  //     const fetchPaymentInfo = async () => {
  //       try {
  //         const status = await UserPayments.info.get(payment_id)
  //         console.log('status: ' + status)
  //         setСondition(status)
  //       } catch (e) {
  //         console.error(e)
  //         setСondition('failed')
  //       }
  //     }

  //     fetchPaymentInfo()
  //   }, [])

  //   useEffect(() => {
  //     const ind = setInterval(() => {
  //       console.log(ind)
  //     }, 5000)
  //   }, [])

  return <Wrap>{statusTemplate[condition]}</Wrap>
}

export default ThankYou
