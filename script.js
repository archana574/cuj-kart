const EMOJIS={Books:'📚',Electronics:'💻',Furniture:'🪑','Hostel Items':'🏠',Clothing:'👕',Sports:'⚽',Stationery:'✏️',Other:'🎁'};
const COND_CLASS={New:'cond-new','Like New':'cond-new',Good:'cond-good',Fair:'cond-fair'};
const CAT_BG={Books:'#EEF3FF,#dbeafe',Electronics:'#F0FDF4,#dcfce7',Furniture:'#FFF7ED,#fed7aa','Hostel Items':'#FDF4FF,#e9d5ff',Clothing:'#FFF1F2,#fecdd3',Sports:'#F0FDF4,#bbf7d0',Stationery:'#FFFBEB,#fde68a',Other:'#F8FAFC,#e2e8f0'};

let products=[
  {id:1,title:'Engineering Mathematics Vol.1 & 2 (B.S. Grewal)',cat:'Books',price:280,orig:650,cond:'Good',emoji:'📚',seller:'Rahul Verma',course:'B.Tech ECE · 3rd Yr',desc:'Classic B.S. Grewal textbooks. Minor pencil marks on a few pages, otherwise great condition. Covers all topics for 1st/2nd year engineering. Both volumes included.',tags:['Mathematics','Engineering','Grewal'],time:'2 hrs ago',views:34},
  {id:2,title:'HP Pavilion 15 Laptop (i5, 8GB RAM)',cat:'Electronics',price:22000,orig:45000,cond:'Good',emoji:'💻',seller:'Priya Sharma',course:'M.Sc CS · 1st Yr',desc:'HP Pavilion 2021 model. Windows 11 Pro, 512GB SSD, 8GB RAM. Battery lasts 4-5 hours. Minor cosmetic scratch on lid. Comes with original charger and laptop bag.',tags:['Laptop','HP','Intel i5'],time:'5 hrs ago',views:112},
  {id:3,title:'Study Table with Drawer',cat:'Furniture',price:1800,orig:4200,cond:'Good',emoji:'🪑',seller:'Amandeep Singh',course:'B.Com · 2nd Yr',desc:'Solid wood study table, 120cm wide, with one drawer. Iron frame, very stable. Perfect for hostel room. Leaving hostel so selling quickly. Pickup from Block C.',tags:['Table','Study','Hostel'],time:'1 day ago',views:28},
  {id:4,title:'JEE Advanced PYQ Set (5 Books)',cat:'Books',price:450,orig:1200,cond:'Like New',emoji:'📖',seller:'Neha Gupta',course:'B.Tech CSE · 2nd Yr',desc:'Complete set of 5 JEE Advanced previous year question banks. Barely used, no writing or highlights. Great reference for competitive exam practice.',tags:['JEE','PYQ','Engineering'],time:'3 hrs ago',views:67},
  {id:5,title:'Casio FX-991EX Scientific Calculator',cat:'Electronics',price:600,orig:1200,cond:'Like New',emoji:'🔢',seller:'Vikram Joshi',course:'M.Sc Math · 2nd Yr',desc:'Casio FX-991EX ClassWiz. All 552 functions working perfectly. Cover and batteries included. Selling because I graduated.',tags:['Calculator','Casio','Science'],time:'6 hrs ago',views:45},
  {id:6,title:'Mini Refrigerator 100L (Single Door)',cat:'Hostel Items',price:3500,orig:8000,cond:'Good',emoji:'❄️',seller:'Sunita Devi',course:'M.A. Hindi · 1st Yr',desc:'Whirlpool mini fridge 100L. Cools well, no issues. Moving out of hostel. Buyer to arrange transportation. Pickup from Girls Hostel Block B.',tags:['Fridge','Hostel','Appliance'],time:'12 hrs ago',views:89},
  {id:7,title:'Badminton Racquet + 3 Shuttlecocks',cat:'Sports',price:550,orig:1400,cond:'Good',emoji:'🏸',seller:'Arjun Mehta',course:'B.Tech ECE · 4th Yr',desc:'Two Yonex racquets (GR 303) with 3 Mavis 350 shuttlecocks. Used casually for 6 months. Strings still tight. Perfect for evening campus games.',tags:['Badminton','Yonex','Sports'],time:'2 days ago',views:19},
  {id:8,title:'Room Heater Orpat 1000W',cat:'Hostel Items',price:700,orig:1800,cond:'Good',emoji:'🔥',seller:'Meena Kumari',course:'B.A. English · 3rd Yr',desc:'Orpat OEH-1260 fan heater with 2 heat settings. Perfect for Jammu winters. Thermostat works fine. Compact size fits under desk.',tags:['Heater','Winter','Hostel'],time:'4 hrs ago',views:56},
  {id:9,title:'A1 Drawing Board + Parallel Drafter',cat:'Stationery',price:900,orig:2500,cond:'Good',emoji:'📐',seller:'Rohan Kumar',course:'B.Tech Civil · 2nd Yr',desc:'Engineering drawing board A1 size with mounted parallel drafter. Set squares, scale ruler included. Used for 1 year. All accessories in good condition.',tags:['Drawing','Engineering','A1'],time:'1 day ago',views:22},
  {id:10,title:'Heavy Woolen Jacket (Navy, XL)',cat:'Clothing',price:400,orig:1200,cond:'Good',emoji:'🧥',seller:'Pooja Devi',course:'M.Com · 1st Yr',desc:'Premium woolen jacket, XL size. Navy blue color. Very warm — used only one winter season. No damage or fading. Great for Jammu cold weather.',tags:['Jacket','Winter','Woolen'],time:'8 hrs ago',views:38},
  {id:11,title:'Samsung 20L Microwave Oven',cat:'Hostel Items',price:2800,orig:6500,cond:'Good',emoji:'📡',seller:'Deepak Singh',course:'MBA · 2nd Yr',desc:'Samsung MW73AD-B/XTL solo microwave. 20L capacity. All presets working. Comes with 2 microwave-safe bowls.',tags:['Microwave','Samsung','Kitchen'],time:'3 days ago',views:71},
  {id:12,title:'NCERT Chemistry 11 & 12 + OP Tandon',cat:'Books',price:200,orig:600,cond:'Fair',emoji:'🧪',seller:'Anjali Thakur',course:'B.Sc Chem · 1st Yr',desc:'NCERT Chemistry Parts 1&2 (Class 11 & 12) plus OP Tandon Physical Chemistry. Highlighting in NCERT, OP Tandon unmarked. All pages present.',tags:['Chemistry','NCERT','Reference'],time:'5 days ago',views:44},
];

let myListings=[
  
];

let userProducts = [];

let wishlist=new Set();
let currentDetailId=null;
const STORAGE_KEYS={
  profiles:'cujkart_profiles',
  currentUser:'cujkart_current_user',
  userData:'cujkart_user_data'
};
const EMAIL_CONFIG={
  provider:'emailjs',
  serviceId:'YOUR_EMAILJS_SERVICE_ID',
  signupTemplateId:'YOUR_EMAILJS_SIGNUP_TEMPLATE_ID',
  loginTemplateId:'YOUR_EMAILJS_LOGIN_TEMPLATE_ID',
  publicKey:'YOUR_EMAILJS_PUBLIC_KEY'
};
const PROTECTED_PAGES=new Set(['dashboard','sell','chats']);
const defaultProfiles={
  'arjun.sharma@cujammu.ac.in':{
    name:'Arjun Sharma',
    program:'B.Tech CSE',
    year:'3rd Year',
    studentId:'2022CSE0042',
    email:'arjun.sharma@cujammu.ac.in'
  }
};
let currentUser=null;
let currentUserData={listings:[],wishlist:[]};

const CLEAN_EMOJIS={Books:'\u{1F4DA}',Electronics:'\u{1F4BB}',Furniture:'\u{1FA91}','Hostel Items':'\u{1F3E0}',Clothing:'\u{1F455}',Sports:'\u{26BD}',Stationery:'\u{270F}\uFE0F',Other:'\u{1F381}'};

products=products.map(item=>({
  ...item,
  id:String(item.id),
  emoji:CLEAN_EMOJIS[item.cat]||item.emoji,
  course:(item.course||'').replaceAll('Â·','·').replaceAll('â€”','-'),
  desc:(item.desc||'').replaceAll('â€”','-')
}));

myListings=myListings.map(item=>({
  ...item,
  id:String(item.id),
  emoji:CLEAN_EMOJIS[item.cat]||item.emoji
}));

function showPage(name){
  if(PROTECTED_PAGES.has(name)&&!isAuthenticated()){
    toast('Please sign in to continue');
    name='login';
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  document.getElementById('pg-'+name)?.classList.add('active');
  document.getElementById('nl-'+name)?.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(name==='home') renderHome();
  if(name==='browse') renderBrowse();
  if(name==='sell' && !editingProductId) resetSellForm();
  if(name==='wishlist') renderWishlist();
  if(name==='dashboard') renderDashboard();
  if(name==='chats') renderChatInbox();
  document.getElementById('notif-panel')?.classList.remove('open');
  closeAccountMenu();
  updateAuthUI();
}

function productCard(p){
  const cc=COND_CLASS[p.cond]||'cond-fair';
  const wished=wishlist.has(p.id);
  const bg=CAT_BG[p.cat]||'#EEF3FF,#dbeafe';
  const idArg=String(p.id).replace(/'/g,"\\'");
  const imageUrl = p.image || (p.images && p.images[0]) || '';
  const imgContent = imageUrl ? `<img src="${imageUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">` : `<span style="font-size:64px">${p.emoji}</span>`;
  return `<div class="product-card" onclick="openDetail('${idArg}')">
    <div class="product-img" style="background:linear-gradient(135deg,${bg})">
      ${imgContent}
      <div class="product-cat-badge">${p.cat}</div>
      <button class="product-wish" onclick="event.stopPropagation();toggleWish('${idArg}')" id="wbtn-${p.id}">${wished?'❤️':'🤍'}</button>
    </div>
    <div class="product-body">
      <div class="product-name">${p.title}</div>
      <div class="product-price">₹${p.price.toLocaleString()}<s>₹${p.orig.toLocaleString()}</s></div>
      <div class="product-foot"><span class="cond-badge ${cc}">${p.cond}</span><span>👁 ${p.views} · ${p.time}</span></div>
      <div style="font-size:11px;color:var(--muted);margin-top:8px">👤 ${p.seller}</div>
    </div>
  </div>`;
}

function renderHome(){const g=document.getElementById('home-grid');if(g)g.innerHTML=products.slice(0,8).map(productCard).join('');}

function filterCat(cat,el){
  document.querySelectorAll('#home-cats .cat-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  const items=cat==='All'?products.slice(0,8):products.filter(p=>p.cat===cat);
  const g=document.getElementById('home-grid');
  if(g)g.innerHTML=items.length?items.map(productCard).join(''):`<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--muted)">No listings in this category yet</div>`;
}

function doHeroSearch(){
  const q=document.getElementById('hero-q').value.trim();
  const cat=document.getElementById('hero-cat').value;
  showPage('browse');
  setTimeout(()=>{if(q)document.getElementById('browse-q').value=q;if(cat){const r=document.querySelector(`input[name='fc'][value='${cat}']`);if(r)r.checked=true;}applyFilters();},50);
}

function renderBrowse(){applyFilters();}

function applyFilters(){
  const q=(document.getElementById('browse-q')?.value||'').toLowerCase();
  const fc=document.querySelector('input[name="fc"]:checked')?.value||'All';
  const conds=[...document.querySelectorAll('input[type=checkbox]:checked')].map(c=>c.value);
  const pmin=parseInt(document.getElementById('price-min')?.value)||0;
  const pmax=parseInt(document.getElementById('price-max')?.value)||Infinity;
  const sort=document.getElementById('browse-sort')?.value||'newest';
  let items=products.filter(p=>{
    const mC=fc==='All'||p.cat===fc;
    const mK=!conds.length||conds.includes(p.cond);
    const mQ=!q||p.title.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)||p.tags.some(t=>t.toLowerCase().includes(q));
    const mP=p.price>=pmin&&p.price<=pmax;
    return mC&&mK&&mQ&&mP;
  });
  if(sort==='price-asc')items.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc')items.sort((a,b)=>b.price-a.price);
  const g=document.getElementById('browse-grid');
  const cnt=document.getElementById('browse-count');
  if(g)g.innerHTML=items.length?items.map(productCard).join(''):`<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--muted)"><div style="font-size:48px;margin-bottom:12px">🔍</div>No listings match your search</div>`;
  if(cnt)cnt.textContent=`Showing ${items.length} item${items.length!==1?'s':''}`;
}

function resetFilters(){
  document.getElementById('browse-q').value='';
  document.getElementById('price-min').value='';
  document.getElementById('price-max').value='';
  const allR=document.querySelector('input[name="fc"][value="All"]');if(allR)allR.checked=true;
  document.querySelectorAll('input[type=checkbox]').forEach(c=>c.checked=false);
  document.getElementById('browse-sort').value='newest';
  applyFilters();
}

function toggleWish(id){
  if(wishlist.has(id)){wishlist.delete(id);toast('Removed from wishlist');}
  else{wishlist.add(id);toast('❤️ Added to wishlist!');}
  const btn=document.getElementById('wbtn-'+id);
  if(btn)btn.textContent=wishlist.has(id)?'❤️':'🤍';
  const dw=document.getElementById('d-wish');if(dw)dw.textContent=wishlist.size;
}
 
function renderWishlist(){
  const c=document.getElementById('wish-content');if(!c)return;
  const items=products.filter(p=>wishlist.has(p.id));
  if(!items.length){c.innerHTML=`<div class="empty-state"><div class="empty-icon">🤍</div><div class="empty-title">Your wishlist is empty</div><div class="empty-sub">Save items you love to find them quickly</div><button class="empty-btn" onclick="showPage('browse')">Browse Listings</button></div>`;}
  else{c.innerHTML=`<div class="product-grid">${items.map(productCard).join('')}</div>`;}
}

function openDetail(id){
  const p=products.find(x=>String(x.id)===String(id));if(!p)return;
  currentDetailId=String(id);
  const images = Array.isArray(p.images)&&p.images.length?p.images:(p.image?[p.image]:[]);
  const img=document.getElementById('detail-img');
  if(img){
    if(images.length){
      img.innerHTML=`<img src="${images[0]}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`;
    } else {
      img.textContent=p.emoji;
      img.style.fontSize='100px';
    }
  }
  document.getElementById('detail-cat').textContent=p.cat;
  document.getElementById('detail-title').textContent=p.title;
  document.getElementById('detail-price').textContent='₹'+p.price.toLocaleString();
  document.getElementById('detail-og').textContent='₹'+p.orig.toLocaleString();
  const save=Math.round((1-p.price/p.orig)*100);
  document.getElementById('detail-save').textContent=`Save ${save}%`;
  document.getElementById('detail-tags').innerHTML=[p.cond,...p.tags].map(t=>`<span class="detail-tag">${t}</span>`).join('');
  document.getElementById('detail-desc').textContent=p.desc;
  document.getElementById('detail-s-avatar').textContent=p.seller[0];
  document.getElementById('detail-s-name').textContent=p.seller;
  document.getElementById('detail-s-meta').textContent=p.course;
  if(images.length){
    document.getElementById('detail-thumbs').innerHTML=images.map((url,i)=>`<div class="detail-thumb${i===0?' active':''}"><img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>`).join('');
  } else {
    document.getElementById('detail-thumbs').innerHTML=[p.emoji,'📸','📸'].map((e,i)=>`<div class="detail-thumb${i===0?' active':''}">${e}</div>`).join('');
  }
  document.getElementById('chat-name').textContent=p.seller;
  document.getElementById('chat-avatar').textContent=p.seller[0];
  const wb=document.getElementById('detail-wish-btn');
  if(wb)wb.textContent=wishlist.has(currentDetailId)?'❤️ Wishlisted':'♡ Add to Wishlist';
  showPage('detail');
}

function wishlistFromDetail(){
  toggleWish(currentDetailId);
  const wb=document.getElementById('detail-wish-btn');
  if(wb)wb.textContent=wishlist.has(currentDetailId)?'❤️ Wishlisted':'♡ Add to Wishlist';
}

function submitListing(){
  const title=document.getElementById('s-title').value.trim();
  const cat=document.getElementById('s-cat').value;
  const cond=document.getElementById('s-cond').value;
  const price=parseInt(document.getElementById('s-price').value)||0;
  const desc=document.getElementById('s-desc').value.trim();
  if(!title||!cat||!cond||!price){toast('⚠️ Please fill in all required fields');return;}
  if(!desc){toast('⚠️ Please add a description');return;}
  const newP={id:Date.now(),title,cat,price,orig:price,cond,emoji:EMOJIS[cat]||'🛍️',seller:'You',course:'CUJ Student',desc,tags:[cat],time:'Just now',views:0};
  products.unshift(newP);
  myListings.unshift({id:newP.id,title,cat,price,cond,emoji:newP.emoji,status:'active'});
  ['s-title','s-price','s-orig','s-desc','s-wa','s-meet'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('s-cat').value='';document.getElementById('s-cond').value='';
  uploadedPhotos=[];renderPhotoGrid();
  toast('🎉 Listing posted successfully!');showPage('dashboard');
}

function renderDashboard(){
  const dw=document.getElementById('d-wish');if(dw)dw.textContent=wishlist.size;
  const dl=document.getElementById('d-listings');if(dl)dl.textContent=myListings.filter(l=>l.status==='active').length;
  const w=document.getElementById('my-listings-wrap');if(!w)return;
  w.innerHTML=myListings.map(l=>`<div class="my-listing-card"><div class="my-listing-img">${l.emoji}</div><div style="flex:1;min-width:0"><span class="status-pill status-${l.status}">${l.status==='active'?'● Active':'✓ Sold'}</span><div class="my-listing-title" style="margin-top:4px">${l.title}</div><div class="my-listing-price">₹${l.price.toLocaleString()}</div><div style="font-size:11px;color:var(--muted)">${l.cat} · ${l.cond}</div></div><div class="my-listing-actions"><button class="action-btn action-edit" onclick="toast('Edit form for this listing would open')">✏️ Edit</button><button class="action-btn action-del" onclick="deleteMyListing(${l.id})">🗑</button></div></div>`).join('');
}

function deleteMyListing(id){
  myListings=myListings.filter(l=>l.id!==id);
  persistCurrentUserData();
  renderDashboard();
  toast('Listing deleted');
}

function doLogin(){
  const id=document.getElementById('l-id')?.value.trim();
  const pw=document.getElementById('l-pw')?.value.trim();
  if(!id||!pw){toast('⚠️ Please enter your credentials');return;}
  toast('✅ Welcome back! Logged in successfully.');showPage('home');
}

function doSignup(){toast('🎉 Account created! Welcome to CUJ Kart.');showPage('home');}

function openChat(){
  document.getElementById('chat-body').innerHTML=`<div class="chat-msg them">Hi! Is this still available?<div class="chat-msg-time">Now</div></div>`;
  document.getElementById('chat-panel').classList.add('open');
}
function closeChat(){document.getElementById('chat-panel').classList.remove('open');}
function sendMsg(){
  const inp=document.getElementById('chat-input');const txt=inp.value.trim();if(!txt)return;
  const body=document.getElementById('chat-body');
  const now=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  body.innerHTML+=`<div class="chat-msg me">${txt}<div class="chat-msg-time">${now}</div></div>`;
  inp.value='';body.scrollTop=body.scrollHeight;
  const replies=['Sure! Available tomorrow evening.','We can meet at the library entrance.','Is negotiation possible?','I can bring it to your hostel.'];
  setTimeout(()=>{body.innerHTML+=`<div class="chat-msg them">${replies[Math.floor(Math.random()*replies.length)]}<div class="chat-msg-time">${now}</div></div>`;body.scrollTop=body.scrollHeight;},1200);
}

function toggleNotif(){document.getElementById('notif-panel')?.classList.toggle('open');}
function clearNotifs(){document.getElementById('notif-badge').style.display='none';document.querySelectorAll('.notif-dot-ind').forEach(d=>d.style.display='none');document.getElementById('notif-panel').classList.remove('open');toast('All notifications marked as read');}

function openReportModal(){document.getElementById('report-modal').classList.add('open');}
function closeReport(){document.getElementById('report-modal').classList.remove('open');}
function submitReport(){closeReport();toast("⚑ Report submitted. We'll review it shortly.");}

function toast(msg){
  const w=document.getElementById('toast-wrap');const t=document.createElement('div');
  t.className='toast';t.textContent=msg;w.appendChild(t);setTimeout(()=>t.remove(),3200);
}

function closeAuthSuccessModal(){
  document.getElementById('auth-success-modal')?.classList.remove('open');
}

function openAuthSuccessModal(title,copy,note,icon='✓'){
  const modal=document.getElementById('auth-success-modal');
  const titleEl=document.getElementById('auth-success-title');
  const copyEl=document.getElementById('auth-success-copy');
  const noteEl=document.getElementById('auth-success-note');
  const iconEl=document.getElementById('auth-success-icon');
  if(titleEl)titleEl.textContent=title;
  if(copyEl)copyEl.textContent=copy;
  if(noteEl)noteEl.textContent=note;
  if(iconEl)iconEl.textContent=icon;
  modal?.classList.add('open');
}

function canSendEmailNotifications(){
  return !!(
    EMAIL_CONFIG.serviceId &&
    EMAIL_CONFIG.signupTemplateId &&
    EMAIL_CONFIG.loginTemplateId &&
    EMAIL_CONFIG.publicKey &&
    !String(EMAIL_CONFIG.serviceId).startsWith('YOUR_') &&
    !String(EMAIL_CONFIG.signupTemplateId).startsWith('YOUR_') &&
    !String(EMAIL_CONFIG.loginTemplateId).startsWith('YOUR_') &&
    !String(EMAIL_CONFIG.publicKey).startsWith('YOUR_')
  );
}

async function sendAccountEmail(type,user){
  if(!canSendEmailNotifications())return {sent:false,reason:'Email service not configured'};
  const templateId=type==='signup'?EMAIL_CONFIG.signupTemplateId:EMAIL_CONFIG.loginTemplateId;
  try{
    const response=await fetch('https://api.emailjs.com/api/v1.0/email/send',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        service_id:EMAIL_CONFIG.serviceId,
        template_id:templateId,
        user_id:EMAIL_CONFIG.publicKey,
        template_params:{
          to_email:user.email,
          to_name:user.name,
          app_name:'CUJ Kart',
          action_type:type,
          subject_line:type==='signup'?'Welcome to CUJ Kart':'Login successful - CUJ Kart',
          email_title:type==='signup'?'Welcome to CUJ Kart':'Login successful',
          email_message:type==='signup'
            ?`Welcome to CUJ Kart, ${user.name}. Thank you for creating your account and joining the student marketplace.`
            :`Hi ${user.name}, you have successfully logged in to your CUJ Kart account.`,
          support_email:'support@cujkart.local',
          student_id:user.studentId||'CUJ Student'
        }
      })
    });
    return {sent:response.ok,reason:response.ok?'sent':'Email request failed'};
  }catch{
    return {sent:false,reason:'Network error'};
  }
}

function normalizeStaticContent(){
  document.title='CUJ Kart - Student Marketplace | Central University of Jammu';
  const splashTagline=document.querySelector('.splash-tagline');
  if(splashTagline)splashTagline.textContent='Campus marketplace for students';
  const navBtns=document.querySelectorAll('.nav-icon-btn');
  if(navBtns[0])navBtns[0].childNodes[0].textContent='\u{1F514}';
  if(navBtns[1])navBtns[1].textContent='\u{1F464}';
  const footerCats=document.querySelectorAll('.footer-grid .footer-link');
  if(footerCats[4])footerCats[4].textContent='Books';
  if(footerCats[5])footerCats[5].textContent='Electronics';
  if(footerCats[6])footerCats[6].textContent='Furniture';
  if(footerCats[7])footerCats[7].textContent='Hostel Items';
  if(footerCats[11])footerCats[11].textContent='CUJ Official Site \u2197';
  const footerBottom=document.querySelector('.footer-bottom div');
  if(footerBottom)footerBottom.textContent='\u00A9 2025 CUJ Kart \u00B7 Central University of Jammu, Bagla, Samba, J&K';
  const footerBadge=document.querySelector('.footer-badge');
  if(footerBadge)footerBadge.textContent='Verified Students Only';
  const chatSend=document.querySelector('.chat-send');
  if(chatSend)chatSend.textContent='\u27A4';
}

function deriveUserFromLogin(loginValue){
  const raw=(loginValue||'').trim();
  const localPart=raw.includes('@')?raw.split('@')[0]:raw;
  const studentId=localPart.toUpperCase();
  const dashCode=studentId.slice(0,4)||'CUJ';
  return {
    name:dashCode,
    program:'CUJ Student',
    year:'Active Account',
    studentId,
    email:raw.includes('@')?raw:`${localPart}@cujammu.ac.in`
  };
}

function normalizeLoginKey(loginValue){
  const raw=(loginValue||'').trim().toLowerCase();
  if(!raw)return '';
  return raw.includes('@')?raw:`${raw}@cujammu.ac.in`;
}

function isAuthenticated(){
  return !!(currentUser&&currentUser.email);
}

function readStoredProfiles(){
  try{
    const saved=localStorage.getItem(STORAGE_KEYS.profiles);
    return saved?{...defaultProfiles,...JSON.parse(saved)}:{...defaultProfiles};
  }catch{
    return {...defaultProfiles};
  }
}

function saveStoredProfiles(profiles){
  localStorage.setItem(STORAGE_KEYS.profiles,JSON.stringify(profiles));
}

function saveCurrentUser(){
  localStorage.setItem(STORAGE_KEYS.currentUser,JSON.stringify(currentUser));
}

function loadPersistedUser(){
  try{
    const saved=localStorage.getItem(STORAGE_KEYS.currentUser);
    if(saved)currentUser=JSON.parse(saved);
  }catch{}
}

function clearCurrentUser(){
  localStorage.removeItem(STORAGE_KEYS.currentUser);
  currentUser=null;
}

function emptyUserData(){
  return {listings:[],wishlist:[]};
}

function readAllUserData(){
  try{
    const saved=localStorage.getItem(STORAGE_KEYS.userData);
    return saved?JSON.parse(saved):{};
  }catch{
    return {};
  }
}

function saveAllUserData(allUserData){
  localStorage.setItem(STORAGE_KEYS.userData,JSON.stringify(allUserData));
}

function currentUserKey(){
  return isAuthenticated()?normalizeLoginKey(currentUser.email):'';
}

function loadCurrentUserData(){
  if(!isAuthenticated()){
    currentUserData=emptyUserData();
    myListings=[];
    wishlist=new Set();
    return;
  }
  const allUserData=readAllUserData();
  const key=currentUserKey();
  const stored=allUserData[key]||emptyUserData();
  currentUserData={
    listings:Array.isArray(stored.listings)?stored.listings:[],
    wishlist:Array.isArray(stored.wishlist)?stored.wishlist:[]
  };
  myListings=currentUserData.listings.map(item=>({
    views:0,
    enquiries:0,
    ...item,
    emoji:CLEAN_EMOJIS[item.cat]||item.emoji
  }));
  wishlist=new Set(currentUserData.wishlist);
}

function persistCurrentUserData(){
  if(!isAuthenticated())return;
  const allUserData=readAllUserData();
  allUserData[currentUserKey()]={
    listings:myListings,
    wishlist:[...wishlist]
  };
  saveAllUserData(allUserData);
}

function getProfileForLogin(loginValue){
  const key=normalizeLoginKey(loginValue);
  const profiles=readStoredProfiles();
  if(profiles[key])return profiles[key];
  const derived=deriveUserFromLogin(loginValue);
  profiles[key]=derived;
  saveStoredProfiles(profiles);
  return derived;
}

function saveProfileForLogin(loginValue,profile){
  const key=normalizeLoginKey(loginValue||profile.email);
  const profiles=readStoredProfiles();
  profiles[key]=profile;
  saveStoredProfiles(profiles);
}

function toggleAccountMenu(){
  document.getElementById('account-menu')?.classList.toggle('open');
  document.getElementById('notif-panel')?.classList.remove('open');
}

function closeAccountMenu(){
  document.getElementById('account-menu')?.classList.remove('open');
}

function updateAuthUI(){
  const accountBtn=document.getElementById('account-btn');
  const menuName=document.getElementById('account-menu-name');
  const menuSub=document.getElementById('account-menu-sub');
  const loginBtn=document.getElementById('account-login-btn');
  const dashboardBtn=document.getElementById('account-dashboard-btn');
  const chatsBtn=document.getElementById('account-chats-btn');
  const editBtn=document.getElementById('account-editprofile-btn');
  const logoutBtn=document.getElementById('account-logout-btn');
  if(!accountBtn||!menuName||!menuSub||!loginBtn||!dashboardBtn||!logoutBtn)return;
  if(isAuthenticated()){
    accountBtn.textContent=(currentUser.name||'U').charAt(0).toUpperCase();
    menuName.textContent=currentUser.name;
    menuSub.textContent=currentUser.email;
    loginBtn.style.display='none';
    dashboardBtn.style.display='block';
    if(chatsBtn)chatsBtn.style.display='block';
    if(editBtn)editBtn.style.display='block';
    logoutBtn.style.display='block';
    return;
  }
  accountBtn.textContent='👤';
  menuName.textContent='Guest';
  menuSub.textContent='Sign in to manage your listings and wishlist';
  loginBtn.style.display='block';
  dashboardBtn.style.display='none';
  if(chatsBtn)chatsBtn.style.display='none';
  if(editBtn)editBtn.style.display='none';
  logoutBtn.style.display='none';
}

function logoutUser(){
  if (!auth) {
    currentUser = null;
    clearCurrentUser();
    updateAuthUI();
    toast('Logged out successfully');
    showPage('home');
    return;
  }

  auth.signOut().then(() => {
    currentUser = null;
    clearCurrentUser();
    updateAuthUI();
    toast('Logged out successfully');
    showPage('home');
  }).catch(error => {
    console.error('Logout error:', error);
    toast('Error logging out');
  });
}

function syncDashboardUser(){
  if(!isAuthenticated())return;
  const avatar=document.getElementById('dash-avatar-letter');
  const name=document.getElementById('dash-display-name');
  const meta=document.getElementById('dash-display-meta');
  if(avatar)avatar.textContent=(currentUser.name||'U').charAt(0).toUpperCase();
  if(name)name.textContent=currentUser.name;
  if(meta)meta.textContent=`${currentUser.program} · ${currentUser.year} · CUJ ID: ${currentUser.studentId}`;
}

function productCard(p){
  const cc=COND_CLASS[p.cond]||'cond-fair';
  const wished=wishlist.has(p.id);
  const bg=CAT_BG[p.cat]||'#EEF3FF,#dbeafe';
  const idArg=String(p.id).replace(/'/g,"\\'");
  const imageUrl = p.image || (p.images && p.images[0]) || '';
  const imgContent = imageUrl ? `<img src="${imageUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">` : `<span style="font-size:64px">${p.emoji}</span>`;
  return `<div class="product-card" onclick="openDetail('${idArg}')">
    <div class="product-img" style="background:linear-gradient(135deg,${bg})">
      ${imgContent}
      <div class="product-cat-badge">${p.cat}</div>
      <button class="product-wish" onclick="event.stopPropagation();toggleWish('${idArg}')" id="wbtn-${p.id}">${wished?'❤️':'♡'}</button>
    </div>
    <div class="product-body">
      <div class="product-name">${p.title}</div>
      <div class="product-price">₹${p.price.toLocaleString()}<s>₹${p.orig.toLocaleString()}</s></div>
      <div class="product-foot"><span class="cond-badge ${cc}">${p.cond}</span><span>👁 ${p.views} · ${p.time}</span></div>
      <div style="font-size:11px;color:var(--muted);margin-top:8px">👤 ${p.seller}</div>
    </div>
  </div>`;
}

function setupHomeContent(){
  const eyebrow=document.querySelector('.hero-eyebrow');
  if(eyebrow)eyebrow.textContent='Campus only \u00B7 verified student marketplace';
  const heroDesc=document.querySelector('.hero-desc');
  if(heroDesc)heroDesc.textContent='Trade books, electronics, furniture, winter essentials, and everyday hostel items in one polished marketplace built just for Central University of Jammu students.';
  const heroStats=document.querySelectorAll('.hero-stat strong');
  if(heroStats[2])heroStats[2].textContent='\u20B912L+';
  const heroSearchIcon=document.querySelector('.hero-search span');
  if(heroSearchIcon)heroSearchIcon.textContent='\u{1F50D}';
  const heroDeck=document.querySelector('.hero-card-deck');
  if(heroDeck)heroDeck.innerHTML=`
    <div class="mini-card"><div class="mini-card-emoji">\u{1F4DA}</div><div class="mini-card-title">Engineering Math Vol. 2</div><div class="mini-card-price">\u20B9280</div><div class="mini-card-meta">Good condition \u00B7 2 hrs ago</div></div>
    <div class="mini-card"><div class="mini-card-emoji">\u{1F4BB}</div><div class="mini-card-title">HP Pavilion Laptop</div><div class="mini-card-price">\u20B922,000</div><div class="mini-card-meta">Like new \u00B7 5 hrs ago</div></div>
    <div class="mini-card"><div class="mini-card-emoji">\u{1FA91}</div><div class="mini-card-title">Study Table + Chair</div><div class="mini-card-price">\u20B91,800</div><div class="mini-card-meta">Good condition \u00B7 1 day ago</div></div>`;
  const cats=document.getElementById('home-cats');
  if(cats)cats.innerHTML=`
    <div class="cat-pill active" onclick="filterCat('All',this)">All Items</div>
    <div class="cat-pill" onclick="filterCat('Books',this)">Books</div>
    <div class="cat-pill" onclick="filterCat('Electronics',this)">Electronics</div>
    <div class="cat-pill" onclick="filterCat('Furniture',this)">Furniture</div>
    <div class="cat-pill" onclick="filterCat('Hostel Items',this)">Hostel Items</div>
    <div class="cat-pill" onclick="filterCat('Clothing',this)">Clothing</div>
    <div class="cat-pill" onclick="filterCat('Sports',this)">Sports</div>
    <div class="cat-pill" onclick="filterCat('Stationery',this)">Stationery</div>`;
  const homeButton=document.querySelector('#pg-home .see-all');
  if(homeButton)homeButton.textContent='Browse All';
}

function renderHome(){
  const g=document.getElementById('home-grid');
  if(g)g.innerHTML=products.slice(0,8).map(productCard).join('');
  setupHomeContent();
}

function toggleWish(id){
  if(!isAuthenticated()){
    toast('Please sign in to use wishlist');
    showPage('login');
    return;
  }
  if(wishlist.has(id)){wishlist.delete(id);toast('Removed from wishlist');}
  else{wishlist.add(id);toast('Added to wishlist!');}
  persistCurrentUserData();
  const btn=document.getElementById('wbtn-'+id);
  if(btn)btn.textContent=wishlist.has(id)?'\u2764':'\u2661';
  const dw=document.getElementById('d-wish');
  if(dw)dw.textContent=wishlist.size;
}

function renderWishlist(){
  if(!isAuthenticated()){
    const c=document.getElementById('wish-content');
    if(c)c.innerHTML=`<div class="empty-state"><div class="empty-title">Sign in to view your wishlist</div><div class="empty-sub">Your saved items will appear here once you are logged in.</div><button class="empty-btn" onclick="showPage('login')">Sign In</button></div>`;
    return;
  }
  const c=document.getElementById('wish-content');
  if(!c)return;
  const items=products.filter(p=>wishlist.has(p.id));
  if(!items.length){
    c.innerHTML=`<div class="empty-state"><div class="empty-icon">\u2661</div><div class="empty-title">Your wishlist is empty</div><div class="empty-sub">Save items you love to find them quickly</div><button class="empty-btn" onclick="showPage('browse')">Browse Listings</button></div>`;
    return;
  }
  c.innerHTML=`<div class="product-grid">${items.map(productCard).join('')}</div>`;
}

function openDetail(id){
  const normalizedId=String(id);
  const p=products.find(x=>String(x.id)===normalizedId);
  if(!p)return;
  currentDetailId=normalizedId;
  const images=Array.isArray(p.images)&&p.images.length?p.images:(p.image?[p.image]:[]);
  const img=document.getElementById('detail-img');
  if(img){
    if(images.length){
      img.innerHTML=`<img src="${images[0]}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`;
    } else {
      img.textContent=p.emoji;
      img.style.fontSize='100px';
    }
  }
  document.getElementById('detail-cat').textContent=p.cat;
  document.getElementById('detail-title').textContent=p.title;
  document.getElementById('detail-price').textContent='₹'+p.price.toLocaleString();
  document.getElementById('detail-og').textContent='₹'+p.orig.toLocaleString();
  const save=Math.round((1-p.price/p.orig)*100);
  document.getElementById('detail-save').textContent=`Save ${save}%`;
  document.getElementById('detail-tags').innerHTML=[p.cond,...p.tags].map(t=>`<span class="detail-tag">${t}</span>`).join('');
  document.getElementById('detail-desc').textContent=p.desc;
  document.getElementById('detail-s-avatar').textContent=p.seller[0];
  document.getElementById('detail-s-name').textContent=p.seller;
  document.getElementById('detail-s-meta').textContent=p.course;
  document.getElementById('detail-thumbs').innerHTML=images.length
    ? images.map((url,i)=>`<div class="detail-thumb${i===0?' active':''}" onclick="switchDetailImage(${i})"><img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>`).join('')
    : [p.emoji,'📸','📸'].map((e,i)=>`<div class="detail-thumb${i===0?' active':''}">${e}</div>`).join('');
  document.getElementById('chat-name').textContent=p.seller;
  document.getElementById('chat-avatar').textContent=p.seller[0];
  const wb=document.getElementById('detail-wish-btn');
  if(wb)wb.textContent=wishlist.has(normalizedId)?'❤️ Wishlisted':'♡ Add to Wishlist';
  showPage('detail');
}

function switchDetailImage(index){
  const p=products.find(x=>String(x.id)===currentDetailId);
  if(!p) return;
  const images=Array.isArray(p.images)&&p.images.length?p.images:(p.image?[p.image]:[]);
  const img=document.getElementById('detail-img');
  if(img && images[index]){
    img.innerHTML=`<img src="${images[index]}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`;
  }
  document.querySelectorAll('.detail-thumb').forEach((thumb,i)=>thumb.classList.toggle('active',i===index));
}

function wishlistFromDetail(){
  toggleWish(currentDetailId);
  const wb=document.getElementById('detail-wish-btn');
  if(wb)wb.textContent=wishlist.has(currentDetailId)?'\u2764 Wishlisted':'\u2661 Add to Wishlist';
}

async function renderDashboard(){
  if(!isAuthenticated()){
    showPage('login');
    return;
  }
  syncDashboardUser();
  await loadUserProducts(); // Load from Firebase
  const activeListings = userProducts.filter(p => !p.sold);
  const soldListings = userProducts.filter(p => p.sold);
  const totalViews = userProducts.reduce((sum,l)=>sum+(l.views||0),0);
  const totalEnquiries = userProducts.reduce((sum,l)=>sum+(l.enquiries||0),0);
  const dw=document.getElementById('d-wish');
  if(dw)dw.textContent=wishlist.size;
  const dl=document.getElementById('d-listings');
  if(dl)dl.textContent=activeListings.length;
  const statNums=document.querySelectorAll('#pg-dashboard .stat-num');
  if(statNums[1])statNums[1].textContent=totalViews;
  if(statNums[2])statNums[2].textContent=totalEnquiries;
  if(statNums[3])statNums[3].textContent=soldListings.length;
  const w=document.getElementById('my-listings-wrap');
  if(!w)return;
  if(!userProducts.length){
    w.innerHTML=`<div class="empty-state"><div class="empty-title">No listings yet</div><div class="empty-sub">Your uploaded products will appear here</div><button class="empty-btn" onclick="showPage('sell')">Post Your First Listing</button></div>`;
    return;
  }
  w.innerHTML=userProducts.map(l=>`<div class="my-listing-card"><div class="my-listing-img">${l.image ? `<img src="${l.image}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">` : l.emoji}</div><div style="flex:1;min-width:0"><span class="status-pill status-${l.sold?'sold':'active'}">${l.sold?'✓ Sold':'● Active'}</span><div class="my-listing-title" style="margin-top:4px">${l.title}</div><div class="my-listing-price">₹${l.price.toLocaleString()}</div><div style="font-size:11px;color:var(--muted)">${l.cat} · ${l.cond}</div><div style="font-size:11px;color:var(--muted);margin-top:6px">Views: ${l.views||0} · Enquiries: ${l.enquiries||0}</div></div><div class="my-listing-actions"><button class="action-btn action-edit" onclick="openEditListing('${l.id}')">✏️ Edit</button><button class="action-btn ${l.sold?'action-restore':'action-sold'}" onclick="toggleSoldStatus('${l.id}')">${l.sold?'↩️ Unsold':'✓ Mark Sold'}</button><button class="action-btn action-del" onclick="deleteUserProduct('${l.id}')">🗑 Delete</button></div></div>`).join('');
}

function resetSellForm(){
  editingProductId=null;
  document.getElementById('sell-form-title').textContent='Post a New Listing';
  document.getElementById('sell-form-sub').textContent='Sell your items to 3,800+ CUJ students in minutes';
  ['s-title','s-desc','s-price','s-orig','s-wa','s-meet'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const catEl=document.getElementById('s-cat'); if(catEl)catEl.value='';
  const condEl=document.getElementById('s-cond'); if(condEl)condEl.value='';
  uploadedPhotos=[];
  renderPhotoGrid();
  const submitBtn=document.querySelector('#pg-sell .form-submit');
  if(submitBtn) submitBtn.textContent='🚀 Post Listing';
}

function openEditListing(id){
  if(!isAuthenticated()){showPage('login');return;}
  const product=userProducts.find(p=>String(p.id)===String(id));
  if(!product){toast('Could not find this listing');return;}
  editingProductId=String(id);
  document.getElementById('sell-form-title').textContent='✏️ Edit Listing';
  document.getElementById('sell-form-sub').textContent='Update your product details';
  document.getElementById('s-title').value=product.title||'';
  document.getElementById('s-desc').value=product.desc||'';
  document.getElementById('s-cat').value=product.cat||'';
  document.getElementById('s-cond').value=product.cond||'';
  document.getElementById('s-price').value=product.price||'';
  document.getElementById('s-orig').value=product.orig||'';
  document.getElementById('s-wa').value=product.whatsapp||'';
  document.getElementById('s-meet').value=product.meet||'';
  uploadedPhotos=(product.images||[]).map(url=>({file:null,dataUrl:url}));
  renderPhotoGrid();
  const submitBtn=document.querySelector('#pg-sell .form-submit');
  if(submitBtn) submitBtn.textContent='💾 Save Changes';
  showPage('sell');
}

async function deleteUserProduct(id){
  if(!confirm('Delete this listing permanently?')) return;
  // await deleteDoc(doc(db,'products',String(id))); // Firebase removed
  toast('Listing deleted (Firebase removed)');
  // await loadUserProducts(); // Firebase removed
  renderDashboard();
}

async function toggleSoldStatus(id){
  const product=userProducts.find(p=>String(p.id)===String(id));
  if(!product)return;
  const newSoldStatus=!product.sold;
  // const productRef=doc(db,'products',String(id)); // Firebase removed
  // await updateDoc(productRef,{sold:newSoldStatus}); // Firebase removed
  product.sold=newSoldStatus;
  toast(newSoldStatus?'✓ Marked as sold':'↩️ Marked as active');
  renderDashboard();
}

function submitListing(){
  if(!isAuthenticated()){
    toast('Please sign in before posting a listing');
    showPage('login');
    return;
  }
  const title=document.getElementById('s-title').value.trim();
  const cat=document.getElementById('s-cat').value;
  const cond=document.getElementById('s-cond').value;
  const price=parseInt(document.getElementById('s-price').value)||0;
  const desc=document.getElementById('s-desc').value.trim();
  if(!title||!cat||!cond||!price){toast('Please fill in all required fields');return;}
  if(!desc){toast('Please add a description');return;}
  const newP={id:Date.now(),title,cat,price,orig:price,cond,emoji:CLEAN_EMOJIS[cat]||'\u{1F6CD}\uFE0F',seller:currentUser.name,course:`${currentUser.program} · ${currentUser.year}`,desc,tags:[cat],time:'Just now',views:0};
  products.unshift(newP);
  myListings.unshift({id:newP.id,title,cat,price,cond,emoji:newP.emoji,status:'active',views:0,enquiries:0});
  persistCurrentUserData();
  ['s-title','s-price','s-orig','s-desc','s-wa','s-meet'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('s-cat').value='';
  document.getElementById('s-cond').value='';
  toast('Listing posted successfully!');
  showPage('dashboard');
}

async function doLogin(){
  const id=document.getElementById('l-id')?.value.trim();
  const pw=document.getElementById('l-pw')?.value.trim();
  if(!id||!pw){toast('Please enter your credentials');return;}
  currentUser=getProfileForLogin(id);
  loadCurrentUserData();
  syncDashboardUser();
  saveCurrentUser();
  updateAuthUI();
  toast('Welcome back! Logged in successfully.');
  const emailResult=await sendAccountEmail('login',currentUser);
  openAuthSuccessModal(
    'Login Successful',
    `Welcome back, ${currentUser.name}. You have logged in successfully to CUJ Kart.`,
    emailResult.sent
      ?`A login notification has been sent to ${currentUser.email}.`
      :`Popup is working now. Add EmailJS serviceId, signupTemplateId, loginTemplateId, and publicKey in EMAIL_CONFIG to send real emails.`
  );
  showPage('dashboard');
}

async function doSignup(){
  const signupPage=document.getElementById('pg-signup');
  const inputs=signupPage?.querySelectorAll('input');
  const selects=signupPage?.querySelectorAll('select');
  const firstName=inputs?.[0]?.value.trim()||'CUJ';
  const lastName=inputs?.[1]?.value.trim()||'Student';
  const email=inputs?.[2]?.value.trim();
  const studentId=inputs?.[3]?.value.trim();
  const password=inputs?.[4]?.value.trim();
  const program=selects?.[0]?.value||'CUJ Student';
  const year=selects?.[1]?.value||'Student';
  if(!email||!studentId||!password){toast('Please complete the required signup fields');return;}
  currentUser={
    name:`${firstName} ${lastName}`.trim(),
    program,
    year,
    studentId:studentId.toUpperCase(),
    email
  };
  saveProfileForLogin(email,currentUser);
  loadCurrentUserData();
  saveCurrentUser();
  updateAuthUI();
  toast('Account created! Welcome to CUJ Kart.');
  const emailResult=await sendAccountEmail('signup',currentUser);
  openAuthSuccessModal(
    'Welcome to CUJ Kart',
    `Thank you for creating your account, ${currentUser.name}. Your student marketplace profile is now ready.`,
    emailResult.sent
      ?`A welcome email has been sent to ${currentUser.email}.`
      :`Popup is working now. Add EmailJS serviceId, signupTemplateId, loginTemplateId, and publicKey in EMAIL_CONFIG to send real emails.`
  );
  showPage('dashboard');
}

function submitReport(){
  closeReport();
  toast('Report submitted. We will review it shortly.');
}

// ── PHOTO UPLOAD ──────────────────────────────────────────────
let uploadedPhotos=[];
let editingProductId=null;
function handlePhotoSelect(e){addPhotos(Array.from(e.target.files));e.target.value='';}
function handlePhotoDrop(e){e.preventDefault();document.getElementById('upload-dropzone').classList.remove('drag-over');addPhotos(Array.from(e.dataTransfer.files).filter(f=>f.type.startsWith('image/')));}
function addPhotos(files){
  const remaining=5-uploadedPhotos.length;
  if(remaining<=0){toast('Maximum 5 photos allowed');return;}
  const toAdd=files.slice(0,remaining);
  if(files.length>remaining)toast(`Only ${remaining} more photo(s) allowed. Extra skipped.`);
  toAdd.forEach(file=>{
    if(file.size>10*1024*1024){toast(`"${file.name}" exceeds 10 MB limit`);return;}
    const reader=new FileReader();
    reader.onload=ev=>{uploadedPhotos.push({file,dataUrl:ev.target.result});renderPhotoGrid();};
    reader.readAsDataURL(file);
  });
}
function removePhoto(idx){uploadedPhotos.splice(idx,1);renderPhotoGrid();}
function renderPhotoGrid(){
  const grid=document.getElementById('photo-preview-grid');
  const dropzone=document.getElementById('upload-dropzone');
  const info=document.getElementById('photo-count-info');
  const count=uploadedPhotos.length;
  if(count===0){dropzone.style.display='';grid.style.display='none';info.style.display='none';grid.innerHTML='';return;}
  dropzone.style.display='none';grid.style.display='grid';info.style.display='block';
  info.textContent=`${count} of 5 photo${count!==1?'s':''} added · First photo is the cover image`;
  grid.innerHTML='';
  uploadedPhotos.forEach((p,i)=>{
    const item=document.createElement('div');item.className='photo-preview-item';
    item.innerHTML=`<img src="${p.dataUrl}" alt="Photo ${i+1}">${i===0?'<div class="photo-main-badge">COVER</div>':''}<button class="photo-remove" onclick="removePhoto(${i})" title="Remove">✕</button>`;
    grid.appendChild(item);
  });
  if(count<5){const add=document.createElement('div');add.className='photo-add-btn';add.title='Add more';add.onclick=()=>document.getElementById('s-photos').click();add.innerHTML='<span>＋</span><div>Add more</div>';grid.appendChild(add);}
}
// ── END PHOTO UPLOAD ──────────────────────────────────────────

// ── EDIT PROFILE ─────────────────────────────────────────────
function openEditProfile(){
  if(!isAuthenticated()){toast('Please sign in first');showPage('login');return;}
  const [first,...rest]=currentUser.name.split(' ');
  document.getElementById('ep-firstname').value=first||'';
  document.getElementById('ep-lastname').value=rest.join(' ')||'';
  document.getElementById('ep-email').value=currentUser.email||'';
  document.getElementById('ep-program').value=currentUser.program||'B.Tech CSE';
  document.getElementById('ep-year').value=currentUser.year||'1st Year';
  document.getElementById('ep-whatsapp').value=currentUser.whatsapp||'';
  updateEpPreview();
  document.getElementById('ep-modal').classList.add('open');
  document.getElementById('ep-firstname').addEventListener('input',updateEpPreview);
  document.getElementById('ep-lastname').addEventListener('input',updateEpPreview);
}

function updateEpPreview(){
  const fn=document.getElementById('ep-firstname').value.trim();
  const ln=document.getElementById('ep-lastname').value.trim();
  const full=`${fn} ${ln}`.trim()||'You';
  document.getElementById('ep-avatar-preview').textContent=full.charAt(0).toUpperCase();
  document.getElementById('ep-avatar-name').textContent=full;
}

function closeEditProfile(){
  document.getElementById('ep-modal').classList.remove('open');
}

function saveEditProfile(){
  const fn=document.getElementById('ep-firstname').value.trim();
  const ln=document.getElementById('ep-lastname').value.trim();
  if(!fn){toast('Please enter your first name');return;}
  const fullName=`${fn} ${ln}`.trim();
  currentUser.name=fullName;
  currentUser.program=document.getElementById('ep-program').value;
  currentUser.year=document.getElementById('ep-year').value;
  currentUser.whatsapp=document.getElementById('ep-whatsapp').value.trim();
  saveCurrentUser();
  saveProfileForLogin(currentUser.email,currentUser);
  syncDashboardUser();
  updateAuthUI();
  closeEditProfile();
  toast('✅ Profile updated successfully!');
}
// ── END EDIT PROFILE ──────────────────────────────────────────

// ── CHAT INBOX ────────────────────────────────────────────────
let chatThreads=[];
let activeChatIdx=null;

const seedChats=[
  {id:1,name:'Rahul Verma',initial:'R',color:'linear-gradient(135deg,#1A3A6B,#2563EB)',item:'📚 Engineering Math Vol.1',itemId:1,messages:[
    {from:'them',text:'Hi! Is the Engineering Math book still available?',time:'10:32 AM'},
    {from:'me',text:'Yes it is! Are you interested?',time:'10:33 AM'},
    {from:'them',text:'Can we meet at the Library tomorrow at 11 AM?',time:'10:34 AM'},
  ],unread:true},
  {id:2,name:'Priya Sharma',initial:'P',color:'linear-gradient(135deg,#7c3aed,#a855f7)',item:'💻 HP Pavilion Laptop',itemId:2,messages:[
    {from:'them',text:'Is the laptop still available? What is the lowest price?',time:'Yesterday'},
    {from:'me',text:'Yes! Best I can do is ₹21,000.',time:'Yesterday'},
  ],unread:false},
  {id:3,name:'Amandeep Singh',initial:'A',color:'linear-gradient(135deg,#C9932B,#F5A623)',item:'🪑 Study Table',itemId:3,messages:[
    {from:'them',text:'Does the table have any damage?',time:'2 days ago'},
  ],unread:false},
];

function initChatThreads(){
  if(!chatThreads.length) chatThreads=[...seedChats.map(t=>({...t,messages:[...t.messages]}))];
}

function renderChatInbox(){
  initChatThreads();
  const list=document.getElementById('chat-thread-list-inner');
  if(!list)return;
  list.innerHTML=chatThreads.map((t,i)=>{
    const last=t.messages[t.messages.length-1];
    return `<div class="chat-thread-item${activeChatIdx===i?' active':''}" onclick="openChatThread(${i})">
      <div class="chat-thread-avatar" style="background:${t.color}">${t.initial}</div>
      <div class="chat-thread-info">
        <div class="chat-thread-name">${t.name}</div>
        <div class="chat-thread-preview">${last?last.text:''}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
        <div class="chat-thread-time">${last?last.time:''}</div>
        ${t.unread?'<div class="chat-thread-unread"></div>':''}
      </div>
    </div>`;
  }).join('');
}

function openChatThread(idx){
  activeChatIdx=idx;
  const t=chatThreads[idx];
  t.unread=false;
  document.getElementById('chat-no-thread').style.display='none';
  const activeArea=document.getElementById('chat-active-area');
  activeArea.style.display='flex';
  document.getElementById('inbox-chat-avatar').textContent=t.initial;
  document.getElementById('inbox-chat-avatar').style.background=t.color;
  document.getElementById('inbox-chat-name').textContent=t.name;
  document.getElementById('inbox-chat-item').textContent=t.item;
  renderChatMessages(t);
  renderChatInbox();
  document.getElementById('inbox-chat-input').focus();
}

function renderChatMessages(t){
  const body=document.getElementById('inbox-chat-body');
  body.innerHTML=t.messages.map(m=>`
    <div class="${m.from==='me'?'chat-bubble-me':'chat-bubble-them'}">
      ${m.text}
      <div class="chat-bubble-time">${m.time}</div>
    </div>`).join('');
  setTimeout(()=>body.scrollTop=body.scrollHeight,50);
}

function sendInboxMsg(){
  if(activeChatIdx===null)return;
  const inp=document.getElementById('inbox-chat-input');
  const txt=inp.value.trim();if(!txt)return;
  const now=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  chatThreads[activeChatIdx].messages.push({from:'me',text:txt,time:now});
  inp.value='';
  renderChatMessages(chatThreads[activeChatIdx]);
  renderChatInbox();
  const replies=['Sure! Available tomorrow evening.','That sounds good, see you then!','Can you do cash on delivery?','I can meet at the library entrance.','Is there any discount possible?','Great, looking forward to it!'];
  setTimeout(()=>{
    chatThreads[activeChatIdx].messages.push({from:'them',text:replies[Math.floor(Math.random()*replies.length)],time:now});
    renderChatMessages(chatThreads[activeChatIdx]);
    renderChatInbox();
  },1200);
}

function contactSellerFromDetail(){
  if(!isAuthenticated()){toast('Please sign in to contact the seller');showPage('login');return;}
  initChatThreads();
  const p=products.find(x=>x.id===currentDetailId);
  if(!p)return;
  // Check if thread exists
  let idx=chatThreads.findIndex(t=>t.itemId===p.id);
  if(idx===-1){
    const colors=['linear-gradient(135deg,#1A3A6B,#2563EB)','linear-gradient(135deg,#7c3aed,#a855f7)','linear-gradient(135deg,#C9932B,#F5A623)','linear-gradient(135deg,#16A34A,#22c55e)'];
    chatThreads.unshift({
      id:Date.now(),name:p.seller,initial:p.seller[0],
      color:colors[chatThreads.length%colors.length],
      item:`${p.emoji} ${p.title}`,itemId:p.id,
      messages:[{from:'them',text:`Hi! I have ${p.title} available for ₹${p.price.toLocaleString()}. Interested?`,time:'Just now'}],
      unread:true
    });
    idx=0;
  }
  activeChatIdx=idx;
  showPage('chats');
  setTimeout(()=>openChatThread(activeChatIdx),100);
}
// ── END CHAT INBOX ────────────────────────────────────────────

document.addEventListener('click',e=>{
  const nb=document.getElementById('notif-btn');const np=document.getElementById('notif-panel');
  if(np&&!np.contains(e.target)&&nb&&!nb.contains(e.target))np.classList.remove('open');
  const ab=document.getElementById('account-btn');const am=document.getElementById('account-menu');
  if(am&&!am.contains(e.target)&&ab&&!ab.contains(e.target))am.classList.remove('open');
  const ep=document.getElementById('ep-modal');
  if(ep&&ep.classList.contains('open')&&e.target===ep)closeEditProfile();
});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeAuthSuccessModal();
    closeReport();
    closeEditProfile();
  }
});

window.addEventListener('load',()=>{
  loadPersistedUser();
  loadCurrentUserData();
  normalizeStaticContent();
  updateAuthUI();
  initFirebase(); // Initialize Firebase
  setTimeout(()=>{document.getElementById('splash').classList.add('gone');},2600);
});




/* ═══════════════════════════════════════════════════════════════
   🔥 FIREBASE INITIALIZATION & CONFIGURATION
   ═══════════════════════════════════════════════════════════════ */

// ⚠️ IMPORTANT: Update this with your Firebase config
// Get this from Firebase Console > Project Settings
const firebaseConfig = {
  apiKey: "AIzaSyCUO-t6VK_e-7PbpnHWx9yCwZbyOkX5rc0",
  authDomain: "cuj-kart.firebaseapp.com",
  projectId: "cuj-kart",
  storageBucket: "cuj-kart.firebasestorage.app",
  messagingSenderId: "464885969586",
  appId: "1:464885969586:web:a6dd57e60335f4c1bb0fab",
  measurementId: "G-6FT3GV2BGB"
};

// Import and initialize Firebase modules
let firebaseReady = false;
let auth, db, storage;

async function initFirebase() {
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const { getAuth } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
    const { getStorage } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js");
    
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    firebaseReady = true;
    
    console.log("✅ Firebase Initialized Successfully");
    setupAuthListener();
  } catch (error) {
    console.error("❌ Firebase initialization failed:", error);
  }
}

/* ═══════════════════════════════════════════════════════════════
   🔐 AUTHENTICATION FUNCTIONS
   ═══════════════════════════════════════════════════════════════ */

async function registerUser() {
  if (!firebaseReady) {
    toast("⏳ Firebase is still initializing. Please wait...");
    return;
  }

  const { createUserWithEmailAndPassword } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
  const { setDoc, doc } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");

  const firstName = document.getElementById("first-name")?.value.trim();
  const lastName = document.getElementById("last-name")?.value.trim();
  const email = document.getElementById("signup-email")?.value.trim();
  const studentId = document.getElementById("student-id")?.value.trim().toUpperCase();
  const password = document.querySelector('#pg-signup input[type="password"]')?.value.trim();

  // Validation
  if (!firstName || !email || !studentId || !password) {
    toast("⚠️ Please fill all required fields");
    return;
  }

  if (password.length < 8) {
    toast("⚠️ Password must be at least 8 characters");
    return;
  }

  if (!email.includes("@cujammu.ac.in") && !email.includes("@")) {
    toast("⚠️ Please enter a valid CUJ email");
    return;
  }

  try {
    // Show loading state
    const submitBtn = document.querySelector("#pg-signup .auth-submit");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Creating account...";
    submitBtn.disabled = true;

    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user profile in Firestore
    const fullName = `${firstName} ${lastName}`.trim();
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: fullName,
      firstName,
      lastName,
      email,
      studentId,
      program: document.querySelector('#pg-signup select')?.value || "B.Tech CSE",
      year: document.querySelectorAll('#pg-signup select')[1]?.value || "1st Year",
      createdAt: new Date().toISOString(),
      whatsapp: "",
      profileComplete: true
    });

    // Clear form
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("signup-email").value = "";
    document.getElementById("student-id").value = "";
    document.querySelector('#pg-signup input[type="password"]').value = "";

    // Show success modal
    openAuthSuccessModal(
      "🎉 Welcome to CUJ Kart!",
      `${fullName}, your account has been created successfully!`,
      `Your email "${email}" is verified. You can now login with your credentials.`,
      "✓"
    );

    // Redirect after 2 seconds
    setTimeout(() => {
      closeAuthSuccessModal();
      showPage("login");
    }, 2000);

    console.log("✅ User registered successfully:", email);
    
  } catch (error) {
    console.error("❌ Registration error:", error);
    const errorMessage = error.code === "auth/email-already-in-use" 
      ? "This email is already registered. Please login or use another email."
      : error.message;
    toast("❌ " + errorMessage);
  } finally {
    const submitBtn = document.querySelector("#pg-signup .auth-submit");
    submitBtn.textContent = "Create My Account";
    submitBtn.disabled = false;
  }
}

async function loginUser() {
  if (!firebaseReady) {
    toast("⏳ Firebase is still initializing. Please wait...");
    return;
  }

  const { signInWithEmailAndPassword } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
  const { getDoc, doc } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");

  const email = document.getElementById("loginEmail")?.value.trim();
  const password = document.getElementById("loginPassword")?.value.trim();

  if (!email || !password) {
    toast("⚠️ Please enter both email and password");
    return;
  }

  try {
    const submitBtn = document.querySelector("#pg-login .auth-submit");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Logging in...";
    submitBtn.disabled = true;

    // Sign in with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch user profile from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      currentUser = { ...userDoc.data(), uid: user.uid };
      saveCurrentUser();
      updateAuthUI();
      syncDashboardUser();
    }

    // Clear form
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";

    toast("✅ Login successful!");
    
    // Show success modal
    openAuthSuccessModal(
      "🎉 Welcome Back!",
      `Welcome back, ${currentUser.name}!`,
      `You are logged in to your CUJ Kart account.`,
      "✓"
    );

    setTimeout(() => {
      closeAuthSuccessModal();
      showPage("dashboard");
    }, 1500);

  } catch (error) {
    console.error("❌ Login error:", error);
    const errorMessage = error.code === "auth/user-not-found" 
      ? "Email not found. Please create an account first."
      : error.code === "auth/wrong-password"
      ? "Incorrect password. Please try again."
      : error.message;
    toast("❌ " + errorMessage);
  } finally {
    const submitBtn = document.querySelector("#pg-login .auth-submit");
    submitBtn.textContent = "LogIn to CUJ Kart";
    submitBtn.disabled = false;
  }
}

async function setupAuthListener() {
  const { onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
  const { getDoc, doc } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          currentUser = { ...userDoc.data(), uid: user.uid };
          loadCurrentUserData();
          updateAuthUI();
        }
      } catch (error) {
        console.error("Error loading user profile:", error);
      }
    } else {
      currentUser = null;
      clearCurrentUser();
      updateAuthUI();
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   📦 PRODUCT MANAGEMENT FUNCTIONS
   ═══════════════════════════════════════════════════════════════ */

async function submitListing() {
  if (!firebaseReady) {
    toast("⏳ Firebase is still initializing...");
    return;
  }

  if (!isAuthenticated()) {
    toast("Please sign in before posting a listing");
    showPage("login");
    return;
  }

  const { collection, addDoc, updateDoc, doc } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
  const { ref, uploadBytes, getDownloadURL } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js");

  const title = document.getElementById("s-title")?.value.trim();
  const cat = document.getElementById("s-cat")?.value;
  const cond = document.getElementById("s-cond")?.value;
  const price = parseInt(document.getElementById("s-price")?.value) || 0;
  const desc = document.getElementById("s-desc")?.value.trim();

  if (!title || !cat || !cond || !price || !desc) {
    toast("⚠️ Please fill all required fields");
    return;
  }

  try {
    const submitBtn = document.querySelector("#pg-sell .form-submit");
    submitBtn.textContent = "⏳ Uploading...";
    submitBtn.disabled = true;

    // Upload images to Firebase Storage
    const imageUrls = [];
    for (let i = 0; i < uploadedPhotos.length; i++) {
      const photo = uploadedPhotos[i];
      if (photo.file) {
        const storageRef = ref(storage, `products/${currentUser.uid}/${Date.now()}_${i}`);
        const snapshot = await uploadBytes(storageRef, photo.file);
        const downloadUrl = await getDownloadURL(snapshot.ref);
        imageUrls.push(downloadUrl);
      } else if (photo.dataUrl && photo.dataUrl.startsWith('http')) {
        imageUrls.push(photo.dataUrl);
      }
    }

    // Create product document
    const productData = {
      title,
      cat,
      cond,
      price,
      orig: parseInt(document.getElementById("s-orig")?.value) || price,
      desc,
      images: imageUrls,
      image: imageUrls[0] || "",
      emoji: CLEAN_EMOJIS[cat] || "🛍️",
      seller: currentUser.name,
      sellerUid: currentUser.uid,
      course: `${currentUser.program} · ${currentUser.year}`,
      tags: [cat],
      views: 0,
      enquiries: 0,
      sold: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isOwner: true
    };

    const docRef = await addDoc(collection(db, "products"), productData);
    
    // Add to local products array
    products.unshift({ id: docRef.id, ...productData });
    userProducts.unshift({ id: docRef.id, ...productData });

    // Clear form
    ["s-title", "s-price", "s-orig", "s-desc", "s-wa", "s-meet"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
    document.getElementById("s-cat").value = "";
    document.getElementById("s-cond").value = "";
    uploadedPhotos = [];
    renderPhotoGrid();

    toast("✅ Listing posted successfully!");
    showPage("dashboard");

  } catch (error) {
    console.error("❌ Error posting listing:", error);
    toast("❌ Error: " + error.message);
  } finally {
    const submitBtn = document.querySelector("#pg-sell .form-submit");
    submitBtn.textContent = "🚀 Post Listing";
    submitBtn.disabled = false;
  }
}

async function loadUserProducts() {
  if (!firebaseReady || !isAuthenticated()) return;

  const { collection, query, where, getDocs } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");

  try {
    const q = query(collection(db, "products"), where("sellerUid", "==", currentUser.uid));
    const querySnapshot = await getDocs(q);
    
    userProducts = [];
    querySnapshot.forEach(doc => {
      userProducts.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Error loading user products:", error);
  }
}

async function deleteUserProduct(id) {
  if (!firebaseReady) return;

  if (!confirm("Delete this listing permanently?")) return;

  const { deleteDoc, doc } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");

  try {
    await deleteDoc(doc(db, "products", id));
    userProducts = userProducts.filter(p => p.id !== id);
    products = products.filter(p => p.id !== id);
    toast("✅ Listing deleted");
    renderDashboard();
  } catch (error) {
    console.error("Error deleting product:", error);
    toast("❌ Error deleting listing");
  }
}

async function toggleSoldStatus(id) {
  if (!firebaseReady) return;

  const { updateDoc, doc } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");

  const product = userProducts.find(p => String(p.id) === String(id));
  if (!product) return;

  const newSoldStatus = !product.sold;

  try {
    await updateDoc(doc(db, "products", id), { sold: newSoldStatus });
    product.sold = newSoldStatus;
    toast(newSoldStatus ? "✓ Marked as sold" : "↩️ Marked as active");
    renderDashboard();
  } catch (error) {
    console.error("Error updating product status:", error);
    toast("❌ Error updating status");
  }
}

/* ═══════════════════════════════════════════════════════════════
   💾 LOCAL STORAGE REPLACEMENT
   ═══════════════════════════════════════════════════════════════ */

function clearCurrentUser() {
  localStorage.removeItem("cujkart_current_user");
  currentUser = null;
}

function saveCurrentUser() {
  if (currentUser) {
    localStorage.setItem("cujkart_current_user", JSON.stringify(currentUser));
  }
}

function loadPersistedUser() {
  try {
    const saved = localStorage.getItem("cujkart_current_user");
    if (saved) currentUser = JSON.parse(saved);
  } catch (error) {
    console.error("Error loading persisted user:", error);
  }
}

function emptyUserData() {
  return { listings: [], wishlist: [] };
}

function loadCurrentUserData() {
  wishlist = new Set();
}

function persistCurrentUserData() {
  // Data is now persisted to Firebase instead of localStorage
}

// Initialize Firebase when page loads
window.addEventListener("load", () => {
  initFirebase();
});
