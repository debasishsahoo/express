const user = [
    { id: 1, email: 'a@a.com', password: '1234', name: 'Azim' },
    { id: 2, email: 'p@p.com', password: '9876', name: 'Pandit' },
    { id: 3, email: 'r@r.com', password: '1597', name: 'Reshmi' },
    { id: 4, email: 'd@d.com', password: '9632', name: 'Dinda' },
    { id: 5, email: 's@s.com', password: '9681', name: 'Sahoo' },
];
const product = [
    { id: 'sddds', name: 'abc1', price: 485, category: 'a', review: '300+', desc: 'desc1' },
    { id: 'sssfs', name: 'xyz1', price: 758, category: 'x', review: '750+', desc: 'desc2' },
    { id: 'xvxvv', name: 'xyz2', price: 968, category: 'x', review: '70+', desc: 'desc3' },
    { id: 'fqfqw', name: 'abc2', price: 145, category: 'a', review: '40+', desc: 'desc4' },
    { id: 'tewte', name: 'mno1', price: 500, category: 'm', review: '5+', desc: 'desc5' },
    { id: 'teddd', name: 'mno2', price: 145, category: 'm', review: '25+', desc: 'desc6' }

];

const review = [
    { id: 1, product: 'sssfs', review: 'Good product' },
    { id: 2, product: 'sddds', review: 'Bad product' },
    { id: 3, product: 'xvxvv', review: 'Good product' },
    { id: 4, product: 'xvxvv', review: 'Avarage product' },
    { id: 5, product: 'tewte', review: 'Good product' }
]

module.exports = { user, product, review };