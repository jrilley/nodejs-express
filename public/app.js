document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('us-US', {
        currency: 'usd',
        style: 'currency'
    }).format(node.textContent)
})

const $card = document.querySelector('#card')

if ($card) {
    $card.addEventListener('click', event => {
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id
            console.log(id)
        }
    })
}