import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { logoutUser } from '../actions/auth'

const CommonHeader = ({ showLinks = false, userInfo = { evergreenId: '' } }) => {
    const dispatch = useDispatch()
    const green = '#00B98E'
    const light = '#F3F6F8'

    const LoginLink = styled.a`
        color: ${light} !important;
        font-weight: bold;
    `

    const SignUpLink = styled.a`
        color: ${light} !important;
    `

    const StyledNav = styled.nav`
        background-color: ${green};
        max-width: 1232px; 
        margin: auto;
        border-radius: 0  0 30px 30px;
    `

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(logoutUser())
    }

    const history = useHistory()

    return (
        <StyledNav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 d-flex flex-row justify-content-between">
            <div className="navbar-brand p-0" style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
                <h3 className="m-0" style={{ color: light }}><p>Evergreen</p><p>Solutions</p></h3>
            </div>
            {showLinks ? <div className="justify-self-end">
                <div className="navbar-nav ms-auto py-0">
                    <LoginLink href="/login" className="nav-item nav-link active">Login</LoginLink>
                    <SignUpLink href="/register" className="nav-item nav-link active">Sign up</SignUpLink>
                </div>
            </div> : <></>}
            {userInfo.evergreenId ? <div className="justify-self-end">
                <div className="navbar-nav ms-auto py-0">
                    <h6 className='pt-1 mx-3' style={{ color: light }}><p>{`Welcome, ${userInfo.evergreenId}!`}</p></h6>
                    <SignUpLink onClick={handleClick} className="nav-item nav-link active">Logout</SignUpLink>
                </div>
            </div> : <></>}
        </StyledNav>
    )
}

export default CommonHeader