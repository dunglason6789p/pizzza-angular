var Bizweb=Bizweb||{};
Bizweb.store='big-food.mysapo.net';
Bizweb.id=53643;
Bizweb.theme={'id':737293,'name':'BigFood 29062020 Footer','role':'main'};
Bizweb.template='index';

(function(){
    function asyncLoad(){
        var urls=[];
        for(var i=0; i<urls.length; i++){
            var s=document.createElement('script');
            s.type='text/javascript';
            s.async=true;
            s.src=urls[i];
            var x=document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s,x);
        }
    };
    window.attachEvent?window.attachEvent('onload',asyncLoad):window.addEventListener('load',asyncLoad,false);
})();

(function(){
    var log=document.createElement('script');
    log.type='text/javascript';
    log.async=true;
    log.src='//stats.bizweb.vn/delivery/53643.js?lang=vi';
    var s=document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(log,s);
})();

window.BizwebAnalytics=window.BizwebAnalytics||{};
window.BizwebAnalytics.meta=window.BizwebAnalytics.meta||{};
window.BizwebAnalytics.meta.currency='VND';

var meta={};

for(var attr in meta){
    window.BizwebAnalytics.meta[attr]=meta[attr];
}
