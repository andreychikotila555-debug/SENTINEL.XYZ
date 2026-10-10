(function(){
  var S=window.SITE||{};
  document.querySelectorAll('[data-dl]').forEach(function(a){a.href=S.downloadUrl||'#';a.setAttribute('download','')});
  document.querySelectorAll('[data-ver]').forEach(function(e){e.textContent=S.version});
  document.querySelectorAll('[data-size]').forEach(function(e){e.textContent=S.size});
  [['discord','[data-discord]'],['telegram','[data-telegram]']].forEach(function(p){
    document.querySelectorAll(p[1]).forEach(function(a){ if(S[p[0]]){a.classList.remove('hide');a.href=S[p[0]];a.target='_blank';a.rel='noopener'} else a.classList.add('hide') });
  });
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
  els.forEach(function(e,i){e.style.transitionDelay=(i%4)*60+'ms';io.observe(e)});
})();
