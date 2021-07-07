/*
CryptoJS v4.0.0
[The MIT License (MIT)](http://opensource.org/licenses/MIT)
Copyright (c) 2009-2013 Jeff Mott
Copyright (c) 2013-2016 Evan Vosberg
*/
!function(e,r,i){"object"==typeof exports?module.exports=exports=r(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],r):r(e.CryptoJS)}(this,function(e){return function(){var r=e,i=r.lib.BlockCipher,o=r.algo,t=[],n=[],c=[],s=[],d=[],f=[],u=[],h=[],y=[],a=[];!function(){for(var e=[],r=0;r<256;r++)e[r]=r<128?r<<1:r<<1^283;var i=0,o=0;for(r=0;r<256;r++){var p=o^o<<1^o<<2^o<<3^o<<4;p=p>>>8^255&p^99,t[i]=p,n[p]=i;var v=e[i],_=e[v],k=e[_],l=257*e[p]^16843008*p;c[i]=l<<24|l>>>8,s[i]=l<<16|l>>>16,d[i]=l<<8|l>>>24,f[i]=l;l=16843009*k^65537*_^257*v^16843008*i;u[p]=l<<24|l>>>8,h[p]=l<<16|l>>>16,y[p]=l<<8|l>>>24,a[p]=l,i?(i=v^e[e[e[k^v]]],o^=e[e[o]]):i=o=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],v=o.AES=i.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,r=e.words,i=e.sigBytes/4,o=4*((this._nRounds=i+6)+1),n=this._keySchedule=[],c=0;c<o;c++)c<i?n[c]=r[c]:(f=n[c-1],c%i?i>6&&c%i==4&&(f=t[f>>>24]<<24|t[f>>>16&255]<<16|t[f>>>8&255]<<8|t[255&f]):(f=t[(f=f<<8|f>>>24)>>>24]<<24|t[f>>>16&255]<<16|t[f>>>8&255]<<8|t[255&f],f^=p[c/i|0]<<24),n[c]=n[c-i]^f);for(var s=this._invKeySchedule=[],d=0;d<o;d++){c=o-d;if(d%4)var f=n[c];else f=n[c-4];s[d]=d<4||c<=4?f:u[t[f>>>24]]^h[t[f>>>16&255]]^y[t[f>>>8&255]]^a[t[255&f]]}}},encryptBlock:function(e,r){this._doCryptBlock(e,r,this._keySchedule,c,s,d,f,t)},decryptBlock:function(e,r){var i=e[r+1];e[r+1]=e[r+3],e[r+3]=i,this._doCryptBlock(e,r,this._invKeySchedule,u,h,y,a,n);i=e[r+1];e[r+1]=e[r+3],e[r+3]=i},_doCryptBlock:function(e,r,i,o,t,n,c,s){for(var d=this._nRounds,f=e[r]^i[0],u=e[r+1]^i[1],h=e[r+2]^i[2],y=e[r+3]^i[3],a=4,p=1;p<d;p++){var v=o[f>>>24]^t[u>>>16&255]^n[h>>>8&255]^c[255&y]^i[a++],_=o[u>>>24]^t[h>>>16&255]^n[y>>>8&255]^c[255&f]^i[a++],k=o[h>>>24]^t[y>>>16&255]^n[f>>>8&255]^c[255&u]^i[a++],l=o[y>>>24]^t[f>>>16&255]^n[u>>>8&255]^c[255&h]^i[a++];f=v,u=_,h=k,y=l}v=(s[f>>>24]<<24|s[u>>>16&255]<<16|s[h>>>8&255]<<8|s[255&y])^i[a++],_=(s[u>>>24]<<24|s[h>>>16&255]<<16|s[y>>>8&255]<<8|s[255&f])^i[a++],k=(s[h>>>24]<<24|s[y>>>16&255]<<16|s[f>>>8&255]<<8|s[255&u])^i[a++],l=(s[y>>>24]<<24|s[f>>>16&255]<<16|s[u>>>8&255]<<8|s[255&h])^i[a++];e[r]=v,e[r+1]=_,e[r+2]=k,e[r+3]=l},keySize:8});r.AES=i._createHelper(v)}(),e.AES});