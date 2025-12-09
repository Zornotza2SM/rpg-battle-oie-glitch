// --- MODELOA ---
let vidaHeroe = 50;
let vidaMonstruo = 50;

// --- BISTA ---
function vista() {
     // Egoerak kalkulatu
    let heroeMuerto = vidaHeroe <= 0;
    let monstruoMuerto = vidaMonstruo <= 0;

    // Emojiak erabaki (Ternarioa)
    let iconoHeroe = heroeMuerto ? "⚰️" : "🥷";
    let iconoMonstruo = monstruoMuerto ? "💥" : "👹";
    let colorHeroe = vidaHeroe > 30 ? "#4caf50" : "#f44336";
    let animacionMonstruo = monstruoMuerto 
        ? "https://assets9.lottiefiles.com/packages/lf20_96bovdur.json" // Leherketa
        : "https://assets4.lottiefiles.com/packages/lf20_15gr10.json";  // Munstroa mugitzen
    

    
 // Mezu bat prestatu
    let mezua = "";
    if (heroeMuerto) mezua = "<h3 style='color:red'>GARAITUA IZAN ZARA...</h3>";
    if (monstruoMuerto) mezua = "<h3 style='color:gold'>IRABAZI DUZU! 🏆</h3>";

    document.getElementById("battle-app").innerHTML = `
        <div class="battle-screen">
            <h2>⚔️ BATTLE ARENA ⚔️</h2>
             ${mezua}
            
            <div class="stats">
        <div style="width: 45%">
            <div>Heroia: ${vidaHeroe}</div>
            <div class="health-bar-container">
                <div class="health-bar" style="width: ${vidaHeroe}%; background-color: ${colorHeroe}"></div>
            </div>
        </div>
        <div style="width: 45%">
            <div>Munstroa: ${vidaMonstruo}</div>
            <div class="health-bar-container">
                <div class="health-bar" style="width: ${vidaMonstruo}%; background-color: #e94560"></div>
            </div>
        </div>
           

          <div class="fighters">
                <div>${iconoHeroe}</div>
                <div>${iconoMonstruo}</div>
                <div style="width:100px">
             <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_s0lwaq2n.json" background="transparent" speed="1" style="width: 100px; height: 100px;" loop autoplay></lottie-player>
        </div>
        <div style="width:100px">
            <lottie-player src="${animacionMonstruo}" background="transparent" speed="1" style="width: 100px; height: 100px;" loop autoplay></lottie-player>
        </div>
    </div>
                
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

// --- ETSAIAREN LOOP-A ---

function cicloDeBatalla() {
    // 1.5 segundoro (1500ms) munstroak erasotzen du
    setTimeout(() => {
        
        // Munstroa bizirik badago bakarrik erasotzen du
        if (vidaMonstruo > 0 && vidaHeroe > 0) {
            // Ausazko kaltea (5 eta 15 artean)
            let golpe = Math.floor(Math.random() * 10) + 5;
            vidaHeroe -= golpe;
            
            // Muga: ez jaitsi 0tik behera
            if (vidaHeroe < 0) vidaHeroe = 0;
            
            vista();
        }

        // Loop-a jarraitzen du jokoa amaitu arte
        if (vidaMonstruo > 0 && vidaHeroe > 0) {
            cicloDeBatalla();
        }

    }, 1500);
}

// BORROKA HASI
cicloDeBatalla();

