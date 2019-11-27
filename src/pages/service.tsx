import * as React from 'react'
import { faClipboardList } from '@fortawesome/pro-duotone-svg-icons'
import styled from '@emotion/styled'
import { useGlobal } from '~/store/global'
import styles from '~/utils/styles'
import functions from '~/utils/functions'
import Seo from '~/components/base/Seo'
import Header from '~/components/base/Header'
import Wrapper from '~/components/base/Wrapper'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import H2 from '~/components/base/H2'
import List from '~/components/service/List'

const Service: React.FC = () => {
  const en = 'service'
  const ja = 'メニュー案内'
  const global = useGlobal()
  return (
    <>
      <Seo title={functions.toUpperFirst(en)} />
      <Header
        playing={global.playing}
        isPending={global.isPending}
        icon={faClipboardList}
        en={en.toUpperCase()}
        ja={ja}
        crumbs={[
          {
            to: '/',
            name: 'ホーム'
          },
          {
            to: `/${en}`,
            name: ja
          }
        ]}
      />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="BARBER" ja="メンズメニュー" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>
          BAARDではヘアスタイルを作る上で３つの要素を大切に、ヘアデザインに落とし込みます。お客様の髪質に合わせ－－。ここに説明など。ここに説明など。ここに説明など。ここに説明など。ここに説明など。
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="メンズカット" price="5,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="前髪カット" price="1,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="キッズカット" price="3,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="リタッチカラー" price="9,500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="オールカラー" price="13,500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="デザインカラー" price="6,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ブリーチカラー" price="10,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="コスメパーマ" price="8,500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="エアウェーブパーマ" price="11,500" />
      </Wrapper>
      <Wrapper>
        <List head="デジタルパーマ" price="12,500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ポイントパーマ" price="3,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="LADY'S SHAVING" ja="レディースシェービング" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>
          BAARDのレディースシェービングは－－。お顔のうぶ毛を剃ることにより－－。ここに説明など。ここに説明など。ここに説明など。ここに説明など。ここに説明など。
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="シェービング" price="3,000" />
      </Wrapper>
    </>
  )
}

const P = styled.p`
  ${styles.mixins.lhCrop(2)}
`

export default Service
