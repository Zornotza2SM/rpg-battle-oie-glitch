// --- MODELOA ---
let vidaHeroe = 100;
let vidaMonstruo = 100;
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
}

vista();

