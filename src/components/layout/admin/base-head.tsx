import Head from "next/head"
import { BRAND } from "~/data/constants"

interface BaseHeadProps {
  title?: string
  description?: string
}

export const BaseHead = ({ title, description }: BaseHeadProps) => {
  return (
    <Head>
      <title>{title ? `${BRAND.NAME} | ${title}` : BRAND.NAME}</title>
      <meta name="description" content={description ?? BRAND.DESCRIPTION} />
    </Head>
  )
}
