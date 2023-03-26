import React from 'react'
import styled from 'styled-components'

const CommonHeader = ({ showLinks = false }) => {
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

    return (
        <StyledNav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 d-flex flex-row justify-content-between">
            <div className="navbar-brand p-0">
                <h3 className="m-0" style={{ color: light }}><p>Evergreen</p><p>Solutions</p></h3>
            </div>
            {showLinks ? <div className="justify-self-end">
                <div className="navbar-nav ms-auto py-0">
                    <LoginLink href="/login" className="nav-item nav-link active">Login</LoginLink>
                    <SignUpLink href="/signup" className="nav-item nav-link active">Sign up</SignUpLink>
                </div>
            </div> : <></>}
        </StyledNav>
    )
}

export default CommonHeader