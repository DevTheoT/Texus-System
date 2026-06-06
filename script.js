/* ═══════════════════════════════════════════════
   NEXUSERP — CORE STATE & DATA
═══════════════════════════════════════════════ */

// ── INITIAL DATA ──────────────────────────────
const INITIAL_PRODUCTS = [
  {id:1,name:'Camiseta Básica',emoji:'👕',code:'PROD-001',barcode:'7891234567890',sku:'CAM-BAS-P-WHT',category:'Roupas',brand:'Basics',cost:25,price:89.90,stock:45,minStock:10,desc:'Camiseta 100% algodão'},
  {id:2,name:'Tênis Runner Pro',emoji:'👟',code:'PROD-002',barcode:'7891234567891',sku:'TEN-RUN-42-BLK',category:'Calçados',brand:'SportX',cost:120,price:329.90,stock:8,minStock:5,desc:'Tênis para corrida'},
  {id:3,name:'Fone Bluetooth',emoji:'🎧',code:'PROD-003',barcode:'7891234567892',sku:'FON-BLT-001',category:'Eletrônicos',brand:'TechAudio',cost:85,price:199.90,stock:3,minStock:5,desc:'Fone sem fio 40h bateria'},
  {id:4,name:'Mochila Adventure',emoji:'🎒',code:'PROD-004',barcode:'7891234567893',sku:'MOC-ADV-BLK',category:'Acessórios',brand:'Explorer',cost:60,price:149.90,stock:12,minStock:5,desc:'Mochila 30L resistente'},
  {id:5,name:'Relógio Smart',emoji:'⌚',code:'PROD-005',barcode:'7891234567894',sku:'REL-SMA-PRO',category:'Eletrônicos',brand:'TechTime',cost:200,price:599.90,stock:0,minStock:3,desc:'Smartwatch GPS/NFC'},
  {id:6,name:'Óculos de Sol',emoji:'🕶️',code:'PROD-006',barcode:'7891234567895',sku:'OCS-SOL-UV',category:'Acessórios',brand:'SunStyle',cost:35,price:119.90,stock:18,minStock:8,desc:'Proteção UV400'},
  {id:7,name:'Bermuda Cargo',emoji:'🩳',code:'PROD-007',barcode:'7891234567896',sku:'BER-CAR-M-KHA',category:'Roupas',brand:'Basics',cost:28,price:79.90,stock:22,minStock:8,desc:'Bermuda com bolsos laterais'},
  {id:8,name:'Garrafa Térmica',emoji:'🧴',code:'PROD-008',barcode:'7891234567897',sku:'GAR-TER-500',category:'Esporte',brand:'HydroPro',cost:18,price:54.90,stock:35,minStock:10,desc:'500ml inox, 24h frio/12h quente'},
  {id:9,name:'Protetor Solar FPS50',emoji:'☀️',code:'PROD-009',barcode:'7891234567898',sku:'SOL-FPS-50',category:'Beleza',brand:'SunCare',cost:12,price:39.90,stock:2,minStock:15,desc:'120ml, resistente à água'},
  {id:10,name:'Mouse Gamer RGB',emoji:'🖱️',code:'PROD-010',barcode:'7891234567899',sku:'MOU-GAM-RGB',category:'Eletrônicos',brand:'GamePro',cost:55,price:149.90,stock:7,minStock:5,desc:'16000 DPI, 6 botões'},
];

const INITIAL_CLIENTS = [
  {id:1,name:'Ana Carolina Souza',cpf:'123.456.789-00',email:'ana@email.com',phone:'(11) 99999-1111',city:'São Paulo',purchases:8,total:1240.50},
  {id:2,name:'Bruno Martins',cpf:'987.654.321-00',email:'bruno@email.com',phone:'(21) 98888-2222',city:'Rio de Janeiro',purchases:3,total:456.70},
  {id:3,name:'Carla Ferreira',cpf:'111.222.333-44',email:'carla@email.com',phone:'(31) 97777-3333',city:'Belo Horizonte',purchases:12,total:2890.00},
];

const INITIAL_SUPPLIERS = [
  {id:1,name:'Distribuidora Alpha',cnpj:'12.345.678/0001-90',contact:'João Proprietário',email:'joao@alpha.com',products:8,status:'ativo'},
  {id:2,name:'Tech Imports Ltda',cnpj:'98.765.432/0001-10',contact:'Maria Gerente',email:'maria@techimports.com',products:4,status:'ativo'},
  {id:3,name:'Fashion Supplier SA',cnpj:'11.222.333/0001-44',contact:'Carlos Vendas',email:'carlos@fashion.com',products:6,status:'inativo'},
];

const INITIAL_USERS = [
  {id:1,name:'Maria Admin',email:'maria@nexus.com',role:'admin',lastAccess:'Agora',status:'ativo'},
  {id:2,name:'João Caixa',email:'joao@nexus.com',role:'caixa',lastAccess:'Hoje 14:32',status:'ativo'},
  {id:3,name:'Pedro Estoque',email:'pedro@nexus.com',role:'estoquista',lastAccess:'Ontem 09:15',status:'ativo'},
  {id:4,name:'Lucia Gerente',email:'lucia@nexus.com',role:'gerente',lastAccess:'Hoje 11:00',status:'ativo'},
];

const ROLES = {
  admin:     {label:'Administrador', color:'chip-blue',   perms:['PDV','Estoque','Produtos','Vendas','Clientes','Usuários','Configurações','NF-e','Editor']},
  gerente:   {label:'Gerente',       color:'chip-green',  perms:['PDV','Estoque','Produtos','Vendas','Clientes','Relatórios']},
  caixa:     {label:'Op. de Caixa',  color:'chip-amber',  perms:['PDV','Histórico de Vendas']},
  estoquista:{label:'Estoquista',    color:'chip-gray',   perms:['Estoque','Produtos','Movimentações']},
};

const PEDIDOS = [
  {id:'#E-001',client:'Ana Souza',date:'2024-01-15 10:22',items:3,total:329.90,status:'pendente',payment:'PIX'},
  {id:'#E-002',client:'Marcos Lima',date:'2024-01-15 09:45',items:1,total:149.90,status:'processando',payment:'Cartão'},
  {id:'#E-003',client:'Julia Rocha',date:'2024-01-15 08:30',items:5,total:599.80,status:'enviado',payment:'PIX'},
  {id:'#E-004',client:'Bruno Silva',date:'2024-01-14 16:15',items:2,total:269.80,status:'entregue',payment:'Dinheiro'},
  {id:'#E-005',client:'Carla Mendes',date:'2024-01-14 14:00',items:1,total:89.90,status:'cancelado',payment:'Crédito'},
];

// ── STATE ──────────────────────────────────────
let state = {
  products: JSON.parse(localStorage.getItem('nx_products') || JSON.stringify(INITIAL_PRODUCTS)),
  clients:  JSON.parse(localStorage.getItem('nx_clients')  || JSON.stringify(INITIAL_CLIENTS)),
  suppliers:JSON.parse(localStorage.getItem('nx_suppliers')|| JSON.stringify(INITIAL_SUPPLIERS)),
  users:    JSON.parse(localStorage.getItem('nx_users')    || JSON.stringify(INITIAL_USERS)),
  movements:JSON.parse(localStorage.getItem('nx_movements')|| '[]'),
  sales:    JSON.parse(localStorage.getItem('nx_sales')    || '[]'),
  cart:     [],
  paymentMethod: 'dinheiro',
  currentPage: 'dashboard',
  nextProductId: null,
};
state.nextProductId = state.products.reduce((m,p)=>Math.max(m,p.id),0)+1;

// ── PERSISTENCE ──────────────────────────────
function saveState() {
  localStorage.setItem('nx_products',  JSON.stringify(state.products));
  localStorage.setItem('nx_clients',   JSON.stringify(state.clients));
  localStorage.setItem('nx_suppliers', JSON.stringify(state.suppliers));
  localStorage.setItem('nx_users',     JSON.stringify(state.users));
  localStorage.setItem('nx_movements', JSON.stringify(state.movements.slice(-500)));
  localStorage.setItem('nx_sales',     JSON.stringify(state.sales.slice(-200)));
}

/* ═══════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════ */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>{
    if(n.getAttribute('onclick')&&n.getAttribute('onclick').includes("'"+page+"'")) n.classList.add('active');
  });
  document.getElementById('page-title').textContent = {
    dashboard:'Dashboard',pdv:'PDV — Ponto de Venda',estoque:'Gestão de Estoque',
    produtos:'Cadastro de Produtos',vendas:'Histórico de Vendas',ecommerce:'E-commerce',
    pedidos:'Central de Pedidos',fornecedores:'Fornecedores',clientes:'Clientes',
    editor:'Editor Visual do Site',usuarios:'Usuários & Permissões',nfe:'Importar NF-e',
  }[page]||page;
  state.currentPage = page;
  const main = document.querySelector('.main .content');
  const pdvPage = document.getElementById('page-pdv');
  if(page==='pdv'){
    main.style.padding='0';
    document.getElementById('badge-pdv').style.display='inline-block';
  } else {
    main.style.padding='24px';
    document.getElementById('badge-pdv').style.display='none';
  }
  renderPage(page);
}

function renderPage(page) {
  switch(page){
    case 'dashboard':   renderDashboard(); break;
    case 'pdv':         renderPDV(); break;
    case 'estoque':     renderEstoque(); break;
    case 'produtos':    renderProductTable(); break;
    case 'vendas':      renderVendas(); break;
    case 'ecommerce':   renderEcommerce(); break;
    case 'pedidos':     renderPedidos(); break;
    case 'fornecedores':renderFornecedores(); break;
    case 'clientes':    renderClientes(); break;
    case 'editor':      renderEditor(); break;
    case 'usuarios':    renderUsuarios(); break;
    case 'nfe':         renderNFe(); break;
  }
}

/* ═══════════════════════════════════════════════
   DASHBOARD
═══════════════════════════════════════════════ */
function renderDashboard() {
  const now = new Date();
  document.getElementById('current-date').textContent = now.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

  const todaySales = state.sales.filter(s=>isToday(s.date));
  const totalFat = todaySales.reduce((s,v)=>s+v.total,0);
  const ticket = todaySales.length ? totalFat/todaySales.length : 0;
  const lowStock = state.products.filter(p=>p.stock>0&&p.stock<=p.minStock).length;
  const zeroStock = state.products.filter(p=>p.stock===0).length;

  document.getElementById('m-faturamento').textContent = fmtMoney(totalFat);
  document.getElementById('m-fat-sub').textContent = `${todaySales.length} venda${todaySales.length!==1?'s':''} realizadas`;
  document.getElementById('m-ticket').textContent = fmtMoney(ticket);
  document.getElementById('m-estoque').textContent = state.products.length;
  document.getElementById('m-est-sub').textContent = `${state.products.reduce((s,p)=>s+p.stock,0)} unidades em estoque`;
  if(lowStock+zeroStock>0){
    document.getElementById('m-est-trend').innerHTML = `<span class="trend-down">⚠ ${lowStock+zeroStock} alertas</span>`;
    document.getElementById('badge-estoque').style.display='inline-block';
    document.getElementById('badge-estoque').textContent=lowStock+zeroStock;
  }

  renderHourlyChart();
  renderAlertsWidget();
  renderTopProducts();
  renderRecentSales();
  renderEditorPreviewProducts();
}

function renderHourlyChart() {
  const data = [0,0,0,0,0,0,0,0,3,12,18,24,19,28,22,30,25,20,18,12,8,5,3,1];
  const todaySales = state.sales.filter(s=>isToday(s.date));
  todaySales.forEach(s=>{
    const h = new Date(s.date).getHours();
    data[h] += s.total/50;
  });
  const max = Math.max(...data,1);
  const hours = Array.from({length:24},(_,i)=>i);
  const nowH = new Date().getHours();
  document.getElementById('hourly-chart').innerHTML = hours.map((h,i)=>`
    <div class="chart-bar" style="height:${Math.max(4,(data[i]/max)*100)}%;background:${i<=nowH?'var(--accent)':'var(--surface)'}" title="${h}h: R$ ${(data[i]*50).toFixed(0)}"></div>
  `).join('');
  const showHours = [0,6,12,18,23];
  document.getElementById('hourly-labels').innerHTML = hours.map((h,i)=>`
    <div class="chart-label">${showHours.includes(i)?h+'h':''}</div>
  `).join('');
}

function renderAlertsWidget() {
  const alerts = [];
  const zero = state.products.filter(p=>p.stock===0);
  const low  = state.products.filter(p=>p.stock>0&&p.stock<=p.minStock);
  zero.forEach(p=>alerts.push({type:'danger',text:`${p.emoji} ${p.name} — SEM ESTOQUE`}));
  low.forEach(p=>alerts.push({type:'warning',text:`${p.emoji} ${p.name} — Estoque baixo: ${p.stock} un.`}));
  if(!alerts.length) alerts.push({type:'success',text:'✅ Todos os produtos com estoque adequado'});
  alerts.push({type:'info',text:`📬 3 pedidos aguardando processamento`});
  document.getElementById('alerts-container').innerHTML = alerts.slice(0,5).map(a=>`
    <div class="alert alert-${a.type}">${a.text}</div>
  `).join('');
}

function renderTopProducts() {
  const sold = {};
  state.sales.filter(s=>isToday(s.date)).forEach(sale=>{
    sale.items.forEach(item=>{
      sold[item.id]=(sold[item.id]||0)+item.qty;
    });
  });
  const top = Object.entries(sold).sort((a,b)=>b[1]-a[1]).slice(0,5);
  if(!top.length){
    document.getElementById('top-products').innerHTML=`<div class="empty-state"><div class="empty-icon">📊</div><div class="empty-text">Nenhuma venda hoje ainda</div></div>`;
    return;
  }
  document.getElementById('top-products').innerHTML = top.map(([id,qty])=>{
    const p = state.products.find(x=>x.id==id);
    if(!p) return '';
    return `<div class="stock-item-row">
      <div class="stock-emoji">${p.emoji}</div>
      <div class="stock-info"><div class="stock-name">${p.name}</div><div class="stock-sku">${qty} unidade${qty!==1?'s':''} vendida${qty!==1?'s':''}</div></div>
      <div style="font-family:var(--font-mono);font-size:13px;color:var(--green)">${fmtMoney(p.price*qty)}</div>
    </div>`;
  }).join('');
}

function renderRecentSales() {
  const recent = state.sales.slice(-5).reverse();
  if(!recent.length){
    document.getElementById('recent-sales').innerHTML=`<div class="empty-state"><div class="empty-icon">📋</div><div class="empty-text">Nenhuma venda realizada</div></div>`;
    return;
  }
  const payIcons = {dinheiro:'💵',pix:'📱',debito:'💳',credito:'💳'};
  document.getElementById('recent-sales').innerHTML = recent.map(s=>`
    <div class="stock-item-row">
      <div style="font-size:20px">${payIcons[s.payment]||'💰'}</div>
      <div class="stock-info">
        <div class="stock-name">#${s.id} · ${s.items.length} ite${s.items.length!==1?'ns':'m'}</div>
        <div class="stock-sku">${new Date(s.date).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</div>
      </div>
      <div class="stock-qty" style="color:var(--green)">${fmtMoney(s.total)}</div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   PDV
═══════════════════════════════════════════════ */
function renderPDV() {
  populateCategoryFilter('pdv-cat-filter');
  filterPDVProducts('');
}

function populateCategoryFilter(id) {
  const cats = [...new Set(state.products.map(p=>p.category))];
  const el = document.getElementById(id);
  if(!el) return;
  el.innerHTML = `<option value="">Todas categorias</option>` + cats.map(c=>`<option value="${c}">${c}</option>`).join('');
}

function filterPDVProducts(q) {
  const cat = document.getElementById('pdv-cat-filter')?.value||'';
  const query = q.toLowerCase().trim();
  const filtered = state.products.filter(p=>{
    const matchQ = !query || p.name.toLowerCase().includes(query) || p.code.toLowerCase().includes(query) || p.barcode.includes(query) || p.sku.toLowerCase().includes(query);
    const matchC = !cat || p.category===cat;
    return matchQ && matchC;
  });
  document.getElementById('pdv-product-count').textContent = `${filtered.length} produto${filtered.length!==1?'s':''} encontrado${filtered.length!==1?'s':''}`;
  document.getElementById('pdv-product-grid').innerHTML = filtered.map(p=>`
    <div class="product-card-pdv ${p.stock===0?'out-of-stock':''}" onclick="${p.stock>0?`addToCart(${p.id})`:''}" title="${p.stock===0?'Sem estoque':p.name}">
      <div class="product-emoji">${p.emoji}</div>
      <div class="product-name-pdv">${p.name}</div>
      <div class="product-price-pdv">${fmtMoney(p.price)}</div>
      <div class="product-stock-pdv">Estoque: ${p.stock} un</div>
    </div>
  `).join('');
}

function filterPDVCategory(cat) {
  filterPDVProducts(document.getElementById('pdv-search-input')?.value||'');
}

function addToCart(productId) {
  const product = state.products.find(p=>p.id===productId);
  if(!product||product.stock<=0) return;
  const existing = state.cart.find(i=>i.id===productId);
  if(existing){
    if(existing.qty>=product.stock){ toast(`Estoque máximo atingido: ${product.stock} un.`,'warning'); return; }
    existing.qty++;
  } else {
    state.cart.push({id:productId,name:product.name,emoji:product.emoji,price:product.price,qty:1});
  }
  renderCart();
  toast(`${product.emoji} ${product.name} adicionado!`,'success');
}

function renderCart() {
  const list = document.getElementById('cart-items-list');
  const count = state.cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cart-count').textContent = `${count} ite${count!==1?'ns':'m'}`;
  if(!state.cart.length){
    list.innerHTML=`<div class="empty-state"><div class="empty-icon">🛒</div><div class="empty-text">Carrinho vazio<br>Clique em um produto para adicionar</div></div>`;
    updateCartTotals();
    return;
  }
  list.innerHTML = state.cart.map(item=>`
    <div class="cart-item">
      <div style="font-size:20px">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${fmtMoney(item.price)} un.</div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
      </div>
      <div class="cart-item-total">${fmtMoney(item.price*item.qty)}</div>
      <button style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:14px;padding:2px" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');
  updateCartTotals();
}

function changeQty(id, delta) {
  const item = state.cart.find(i=>i.id===id);
  if(!item) return;
  const product = state.products.find(p=>p.id===id);
  item.qty = Math.max(1, Math.min(product.stock, item.qty+delta));
  renderCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i=>i.id!==id);
  renderCart();
}

function clearCart() {
  state.cart=[];
  state.paymentMethod='dinheiro';
  document.querySelectorAll('.pay-btn').forEach(b=>b.classList.remove('selected'));
  document.querySelector('.pay-btn').classList.add('selected');
  renderCart();
}

function updateCartTotals() {
  const subtotal = state.cart.reduce((s,i)=>s+i.price*i.qty,0);
  const discountVal = parseFloat(document.getElementById('discount-input')?.value||0)||0;
  const discountType = document.getElementById('discount-type')?.value||'pct';
  let discount = discountType==='pct' ? subtotal*discountVal/100 : discountVal;
  discount = Math.min(discount, subtotal);
  const total = subtotal - discount;
  document.getElementById('cart-subtotal').textContent = fmtMoney(subtotal);
  document.getElementById('cart-total').textContent = fmtMoney(total);
  document.getElementById('checkout-total').textContent = fmtMoney(total);
  const btn = document.getElementById('checkout-btn');
  btn.disabled = state.cart.length===0||total<=0;
}

function selectPayment(method, el) {
  state.paymentMethod = method;
  document.querySelectorAll('.pay-btn').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected');
}

function finalizeSale() {
  if(!state.cart.length) return;
  const subtotal = state.cart.reduce((s,i)=>s+i.price*i.qty,0);
  const discountVal = parseFloat(document.getElementById('discount-input')?.value||0)||0;
  const discountType = document.getElementById('discount-type')?.value||'pct';
  let discount = discountType==='pct' ? subtotal*discountVal/100 : discountVal;
  discount = Math.min(discount,subtotal);
  const total = subtotal - discount;

  const saleId = state.sales.length+1;
  const sale = {
    id: saleId,
    date: new Date().toISOString(),
    items: state.cart.map(i=>({id:i.id,name:i.name,emoji:i.emoji,price:i.price,qty:i.qty})),
    subtotal, discount, total,
    payment: state.paymentMethod,
    operator: 'Maria Admin',
  };
  state.sales.push(sale);

  // Baixa no estoque + movimentação
  state.cart.forEach(item=>{
    const p = state.products.find(x=>x.id===item.id);
    if(!p) return;
    const prev = p.stock;
    p.stock = Math.max(0, p.stock - item.qty);
    state.movements.push({
      date: new Date().toISOString(),
      productId: p.id,
      productName: p.name,
      type: 'saida',
      qty: item.qty,
      prevStock: prev,
      newStock: p.stock,
      origin: `Venda PDV #${saleId}`,
      operator: 'Maria Admin',
    });
  });

  saveState();
  checkStockAlerts();
  showReceipt(sale);
  clearCart();
  filterPDVProducts(document.getElementById('pdv-search-input')?.value||'');
  document.getElementById('discount-input').value='';
  toast(`✅ Venda #${saleId} finalizada! ${fmtMoney(total)}`,'success');
}

function showReceipt(sale) {
  const payLabels = {dinheiro:'Dinheiro',pix:'PIX',debito:'Débito',credito:'Crédito'};
  document.getElementById('receipt-content').innerHTML = `
    <div class="receipt-header">
      <div style="font-size:18px;font-weight:700">NexusStore</div>
      <div style="font-size:10px">Rua das Flores, 123 · São Paulo/SP</div>
      <div style="font-size:10px">CNPJ: 00.000.000/0001-00</div>
      <div style="font-size:11px;margin-top:8px">CUPOM NÃO FISCAL</div>
    </div>
    <div class="receipt-row"><span>Venda</span><span>#${sale.id}</span></div>
    <div class="receipt-row"><span>Data</span><span>${new Date(sale.date).toLocaleString('pt-BR')}</span></div>
    <div class="receipt-row"><span>Operador</span><span>${sale.operator}</span></div>
    <hr style="border:none;border-top:1px dashed #ccc;margin:8px 0">
    ${sale.items.map(i=>`
      <div class="receipt-row">
        <span>${i.emoji} ${i.name} x${i.qty}</span>
        <span>${fmtMoney(i.price*i.qty)}</span>
      </div>
    `).join('')}
    <hr style="border:none;border-top:1px dashed #ccc;margin:8px 0">
    <div class="receipt-row"><span>Subtotal</span><span>${fmtMoney(sale.subtotal)}</span></div>
    ${sale.discount>0?`<div class="receipt-row"><span>Desconto</span><span>- ${fmtMoney(sale.discount)}</span></div>`:''}
    <div class="receipt-row receipt-total"><span>TOTAL</span><span>${fmtMoney(sale.total)}</span></div>
    <hr style="border:none;border-top:1px dashed #ccc;margin:8px 0">
    <div class="receipt-row"><span>Forma de Pagamento</span><span>${payLabels[sale.payment]||sale.payment}</span></div>
    <div style="text-align:center;margin-top:12px;font-size:10px">Obrigado pela preferência! 😊</div>
    <div style="text-align:center;font-size:9px;color:#999">NexusERP v1.0</div>
  `;
  openModal('modal-recibo');
}

function printReceipt() {
  const content = document.getElementById('receipt-content').innerHTML;
  const w = window.open('','','width=380,height=600');
  w.document.write(`<html><head><title>Comprovante</title><style>body{font-family:monospace;font-size:12px;padding:20px;}.receipt-row{display:flex;justify-content:space-between;}.receipt-total{font-weight:bold;font-size:14px;padding-top:8px;border-top:1px dashed #ccc;}</style></head><body>${content}</body></html>`);
  w.document.close();
  w.print();
}

/* ═══════════════════════════════════════════════
   ESTOQUE
═══════════════════════════════════════════════ */
function renderEstoque() {
  updateEstoqueMetrics();
  populateCategoryFilter('est-filter-cat');
  fillAdjustSelects();
  renderEstoqueTable();
  renderMovimentacoes();
  renderAlertasEstoque();
}

function updateEstoqueMetrics() {
  const total = state.products.reduce((s,p)=>s+p.stock,0);
  const valor = state.products.reduce((s,p)=>s+p.stock*p.cost,0);
  const low   = state.products.filter(p=>p.stock>0&&p.stock<=p.minStock).length;
  const zero  = state.products.filter(p=>p.stock===0).length;
  document.getElementById('est-total-itens').textContent = total;
  document.getElementById('est-valor').textContent = fmtMoneyK(valor);
  document.getElementById('est-low').textContent = low;
  document.getElementById('est-zero').textContent = zero;
}

function renderEstoqueTable(filtered) {
  const prods = filtered || state.products;
  document.getElementById('estoque-tbody').innerHTML = prods.map(p=>{
    const pct = p.minStock>0 ? Math.min(100, (p.stock/p.minStock)*100) : 100;
    const status = p.stock===0 ? 'red' : p.stock<=p.minStock ? 'amber' : 'green';
    const statusLabel = p.stock===0 ? 'Esgotado' : p.stock<=p.minStock ? 'Baixo' : 'Normal';
    const barColor = {red:'var(--red)',amber:'var(--amber)',green:'var(--green)'}[status];
    const margin = p.cost>0 ? (((p.price-p.cost)/p.cost)*100).toFixed(0) : 0;
    return `<tr>
      <td style="font-size:20px">${p.emoji}</td>
      <td style="font-weight:500;color:var(--text)">${p.name}<br><span style="font-size:10px;color:var(--text3)">${p.sku}</span></td>
      <td style="font-family:var(--font-mono);font-size:11px">${p.code}</td>
      <td><span class="tag tag-cat">${p.category}</span></td>
      <td>
        <div style="font-family:var(--font-mono);font-size:14px;font-weight:600;color:var(--text)">${p.stock}</div>
        <div class="progress-bar" style="width:70px"><div class="progress-fill" style="width:${pct}%;background:${barColor}"></div></div>
      </td>
      <td style="font-family:var(--font-mono)">${p.minStock}</td>
      <td><span class="chip chip-${status==='green'?'green':status==='amber'?'amber':'red'}">${statusLabel}</span></td>
      <td style="font-family:var(--font-mono)">${fmtMoney(p.cost)}</td>
      <td style="font-family:var(--font-mono)">${fmtMoney(p.price)}</td>
      <td>
        <div style="display:flex;gap:4px">
          <button class="btn btn-ghost btn-sm" onclick="openEditProduct(${p.id})">✏️</button>
          <button class="btn btn-success btn-sm" onclick="quickEntry(${p.id})">+</button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

function filterEstoque() {
  const q = document.getElementById('est-search').value.toLowerCase();
  const cat = document.getElementById('est-filter-cat').value;
  const status = document.getElementById('est-filter-status').value;
  const filtered = state.products.filter(p=>{
    const mQ = !q||p.name.toLowerCase().includes(q)||p.sku.toLowerCase().includes(q)||p.code.toLowerCase().includes(q);
    const mC = !cat||p.category===cat;
    const mS = !status || (status==='low'&&p.stock>0&&p.stock<=p.minStock) || (status==='zero'&&p.stock===0) || (status==='ok'&&p.stock>p.minStock);
    return mQ&&mC&&mS;
  });
  renderEstoqueTable(filtered);
}

function renderMovimentacoes() {
  const tbody = document.getElementById('mov-tbody');
  if(!tbody) return;
  const movs = state.movements.slice().reverse();
  if(!movs.length){
    tbody.innerHTML=`<tr><td colspan="8" style="text-align:center;padding:40px;color:var(--text3)">Nenhuma movimentação registrada</td></tr>`;
    return;
  }
  const typeLabel = {entrada:'<span class="chip chip-green">↑ Entrada</span>',saida:'<span class="chip chip-red">↓ Saída</span>',ajuste:'<span class="chip chip-amber">⚖ Ajuste</span>'};
  tbody.innerHTML = movs.map(m=>`<tr>
    <td style="font-family:var(--font-mono);font-size:11px">${new Date(m.date).toLocaleString('pt-BR')}</td>
    <td style="color:var(--text)">${m.productName}</td>
    <td>${typeLabel[m.type]||m.type}</td>
    <td style="font-family:var(--font-mono);font-weight:600;color:${m.type==='entrada'?'var(--green)':'var(--red)'}">${m.type==='entrada'?'+':'-'}${m.qty}</td>
    <td style="font-family:var(--font-mono)">${m.prevStock}</td>
    <td style="font-family:var(--font-mono)">${m.newStock}</td>
    <td style="font-size:11px;color:var(--text2)">${m.origin}</td>
    <td style="font-size:11px">${m.operator}</td>
  </tr>`).join('');
}

function renderAlertasEstoque() {
  const el = document.getElementById('alertas-lista');
  if(!el) return;
  const zero = state.products.filter(p=>p.stock===0);
  const low  = state.products.filter(p=>p.stock>0&&p.stock<=p.minStock);
  let html='';
  if(zero.length) html += `<h3 style="font-family:var(--font-head);font-size:14px;margin-bottom:10px;color:var(--red)">🚨 Sem Estoque (${zero.length})</h3>`;
  zero.forEach(p=>{html+=`<div class="alert alert-danger">${p.emoji} <strong>${p.name}</strong> — Estoque zerado! <button class="btn btn-ghost btn-sm" style="margin-left:auto" onclick="quickEntry(${p.id})">+ Repor</button></div>`;});
  if(low.length) html += `<h3 style="font-family:var(--font-head);font-size:14px;margin:16px 0 10px;color:var(--amber)">⚠️ Estoque Baixo (${low.length})</h3>`;
  low.forEach(p=>{html+=`<div class="alert alert-warning">${p.emoji} <strong>${p.name}</strong> — Apenas ${p.stock} un. (mínimo: ${p.minStock}) <button class="btn btn-ghost btn-sm" style="margin-left:auto" onclick="quickEntry(${p.id})">+ Repor</button></div>`;});
  if(!zero.length&&!low.length) html=`<div class="alert alert-success">✅ Nenhum produto com problema de estoque</div>`;
  el.innerHTML=html;
}

function fillAdjustSelects() {
  const opts = state.products.map(p=>`<option value="${p.id}">${p.emoji} ${p.name} (${p.stock} un.)</option>`).join('');
  ['adj-product-in','adj-product-out'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.innerHTML=`<option value="">Selecionar produto...</option>`+opts;
  });
}

function doStockEntry() {
  const pid = parseInt(document.getElementById('adj-product-in').value);
  const qty = parseInt(document.getElementById('adj-qty-in').value)||0;
  const reason = document.getElementById('adj-reason-in').value;
  const obs = document.getElementById('adj-obs-in').value;
  if(!pid||qty<=0){toast('Selecione um produto e informe a quantidade.','warning');return;}
  const p = state.products.find(x=>x.id===pid);
  if(!p) return;
  const prev=p.stock;
  p.stock+=qty;
  state.movements.push({date:new Date().toISOString(),productId:p.id,productName:p.name,type:'entrada',qty,prevStock:prev,newStock:p.stock,origin:reason+(obs?' — '+obs:''),operator:'Maria Admin'});
  saveState();
  document.getElementById('adj-qty-in').value='';
  document.getElementById('adj-obs-in').value='';
  renderEstoque();
  toast(`✅ Entrada de ${qty} un. de "${p.name}" registrada!`,'success');
}

function doStockExit() {
  const pid = parseInt(document.getElementById('adj-product-out').value);
  const qty = parseInt(document.getElementById('adj-qty-out').value)||0;
  const reason = document.getElementById('adj-reason-out').value;
  if(!pid||qty<=0){toast('Selecione um produto e informe a quantidade.','warning');return;}
  const p = state.products.find(x=>x.id===pid);
  if(!p) return;
  if(qty>p.stock){toast(`Estoque insuficiente. Disponível: ${p.stock} un.`,'warning');return;}
  const prev=p.stock;
  p.stock-=qty;
  state.movements.push({date:new Date().toISOString(),productId:p.id,productName:p.name,type:'saida',qty,prevStock:prev,newStock:p.stock,origin:reason,operator:'Maria Admin'});
  saveState();
  document.getElementById('adj-qty-out').value='';
  renderEstoque();
  toast(`⬇️ Saída de ${qty} un. de "${p.name}" registrada!`,'success');
}

function quickEntry(productId) {
  const p = state.products.find(x=>x.id===productId);
  if(!p) return;
  const qty = parseInt(prompt(`Quantas unidades deseja adicionar ao estoque de "${p.name}"?\nEstoque atual: ${p.stock}`)||0);
  if(!qty||qty<=0) return;
  const prev=p.stock;
  p.stock+=qty;
  state.movements.push({date:new Date().toISOString(),productId:p.id,productName:p.name,type:'entrada',qty,prevStock:prev,newStock:p.stock,origin:'Entrada manual rápida',operator:'Maria Admin'});
  saveState();
  if(state.currentPage==='estoque') renderEstoque();
  if(state.currentPage==='dashboard') renderDashboard();
  toast(`✅ +${qty} un. adicionadas a "${p.name}"`,'success');
}

function showEstoqueTab(tab, el) {
  ['lista','movimentacoes','ajuste','alertas'].forEach(t=>{
    document.getElementById('est-tab-'+t).style.display = t===tab?'block':'none';
  });
  document.querySelectorAll('#estoque-tabs .tab').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
}

function checkStockAlerts() {
  const low = state.products.filter(p=>p.stock>0&&p.stock<=p.minStock).length;
  const zero = state.products.filter(p=>p.stock===0).length;
  const total = low+zero;
  const badge = document.getElementById('badge-estoque');
  if(total>0){ badge.style.display='inline-block'; badge.textContent=total; }
  else badge.style.display='none';
}

/* ═══════════════════════════════════════════════
   PRODUTOS
═══════════════════════════════════════════════ */
function renderProductTable(filtered) {
  const prods = filtered || state.products;
  document.getElementById('produtos-tbody').innerHTML = prods.map(p=>{
    const margin = p.cost>0?(((p.price-p.cost)/p.cost)*100).toFixed(0):0;
    return `<tr>
      <td style="font-size:22px">${p.emoji}</td>
      <td style="font-weight:500;color:var(--text)">${p.name}</td>
      <td style="font-family:var(--font-mono);font-size:11px">${p.code}</td>
      <td style="font-family:var(--font-mono);font-size:11px">${p.barcode}</td>
      <td><span class="tag tag-cat">${p.category}</span></td>
      <td><span class="tag tag-brand">${p.brand}</span></td>
      <td style="font-family:var(--font-mono)">${fmtMoney(p.cost)}</td>
      <td style="font-family:var(--font-mono);color:var(--accent2)">${fmtMoney(p.price)}</td>
      <td><span class="chip ${margin>=50?'chip-green':margin>=20?'chip-amber':'chip-red'}">${margin}%</span></td>
      <td>
        <div style="display:flex;gap:4px">
          <button class="btn btn-ghost btn-sm" onclick="openEditProduct(${p.id})">✏️ Editar</button>
          <button class="btn btn-danger btn-sm" onclick="deleteProduct(${p.id})">🗑</button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

function filterProducts(q) {
  const filtered = state.products.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())||p.code.toLowerCase().includes(q.toLowerCase())||p.sku.toLowerCase().includes(q.toLowerCase()));
  renderProductTable(filtered);
}

function openAddProduct() {
  document.getElementById('modal-produto-title').textContent='Novo Produto';
  document.getElementById('edit-product-id').value='';
  ['p-nome','p-codigo','p-barcode','p-sku','p-marca','p-descricao'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('p-emoji').value='📦';
  document.getElementById('p-custo').value='';
  document.getElementById('p-venda').value='';
  document.getElementById('p-estoque').value='0';
  document.getElementById('p-minimo').value='5';
  openModal('modal-produto');
}

function openEditProduct(id) {
  const p = state.products.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('modal-produto-title').textContent='Editar Produto';
  document.getElementById('edit-product-id').value=id;
  document.getElementById('p-nome').value=p.name;
  document.getElementById('p-emoji').value=p.emoji;
  document.getElementById('p-codigo').value=p.code;
  document.getElementById('p-barcode').value=p.barcode;
  document.getElementById('p-sku').value=p.sku;
  document.getElementById('p-categoria').value=p.category;
  document.getElementById('p-marca').value=p.brand;
  document.getElementById('p-custo').value=p.cost;
  document.getElementById('p-venda').value=p.price;
  document.getElementById('p-estoque').value=p.stock;
  document.getElementById('p-minimo').value=p.minStock;
  document.getElementById('p-descricao').value=p.desc;
  calcMargin();
  openModal('modal-produto');
}

function calcMargin() {
  const cost = parseFloat(document.getElementById('p-custo').value)||0;
  const price = parseFloat(document.getElementById('p-venda').value)||0;
  if(cost>0&&price>0){
    const m=(((price-cost)/cost)*100).toFixed(1);
    document.getElementById('p-margem').value=m+'% — Lucro: '+fmtMoney(price-cost);
  } else {
    document.getElementById('p-margem').value='—';
  }
}

document.getElementById('p-custo').addEventListener('input',calcMargin);
document.getElementById('p-venda').addEventListener('input',calcMargin);

function saveProduct() {
  const name = document.getElementById('p-nome').value.trim();
  const cost = parseFloat(document.getElementById('p-custo').value)||0;
  const price = parseFloat(document.getElementById('p-venda').value)||0;
  if(!name||cost<=0||price<=0){toast('Preencha: Nome, Custo e Preço de Venda.','warning');return;}

  const editId = parseInt(document.getElementById('edit-product-id').value)||0;
  const product = {
    id: editId||state.nextProductId++,
    name, emoji: document.getElementById('p-emoji').value||'📦',
    code: document.getElementById('p-codigo').value||`PROD-${String(state.nextProductId-1).padStart(3,'0')}`,
    barcode: document.getElementById('p-barcode').value||'',
    sku: document.getElementById('p-sku').value||'',
    category: document.getElementById('p-categoria').value,
    brand: document.getElementById('p-marca').value||'—',
    cost, price,
    stock: parseInt(document.getElementById('p-estoque').value)||0,
    minStock: parseInt(document.getElementById('p-minimo').value)||5,
    desc: document.getElementById('p-descricao').value,
  };

  if(editId) {
    const idx=state.products.findIndex(p=>p.id===editId);
    if(idx>=0) state.products[idx]=product;
    toast(`✅ "${name}" atualizado!`,'success');
  } else {
    state.products.push(product);
    toast(`✅ "${name}" cadastrado!`,'success');
  }
  saveState();
  closeModal('modal-produto');
  renderPage(state.currentPage);
}

function deleteProduct(id) {
  const p=state.products.find(x=>x.id===id);
  if(!p) return;
  if(!confirm(`Excluir "${p.name}"?`)) return;
  state.products=state.products.filter(x=>x.id!==id);
  saveState();
  renderPage(state.currentPage);
  toast(`🗑 "${p.name}" excluído.`,'info');
}

/* ═══════════════════════════════════════════════
   VENDAS
═══════════════════════════════════════════════ */
function renderVendas() {
  const payIcons={dinheiro:'💵',pix:'📱',debito:'💳',credito:'💳'};
  const tbody=document.getElementById('vendas-tbody');
  const sales=state.sales.slice().reverse();
  if(!sales.length){
    tbody.innerHTML=`<tr><td colspan="9" style="text-align:center;padding:40px;color:var(--text3)">Nenhuma venda registrada</td></tr>`;
    return;
  }
  tbody.innerHTML=sales.map(s=>`<tr>
    <td style="font-family:var(--font-mono);color:var(--accent2)">#${s.id}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${new Date(s.date).toLocaleString('pt-BR')}</td>
    <td style="font-size:12px">${s.items.map(i=>`${i.emoji}×${i.qty}`).join(' ')}</td>
    <td style="font-family:var(--font-mono)">${fmtMoney(s.subtotal)}</td>
    <td style="font-family:var(--font-mono);color:var(--red)">${s.discount>0?'- '+fmtMoney(s.discount):'-'}</td>
    <td style="font-family:var(--font-mono);font-weight:600;color:var(--green)">${fmtMoney(s.total)}</td>
    <td>${payIcons[s.payment]||'💰'} <span style="font-size:11px">${s.payment}</span></td>
    <td style="font-size:11px">${s.operator}</td>
    <td><button class="btn btn-ghost btn-sm" onclick="showReceiptById(${s.id})">🧾</button></td>
  </tr>`).join('');
}

function showReceiptById(id) {
  const sale=state.sales.find(s=>s.id===id);
  if(sale) showReceipt(sale);
}

/* ═══════════════════════════════════════════════
   E-COMMERCE
═══════════════════════════════════════════════ */
function renderEcommerce() {
  const catSel=document.getElementById('ecom-cat');
  if(catSel){
    const cats=[...new Set(state.products.map(p=>p.category))];
    catSel.innerHTML=`<option value="">Todas Categorias</option>`+cats.map(c=>`<option>${c}</option>`).join('');
  }
  filterEcom();
  renderPedidosOnline();
  renderClientesOnline();
  renderEditorPreviewProducts();
}

function filterEcom(q) {
  const query=(q||document.getElementById('ecom-search')?.value||'').toLowerCase();
  const cat=document.getElementById('ecom-cat')?.value||'';
  const filtered=state.products.filter(p=>
    (!query||p.name.toLowerCase().includes(query))&&
    (!cat||p.category===cat)
  );
  document.getElementById('shop-grid').innerHTML=filtered.map(p=>`
    <div class="shop-card">
      <div class="shop-img">${p.emoji}</div>
      <div class="shop-info">
        <div class="shop-name">${p.name}</div>
        <div style="display:flex;gap:4px;margin:4px 0">
          <span class="tag tag-cat">${p.category}</span>
          <span class="tag tag-brand">${p.brand}</span>
        </div>
        <div class="shop-price">${fmtMoney(p.price)}</div>
        <div class="shop-stock ${p.stock===0?'':''}">
          ${p.stock===0?'<span style="color:var(--red)">⚠ Sem estoque</span>':p.stock<=p.minStock?`<span style="color:var(--amber)">⚠ Últimas ${p.stock} un.</span>`:`<span style="color:var(--green)">✓ ${p.stock} disponíveis</span>`}
        </div>
        <button class="btn btn-primary btn-sm" style="width:100%;margin-top:8px;${p.stock===0?'opacity:0.4;cursor:not-allowed':''}" ${p.stock===0?'disabled':''} onclick="toast('Produto adicionado ao carrinho online!','success')">
          ${p.stock===0?'Esgotado':'🛒 Comprar'}
        </button>
      </div>
    </div>
  `).join('');
}

function renderPedidosOnline() {
  const statusColors={pendente:'chip-amber',processando:'chip-blue',enviado:'chip-cyan',entregue:'chip-green',cancelado:'chip-red'};
  const tbody=document.getElementById('pedidos-online-tbody');
  if(!tbody) return;
  tbody.innerHTML=PEDIDOS.map(p=>`<tr>
    <td style="font-family:var(--font-mono);color:var(--accent2)">${p.id}</td>
    <td>${p.client}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${p.date}</td>
    <td style="text-align:center">${p.items}</td>
    <td style="font-family:var(--font-mono);color:var(--green)">${fmtMoney(p.total)}</td>
    <td><span class="chip ${statusColors[p.status]||'chip-gray'}">${p.status}</span></td>
    <td>${p.payment}</td>
    <td><button class="btn btn-ghost btn-sm" onclick="processOrder('${p.id}')">Processar</button></td>
  </tr>`).join('');
}

function renderClientesOnline() {
  const el=document.getElementById('clientes-list');
  if(!el) return;
  el.innerHTML=state.clients.map(c=>`
    <div class="card" style="margin-bottom:10px;padding:12px">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:40px;height:40px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff">${c.name.charAt(0)}</div>
        <div style="flex:1">
          <div style="font-weight:500;color:var(--text)">${c.name}</div>
          <div style="font-size:11px;color:var(--text3)">${c.email} · ${c.city}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:var(--font-mono);font-weight:600;color:var(--green)">${fmtMoney(c.total)}</div>
          <div style="font-size:10px;color:var(--text3)">${c.purchases} compras</div>
        </div>
      </div>
    </div>
  `).join('');
}

function processOrder(id) {
  toast(`Pedido ${id} marcado como processando!`,'success');
}

function showEcomTab(tab,el) {
  ['loja','pedidos-online','clientes-online','config-loja'].forEach(t=>{
    const el2=document.getElementById('ecom-tab-'+t);
    if(el2) el2.style.display=t===tab?'block':'none';
  });
  document.querySelectorAll('#page-ecommerce .tabs .tab').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
}

/* ═══════════════════════════════════════════════
   PEDIDOS KANBAN
═══════════════════════════════════════════════ */
function renderPedidos() {
  const cols={
    pendente:  {label:'📋 Pendentes',  color:'var(--amber)',  items:[]},
    processando:{label:'⚙️ Processando',color:'var(--accent2)',items:[]},
    enviado:   {label:'🚚 Enviados',   color:'var(--cyan)',   items:[]},
    entregue:  {label:'✅ Entregues',  color:'var(--green)',  items:[]},
  };
  PEDIDOS.forEach(p=>{ if(cols[p.status]) cols[p.status].items.push(p); });
  document.getElementById('pedidos-kanban').innerHTML=Object.entries(cols).map(([key,col])=>`
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);overflow:hidden">
      <div style="padding:12px 14px;border-bottom:1px solid var(--border);background:var(--bg3);display:flex;align-items:center;justify-content:space-between">
        <div style="font-size:13px;font-weight:600">${col.label}</div>
        <div style="background:${col.color};color:var(--bg);width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700">${col.items.length}</div>
      </div>
      <div style="padding:10px;display:flex;flex-direction:column;gap:8px">
        ${col.items.map(p=>`
          <div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:10px;cursor:pointer" onclick="toast('Pedido ${p.id} — ${p.client}','info')">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
              <div style="font-family:var(--font-mono);font-size:11px;color:var(--accent2)">${p.id}</div>
              <div style="font-family:var(--font-mono);font-size:12px;font-weight:600;color:var(--green)">${fmtMoney(p.total)}</div>
            </div>
            <div style="font-size:12px;font-weight:500;color:var(--text)">${p.client}</div>
            <div style="font-size:10px;color:var(--text3);margin-top:3px">${p.items} iten${p.items!==1?'s':''} · ${p.payment}</div>
          </div>
        `).join('')}
        ${!col.items.length?`<div style="text-align:center;padding:20px;color:var(--text3);font-size:11px">Nenhum pedido</div>`:''}
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   FORNECEDORES & CLIENTES
═══════════════════════════════════════════════ */
function renderFornecedores() {
  document.getElementById('fornec-tbody').innerHTML=state.suppliers.map(s=>`<tr>
    <td style="font-weight:500;color:var(--text)">${s.name}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${s.cnpj}</td>
    <td>${s.contact}</td>
    <td style="color:var(--accent2)">${s.email}</td>
    <td>${s.products} produtos</td>
    <td><span class="chip ${s.status==='ativo'?'chip-green':'chip-gray'}">${s.status}</span></td>
    <td><button class="btn btn-ghost btn-sm" onclick="toast('Editando ${s.name}','info')">✏️</button></td>
  </tr>`).join('');
}

function openAddSupplier() {
  toast('Modal de fornecedor — implemente conforme necessário','info');
}

function renderClientes(filtered) {
  const clients=filtered||state.clients;
  document.getElementById('clientes-tbody').innerHTML=clients.map(c=>`<tr>
    <td style="font-weight:500;color:var(--text)">${c.name}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${c.cpf}</td>
    <td style="color:var(--accent2)">${c.email}</td>
    <td style="font-family:var(--font-mono)">${c.phone}</td>
    <td>${c.city}</td>
    <td style="text-align:center">${c.purchases}</td>
    <td style="font-family:var(--font-mono);color:var(--green)">${fmtMoney(c.total)}</td>
    <td><button class="btn btn-ghost btn-sm" onclick="toast('Editando ${c.name}','info')">✏️</button></td>
  </tr>`).join('');
}

function filterClientes(q) {
  const filtered=state.clients.filter(c=>c.name.toLowerCase().includes(q.toLowerCase())||c.email.toLowerCase().includes(q.toLowerCase()));
  renderClientes(filtered);
}

function openAddClient() {
  toast('Modal de cliente — implemente conforme necessário','info');
}

/* ═══════════════════════════════════════════════
   EDITOR
═══════════════════════════════════════════════ */
function renderEditor() { renderEditorPreviewProducts(); }

function renderEditorPreviewProducts() {
  const grid=document.getElementById('prev-products-grid');
  if(!grid) return;
  const featured=state.products.filter(p=>p.stock>0).slice(0,4);
  grid.innerHTML=featured.map(p=>`
    <div style="border:1px solid #eee;border-radius:8px;overflow:hidden;cursor:pointer">
      <div style="height:80px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;font-size:32px">${p.emoji}</div>
      <div style="padding:8px">
        <div style="font-size:11px;font-weight:600;color:#111;margin-bottom:2px">${p.name}</div>
        <div style="font-size:12px;font-weight:700;color:#5B6BFF">${fmtMoney(p.price)}</div>
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   USUÁRIOS
═══════════════════════════════════════════════ */
function renderUsuarios() {
  document.getElementById('users-tbody').innerHTML=state.users.map(u=>{
    const r=ROLES[u.role];
    return `<tr>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">${u.name.charAt(0)}</div>
          ${u.name}
        </div>
      </td>
      <td style="font-size:12px;color:var(--accent2)">${u.email}</td>
      <td><span class="chip ${r?.color||'chip-gray'}">${r?.label||u.role}</span></td>
      <td style="font-size:11px;color:var(--text3)">${u.lastAccess}</td>
      <td><span class="chip ${u.status==='ativo'?'chip-green':'chip-red'}">${u.status}</span></td>
      <td><button class="btn btn-ghost btn-sm" onclick="toast('Editando ${u.name}','info')">✏️</button></td>
    </tr>`;
  }).join('');

  document.getElementById('perfis-container').innerHTML=Object.entries(ROLES).map(([key,r])=>`
    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <div style="font-weight:600;font-size:13px">${r.label}</div>
        <span class="chip ${r.color}">${key}</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px">
        ${r.perms.map(p=>`<span style="font-size:10px;background:var(--surface2);color:var(--text3);padding:2px 7px;border-radius:20px">${p}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function openAddUser() { openModal('modal-usuario'); }
function saveUser() {
  const name=document.getElementById('u-nome').value.trim();
  const email=document.getElementById('u-email').value.trim();
  const role=document.getElementById('u-perfil').value;
  if(!name||!email){toast('Preencha nome e email.','warning');return;}
  state.users.push({id:state.users.length+1,name,email,role,lastAccess:'Nunca',status:'ativo'});
  saveState();
  closeModal('modal-usuario');
  renderUsuarios();
  toast(`✅ Usuário "${name}" criado!`,'success');
}

/* ═══════════════════════════════════════════════
   NF-e
═══════════════════════════════════════════════ */
function renderNFe() {
  const history=[
    {date:'2024-01-14 10:30',file:'NF-12345.xml',fornecedor:'Distribuidora Alpha',itens:8,valor:3240.00,status:'sucesso'},
    {date:'2024-01-10 14:22',file:'NF-12280.xml',fornecedor:'Tech Imports Ltda',itens:4,valor:1560.00,status:'sucesso'},
    {date:'2024-01-05 09:15',file:'NF-12100.xml',fornecedor:'Fashion Supplier SA',itens:12,valor:4800.00,status:'sucesso'},
  ];
  const el=document.getElementById('nfe-history');
  if(!el) return;
  el.innerHTML=history.map(h=>`
    <div style="padding:10px;border-bottom:1px solid var(--border)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px">
        <div style="font-size:12px;font-weight:500;color:var(--text)">${h.file}</div>
        <span class="chip chip-green">${h.status}</span>
      </div>
      <div style="font-size:11px;color:var(--text3)">${h.fornecedor} · ${h.itens} itens · ${fmtMoney(h.valor)}</div>
      <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">${h.date}</div>
    </div>
  `).join('');
}

function handleNFeUpload(input) {
  if(!input.files.length) return;
  const file=input.files[0];
  toast(`📄 Lendo "${file.name}"...`,'info');
  setTimeout(()=>{
    toast('✅ NF-e importada! 6 produtos atualizados.','success');
  },2000);
}

function simulateNFeImport() {
  const products=['📦 Camiseta Polo M','👕 Camiseta Polo G','🕶️ Óculos de Sol Premium'];
  toast('📄 Simulando leitura do XML...','info');
  let i=0;
  const iv=setInterval(()=>{
    if(i<products.length){
      toast(`✅ Produto importado: ${products[i]}`,'success');
      i++;
    } else {
      clearInterval(iv);
      toast('🎉 Importação concluída! 3 produtos atualizados.','success');
    }
  },800);
}

/* ═══════════════════════════════════════════════
   MODAL HELPERS
═══════════════════════════════════════════════ */
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(m=>{
  m.addEventListener('click',e=>{ if(e.target===m) m.classList.remove('open'); });
});

/* ═══════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════ */
function toast(message, type='info') {
  const icons={success:'✅',warning:'⚠️',danger:'❌',info:'ℹ️'};
  const colors={success:'var(--green)',warning:'var(--amber)',danger:'var(--red)',info:'var(--accent2)'};
  const el=document.createElement('div');
  el.className='toast';
  el.style.borderLeft=`3px solid ${colors[type]||colors.info}`;
  el.innerHTML=`<span>${icons[type]||icons.info}</span>${message}`;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(()=>{
    el.style.animation='fadeOut .3s ease forwards';
    setTimeout(()=>el.remove(),300);
  },3000);
}

function showNotifications() {
  const msgs=['📦 Estoque baixo: Protetor Solar FPS50 (2 un.)','⚡ Relógio Smart esgotado!','📬 3 pedidos aguardando processamento'];
  msgs.forEach((m,i)=>setTimeout(()=>toast(m,'warning'),i*500));
}

/* ═══════════════════════════════════════════════
   GLOBAL SEARCH
═══════════════════════════════════════════════ */
function globalSearch(q) {
  if(!q.trim()||q.length<2) return;
  const found=state.products.filter(p=>p.name.toLowerCase().includes(q.toLowerCase()));
  if(found.length){
    toast(`🔍 ${found.length} produto${found.length>1?'s':''} encontrado${found.length>1?'s':''} para "${q}"`, 'info');
  }
}

/* ═══════════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════════ */
function fmtMoney(v) {
  return 'R$ '+(v||0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
}
function fmtMoneyK(v) {
  if(v>=1000) return 'R$ '+(v/1000).toFixed(1)+'k';
  return fmtMoney(v);
}
function isToday(dateStr) {
  const d=new Date(dateStr);
  const now=new Date();
  return d.getFullYear()===now.getFullYear()&&d.getMonth()===now.getMonth()&&d.getDate()===now.getDate();
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
(function init() {
  // Seed some demo sales if none exist
  if(!state.sales.length) {
    const demoSales = [
      {id:1,date:new Date().toISOString(),items:[{id:1,name:'Camiseta Básica',emoji:'👕',price:89.90,qty:2},{id:8,name:'Garrafa Térmica',emoji:'🧴',price:54.90,qty:1}],subtotal:234.70,discount:0,total:234.70,payment:'pix',operator:'Maria Admin'},
      {id:2,date:new Date().toISOString(),items:[{id:2,name:'Tênis Runner Pro',emoji:'👟',price:329.90,qty:1}],subtotal:329.90,discount:0,total:329.90,payment:'credito',operator:'João Caixa'},
      {id:3,date:new Date().toISOString(),items:[{id:4,name:'Mochila Adventure',emoji:'🎒',price:149.90,qty:1},{id:6,name:'Óculos de Sol',emoji:'🕶️',price:119.90,qty:1}],subtotal:269.80,discount:20,total:249.80,payment:'dinheiro',operator:'Maria Admin'},
    ];
    state.sales = demoSales;
    state.nextProductId = state.products.reduce((m,p)=>Math.max(m,p.id),0)+1;
    saveState();
  }

  checkStockAlerts();
  renderDashboard();
  document.getElementById('page-title').textContent='Dashboard';
})();