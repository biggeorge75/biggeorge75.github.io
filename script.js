new Vue({
    el: '#vue-app',
    data: {
        focim: "Matek Gyakorlás Natinak",
        random1: '',
        random2: '',
        random3: '',
        szamEddig: 10,
        randomMuvelet: [
            '+',
            '-',
            '*'
        ],
        muveletMelyik: '1',
        osszeg: '',
        eredmeny: '',
        szamlalo: 0
        
    },
    methods: {
        eredmenySzamitas: function () {
            if (this.random3 == 0) {
                this.osszeg = this.random1 + this.random2;
            } else if (this.random3 == 1) {
                this.osszeg = this.random1 - this.random2;
            } else if (this.random3 == 2) {
                this.osszeg = this.random1 * this.random2;
            } else if (this.random3 == 3) {
                this.osszeg = this.random1 / this.random2;
            };
            if (this.osszeg == this.eredmeny) {
                alert('Ügyes vagy Nati, jó lett az eredmény :)');
                this.random1 = '';
                this.random2 = '';
                this.randomNumber();
                this.szamlalo++;
                
            }
            else{
                alert('Nati, sajnos nem jó, próbáld újra! :(');
                this.szamlalo = 0;
            };
            this.eredmeny = '';
           
            this.$refs.refinput.focus();
        },
        
        randomNumber: function() {
            this.random1 = Math.floor(Math.random() * (this.szamEddig - 1 + 1)) + 1;
            this.random2 = Math.floor(Math.random() * (this.szamEddig - 1 + 1)) + 1;
            this.random3 = Math.floor(Math.random() * (this.muveletMelyik - 1 + 1));
            this.eredmeny = '?';
            this.$refs.refinput.focus();
        }
    },
});
