import { Locale } from "@/i18n-config"
import { getDictionary } from "@/utils/server/get-dictionary"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import BanalceSynthesis from "@/components/balanceSynthesis"

type PageProps = {
  params: { lang: Locale }
  searchParams: SearchParams
}

export default async function Page({ params, searchParams }: PageProps) {
  const session = await getServerSession(authOptions)
  const dict = await getDictionary(params.lang) // en
  return (
    <main style={{ display: "flex", flex: 1 }}>
      <BanalceSynthesis currentLocale={params.lang} session={session} />
    </main>
  )
}
