import React from 'react'

import {Container, Modal, Content, Close } from './styles'
export default function Main() {
    return (
        <Container>
            <Modal>
                <Close />
                <Content>
                    <h1>Estamos salvando seu pedido</h1>
                    <img src="https://image.flaticon.com/icons/png/512/104/104090.png" alt="form" sizes="74" />
                    <p>Por favor aguarde ... </p>
                
                </Content>
            </Modal>
        </Container>
    )
}
