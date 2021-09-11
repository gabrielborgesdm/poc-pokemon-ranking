import { faUserCircle, faUsers, IconDefinition } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { PAGE_URL } from '../configs/AppConfig'
import { CustomNavbar, NavbarTitle } from '../styles/common'
import { colors } from '../styles/theme'

const NavbarComponent: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const navigate = (link: string) => {
    router.push(link)
  }

  const getNavLink = (link: string, title: string, icon?: IconDefinition) => {
    return (
      <Nav.Link
        className={`nav-link ${router.pathname.includes(link) ? 'active-nav-link' : ''}`}
        href=""
        onClick={() => navigate(link)}>
          { icon && (<><FontAwesomeIcon icon={icon} size="lg"/>&nbsp;</>)}
          {title}
      </Nav.Link>
    )
  }

  return (
    <CustomNavbar variant="dark" expand="lg" style={{ backgroundColor: colors.blue }}>
      <Container fluid={true}>
        <Navbar.Brand href={PAGE_URL.POKEMONS} className="d-flex align-items-center">
          <Image src="/pokeball.svg" height={40} width={40}/>
          <NavbarTitle >{t('title')}</NavbarTitle>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {getNavLink(PAGE_URL.POKEMONS, t('ranking'))}
            {getNavLink(PAGE_URL.USERS, t('users'))}
          </Nav>
          <Nav>
            {getNavLink(PAGE_URL.ACCOUNT, t('my-account'), faUserCircle)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </CustomNavbar>
  )
}

export default NavbarComponent