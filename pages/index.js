function Home() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Mãe esse é meu site, estou aprendendo :D';

    const br = document.createElement('br');

    const texto = document.createTextNode('Uhuuuuuuuuuuuuuul');

    document.body.append(h1, br, texto);
    return document.body.append(h1, br, texto)
}

export default Home;