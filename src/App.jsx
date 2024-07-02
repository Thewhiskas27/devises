import styles from './App.module.css'; // On importe le code CSS de notre page

function App() { // La fonction
    const devises = () => { // Les instructions
        const rates = { // Les différentes valeurs de conversion
            USD: { EUR: 0.85, GBP: 0.79, JPY: 157.32, CNY:7.26, CHF: 0.90, MXN: 18.44 }, // Dollar
            EUR: { USD: 1.18, GBP: 0.84, JPY: 168.31, CNY:7.76, CHF: 0.97, MXN: 19.75 }, // Euro
            GBP: { EUR: 1.19, USD: 1.27, JPY: 199.57, CNY:9.20, CHF: 1.14, MXN: 23.3 }, // Livre Sterling
            JPY: { EUR: 0.0059, USD: 0.0064, GBP: 0.005, CNY: 0.046, CHF: 0.97, MXN: 0.11 }, // Yen
            CNY: { EUR: 0.13, USD: 0.14, GBP: 0.11, JPY: 21.68, CHF: 0.97, MXN: 2.54 }, // Yuan
            CHF: { EUR: 1.03, USD: 1.11, GBP: 0.88, JPY: 178.77, CNY: 8.04, MXN: 20.40 }, // Franc Suisse
            MXN: { EUR: 0.051, USD: 0.054, GBP: 0.043, JPY: 8.77, CNY: 0.39, CHF: 0.049 } // Peso Mexicain
        };
        const amount = parseFloat(document.getElementById('amount').value); // L'argent qu'on veuille convertir
        const fromC = document.getElementById('fromCurrency').value; // La devise qu'on veut convertir
        const toC = document.getElementById('toCurrency').value; // La devise qu'on veut avoir
        let result = amount * rates[fromC][toC]; // Le calcul permettant de convertir les devises
        if (isNaN(amount) || amount <= 0)alert("Veuillez saisir des valeurs logiques sur les cases !"); // Validation d'entrées. Si on écrit n'importe quoi, le programme va vous le dire.
        else if(fromC === toC)document.getElementById('result').textContent = `Result: ${amount} ${fromC}`; // Si les 2 devises saisies sont les mêmes, retourner la valeur de base.
        else document.getElementById('result').textContent = `Result: ${result} ${toC}`; // Retourne la l'argent dans la devise recherchée
    };
    return (
        <>
            <h2>Convertisseur de devises<br/></h2>
            <div id="converter" className={styles.converter}>
                <p>Saissisez le montant</p>
                <input type="number" id="amount" min="0" placeholder="Entrez une devise !"/>
                <p>Choissisez entre les devises disponibles !</p>
                <select id="fromCurrency">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="CNY">CNY</option>
                    <option value="CHF">CHF</option>
                    <option value="MXN">MXN</option>
                </select>
                <select id="toCurrency">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="CNY">CNY</option>
                    <option value="CHF">CHF</option>
                    <option value="MXN">MXN</option>
                </select>
                <button onClick={devises}>Calculate</button>
                <div id="result"></div>
            </div>
        </>
    )
}
export default App