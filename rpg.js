// --- MODELOA ---
let vidaHeroe = 50;
let vidaMonstruo = 50;
// --- BISTA ---
function vista() {
    console.log("vista sartu da")
    document.getElementById("battle-app").innerHTML = `
        <div class="battle-screen">
            <h2>⚔️ BATTLE ARENA ⚔️</h2>
            
            <div class="stats">
                <div>HEROIA: ${vidaHeroe} HP</div>
                <div>MUNSTROA: ${vidaMonstruo} HP</div>
            </div>

            <div class="fighters">
                <div>🥷</div>
                <div>👹</div>
            </div>

            <div class="controls">
                <button class="boton" id="btn-atacar">⚔️ Eraso</button>
                <button class="boton heal" id="btn-curar">🧪 Sendatu</button>
            </div>
        </div>
    `;

    // HEMEN JOANGO DIRA GERTAERAK (3. FASEA)
    // --- EGUNERATZEA (Gertaerak) ---
    document.getElementById("btn-atacar").onclick = () => {
        // Munstroa bizirik badago bakarrik eraso dezakegu
        if (vidaMonstruo > 0) {
            vidaMonstruo -= 10;
            // Ezin da 0 baino txikiagoa izan (estetika)
            if (vidaMonstruo < 0) vidaMonstruo = 0;
        }
        vista();
    }

    document.getElementById("btn-curar").onclick = () => {
        // Heroia bizirik badago bakarrik sendatu daiteke
        if (vidaHeroe > 0) {
            vidaHeroe += 15;
            // 100era mugatu (tope)
            if (vidaHeroe > 100) vidaHeroe = 100;
        }
        vista();
    }
}

vista();

