import{useState as n,useEffect as e}from"react";function t(t,r){var o=n(null),c=o[0],i=o[1],a=r();return e((function(){var n=new IntersectionObserver((function(n){n.forEach((function(n){n.isIntersecting?i("#"+n.target.id):c==="#"+n.target.id&&i(null)}))}),{threshold:.2}),e=t.map((function(n){return n.replace("#","")}));return e.forEach((function(e){var t=document.getElementById(e);t&&n.observe(t)})),function(){e.forEach((function(e){var t=document.getElementById(e);t&&n.unobserve(t)}))}}),[t]),e((function(){var n,e="#"+window.location.hash.split("#")[1];if(""!==e&&new Set(t).has(e)){var r=e.replace("#","");null===(n=document.getElementById(r))||void 0===n||n.scrollIntoView({behavior:"smooth"})}}),[a]),c}export{t as useSmoothScroll};
