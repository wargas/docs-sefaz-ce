const React = require('react');
const { Container } = require('../../core/CompLibrary.js');

const Disciplinas = () => {
    return (
        <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
            <a href="/docs/direito-administrativo">Direito Administrativo</a>
            <a href="/docs/direito-administrativo">Direito Constitucional</a>
        </Container>
        </div>
    )
}

module.exports = Disciplinas