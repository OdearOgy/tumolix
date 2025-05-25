import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useState, type FunctionComponent } from 'react'
import { Cover } from '../components/layouts'
import Header from '../features/app/header'
import Search from '../features/movies/search'

const Layout: FunctionComponent = () => {
  const [s, setS] = useState('')
  return (
    <>
      <Header>
        <Search search={s} setSearch={setS} />
      </Header>
      <Cover space="p-0">
        <Outlet />
      </Cover>

      <footer className="opacity-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magnam doloremque
        consequuntur quasi ab eaque repellendus, obcaecati rerum quo autem error molestiae,
        molestias excepturi! Nam ut aliquid esse eius quidem. Delectus facere sequi consectetur
        cupiditate molestiae optio ipsam facilis fugit, vitae voluptate vero eos culpa laudantium
        eaque debitis nulla numquam quod id minima quasi. Libero sequi ipsam laboriosam? Amet,
        expedita. Minima, at voluptates maiores eius, rem repellendus veritatis libero, maxime quasi
        repudiandae quisquam nostrum accusantium dolore hic obcaecati. Corporis ipsum autem quod
        vero culpa odio non? Quidem aliquam ut distinctio! Architecto vero beatae debitis
        consequatur non assumenda explicabo enim saepe voluptatibus tempore porro facilis ad
        voluptas amet sequi, accusamus temporibus officiis odio hic impedit nulla laudantium qui
        dicta sunt? Impedit. Nisi sunt exercitationem architecto sequi iure saepe numquam dolore
        quisquam debitis eius minus sed eos, laboriosam nulla reprehenderit cum officiis eligendi
        suscipit vitae amet ex aut. Enim quasi aspernatur iste. Deleniti dolore animi ea? Aliquid,
        nulla distinctio recusandae magni doloremque, fugit ab earum minima incidunt cumque
        inventore, amet error. Ab accusantium illum dolorem ipsam, ex quod cumque perspiciatis quas
        inventore! Quae fuga voluptatem vitae quidem! Earum eum est deleniti? Laborum quidem beatae
        blanditiis, esse dolore inventore quo libero totam repellendus saepe explicabo quibusdam at,
        adipisci unde fugiat ex dolorem quod. Odit ipsam, reiciendis placeat dolor ducimus modi
        temporibus maxime et nostrum aperiam ipsa nobis exercitationem officia quod quo, voluptas
        saepe eius totam eum consequatur rerum dolore a facere. Vero, atque. Id aut reiciendis
        voluptatum, quo consequuntur exercitationem soluta eveniet, saepe, debitis molestiae
        accusamus sequi possimus! Doloremque dolor odio ut culpa, inventore quia impedit ab, quas
        facere dolores nemo placeat natus! Inventore, dicta voluptate! Accusantium asperiores minus
        iusto distinctio quasi officiis voluptates mollitia eos incidunt exercitationem culpa natus
        quibusdam, perferendis tenetur nihil reprehenderit totam explicabo eligendi. Ex obcaecati
        hic perspiciatis asperiores.
      </footer>
    </>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

export default Layout
