<template>
    <main>
        <div class="card">
            <div class="card-content">
                <div class="context">
                    <div class=card-calc>
                        <div class="input-control">
                            <div>
                                <label class="label">Altura</label>
                                <p class="control">
                                    <input class="input" type="email" placeholder="Metros" v-model="altura" />
                                </p>
                            </div>
                            <div>
                                <label class="label">Peso</label>
                                <p class="control">
                                    <input class="input" type="text" placeholder="Quilos" v-model="peso" />
                                </p>
                            </div>
                        </div>
                        <div>
                            <button class="button primary-color" @click="calcular">Calcular</button>
                            <button class="button secondary-color" @click="limpar">Limpar</button>

                            <label v-if="resultado !== null" class="label">{{resultado}} </label>
                        </div>
                        <div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>IMC</th>
                                        <th>Classificação</th>
                                        <th>Obesidade (grau)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Menor que 18,5</th>
                                        <td>
                                            Magreza
                                        </td>
                                        <td>O</td>
                                    </tr>
                                    <tr>
                                        <th>Entre 18,5 e 24,9</th>
                                        <td>
                                            Normal
                                        </td>
                                        <td>O</td>
                                    </tr>
                                    <tr>
                                        <th>Entre 25,0 e 29,9</th>
                                        <td>
                                            Sobrepeso
                                        </td>
                                        <td>I</td>
                                    </tr>
                                    <tr>
                                        <th>Entre 30,0 e 39,9</th>
                                        <td>
                                            Obesidade
                                        </td>
                                        <td>II</td>
                                    </tr>
                                    <tr>
                                        <th>Maior que 40,0</th>
                                        <td>
                                            Obesidade Grave
                                        </td>
                                        <td>III</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="content">
                    <div class="card-text">
                        <h4>O que é o IMC?</h4>
                        <p>
                            O Índice de Massa Corporal (IMC) é uma medida amplamente utilizada para avaliar a relação entre o peso e a altura de uma pessoa. 
                            Ele oferece uma maneira simples de determinar se uma pessoa está dentro de um peso considerado saudável para sua altura.
                        </p>
                        <p>
                            O IMC é calculado dividindo o peso da pessoa (em quilogramas) pelo quadrado de sua altura (em metros). 
                            Esta fórmula padronizada fornece um número que pode ser interpretado em uma escala para categorizar o peso de uma pessoa.
                        </p>
                        <h4>Para que serve o IMC?</h4>
                        <p>O IMC é uma ferramenta de triagem importante para identificar possíveis problemas de peso e saúde em adultos. 
                            Ao categorizar o peso de uma pessoa como abaixo do peso, peso normal, sobrepeso ou obesidade, o IMC fornece uma indicação geral da saúde relacionada ao peso.
                        </p>
                        <p>
                            No entanto, é importante ressaltar que o IMC não considera outros fatores importantes, como a distribuição de gordura e músculo no corpo, 
                            nem leva em conta diferenças individuais de idade, sexo, etnia e composição corporal.
                        </p>
                        <h4>Como calcular o IMC?</h4>
                        <p>
                            Para calcular o IMC, é necessário conhecer o peso da pessoa em quilogramas e a altura em metros. Multiplica-se a altura por si mesma (altura * altura) para obter o 
                            quadrado da altura e, em seguida, divide-se o peso pelo quadrado da altura. O resultado é o IMC da pessoa.
                        </p>
                        <p>
                            Os valores de IMC podem ser interpretados em uma escala que categoriza o peso da seguinte forma: 
                            <ul>
                                <li>
                                    abaixo de 18,5 (abaixo do peso)
                                </li>
                                <li>
                                    18,5 a 24,9 (peso normal)
                                </li>
                                <li>
                                    25 a 29,9 (sobrepeso)
                                </li>
                                <li>
                                    30 a 34,9 (obesidade grau I)
                                </li>
                                <li>
                                    35 a 39,9 (obesidade grau II - severa)
                                </li>
                                <li>
                                    acima de 40 (obesidade grau III - mórbida)
                                </li>
                            </ul>
                        </p>
                        <h4>Mas atenção....</h4>
                        <p>
                            Embora o IMC seja uma ferramenta útil para avaliar a saúde relacionada ao peso, é importante reconhecer suas limitações e buscar uma avaliação mais abrangente com um profissional de saúde. 
                            Uma abordagem individualizada, considerando outros fatores de saúde e estilo de vida, é essencial para uma compreensão completa da saúde de uma pessoa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    setup() {
    },
    data(){
        return {
            altura: null,
            peso: null,
            resultado: null
        }
    },
    methods: {
        calcular: function(){
            
            if (this.peso && this.altura) {
                const weightWithDot = this.peso.replace(",", ".");
                const heightWithDot = this.altura.replace(",", ".");
                
                const weightInKg = parseFloat(weightWithDot);
                const heightInMeters = parseFloat(heightWithDot);

                const calc = weightInKg / (heightInMeters * heightInMeters);

                if (!isNaN(weightInKg) && !isNaN(heightInMeters)) {
                    this.resultado = "Seu IMC: " + calc.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
                }
            }
        },
        limpar: function() {
            this.altura = "";
            this.peso = "";
            this.resultado = "";
        }
    }
}
</script>

<style scoped>
.card {
    width: 50%;
    margin: 0px 15px 50px 15px;
}

main {
    display: flex;
    justify-content: center;
}

.card-calc {
    height: 100vh;
}

.input {
    width: 150px;
}

.input-control {
    display: flex;
    justify-content: space-around;
}

.input:focus {
    border-color: #ff6a13;
    --bulma-input-focus-shadow-alpha: 0;
}

button {
    font-size: 14px;
}

.primary-color {
    background-color: #ff6a13;
    color: #ffffff;
}

.secondary-color {
    background-color: #ffffff;
    color: #ff6a13;
    border: 1px solid #ff6a13;
}

@media screen and (max-width: 1024px) {
    .card {
        width: 100%;
    }
}
</style>