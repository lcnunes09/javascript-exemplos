
(() => {
    this.nameUser = 'arrow function';
    const getNameArrowFn = () => this.nameUser;

    function getName() {
        return this.nameUser;
    }

    const userNome2 = {
        nameUser: 'Nome no objeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(userNome2, getNameArrowFn());
    console.log(userNome2, getName());

})();
